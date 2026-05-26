export default function CityBackground() {
  const buildings = [
    { w: 28, h: 45, windows: 4, delay: 0 },
    { w: 18, h: 32, windows: 3, delay: 0.3 },
    { w: 36, h: 58, windows: 6, delay: 0.6 },
    { w: 22, h: 38, windows: 3, delay: 0.2 },
    { w: 42, h: 72, windows: 7, delay: 0.8 },
    { w: 20, h: 28, windows: 2, delay: 0.4 },
    { w: 30, h: 52, windows: 5, delay: 0.5 },
    { w: 24, h: 40, windows: 4, delay: 0.1 },
    { w: 38, h: 65, windows: 6, delay: 0.7 },
    { w: 16, h: 24, windows: 2, delay: 0.9 },
    { w: 34, h: 48, windows: 5, delay: 0.15 },
    { w: 26, h: 35, windows: 3, delay: 0.55 },
  ]

  return (
    <div className="city-bg" aria-hidden>
      <div className="city-bg__glow" />
      <div className="city-bg__skyline">
        {buildings.map((b, i) => (
          <div
            key={i}
            className="city-bg__building"
            style={{
              '--bw': `${b.w}px`,
              '--bh': `${b.h}%`,
              '--delay': `${b.delay}s`,
            }}
          >
            <div className="city-bg__windows">
              {Array.from({ length: b.windows }).map((_, j) => (
                <span key={j} className="city-bg__window" />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="city-bg__horizon" />
    </div>
  )
}
