import { profile } from '../data/portfolio'
import HudFrame from './HudFrame'
import SectionHeading from './SectionHeading'

export default function About() {
  const links = [
    { label: 'GitHub', href: profile.social.github },
    { label: 'LinkedIn', href: profile.social.linkedin },
    { label: 'LeetCode', href: profile.social.leetcode },
    { label: 'Codeforces', href: profile.social.codeforces },
    { label: 'Codolio', href: profile.social.codolio },
  ]

  return (
    <section id="about" className="section about">
      <div className="container">
        <SectionHeading index="01" title="About Me" subtitle="Character Bio" />

        <div className="about__grid">
          <HudFrame className="about__bio reveal" label="BIO LOG">
            <p>{profile.bio}</p>
            <p className="about__location">
              <span className="mono-label">LOCATION</span> {profile.location}
            </p>
          </HudFrame>

          <HudFrame className="about__links reveal" label="UPLINKS">
            <ul className="about__link-list">
              {links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    <span className="about__link-arrow">→</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </HudFrame>
        </div>
      </div>
    </section>
  )
}
