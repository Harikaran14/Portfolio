export default function HealthBar({ label = 'HP', current = 85, max = 100, className = '' }) {
  const percent = Math.min(100, Math.max(0, (current / max) * 100))

  return (
    <div className={`health-bar ${className}`} role="meter" aria-valuenow={current} aria-valuemin={0} aria-valuemax={max} aria-label={`${label} ${current} of ${max}`}>
      <span className="health-bar__label">{label}</span>
      <div className="health-bar__track">
        <div className="health-bar__fill" style={{ width: `${percent}%` }} />
        <div className="health-bar__shine" aria-hidden />
      </div>
      <span className="health-bar__value">
        {current}<span className="health-bar__max">/{max}</span>
      </span>
    </div>
  )
}
