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
              I started out tinkering with small scripts just to see what would happen, and somewhere along the way
              that curiosity turned into a habit of building. Today I split my time between writing backend systems
              that hold up under pressure and writing essays that help me make sense of things.
            </p>
            <p style={{ color: 'var(--muted)', lineHeight: 1.75, fontSize: 14.5, marginTop: 14 }}>
              I care less about chasing trends and more about understanding how things actually work — whether that's
              a database query plan or a good story structure. Outside of code, you'll find me reading, journaling,
              or slowly working through a very long watchlist.
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
            <h3>Craft over shortcuts</h3>
            <p>I'd rather understand a problem deeply than paste my way to a fix that breaks later.</p>
          </div>
          <div className="proj-card">
            <div className="proj-icon">📖</div>
            <h3>Writing to think</h3>
            <p>Every blog post starts as a note to myself, trying to untangle something I'm still figuring out.</p>
          </div>
          <div className="proj-card">
            <div className="proj-icon">🤝</div>
            <h3>Open to collaborate</h3>
            <p>Always happy to jam on an interesting idea, internship, or open-source project.</p>
          </div>
        </div>
      </Reveal>

      <Reveal className="panel">
        <div className="contact-box" style={{ textAlign: 'center' }}>
          <h2>Let's build something together</h2>
          <p className="lead" style={{ margin: '0 auto' }}>Got a project, internship, or just want to talk shop?</p>
          <div className="hero-cta" style={{ justifyContent: 'center' }}>
            <Link className="btn btn-primary" to="/contact">Get In Touch →</Link>
            <Link className="btn btn-ghost" to="/resume">See My Resume</Link>
          </div>
        </div>
      </Reveal>
    </>
  )
}
