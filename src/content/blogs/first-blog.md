---
title: "How Connection Pooling Works"
description: "A deep dive into why connection pooling exists, how it works under the hood, and how to configure it well."
---

# How Connection Pooling Works

If you've ever built a backend service that talks to a database, you've probably added a line like `maximumPoolSize: 10` to a config file without fully understanding what it does. This post breaks down what connection pooling actually is, why it exists, and how to reason about it like an engineer instead of copy-pasting defaults.

## The problem: connections are expensive

Every time your application talks to a database, it needs a connection — a live, authenticated, network-level channel between your app and the database server. Opening one is not free. It typically involves:

- A TCP handshake between client and server
- TLS negotiation, if encryption is enabled
- Authentication (username, password, or certificate exchange)
- Session setup on the database side (allocating memory, initializing state)

Each of these steps costs time — often tens of milliseconds — and consumes resources on both the client and the database server. If your application opens a brand-new connection for every single query and closes it right after, you pay this cost over and over again. Under load, this overhead can dominate your actual query time and quietly become the bottleneck in an otherwise fast system.

## The solution: reuse instead of recreate

A connection pool is a cache of already-open, ready-to-use database connections that your application can borrow and return, instead of opening and closing a new one every time.

At a high level, the lifecycle looks like this:

1. **Startup** — the pool opens a set of connections in advance (or lazily, depending on configuration) and holds them in a queue.
2. **Borrow** — when your code needs to run a query, it asks the pool for a connection instead of creating one.
3. **Use** — your code runs its query or transaction on that connection.
4. **Return** — instead of closing the connection, your code hands it back to the pool.
5. **Reuse** — the next request that needs a connection gets the same physical connection, skipping the setup cost entirely.

The database server sees a small, stable number of long-lived connections, while your application can serve a much larger number of short-lived logical requests through them.

## What's actually inside a pool

A connection pool is more than a list of open sockets. A production-grade pool typically manages:

- **Minimum and maximum size** — the floor and ceiling on how many physical connections it maintains.
- **Idle timeout** — how long an unused connection sits in the pool before being closed to free up resources.
- **Max lifetime** — a hard cap on how long any single connection is kept alive, even if it's healthy, to avoid issues like stale routing, memory bloat, or expired credentials.
- **Validation checks** — a lightweight "is this connection still alive?" check (often a cheap query like `SELECT 1`) run before handing a connection out, so dead connections aren't silently reused.
- **Wait queue** — a queue for requests that arrive when every connection is already checked out, along with a timeout so callers don't wait forever.

## Sizing a pool correctly

A common mistake is assuming "bigger pool = more throughput." In practice, an oversized pool can hurt performance. Databases have a finite capacity for concurrent active work — CPU cores, memory, lock managers — and every open connection consumes server-side memory whether it's active or idle.

A widely cited rule of thumb, popularized by the HikiriCP project's pool sizing guidance, is a formula based on available CPU cores:

```
connections = ((core_count * 2) + effective_spindle_count)
```

This isn't a magic number to copy — it's a starting point. The right size depends on:

- How many CPU cores the database server has
- Whether queries are CPU-bound or I/O-bound (waiting on disk or network)
- How many application instances are connecting concurrently
- The database's own connection limits (Postgres and MySQL both cap total concurrent connections)

In many real systems, a pool of 10–20 connections per application instance is plenty — even under heavy load — because the bottleneck is rarely "not enough connections" and much more often "queries holding connections too long."

## Common pitfalls

**Connection leaks.** If application code borrows a connection and never returns it — due to a missed `close()` call or an unhandled exception — the pool slowly shrinks until every request times out waiting for a connection that will never come back. Using try-with-resources (Java), context managers (Python), or `defer` (Go) patterns around connection usage prevents this class of bug.

**Pool exhaustion under traffic spikes.** If your pool max is smaller than your peak concurrent query count, requests start queueing, and if they queue longer than your application's timeout, users see errors — even though the database itself is healthy and underutilized.

**Long-held connections during slow transactions.** A connection checked out for a slow report query or a long-running transaction blocks that connection from being reused by anything else. This is often a bigger cause of "pool is exhausted" incidents than the pool being undersized.

**Stale connections after network blips.** Load balancers, firewalls, or cloud NAT gateways sometimes silently drop idle TCP connections. Without validation checks or a sane max lifetime, a pool can hand out a connection that looks fine locally but is actually dead on the wire.

## Connection pooling at different layers

Pooling isn't limited to your application process. It shows up at multiple layers of a typical stack:

- **In-process pools** — libraries like HikariCP (Java), `pgbouncer`-aware clients, or Go's built-in `database/sql` pool, living inside your application.
- **Proxy-level pools** — standalone poolers like PgBouncer or ProxySQL, which sit between your application and the database and multiplex many client connections onto a smaller number of real database connections. These are especially useful when you have many application instances (e.g., serverless functions) that would otherwise each maintain their own pool.
- **Managed database pooling** — many cloud database providers now offer built-in connection pooling as a managed feature, which is often the simplest option when your workload has a very high number of short-lived clients.

## Wrapping up

Connection pooling exists because opening a database connection is expensive and databases can only handle so many of them at once. A pool amortizes that cost by keeping a small set of ready-to-use connections and cycling them across many requests. Getting it right isn't about maximizing pool size — it's about matching pool size to actual concurrent workload, guarding against leaks, and keeping queries short enough that connections get returned quickly. Understanding these mechanics turns a mysterious config value into a tool you can reason about and tune deliberately.