import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import Ground from '../components/Ground.jsx'

export default function About() {
  useEffect(() => {
    document.title = 'About — Rucha Gade'
  }, [])

  return (
    <>
      <header className="page-hero">
        <span className="eyebrow">✦ ABOUT ME ✦</span>
        <h1>Hey, I'm Rucha <span className="grad">👋</span></h1>
        <p>A curious developer and writer who loves solving problems, telling stories in code, and shipping things that feel good to use.</p>
      </header>

      <Ground />

      <Reveal className="panel">
        <div className="about-grid">
          <div className="about-card">
            <h3 style={{ fontSize: 19, marginBottom: 20 }}>Quick Facts</h3>
            <div className="fact"><span className="ico">🎓</span> 2026 CSE grauate, building real things on the side</div>
            <div className="fact"><span className="ico">☁️</span> Passionate about Backend, Cloud & Data</div>
            <div className="fact"><span className="ico">✍️</span> Writes by heart, developer by choice</div>
            <div className="fact"><span className="ico">🌱</span> Always learning, always building</div>
            <div className="fact"><span className="ico">📍</span> Based in Pune, India</div>
            <div className="badge-row">
              <span className="badge">CURIOUS</span>
              <span className="badge">CONSISTENT</span>
              <span className="badge">CREATIVE</span>
            </div>
          </div>
          <div className="about-card">
            <h3 style={{ fontSize: 19, marginBottom: 20 }}>My Story</h3>
            <p style={{ color: 'var(--muted)', lineHeight: 1.75, fontSize: 14.5 }}>
              I don’t think being a developer means knowing every line of code by heart. I use AI and other tools to build faster, but I still want to understand the systems I’m building — not just make them compile.
            </p>
            <p style={{ color: 'var(--muted)', lineHeight: 1.75, fontSize: 14.5, marginTop: 14 }}>
              That’s also why I’m drawn to product and business: understanding the problem, the people, and the decisions behind what gets built. Long term, I want to work where technology and strategy overlap. Outside work: books, walks, dancing, and too many things on my watchlist.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal className="panel tight">
        <span className="kicker">SKILLS & TOOLS</span>
        <h2>What I Work With</h2>
        <p className="lead">The tools I reach for most, from backend systems to everyday scripting.</p>
        <div className="skill-grid">
          <div className="skill-pill">☕ Java</div>
          <div className="skill-pill">🌱 Spring Boot</div>
          <div className="skill-pill">🟨 JavaScript</div>
          <div className="skill-pill">⚛️ React</div>
          <div className="skill-pill">🐘 PostgreSQL</div>
          <div className="skill-pill">🐳 Docker</div>
          <div className="skill-pill">☁️ AWS</div>
          <div className="skill-pill">🔧 Git</div>
          <div className="skill-pill">🐍 Python</div>
          <div className="skill-pill">🎨 Tailwind CSS</div>
        </div>
      </Reveal>

      <Reveal className="panel tight">
        <span className="kicker">BEYOND CODE</span>
        <h2>What Drives Me</h2>
        <div className="proj-grid">
          <div className="proj-card">
            <div className="proj-icon">🎯</div>
            <h3>🎮 Main Quest: Still Loading</h3>
            <p>I know roughly where I want to go. The fun part is collecting enough experience to unlock the next bit.</p>
          </div>
          <div className="proj-card">
            <div className="proj-icon">📖</div>
            <h3>🧩 Inventory Full</h3>
            <p>Books, half-finished ideas, random skills, questionable side projects — somehow they all end up being useful eventually.</p>
          </div>
          <div className="proj-card">
            <div className="proj-icon">🤝</div>
            <h3>🚪 Next Level: Open</h3>
            <p>Open to the right opportunity, especially if it comes with good problems and room to grow.</p>
          </div>
        </div>
      </Reveal>

      <Reveal className="panel">
        <div className="contact-box" style={{ textAlign: 'center' }}>
          <h2>Let's build something together</h2>
          <p className="lead" style={{ margin: '0 auto' }}>Got a project, full-time opportunities, or just want to talk shop?</p>
          <div className="hero-cta" style={{ justifyContent: 'center' }}>
            <Link className="btn btn-primary" to="/contact">Get In Touch →</Link>
            <Link className="btn btn-ghost" to="/resume">See My Resume</Link>
          </div>
        </div>
      </Reveal>
    </>
  )
}
