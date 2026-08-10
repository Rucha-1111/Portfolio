import { useEffect, useRef } from 'react'

export default function Stars() {
  const wrapRef = useRef(null)

  useEffect(() => {
    const starWrap = wrapRef.current
    if (!starWrap) return
    starWrap.innerHTML = ''
    for (let i = 0; i < 70; i++) {
      const s = document.createElement('div')
      s.className = 'star'
      s.style.left = Math.random() * 100 + '%'
      s.style.top = Math.random() * 100 + '%'
      s.style.animationDelay = Math.random() * 3 + 's'
      s.style.opacity = Math.random()
      starWrap.appendChild(s)
    }
  }, [])

  return <div id="stars" ref={wrapRef}></div>
}
