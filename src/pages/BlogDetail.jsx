import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useEffect, useState } from "react";
import blogs from "../data/blogs";

function slugify(text) {
    return text
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
        .trim();
}

export default function BlogDetail() {
    const { slug } = useParams();
    const [activeHeading, setActiveHeading] = useState("");

    const blog = blogs.find((blog) => blog.slug === slug);

    if (!blog) {
        return (
            <div className="blog-not-found">
                <h1>Blog not found</h1>
                <Link to="/blogs">← Back to Blogs</Link>
            </div>
        );
    }

    const headings = [];
    const headingRegex = /^(#{2,3})\s+(.+)$/gm;

    let match;

    while ((match = headingRegex.exec(blog.content)) !== null) {
        const text = match[2].replace(/[*_`]/g, "");

        headings.push({
            level: match[1].length,
            text,
            id: slugify(text),
        });
    }

    useEffect(() => {
        if (!headings.length) return;

        const handleScroll = () => {
            // The heading becomes active once it reaches roughly the
            // upper-middle portion of the viewport.
            const activationPoint = window.innerHeight * 0.45;

            let currentHeading = headings[0].id;

            for (const heading of headings) {
                const element = document.getElementById(heading.id);

                if (!element) continue;

                const position = element.getBoundingClientRect().top;

                if (position <= activationPoint) {
                    currentHeading = heading.id;
                } else {
                    break;
                }
            }

            setActiveHeading((prev) =>
                prev === currentHeading ? prev : currentHeading
            );
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [blog.content]);

    const handleHeadingClick = (event, id) => {
        event.preventDefault();

        const element = document.getElementById(id);

        if (!element) return;

        setActiveHeading(id);

        const headerOffset = 120;
        const elementPosition =
            element.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
            top: elementPosition - headerOffset,
            behavior: "smooth",
        });

        window.history.replaceState(null, "", `#${id}`);
    };

    return (
        <article className="blog-detail">
            <div className="blog-layout">

                <aside className="blog-toc">
                    <div className="toc-title">ON THIS PAGE</div>

                    {headings.map((heading) => (
                        <a
                            key={heading.id}
                            href={`#${heading.id}`}
                            onClick={(event) =>
                                handleHeadingClick(event, heading.id)
                            }
                            className={`
                                ${heading.level === 3 ? "toc-sub" : ""}
                                ${activeHeading === heading.id ? "active" : ""}
                            `}
                        >
                            {heading.text}
                        </a>
                    ))}
                </aside>

                <main className="blog-main">

                    <Link to="/blogs" className="blog-back">
                        ← Back to Blogs
                    </Link>

                    <header className="blog-header">
                        <h1>{blog.title}</h1>

                        <p className="blog-description">
                            {blog.description}
                        </p>

                        <div className="blog-meta">
                            {blog.date} · {blog.readTime}
                        </div>
                    </header>

                    <div className="blog-content">
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            components={{
                                h2: ({ children }) => {
                                    const text = String(children);
                                    const id = slugify(text);

                                    return (
                                        <h2 id={id}>
                                            {children}
                                        </h2>
                                    );
                                },

                                h3: ({ children }) => {
                                    const text = String(children);
                                    const id = slugify(text);

                                    return (
                                        <h3 id={id}>
                                            {children}
                                        </h3>
                                    );
                                },
                            }}
                        >
                            {blog.content}
                        </ReactMarkdown>
                    </div>

                </main>

            </div>
        </article>
    );
}