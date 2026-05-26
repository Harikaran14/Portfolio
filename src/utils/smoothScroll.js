const DEFAULT_OFFSET = 88
const DEFAULT_DURATION = 1200

let activeScrollRaf = null

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2
}

function getScrollY() {
  return window.pageYOffset || document.documentElement.scrollTop || 0
}

/** Reliable cross-browser scroll position setter */
function setScrollY(y) {
  const top = Math.max(0, Math.round(y))
  const root = document.scrollingElement || document.documentElement
  root.scrollTop = top
  if (document.body) document.body.scrollTop = top
  window.scrollTo(0, top)
}

/**
 * Smooth scroll to a section. Uses manual RAF animation (works even when
 * CSS scroll-behavior / scrollIntoView smooth is blocked by the OS).
 */
export function scrollToSection(id, { offset = DEFAULT_OFFSET, duration = DEFAULT_DURATION } = {}) {
  const el = document.getElementById(id)
  if (!el) return

  if (activeScrollRaf) {
    cancelAnimationFrame(activeScrollRaf)
    activeScrollRaf = null
  }

  const startY = getScrollY()
  const targetY = el.getBoundingClientRect().top + startY - offset
  const distance = targetY - startY

  if (Math.abs(distance) < 2) return

  let startTime = null

  const step = (timestamp) => {
    if (startTime === null) startTime = timestamp
    const elapsed = timestamp - startTime
    const progress = Math.min(elapsed / duration, 1)
    const eased = easeInOutCubic(progress)

    setScrollY(startY + distance * eased)

    if (progress < 1) {
      activeScrollRaf = requestAnimationFrame(step)
    } else {
      setScrollY(targetY)
      activeScrollRaf = null
    }
  }

  activeScrollRaf = requestAnimationFrame(step)
}
