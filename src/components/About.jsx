import { profile } from '../content/profile'
import { Reveal } from './Reveal'

export function About() {
  return (
    <Reveal as="section" id="about" className="section">
      <h2>About</h2>
      <p>{profile.bio}</p>
    </Reveal>
  )
}
