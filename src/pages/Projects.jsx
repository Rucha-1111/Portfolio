import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import Ground from '../components/Ground.jsx'

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'backend', label: 'Backend' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'ai', label: 'AI / Data' },
]

const PROJECTS = [
  {
    icon: '📚',
    title: 'DevJourney',
    desc: "A full-stack blogging platform where developers can write, store and discover technical stories. Built with a focus on clean editing UX and fast page loads.",
    tags: ['Spring Boot', 'React', 'PostgreSQL'],
    filterTags: ['backend', 'frontend'],
    linkLabel: 'Live Demo →',
  },
  {
    icon: '📡',
    title: 'Code Radar',
    desc: 'A developer analytics dashboard that turns raw GitHub activity into clean, readable insights — commits, streaks, and language breakdowns at a glance.',
    tags: ['JavaScript', 'Chart.js', 'GitHub API'],
    filterTags: ['frontend', 'ai'],
    linkLabel: 'Live Demo →',
  },
  {
    icon: '🔍',
    title: 'Lumos Search',
    desc: 'An AI-powered semantic search engine that understands meaning, not just keywords, for faster and more relevant results.',
    tags: ['Python', 'FastAPI', 'PostgreSQL'],
    filterTags: ['ai', 'backend'],
    linkLabel: 'Live Demo →',
  },
  {
    icon: '🗂️',
    title: 'TaskForge API',
    desc: 'A REST API for a task management system with role-based auth, built to explore clean architecture and testable service layers.',
    tags: ['Java', 'Spring Boot', 'JWT'],
    filterTags: ['backend'],
    linkLabel: 'View Code →',
  },
  {
    icon: '🎨',
    title: 'Palette Playground',
    desc: 'A small tool for generating and previewing accessible color palettes for UI design, with live contrast checking.',
    tags: ['React', 'Tailwind CSS'],
    filterTags: ['frontend'],
    linkLabel: 'Live Demo →',
  },
  {
    icon: '🧠',
    title: 'StudyBuddy',
    desc: 'An AI study companion that turns lecture notes into summaries and quiz questions to make revision less painful.',
    tags: ['Python', 'OpenAI API'],
    filterTags: ['ai'],
    linkLabel: 'View Code →',
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
              <a className="proj-link" href="#">{p.linkLabel}</a>
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
