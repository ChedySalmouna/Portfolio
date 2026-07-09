import projects from '../content/projects.json'
import { ProjectCard } from './ProjectCard'
import { Reveal } from './Reveal'

export function ProjectsPage() {
  const { personal = [], academic = [] } = projects

  return (
    <div className="projects-page">
      <Reveal as="section" className="section projects-section">
        <h2>Personal Projects</h2>
        {personal.length > 0 ? (
          <div className="projects-grid">
            {personal.map((project, i) => (
              <ProjectCard key={project.id} project={project} delay={i * 80} />
            ))}
          </div>
        ) : (
          <p className="projects-empty">
            Nothing here yet — personal projects will show up as they're built.
          </p>
        )}
      </Reveal>

      <Reveal as="section" className="section projects-section">
        <h2>Academic Projects</h2>
        <div className="projects-grid">
          {academic.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i * 80} showMedia={false} />
          ))}
        </div>
      </Reveal>
    </div>
  )
}
