import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

function Preloader({ active }) {
  const rootRef = useRef(null)

  useEffect(() => {
    if (!active || !rootRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.preloader-logo-wrap',
        { scale: 0.7, opacity: 0, rotate: -8 },
        { scale: 1, opacity: 1, rotate: 0, duration: 1.1, ease: 'power3.out' },
      )

      gsap.fromTo(
        '.preloader-orbit',
        { scale: 0.7, opacity: 0.15 },
        { scale: 1, opacity: 1, duration: 1.5, ease: 'power2.inOut', stagger: 0.25 },
      )

      gsap.fromTo(
        '.preloader-text span',
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.5, ease: 'power2.out' },
      )
    }, rootRef)

    return () => ctx.revert()
  }, [active])

  if (!active) return null

  return (
    <div ref={rootRef} className="preloader" aria-live="polite" aria-label="Loading Heraro website">
      <div className="preloader-orbit orbit-one" aria-hidden="true" />
      <div className="preloader-orbit orbit-two" aria-hidden="true" />
      <div className="preloader-core">
        <div className="preloader-logo-wrap">
          <img src="/Heraro.jpg" alt="Heraro logo" className="preloader-logo" />
        </div>
        <div className="preloader-text">
          <span>Heraro</span>
          <div className="loader-line">
            <span />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Preloader
