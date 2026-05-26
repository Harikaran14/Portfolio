import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

const MAX_PARTICLES = 60
const PARTICLE_LIFE = 600
const SPAWN_INTERVAL = 24
const COLORS = ['#ff0033', '#00ff66', '#ffffff']

export default function CursorTrail() {
  const canvasRef = useRef(null)
  const stateRef = useRef({
    particles: [],
    pointer: { x: -100, y: -100, active: false },
    lastSpawn: 0,
    ripples: [],
    raf: null,
    running: false,
  })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    const state = stateRef.current
    state.running = true

    const useGameCursor = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (useGameCursor) {
      document.documentElement.classList.add('game-cursor')
    }

    let width = 0
    let height = 0
    let dpr = 1

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const spawnParticle = (x, y, burst = false) => {
      const count = burst ? 8 : 2
      for (let i = 0; i < count; i++) {
        if (state.particles.length >= MAX_PARTICLES) state.particles.shift()
        const angle = burst ? (Math.PI * 2 * i) / count : Math.random() * Math.PI * 2
        const speed = burst ? 1.5 + Math.random() * 2 : 0.5 + Math.random() * 1.2
        state.particles.push({
          x: x + (Math.random() - 0.5) * (burst ? 6 : 10),
          y: y + (Math.random() - 0.5) * (burst ? 6 : 10),
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: burst ? 4 + Math.random() * 4 : 3 + Math.random() * 3,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          born: performance.now(),
          life: burst ? 450 : PARTICLE_LIFE,
        })
      }
    }

    const addRipple = (x, y) => {
      state.ripples.push({ x, y, born: performance.now(), life: 550 })
    }

    const setPointer = (x, y, active = true) => {
      state.pointer = { x, y, active }
    }

    const onPointerMove = (clientX, clientY) => {
      setPointer(clientX, clientY)
      const now = performance.now()
      if (now - state.lastSpawn > SPAWN_INTERVAL) {
        spawnParticle(clientX, clientY)
        state.lastSpawn = now
      }
    }

    const onMouseMove = (e) => onPointerMove(e.clientX, e.clientY)
    const onMouseLeave = () => {
      state.pointer.active = false
    }
    const onMouseDown = (e) => {
      spawnParticle(e.clientX, e.clientY, true)
      addRipple(e.clientX, e.clientY)
    }

    const onTouchMove = (e) => {
      const t = e.touches[0]
      if (t) onPointerMove(t.clientX, t.clientY)
    }
    const onTouchStart = (e) => {
      const t = e.touches[0]
      if (!t) return
      setPointer(t.clientX, t.clientY)
      spawnParticle(t.clientX, t.clientY, true)
      addRipple(t.clientX, t.clientY)
    }
    const onTouchEnd = () => {
      state.pointer.active = false
    }

    const drawCrosshair = (x, y) => {
      const size = 12
      const gap = 5
      ctx.strokeStyle = '#ff0033'
      ctx.lineWidth = 2
      ctx.shadowColor = '#ff0033'
      ctx.shadowBlur = 12

      const corners = [
        [x - size - gap, y - size - gap, x - gap, y - gap],
        [x + gap, y - size - gap, x + size + gap, y - gap],
        [x - size - gap, y + gap, x - gap, y + size + gap],
        [x + gap, y + gap, x + size + gap, y + size + gap],
      ]

      corners.forEach(([x1, y1, x2, y2]) => {
        ctx.beginPath()
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.stroke()
      })

      ctx.shadowBlur = 0
      ctx.fillStyle = '#00ff66'
      ctx.shadowColor = '#00ff66'
      ctx.shadowBlur = 10
      ctx.beginPath()
      ctx.arc(x, y, 3, 0, Math.PI * 2)
      ctx.fill()
      ctx.shadowBlur = 0
    }

    const tick = (timestamp) => {
      if (!state.running) return

      const now = timestamp || performance.now()
      ctx.clearRect(0, 0, width, height)

      state.ripples = state.ripples.filter((r) => now - r.born < r.life)
      state.ripples.forEach((r) => {
        const t = (now - r.born) / r.life
        const radius = 10 + t * 40
        ctx.beginPath()
        ctx.arc(r.x, r.y, radius, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(0, 255, 102, ${1 - t})`
        ctx.lineWidth = 2
        ctx.stroke()
      })

      state.particles = state.particles.filter((p) => now - p.born < p.life)
      state.particles.forEach((p) => {
        const t = (now - p.born) / p.life
        const alpha = 1 - t
        p.x += p.vx
        p.y += p.vy
        p.vy += 0.015

        ctx.save()
        ctx.globalAlpha = alpha
        ctx.fillStyle = p.color
        ctx.shadowColor = p.color
        ctx.shadowBlur = 10
        ctx.fillRect(p.x - p.size / 2, p.y - p.size / 2, p.size, p.size)
        ctx.restore()
      })

      if (state.pointer.active) {
        drawCrosshair(state.pointer.x, state.pointer.y)
      }

      state.raf = requestAnimationFrame(tick)
    }

    resize()
    window.addEventListener('resize', resize)
    document.addEventListener('mousemove', onMouseMove, { passive: true })
    document.addEventListener('mouseleave', onMouseLeave)
    document.addEventListener('mousedown', onMouseDown, { passive: true })
    document.addEventListener('touchmove', onTouchMove, { passive: true })
    document.addEventListener('touchstart', onTouchStart, { passive: true })
    document.addEventListener('touchend', onTouchEnd, { passive: true })

    state.raf = requestAnimationFrame(tick)

    return () => {
      state.running = false
      document.documentElement.classList.remove('game-cursor')
      window.removeEventListener('resize', resize)
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseleave', onMouseLeave)
      document.removeEventListener('mousedown', onMouseDown)
      document.removeEventListener('touchmove', onTouchMove)
      document.removeEventListener('touchstart', onTouchStart)
      document.removeEventListener('touchend', onTouchEnd)
      if (state.raf) cancelAnimationFrame(state.raf)
    }
  }, [])

  return createPortal(
    <canvas ref={canvasRef} className="cursor-trail" aria-hidden />,
    document.body,
  )
}
