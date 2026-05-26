import { education } from '../data/portfolio'
import HudFrame from './HudFrame'
import SectionHeading from './SectionHeading'

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">
        <SectionHeading index="04" title="Education" subtitle="Academy Log" />

        <div className="education__grid">
          {education.map((item, i) => (
            <HudFrame key={item.school} className={`education__card reveal reveal--delay-${i}`} label={item.period}>
              <h3 className="education__school">{item.school}</h3>
              <p className="education__location">{item.location}</p>
              <p className="education__degree">{item.degree}</p>
              <p className="education__detail">{item.detail}</p>
            </HudFrame>
          ))}
        </div>
      </div>
    </section>
  )
}
