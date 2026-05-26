import Navbar from './components/Navbar'
import CursorTrail from './components/CursorTrail'
import CityBackground from './components/CityBackground'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Quests from './components/Quests'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useScrollReveal } from './hooks/useScrollReveal'
import { useSmoothScroll } from './hooks/useSmoothScroll'

export default function App() {
  useScrollReveal()
  useSmoothScroll()

  return (
    <>
      <CursorTrail />
      <CityBackground />
      <div className="scanlines" aria-hidden />
      <div className="vignette" aria-hidden />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Quests />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
