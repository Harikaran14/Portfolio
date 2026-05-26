import { useEffect, useRef, useState } from 'react'
import { profile } from '../data/portfolio'

function StatBar({ stat, animate }) {
  const width =
    stat.max
      ? `${(parseFloat(stat.value) / parseFloat(stat.max)) * 100}%`
      : stat.label === 'CODEFORCES'
        ? '66%'
        : '96%'

  return (
    <div className={`game-stats__bar game-stats__bar--${stat.color}`}>
      <div className="game-stats__header">
        <span className="game-stats__label">{stat.label}</span>
        <span className="game-stats__value">
          {stat.value}
          {stat.max && <span className="game-stats__max">/{stat.max}</span>}
          {stat.suffix && <span className="game-stats__suffix"> {stat.suffix}</span>}
        </span>
      </div>
      <div className="game-stats__track">
        <div
          className={`game-stats__fill ${animate ? 'game-stats__fill--animated' : ''}`}
          style={{ width: animate ? width : '0%' }}
        />
      </div>
    </div>
  )
}

export default function GameStats() {
  const ref = useRef(null)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="game-stats" ref={ref}>
      {profile.stats.map((stat) => (
        <StatBar key={stat.label} stat={stat} animate={animate} />
      ))}
    </div>
  )
}
