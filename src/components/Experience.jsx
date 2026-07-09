import { experience } from '../content/profile'
import { Reveal } from './Reveal'

export function Experience() {
  return (
    <Reveal as="section" id="experience" className="section">
      <h2>Experience</h2>
      <ul className="timeline">
        {experience.map((item, i) => (
          <Reveal as="li" key={item.id} className="timeline-item" delay={i * 80}>
            <div className="timeline-header">
              <span className="timeline-title">{item.role}</span>
              <span className="timeline-period">{item.period}</span>
            </div>
            <p className="timeline-subtitle">{item.organization}</p>
            {item.details?.length > 0 && (
              <ul className="timeline-details">
                {item.details.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            )}
          </Reveal>
        ))}
      </ul>
    </Reveal>
  )
}
