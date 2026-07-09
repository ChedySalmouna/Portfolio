import { education } from '../content/profile'
import { Reveal } from './Reveal'

export function Education() {
  return (
    <Reveal as="section" id="education" className="section">
      <h2>Education</h2>
      <ul className="timeline">
        {education.map((item, i) => (
          <Reveal as="li" key={item.id} className="timeline-item" delay={i * 80}>
            <div className="timeline-header">
              <span className="timeline-title">{item.school}</span>
              <span className="timeline-period">{item.period}</span>
            </div>
            <p className="timeline-subtitle">{item.degree}</p>
            {item.details && <p>{item.details}</p>}
          </Reveal>
        ))}
      </ul>
    </Reveal>
  )
}
