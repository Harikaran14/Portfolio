export default function HudFrame({ children, className = '', label }) {
  return (
    <div className={`hud-frame ${className}`}>
      <span className="hud-corner hud-corner--tl" aria-hidden />
      <span className="hud-corner hud-corner--tr" aria-hidden />
      <span className="hud-corner hud-corner--bl" aria-hidden />
      <span className="hud-corner hud-corner--br" aria-hidden />
      {label && <span className="hud-label">{label}</span>}
      {children}
    </div>
  )
}
