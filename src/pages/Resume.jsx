import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import Ground from '../components/Ground.jsx'

export default function Resume() {
  useEffect(() => {
    document.title = 'Resume — Rucha Gade'
  }, [])

  return (
    <>
      <header className="page-hero">
        <span className="eyebrow">✦ MY JOURNEY SO FAR ✦</span>
        <h1>My <span className="grad">Resume</span></h1>
        <p>Education, experience, and the skills I've picked up along the way.</p>
      </header>

      <Ground />

      <Reveal className="panel">
        <div className="resume-strip">
          <div>
            <h3>Want the professional PDF?</h3>
            <p>Grab a downloadable copy to share with your team or keep for reference.</p>
          </div>
          <a className="btn btn-primary" href="/assets/Rucha_Gade_Resume.pdf" download>Download Resume PDF ⬇</a>
        </div>

        <div className="fun-resume">
          {/* Hero */}
          <div className="fun-hero">
            <div className="fun-avatar">👩‍💻</div>
            <h2>RUCHA GADE</h2>
            <div className="fun-tagline">Java Backend Developer • Spring Boot • AWS Cloud</div>
            <div className="fun-contact-row">
              <a className="fun-contact-chip" href="mailto:ruchagade20@gmail.com">✉️ ruchagade20@gmail.com</a>
              <a className="fun-contact-chip" href="https://linkedin.com/in/rucha-gade" target="_blank" rel="noopener noreferrer">💼 Rucha Gade</a>
              <a className="fun-contact-chip" href="https://github.com/Rucha-1111" target="_blank" rel="noopener noreferrer">🐙 Rucha-1111</a>
              <span className="fun-contact-chip">📍 Pune, India</span>
            </div>
          </div>

          {/* Summary */}
          <div className="fun-card">
            <span className="kicker">✦ WHO I AM</span>
            <h3>The Short Story 📖</h3>
            <p className="tiny">
              B.Tech Computer Science graduate with hands-on experience designing and deploying Java backend systems and
              cloud-based applications using Spring Boot, AWS, REST APIs, and MySQL.
            </p>
            <p className="tiny">
              Built and deployed <strong>3 full-stack REST APIs</strong> with Docker, including a{' '}
              <strong>serverless AWS Lambda pipeline</strong> processing 500+ documents. Strong foundation in OOP, data
              structures, and DBMS — on the hunt for a Software Development Engineer role in Java backend development. 🚀
            </p>
            <div className="fun-badge-row">
              <span className="fun-badge">JAVA</span>
              <span className="fun-badge pink">SPRING BOOT</span>
              <span className="fun-badge yellow">AWS</span>
              <span className="fun-badge purple">REST APIs</span>
              <span className="fun-badge">DOCKER</span>
            </div>
          </div>

          {/* Skills */}
          <div className="fun-card">
            <span className="kicker">✦ MY TOOLBOX</span>
            <h3>Technical Skills 🧰</h3>
            <div className="fun-skill-group">
              <span className="fun-skill-label">LANGUAGES</span>
              <div className="fun-skill-pills">
                <span className="skill-chip">☕ Java</span>
                <span className="skill-chip">🐍 Python</span>
                <span className="skill-chip">🟨 JavaScript</span>
                <span className="skill-chip">🗃️ SQL</span>
                <span className="skill-chip">🌐 HTML</span>
                <span className="skill-chip">🎨 CSS</span>
              </div>
            </div>
            <div className="fun-skill-group">
              <span className="fun-skill-label">FRAMEWORKS & LIBRARIES</span>
              <div className="fun-skill-pills">
                <span className="skill-chip">🌱 Spring Boot</span>
                <span className="skill-chip">🔌 JDBC</span>
                <span className="skill-chip">🔗 REST APIs</span>
                <span className="skill-chip">📦 Jackson</span>
              </div>
            </div>
            <div className="fun-skill-group">
              <span className="fun-skill-label">DATABASES</span>
              <div className="fun-skill-pills">
                <span className="skill-chip">🐬 MySQL</span>
                <span className="skill-chip">🍃 PostgreSQL</span>
              </div>
            </div>
            <div className="fun-skill-group">
              <span className="fun-skill-label">CLOUD & DEVOPS</span>
              <div className="fun-skill-pills">
                <span className="skill-chip">⚡ AWS Lambda</span>
                <span className="skill-chip">📦 Amazon S3</span>
                <span className="skill-chip">🚪 API Gateway</span>
                <span className="skill-chip">🔐 AWS IAM</span>
                <span className="skill-chip">🐳 Docker</span>
                <span className="skill-chip">🚀 Render</span>
                <span className="skill-chip">🔧 Git</span>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="fun-card">
            <span className="kicker">✦ THINGS I'VE BUILT</span>
            <h3>Projects 🛠️</h3>
            <div className="fun-grid">
              <div className="fun-proj">
                <div className="proj-icon">⚡</div>
                <h4>Sortify — Serverless Document Management</h4>
                <div className="fun-stack">AWS Lambda • S3 • API Gateway • IAM • Python • ReactJS</div>
                <ul>
                  <li>Designed a serverless backend with AWS Lambda to automate document processing — no managed server needed.</li>
                  <li>Integrated Amazon API Gateway to expose secure REST endpoints connecting frontend & backend.</li>
                  <li>Configured S3 buckets for secure, event-driven storage of 500+ test documents.</li>
                  <li>Implemented least-privilege AWS IAM roles & policies to secure cloud resources.</li>
                  <li>Collaborated with a team to deliver a scalable, serverless document management solution.</li>
                </ul>
                <div className="fun-proj-links">
                  <a className="fun-proj-link" href="https://rucha-1111.github.io/Sortify-Document/" target="_blank" rel="noopener noreferrer">🚀 View Demo</a>
                </div>
              </div>

              <div className="fun-proj">
                <div className="proj-icon">🗂️</div>
                <h4>Task Forge — Team Task Management</h4>
                <div className="fun-stack">Java • Spring Boot • JPA • PostgreSQL • Docker</div>
                <ul>
                  <li>Built a full-stack task manager with a RESTful Spring Boot backend & Kanban-style frontend.</li>
                  <li>Implemented role-based workflows for Team Leaders & Members (create, assign, update, delete).</li>
                  <li>Built REST APIs for auth, team management & full task CRUD with Spring Data JPA + PostgreSQL.</li>
                  <li>Added BCrypt hashing, role validation, safe serialization & XSS protection.</li>
                  <li>Containerized with a multi-stage Docker build and deployed on Render.</li>
                </ul>
                <div className="fun-proj-links">
                  <a className="fun-proj-link" href="https://task-forge-lbt3.onrender.com/" target="_blank" rel="noopener noreferrer">🚀 View Demo</a>
                </div>
              </div>

              <div className="fun-proj">
                <div className="proj-icon">📚</div>
                <h4>The Chamber of Chapters — Book Tracker</h4>
                <div className="fun-stack">Java • Spring Boot • REST • PostgreSQL • Docker</div>
                <ul>
                  <li>Built a full-stack personal book tracker with a Spring Boot REST API & themed frontend.</li>
                  <li>Implemented auth with BCrypt hashing & persistent user-specific book data in PostgreSQL.</li>
                  <li>Created a three-shelf reading system (To Read, Reading, Finished).</li>
                  <li>Added ratings, notes, status updates & CRUD through REST APIs.</li>
                  <li>Deployed with Docker & Supabase PostgreSQL with a library-inspired UI.</li>
                </ul>
                <div className="fun-proj-links">
                  <a className="fun-proj-link" href="https://the-chamber-of-chapters.onrender.com/" target="_blank" rel="noopener noreferrer">🚀 View Demo</a>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="fun-card">
            <span className="kicker">✦ THE LEARNING ARC</span>
            <h3>Education 🎓</h3>
            <div className="fun-edu">
              <div className="edu-icon">🏫</div>
              <div>
                <h4>Vishwakarma University</h4>
                <div className="fun-sub">B.Tech, Computer Engineering</div>
              </div>
              <div className="edu-meta">2022 – 2026 • CGPA 8.4/10</div>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal className="panel">
        <div className="contact-box" style={{ textAlign: 'center' }}>
          <h2>Like what you see?</h2>
          <p className="lead" style={{ margin: '0 auto' }}>Let's talk about how I can add value to your team.</p>
          <div className="hero-cta" style={{ justifyContent: 'center' }}>
            <Link className="btn btn-primary" to="/contact">Get In Touch →</Link>
          </div>
        </div>
      </Reveal>
    </>
  )
}
