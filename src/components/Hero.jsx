import { profile } from '../data/portfolio'
import { scrollToSection } from '../utils/smoothScroll'
import HudFrame from './HudFrame'
import GameStats from './GameStats'
import HealthBar from './HealthBar'

export default function Hero() {
  const scrollTo = (id) => scrollToSection(id)

  return (
    <section id="home" className="hero">
      <div className="hero__grid-bg" aria-hidden />
      <div className="container hero__content">
        <div className="hero__status reveal">
          <div className="hero__status-left">
            <span className="hero__status-dot" />
            <span className="hero__status-text">LOCATION — CHENNAI ONLINE</span>
          </div>
          <HealthBar label="HP" current={85} max={100} className="hero__health" />
        </div>

        <HudFrame className="hero__card reveal" label="PLAYER_01">
          <div className="hero__layout">
            <div className="hero__avatar-wrap">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="hero__avatar"
                width={160}
                height={160}
              />
              <div className="hero__avatar-ring" aria-hidden />
              <span className="hero__level">LVL 03</span>
            </div>

            <div className="hero__text">
              <p className="hero__greeting">&gt; init_player()</p>
              <h1 className="hero__name">
                {profile.name.split(' ')[0]}
                <span className="hero__name-accent"> {profile.name.split(' ').slice(1).join(' ')}</span>
              </h1>
              <p className="hero__title">{profile.title}</p>
              <p className="hero__tagline">{profile.tagline}</p>
              <p className="hero__edu">{profile.education}</p>

              <GameStats />

              <div className="hero__actions">
                <button type="button" className="btn btn--primary" onClick={() => scrollTo('projects')}>
                  View Projects
                </button>
                <a href={profile.resumeUrl} download className="btn btn--ghost">
                  Get Resume
                </a>
                <button type="button" className="btn btn--ghost" onClick={() => scrollTo('contact')}>
                  Contact
                </button>
              </div>
            </div>
          </div>
        </HudFrame>

        <div className="hero__stats reveal">
          <div className="stat-pill stat-pill--red">
            <span className="stat-pill__label">ACTIVE QUEST</span>
            <span className="stat-pill__value">{profile.currentlyWorking}</span>
          </div>
          <div className="stat-pill stat-pill--green">
            <span className="stat-pill__label">LEARNING</span>
            <span className="stat-pill__value">{profile.currentlyLearning}</span>
          </div>
        </div>
      </div>

      <div className="hero__scroll-hint" aria-hidden>
        <span>▼ ENTER CITY</span>
      </div>
    </section>
  )
}
