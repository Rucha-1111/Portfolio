import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import Ground from '../components/Ground.jsx'

const POSTS = [
  { icon: '🕯️', tag: 'LIFE', title: 'The Art of Slow Living in a Fast World', desc: 'A reflection on slowing down while everything around keeps speeding up.', date: 'Aug 5, 2024', read: '5 min read' },
  { icon: '🌅', tag: 'JOURNAL', title: 'Dear Future Me', desc: 'A letter to my future self about growth, patience and the journey ahead.', date: 'Jul 28, 2024', read: '4 min read' },
  { icon: '🌌', tag: 'CODE', title: 'When Code Meets Creativity', desc: "Writing and coding aren't so different — both start with a blank page.", date: 'Jul 15, 2024', read: '4 min read' },
  { icon: '🐛', tag: 'CODE', title: 'The Bug That Taught Me Patience', desc: 'What a three-day debugging spiral taught me about slowing down and reading the error.', date: 'Jun 30, 2024', read: '6 min read' },
  { icon: '📓', tag: 'JOURNAL', title: 'Why I Journal Every Single Day', desc: 'A small habit that quietly changed how I process everything else in my life.', date: 'Jun 18, 2024', read: '3 min read' },
  { icon: '🌱', tag: 'CAREER', title: 'What I Wish I Knew Before My First Internship', desc: 'Lessons from stepping into a real codebase for the first time.', date: 'Jun 2, 2024', read: '5 min read' },
]

export default function Blogs() {
  useEffect(() => {
    document.title = 'Blogs — Rucha Gade'
  }, [])

  return (
    <>
      <header className="page-hero">
        <span className="eyebrow">✦ WORDS I WRITE ✦</span>
        <h1>My <span className="grad">Blog</span></h1>
        <p>Thoughts on code, slow living, creativity, and everything in between. I write to think out loud.</p>
      </header>

      <Ground />

      <Reveal className="panel">
        <div className="blog-grid">
          {POSTS.map((post) => (
            <a className="blog-card" href="#" key={post.title}>
              <div className="blog-thumb">{post.icon}</div>
              <div className="blog-body">
                <span className="blog-tag">{post.tag}</span>
                <h3>{post.title}</h3>
                <p>{post.desc}</p>
                <div className="blog-meta"><span>{post.date}</span><span>{post.read}</span></div>
              </div>
            </a>
          ))}
        </div>
      </Reveal>

      <Reveal className="panel">
        <div className="contact-box" style={{ textAlign: 'center' }}>
          <h2>Got something to say about a post?</h2>
          <p className="lead" style={{ margin: '0 auto' }}>I love hearing what resonated — or what you'd push back on.</p>
          <div className="hero-cta" style={{ justifyContent: 'center' }}>
            <Link className="btn btn-primary" to="/contact">Reach Out →</Link>
          </div>
        </div>
      </Reveal>
    </>
  )
}
