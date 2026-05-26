import { profile } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          <span className="footer__bracket">[</span>
          {profile.name}
          <span className="footer__bracket">]</span> © {year}
        </p>
      </div>
    </footer>
  )
}
