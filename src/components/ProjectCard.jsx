import { Reveal } from './Reveal'

export function ProjectCard({ project, delay = 0, showMedia = true }) {
  const media = project.media?.[0]

  return (
    <Reveal as="article" className="project-card" delay={delay}>
      {showMedia && media && (
        <div className="project-media">
          <img src={media.src} alt={media.alt || project.title} loading="lazy" />
        </div>
      )}
      <div className="project-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        {project.tags?.length > 0 && (
          <ul className="project-tags">
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        )}
      </div>
    </Reveal>
  )
}
