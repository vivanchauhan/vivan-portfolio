import { useState, useEffect } from 'react'

const letters = ['V','I','V','A','N']

export default function Loader() {
  const [hide, setHide] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setHide(true), 1800)
    return () => clearTimeout(t)
  }, [])

  return (
    <div style={{
      position: 'fixed', inset: 0,
      background: '#080808',
      zIndex: 1000,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexDirection: 'column',
      transition: 'opacity 0.6s ease, visibility 0.6s ease',
      opacity: hide ? 0 : 1,
      visibility: hide ? 'hidden' : 'visible',
    }}>
      <div style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: 64,
        letterSpacing: 12,
        color: '#f0ede8',
        overflow: 'hidden',
        display: 'flex',
      }}>
        {letters.map((l, i) => (
          <span key={i} style={{
            display: 'inline-block',
            animation: `loaderSlide 0.8s cubic-bezier(0.16,1,0.3,1) ${i * 0.06}s both`,
          }}>{l}</span>
        ))}
      </div>
      {/* Progress bar */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0,
        height: 2,
        background: 'linear-gradient(90deg, #FF6B2B, #ff8c55)',
        animation: 'loaderBar 1.6s ease forwards',
        boxShadow: '0 0 20px rgba(255,107,43,0.6)',
      }} />
      <style>{`
        @keyframes loaderSlide {
          from { transform: translateY(100%); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
        @keyframes loaderBar {
          from { width: 0; }
          to   { width: 100%; }
        }
      `}</style>
    </div>
  )
}
