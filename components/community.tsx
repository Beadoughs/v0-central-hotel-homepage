import {
  BookOpen,
  Cake,
  Music,
  PartyPopper,
  Sparkles,
  Users,
} from 'lucide-react'
import { Reveal } from './reveal'

const features = [
  { icon: Cake, label: 'Birthdays' },
  { icon: PartyPopper, label: 'Private events' },
  { icon: Music, label: 'Live music' },
  { icon: Sparkles, label: 'Theme nights' },
  { icon: BookOpen, label: 'Book Club' },
  { icon: Users, label: 'Community gatherings' },
]

export function Community() {
  return (
    <section id="community" className="border-y border-border bg-secondary py-14 md:py-16">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <Reveal>
          <div className="text-center">
            <div className="mb-3 flex items-center justify-center gap-2 text-gold">
              <span className="h-px w-8 bg-gold" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em]">
                Community
              </span>
              <span className="h-px w-8 bg-gold" />
            </div>
            <h2 className="text-balance font-serif text-3xl font-semibold leading-tight text-foreground md:text-4xl">
              Events, Theme Nights &amp;
              <br className="hidden sm:block" />
              Community Gatherings
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-foreground/80 md:text-base">
              From 1920s theme nights and live music to birthdays, private events
              and the Central Hotel Book Club, the pub continues to bring people
              together in the heart of Zeehan.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4">
            {features.map((f) => (
              <li
                key={f.label}
                className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold">
                  <f.icon className="size-4" aria-hidden="true" />
                </span>
                <span className="text-sm font-medium text-foreground">
                  {f.label}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-8 text-center">
            <a
              href="tel:+61364710000"
              className="inline-flex rounded-full bg-gold px-7 py-3 text-sm font-semibold text-gold-foreground transition-transform hover:scale-105"
            >
              Plan An Event
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
