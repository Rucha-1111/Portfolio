---
title: "I Stopped Learning Frameworks and Started Learning Fundamentals"
description: "A slightly embarrassing confession about chasing shiny tools instead of understanding what's underneath them."
---

# I Stopped Learning Frameworks and Started Learning Fundamentals

Somewhere around my fourth "Learn X in 2 Weeks" course, I had a small crisis. Not a big dramatic one — more like the feeling you get when you realize you've rearranged your furniture five times but never actually cleaned under the couch.

I could spin up a React app. I could wire up Spring Boot. I knew just enough Docker to look dangerous in a standup. But if you'd asked me *why* a `useEffect` dependency array works the way it does, or what's actually happening when a server "handles a request," I would've given you a confident answer that was, generously, 60% correct.

I had become very good at using tools I didn't understand.

## The framework treadmill

Here's the thing nobody tells you when you start out: frameworks change. Not eventually — constantly, actively, while you're mid-project. You learn Vue, someone tells you Svelte is where it's at now. You get comfortable with Express, and suddenly everyone's whispering about some new runtime. Blink twice and there's a new "opinionated" way to do the exact same thing you already knew how to do.

For a while I treated this like a game I could win by just... learning faster. More tutorials. More boilerplate memorized. More `npx create-something` commands typed on faith.

It did not feel like winning. It felt like running on a treadmill someone kept speeding up, and every few months I'd look down and realize I hadn't actually gone anywhere.

## The moment it clicked

The turning point was embarrassingly small. I was debugging a memory leak, and every framework-specific fix I threw at it did nothing. Eventually I gave up Googling "why is my [Framework] app slow" and just... read about how garbage collection actually works. Like, the actual mechanism. Generational heaps, reference counting, the whole deal.

Ten minutes in, I understood *why* my fix hadn't worked. Not because I found a magic snippet, but because I finally understood what the framework was doing on my behalf the whole time.

That was the moment I realized: frameworks are just opinions layered on top of fundamentals. Learn the fundamentals, and every framework starts looking less like a foreign language and more like a dialect.

## What "fundamentals" actually meant for me

I want to be honest here, because "learn the fundamentals" is the kind of advice that sounds wise and says nothing. For me, concretely, it meant sitting with unglamorous things like:

- How HTTP requests and responses actually work, headers and all — not just `fetch()` doing its thing
- How a database engine executes a query, indexes, and decides what to keep in memory
- What a process and a thread actually are, and why concurrency bugs happen at all
- How memory is allocated and freed, and what "the stack" and "the heap" really mean
- Basic data structures and why a hash map is fast for the reasons it's fast, not just because someone said so

None of this was thrilling in the way a shiny new UI library is thrilling. There's no confetti animation when you finally understand TCP handshakes. But something better happened: things stopped being magic.

## The weird side effect: frameworks got easier, not harder

This is the part that actually surprised me. I expected learning fundamentals to be this separate, academic track — the "serious" stuff you do instead of the fun, practical stuff.

Instead, the opposite happened. Once I understood what a framework was abstracting away, picking up a *new* framework became almost boring in the best way. Oh, this is just dependency injection with extra steps. Oh, this "reactive" system is just an event loop wearing a trench coat. The syntax changes. The underlying ideas mostly don't.

I stopped feeling anxious about the next big framework announcement, because I wasn't scared of falling behind on syntax anymore. Syntax is cheap. Understanding is the actual inventory you're building.

## I'm not saying frameworks are bad

Let's be clear, because it's tempting to swing into "back in my day we wrote raw assembly" energy, and that's not this. Frameworks exist because fundamentals, applied by hand, every single time, would be an enormous waste of effort. Nobody should hand-roll their own HTTP server for a to-do app. That's not rigor, that's just slower suffering.

The point isn't *fundamentals instead of frameworks*. It's *fundamentals as the thing frameworks sit on top of*, so that when a framework breaks, does something weird, or gets replaced by whatever's trendy next year, you're not starting from zero.

## So, what now

I still learn frameworks. I still get a little excited by new tools — that hasn't gone away, and I don't think it should. But now the question I ask before diving into something new isn't "how do I use this," it's "what is this actually doing under the hood, and why does it exist."

It's slower. It's less instantly gratifying. There's no certificate of completion at the end of "I now understand how the OS schedules processes."

But I've stopped feeling like I'm sprinting to keep up with an industry that changes its mind every six months. I'm not chasing anymore. I'm just... standing on ground that doesn't move as much.

Turns out that was the upgrade I actually needed.