import { profile } from '../content/profile'
import { Reveal } from './Reveal'

export function Hero() {
  return (
    <section id="hero" className="hero">
      <Reveal as="h1">{profile.name}</Reveal>
      <Reveal as="p" className="hero-title" delay={100}>
        {profile.title}
      </Reveal>
      <Reveal as="p" className="hero-tagline" delay={200}>
        {profile.tagline}
      </Reveal>
    </section>
  )
}
