import { Hero } from './Hero'
import { About } from './About'
import { Education } from './Education'
import { Experience } from './Experience'
import { Skills } from './Skills'
import { Volunteering } from './Volunteering'
import { ProjectsCTA } from './ProjectsCTA'

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Volunteering />
      <ProjectsCTA />
    </>
  )
}
