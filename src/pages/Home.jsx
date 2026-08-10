import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import Ground from '../components/Ground.jsx'

const TYPE_LINES = [
  '> building things that matter_',
  '> currently writing a new blog post_',
  '> open to internships & collabs_',
]

// Ports the exact typewriter algorithm from the original script.js
function useTypewriter(lines) {
  const [text, setText] = useState('')

  useEffect(() => {
    let li = 0,
      ci = 0,
      deleting = false
    let timeoutId

    function type() {
      const current = lines[li]
      setText(deleting ? current.slice(0, ci--) : current.slice(0, ci++))
      let delay = deleting ? 30 : 55
      if (!deleting && ci === current.length + 1) {
        delay = 1400
        deleting = true
      } else if (deleting && ci === 0) {
        deleting = false
        li = (li + 1) % lines.length
        delay = 400
      }
      timeoutId = setTimeout(type, delay)
    }

    type()
    return () => clearTimeout(timeoutId)
  }, [lines])

  return text
}

export default function Home() {
  const typed = useTypewriter(TYPE_LINES)

  useEffect(() => {
    document.title = 'Rucha Gade — Home'
  }, [])

  return (
    <>
      <header
        className="hero page-hero"
        style={{ minHeight: '82vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
      >
        <div className="eyebrow">✦ WELCOME TO MY WORLD ✦</div>
        <h1 style={{ maxWidth: 900, marginTop: 22 }}>
          Turning ideas into <span className="grad">playful, purposeful</span> products
        </h1>
        <div
          className="type-line"
          id="typeLine"
          style={{ fontFamily: 'var(--pixel)', fontSize: 'clamp(10px,1.4vw,13px)', color: 'var(--yellow)', marginTop: 26, minHeight: 20 }}
        >
          {typed}
        </div>
        <p style={{ color: 'var(--muted)', fontSize: 16, maxWidth: 560, margin: '22px auto 0', lineHeight: 1.6 }}>
          Developer & writer who loves clean code, curious problems, and telling stories along the way.
        </p>
        <div className="hero-cta" style={{ justifyContent: 'center' }}>
          <Link className="btn btn-primary" to="/projects">Explore My Work →</Link>
          <Link className="btn btn-ghost" to="/resume">Download Resume ⬇</Link>
        </div>
      </header>

      <Ground />

      <div className="stack">
        <span><i className="dot"></i>Java</span>
        <span><i className="dot"></i>Spring Boot</span>
        <span><i className="dot"></i>JavaScript</span>
        <span><i className="dot"></i>React</span>
        <span><i className="dot"></i>PostgreSQL</span>
        <span><i className="dot"></i>AWS</span>
      </div>

      <Reveal className="panel">
        <span className="kicker">01 — ABOUT ME</span>
        <h2>Hey, I'm Rucha 👋</h2>
        <p className="lead">A curious developer who loves solving problems, shipping clean products, and writing about the journey.</p>
        <div className="about-grid">
          <div className="about-card">
            <div className="fact"><span className="ico">🎓</span> 2026 CSE graduate, building real things on the side</div>
            <div className="fact"><span className="ico">☁️</span> Passionate about backend systems, cloud & data</div>
            <div className="fact"><span className="ico">✍️</span> Writes by heart — developer by choice</div>
            <div className="fact"><span className="ico">🌱</span> Always learning, always shipping</div>
            <div className="badge-row">
              <span className="badge">CURIOUS</span>
              <span className="badge">CONSISTENT</span>
              <span className="badge">CREATIVE</span>
            </div>
          </div>
          <div className="about-card">
            <div className="fact"><span className="ico">🎯</span> I care about how things feel to use, not just how they work</div>
            <div className="fact"><span className="ico">🧩</span> I enjoy untangling messy problems into simple systems</div>
            <div className="fact"><span className="ico">📖</span> I write to think out loud — and to remember what I learned</div>
            <div className="fact"><span className="ico">🤝</span> Open to interesting collaborations & full-time opportunities</div>
          </div>
        </div>
        <div style={{ marginTop: 32 }}><Link className="proj-link" to="/about">More about me →</Link></div>
      </Reveal>

      <Reveal className="panel">
        <span className="kicker">02 — THINGS I'VE BUILT</span>
        <h2>Selected Projects</h2>
        <p className="lead">A few things I've shipped, broken, fixed, and shipped again.</p>
        <div className="proj-grid">
          <div className="proj-card">
            <div className="proj-icon">🗂️</div>
            <h3>Task Forge</h3>
            <p>A team task manager built to turn messy assignments into clear, trackable workflows.</p>
            <div className="tag-row">
              <span className="tag">Java</span>
              <span className="tag">Spring Boot</span>
              <span className="tag">PostgreSQL</span>
            </div>
            <div className="proj-actions">
              <a className="proj-link" href="https://github.com/Rucha-1111/Task-Forge" target="_blank" rel="noreferrer">View Repo ↗</a>
              <a className="proj-link" href="https://task-forge-lbt3.onrender.com/" target="_blank" rel="noreferrer">Live Project ↗</a>
            </div>
          </div>

          <div className="proj-card">
            <div className="proj-icon">📚</div>
            <h3>The Chamber of Chapters</h3>
            <p>My little Hogwarts for books — a personal library to track what I'm reading, finishing, and hoarding.</p>
            <div className="tag-row">
              <span className="tag">Java</span>
              <span className="tag">Spring Boot</span>
              <span className="tag">PostgreSQL</span>
            </div>
            <div className="proj-actions">
              <a className="proj-link" href="https://github.com/Rucha-1111/The-Chamber-of-Chapters" target="_blank" rel="noreferrer">View Repo ↗</a>
              <a className="proj-link" href="https://the-chamber-of-chapters.onrender.com/" target="_blank" rel="noreferrer">Live Project ↗</a>
            </div>
          </div>

          <div className="proj-card">
            <div className="proj-icon">📖</div>
            <h3>DevDiary</h3>
            <p>A personal developer tracker for logging work, tracking goals, time, progress, and notes.</p>
            <div className="tag-row">
              <span className="tag">Spring Boot</span>
              <span className="tag">React</span>
              <span className="tag">PostgreSQL</span>
            </div>
            <div className="proj-actions">
              <a className="proj-link" href="https://github.com/Rucha-1111/DevDiary" target="_blank" rel="noreferrer">View Repo ↗</a>
              <a className="proj-link" href="https://devdiary-8q0b.onrender.com/" target="_blank" rel="noreferrer">Live Project ↗</a>
            </div>
          </div>
        </div>
        <div style={{ marginTop: 32 }}><Link className="proj-link" to="/projects">View all projects →</Link></div>
      </Reveal>

      <Reveal className="panel">
        <span className="kicker">03 — WORDS I WRITE</span>
        <h2>From the Blog</h2>
        <p className="lead">Thoughts on code, slow living, and everything in between.</p>
        <div className="blog-grid">
          <Link className="blog-card" to="/blogs">
            <div className="blog-thumb">🕯️</div>
            <div className="blog-body">
              <h3>The Art of Slow Living in a Fast World</h3>
              <p>A reflection on slowing down while everything around keeps speeding up.</p>
              <div className="blog-meta"><span>Aug 5, 2024</span><span>5 min read</span></div>
            </div>
          </Link>
          <Link className="blog-card" to="/blogs">
            <div className="blog-thumb">🌅</div>
            <div className="blog-body">
              <h3>Dear Future Me</h3>
              <p>A letter to my future self about growth, patience and the journey ahead.</p>
              <div className="blog-meta"><span>Jul 28, 2024</span><span>4 min read</span></div>
            </div>
          </Link>
          <Link className="blog-card" to="/blogs">
            <div className="blog-thumb">🌌</div>
            <div className="blog-body">
              <h3>When Code Meets Creativity</h3>
              <p>Writing and coding aren't so different — both start with a blank page.</p>
              <div className="blog-meta"><span>Jul 15, 2024</span><span>4 min read</span></div>
            </div>
          </Link>
        </div>
        <div style={{ marginTop: 32 }}><Link className="proj-link" to="/blogs">Read all posts →</Link></div>
      </Reveal>

      <Reveal className="panel">
        <span className="kicker">04 — LET'S CONNECT</span>
        <div className="contact-box" style={{ textAlign: 'center' }}>
          <h2>Have a project in mind?</h2>
          <p className="lead" style={{ margin: '0 auto' }}>I'd love to hear about it — drop a message and I'll get back to you soon.</p>
          <div className="hero-cta" style={{ justifyContent: 'center' }}>
            <Link className="btn btn-primary" to="/contact">Get In Touch →</Link>
          </div>
        </div>
      </Reveal>
    </>
  )
}