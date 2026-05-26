import { leadership, achievements, certifications, profile } from '../data/portfolio'
import HudFrame from './HudFrame'
import SectionHeading from './SectionHeading'

export default function Quests() {
  return (
    <section id="quests" className="section quests">
      <div className="container">
        <SectionHeading index="05" title="Quests & Loot" subtitle="Side Missions" />

        <div className="quests__grid">
          <HudFrame className="quests__block reveal" label="LEADERSHIP">
            <div className="quests__list">
              {leadership.map((item) => (
                <article key={item.org} className="quests__item">
                  <div className="quests__item-head">
                    <h3>{item.role}</h3>
                    <span className="quests__period">{item.period}</span>
                  </div>
                  <p className="quests__org">{item.org}</p>
                  <ul>
                    {item.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </HudFrame>

          <HudFrame className="quests__block reveal reveal--delay-1" label="ACHIEVEMENTS">
            {achievements.map((a) => (
              <a
                key={a.title}
                href={a.link}
                target="_blank"
                rel="noopener noreferrer"
                className="achievement-card"
              >
                <span className="achievement-card__badge">{a.badge}</span>
                <h3>{a.title}</h3>
                <p className="achievement-card__value">{a.value}</p>
                <p className="achievement-card__lang">Languages: {a.languages}</p>
              </a>
            ))}
          </HudFrame>

          <HudFrame className="quests__block reveal reveal--delay-2" label="CERTIFICATIONS">
            <ul className="cert-list">
              {certifications.map((c) => (
                <li key={c.name} className="cert-list__item">
                  <span className="cert-list__icon">★</span>
                  <div>
                    <strong>{c.name}</strong>
                    <p>{c.issuer}</p>
                    <span className="cert-list__dur">{c.duration}</span>
                  </div>
                </li>
              ))}
            </ul>
          </HudFrame>
        </div>
      </div>
    </section>
  )
}
