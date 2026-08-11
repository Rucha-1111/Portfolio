import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import Ground from '../components/Ground.jsx'
import blogs from '../data/blogs.js'

export default function Blogs() {
  useEffect(() => {
    document.title = 'Blogs — Rucha Gade'
  }, [])

  return (
    <>
      <Ground />

      <Reveal className="panel">
        <div className="blog-grid">
          {blogs.map((post) => (
            <Link
              className="blog-card"
              to={`/blogs/${post.slug}`}
              key={post.slug}
            >
              <div className="blog-thumb">{post.icon || '✦'}</div>

              <div className="blog-body">
                <span className="blog-tag">
                  {post.category || 'BLOG'}
                </span>

                <h3>{post.title}</h3>

                <p>{post.description}</p>

                <div className="blog-meta">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Reveal>

      <Reveal className="panel">
        <div className="contact-box" style={{ textAlign: 'center' }}>
          <h2>Got something to say about a post?</h2>

          <p className="lead" style={{ margin: '0 auto' }}>
            I love hearing what resonated — or what you'd push back on.
          </p>

          <div
            className="hero-cta"
            style={{ justifyContent: 'center' }}
          >
            <Link className="btn btn-primary" to="/contact">
              Reach Out →
            </Link>
          </div>
        </div>
      </Reveal>
    </>
  )
}