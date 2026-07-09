import { Link } from 'react-router-dom'
import { Reveal } from './Reveal'

export function ProjectsCTA() {
  return (
    <Reveal as="section" className="section projects-cta">
      <h2>Projects</h2>
      <p>Check out my personal and academic projects.</p>
      <Link to="/projects" className="cta-button">
        View Projects
      </Link>
    </Reveal>
  )
}
