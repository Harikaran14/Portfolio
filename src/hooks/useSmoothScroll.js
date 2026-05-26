import { useEffect } from 'react'
import { scrollToSection } from '../utils/smoothScroll'

export function useSmoothScroll() {
  useEffect(() => {
    const onClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]')
      if (!anchor) return

      const hash = anchor.getAttribute('href')
      if (!hash || hash === '#') return

      const id = hash.slice(1)
      if (!document.getElementById(id)) return

      e.preventDefault()
      scrollToSection(id)
    }

    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])
}
