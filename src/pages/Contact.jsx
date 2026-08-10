import { useEffect } from 'react'
import Reveal from '../components/Reveal.jsx'
import Ground from '../components/Ground.jsx'

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact — Rucha Gade'
  }, [])

  return (
    <>
      <header className="page-hero">
        <span className="eyebrow">✦ LET'S CONNECT ✦</span>
        <h1>Get In <span className="grad">Touch</span></h1>
        <p>Have a project in mind, or just want to say hi? I'd love to hear from you.</p>
      </header>

      <Ground />

      <Reveal className="panel">
        <div className="contact-box">
          <div className="contact-grid">
            <div>
              <span className="kicker">REACH ME DIRECTLY</span>
              <h2>Let's start a conversation</h2>
              <p className="lead" style={{ marginBottom: 0 }}>Whether it's a project, an internship, or just a friendly hello — my inbox is always open.</p>
              <div className="contact-links">
                <a href="mailto:rucha.work111@email.com">✉️ rucha.work111@email.com</a>
                <a href="https://www.linkedin.com/in/rucha-gade/" target="_blank" rel="noopener noreferrer">💼 linkedin.com/in/rucha-gade/</a>
                <a href="https://github.com/Rucha-1111/" target="_blank" rel="noopener noreferrer">🐙 github.com/Rucha-1111</a>
                <a href="#">📍 Pune, India</a>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </>
  )
}