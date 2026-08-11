import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import Ground from '../components/Ground.jsx'

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'backend', label: 'Backend' },
  { key: 'frontend', label: 'Frontend' },
  //{ key: 'ai', label: 'AI / Data' },
]

const PROJECTS = [
  {
    icon: '🗂️',
    title: 'Task Forge',
    desc: 'A team task manager built to turn messy assignments into clear, trackable workflows.',
    tags: ['Java', 'Spring Boot', 'PostgreSQL'],
    filterTags: ['backend'],
    repoLink: 'https://github.com/Rucha-1111/Task-Forge',
    liveLink: 'https://task-forge-lbt3.onrender.com/',
  },
  {
    icon: '📚',
    title: 'The Chamber of Chapters',
    desc: "My little Hogwarts for books — a personal library to track what I'm reading, finishing, and hoarding.",
    tags: ['Java', 'Spring Boot', 'PostgreSQL'],
    filterTags: ['backend'],
    repoLink: 'https://github.com/Rucha-1111/The-Chamber-of-Chapters',
    liveLink: 'https://the-chamber-of-chapters.onrender.com/',
  },
  {
    icon: '📖',
    title: 'DevDiary',
    desc: 'A personal developer tracker for logging work, tracking goals, time, progress, and notes.',
    tags: ['Spring Boot', 'React', 'PostgreSQL'],
    filterTags: ['backend', 'frontend'],
    repoLink: 'https://github.com/Rucha-1111/DevDiary',
    liveLink: 'https://devdiary-8q0b.onrender.com/',
  },
]

export default function Projects() {
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    document.title = 'Projects — Rucha Gade'
  }, [])

  return (
    <>
      <header className="page-hero">
        <span className="eyebrow">✦ THINGS I'VE BUILT ✦</span>
        <h1>My <span className="grad">Projects</span></h1>
        <p>A collection of things I've designed, broken, fixed, and shipped — from full-stack apps to weekend experiments.</p>
      </header>

      <Ground />

      <Reveal className="panel">
        <div className="filter-row">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              className={`filter-btn${filter === f.key ? ' active' : ''}`}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="proj-grid">
          {PROJECTS.map((p) => (
            <div
              key={p.title}
              className="proj-card"
              style={{ display: filter === 'all' || p.filterTags.includes(filter) ? '' : 'none' }}
            >
              <div className="proj-icon">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="tag-row">
                {p.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
              <div className="proj-links">
                <a className="proj-link" href="#">View Repo ↗</a>
                <a className="proj-link" href="#">Live Project ↗</a>
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal className="panel">
        <div className="contact-box" style={{ textAlign: 'center' }}>
          <h2>Curious about the details?</h2>
          <p className="lead" style={{ margin: '0 auto' }}>Happy to walk you through the code, decisions, or trade-offs behind any of these.</p>
          <div className="hero-cta" style={{ justifyContent: 'center' }}>
            <Link className="btn btn-primary" to="/contact">Let's Talk →</Link>
          </div>
        </div>
      </Reveal>
    </>
  )
}
