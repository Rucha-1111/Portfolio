import { useEffect, useRef } from 'react'

// Replicates the original scroll-reveal behavior:
// elements with class "reveal" get "show" added once they enter the viewport.
export default function Reveal({ as: Tag = 'section', className = '', children, ...rest }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) el.classList.add('show')
        })
      },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <Tag ref={ref} className={`reveal${className ? ' ' + className : ''}`} {...rest}>
      {children}
    </Tag>
  )
}
