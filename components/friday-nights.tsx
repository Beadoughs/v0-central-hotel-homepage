import { Music, Beer, Users } from 'lucide-react'
import { Reveal } from './reveal'

const highlights = [
  {
    icon: Music,
    title: 'Live Music',
    text: 'Local acts and travelling musicians taking over the front bar.',
  },
  {
    icon: Beer,
    title: 'Cold on Tap',
    text: 'Tasmanian beers poured the way they should be — properly cold.',
  },
  {
    icon: Users,
    title: 'The Whole Town',
    text: 'Miners, locals, riders and visitors, all under one roof.',
  },
]

export function FridayNights() {
  return (
    <section
      id="fridays"
      className="grain relative overflow-hidden border-y border-border"
    >
      <img
        src="/images/friday-live-music.png"
        alt="A lively Friday night with live music and a warm crowd inside the Central Hotel Zeehan"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-background/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="max-w-2xl">
          <Reveal>
            <div className="mb-4 flex items-center gap-2 text-gold">
              <span className="h-px w-8 bg-gold" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em]">
                Every Friday Night
              </span>
            </div>
            <h2 className="text-balance font-serif text-4xl font-semibold leading-tight text-foreground md:text-6xl">
              Friday belongs to the Central
            </h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-foreground/85">
              Knock-off drinks roll into live music, a packed front bar and the
              best night out on the West Coast. If you&apos;re driving through
              Zeehan on a Friday, this is where you stop.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 120}>
              <div className="h-full rounded-2xl border border-border bg-card/70 p-6 backdrop-blur-sm">
                <h.icon className="size-7 text-gold" aria-hidden="true" />
                <h3 className="mt-4 font-serif text-xl font-semibold text-foreground">
                  {h.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/75">
                  {h.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
