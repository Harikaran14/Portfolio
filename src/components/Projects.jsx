import { projects } from '../data/portfolio'
import HudFrame from './HudFrame'
import SectionHeading from './SectionHeading'

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const other = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <SectionHeading index="03" title="Main Missions" subtitle="Project Archive" />

        <div className="projects__grid">
          {featured.map((project, i) => (
            <HudFrame
              key={project.id}
              className={`project-card reveal reveal--delay-${i % 3}`}
              label={project.status || project.period}
            >
              <div className="project-card__header">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__subtitle">{project.subtitle}</p>
              </div>
              <p className="project-card__desc">{project.description}</p>
              {project.highlights && (
                <ul className="project-card__highlights">
                  {project.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              )}
              <div className="project-card__tech">
                {project.tech.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
              <div className="project-card__links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn--sm btn--ghost">
                  Source
                </a>
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn--sm btn--primary">
                    Live Demo
                  </a>
                )}
              </div>
            </HudFrame>
          ))}
        </div>

        {other.length > 0 && (
          <>
            <h3 className="projects__more-title reveal">Bonus Missions</h3>
            <div className="projects__list">
              {other.map((project) => (
                <a
                  key={project.id}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projects__list-item reveal"
                >
                  <span className="projects__list-name">{project.title}</span>
                  <span className="projects__list-desc">{project.description}</span>
                  <span className="projects__list-arrow">↗</span>
                </a>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
