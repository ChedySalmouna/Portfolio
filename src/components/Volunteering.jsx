import { volunteering } from '../content/profile'
import { Reveal } from './Reveal'

export function Volunteering() {
  return (
    <Reveal as="section" id="volunteering" className="section">
      <h2>Volunteering</h2>
      <ul className="timeline">
        {volunteering.map((item, i) => (
          <Reveal as="li" key={item.id} className="timeline-item" delay={i * 80}>
            <div className="timeline-header">
              <span className="timeline-title">{item.organization}</span>
              {item.period && <span className="timeline-period">{item.period}</span>}
            </div>
            <p className="timeline-subtitle">{item.role}</p>
            {item.details && <p>{item.details}</p>}
          </Reveal>
        ))}
      </ul>
    </Reveal>
  )
}
