import { skills } from '../data/portfolio'
import HudFrame from './HudFrame'
import SectionHeading from './SectionHeading'

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <SectionHeading index="02" title="Skills & Arsenal" subtitle="Loadout" />

        <div className="skills__grid">
          {skills.map((group, i) => (
            <HudFrame key={group.category} className={`skills__card reveal reveal--delay-${i % 3}`} label={group.category.toUpperCase()}>
              <ul className="skills__list">
                {group.items.map((item) => (
                  <li key={item}>
                    <span className="skills__bullet" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </HudFrame>
          ))}
        </div>
      </div>
    </section>
  )
}
