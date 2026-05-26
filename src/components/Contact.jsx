import { profile } from '../data/portfolio'
import HudFrame from './HudFrame'
import SectionHeading from './SectionHeading'

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <SectionHeading index="06" title="Transmit" subtitle="Open Channel" />

        <HudFrame className="contact__panel reveal" label="UPLINK">
          <p className="contact__intro">
            Ready for internships, collaborations, and challenging problems. Open a channel below.
          </p>

          <div className="contact__grid">
            <a href={`mailto:${profile.email}`} className="contact__item">
              <span className="mono-label">EMAIL</span>
              <span>{profile.email}</span>
            </a>
            <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="contact__item">
              <span className="mono-label">PHONE</span>
              <span>{profile.phone}</span>
            </a>
            <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="contact__item">
              <span className="mono-label">GITHUB</span>
              <span>@Harikaran14</span>
            </a>
            <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="contact__item">
              <span className="mono-label">LINKEDIN</span>
              <span>harikaran-c</span>
            </a>
          </div>

          <div className="contact__coding">
            <span className="mono-label">COMPETITIVE ARENA</span>
            <div className="contact__coding-links">
              <a href={profile.social.leetcode} target="_blank" rel="noopener noreferrer">
                LeetCode
              </a>
              <a href={profile.social.codeforces} target="_blank" rel="noopener noreferrer">
                Codeforces
              </a>
              <a href={profile.social.codolio} target="_blank" rel="noopener noreferrer">
                Codolio
              </a>
            </div>
          </div>

          <a href={profile.resumeUrl} download className="btn btn--primary contact__resume-btn">
            Download Resume PDF
          </a>
        </HudFrame>
      </div>
    </section>
  )
}
