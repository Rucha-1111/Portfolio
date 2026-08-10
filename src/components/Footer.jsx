export default function Footer({ dash = false }) {
  return (
    <footer>
      © 2026 Rucha Gade. All rights reserved. {dash ? '— ' : ''}Designed & built with 🩷 and a lot of coffee.
      <div className="foot-links">
        <a href="https://github.com/Rucha-1111" target="_blank" rel="noopener noreferrer">🐙</a>
        <a href="https://linkedin.com/in/rucha-gade" target="_blank" rel="noopener noreferrer">💼</a>
        <a href="mailto:ruchagade20@gmail.com">✉️</a>
      </div>
    </footer>
  )
}
