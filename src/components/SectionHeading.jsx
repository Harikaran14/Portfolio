export default function SectionHeading({ index, title, subtitle }) {
  return (
    <div className="section-heading reveal">
      <span className="section-heading__index">{index}</span>
      <div>
        {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
        <h2 className="section-heading__title">{title}</h2>
      </div>
      <div className="section-heading__line" aria-hidden />
    </div>
  )
}
