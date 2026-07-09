import { skills } from '../content/profile'
import { Reveal } from './Reveal'

const categoryMeta = {
  Programming: { icon: '💻', color: '#7c9eff' },
  Databases: { icon: '🗄️', color: '#4fd1c5' },
  Frontend: { icon: '🎨', color: '#f6ad55' },
  Backend: { icon: '🛠️', color: '#f56565' },
  Tools: { icon: '🧰', color: '#b794f4' },
}

export function Skills() {
  return (
    <Reveal as="section" id="skills" className="section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {Object.entries(skills).map(([category, items], i) => {
          const meta = categoryMeta[category] ?? { icon: '⚡', color: '#7c9eff' }
          return (
            <Reveal
              as="div"
              key={category}
              className="skills-group"
              delay={i * 80}
              style={{ '--group-accent': meta.color }}
            >
              <h3>
                <span className="skills-icon">{meta.icon}</span>
                {category}
              </h3>
              <ul className="skill-chips">
                {items.map((item, j) => (
                  <li key={item} className="skill-chip" style={{ transitionDelay: `${i * 80 + j * 40}ms` }}>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          )
        })}
      </div>
    </Reveal>
  )
}
