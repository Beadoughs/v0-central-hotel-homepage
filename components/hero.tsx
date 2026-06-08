import { MapPin } from 'lucide-react'
import { Reveal } from './reveal'

export function Hero() {
  return (
    <section
      id="top"
      className="grain relative flex min-h-[100svh] items-end overflow-hidden"
    >
      <img
        src="/images/central-hotel-exterior.jpg"
        alt="The Central Hotel Zeehan, a heritage-listed historic pub on the West Coast of Tasmania, with its full two-storey facade and verandah in bright daylight"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-32 md:px-8 md:pb-24">
        <Reveal>
          <div className="mb-5 flex items-center gap-2 text-gold">
            <span className="h-px w-10 bg-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em]">
              West Coast Tasmania · Since 1898
            </span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="max-w-4xl text-balance font-serif text-5xl font-semibold leading-[0.98] text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
            The historic heart of Zeehan
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-foreground/80 md:text-lg">
            A heritage-listed West Coast Tasmania pub where miners, locals,
            bike riders and travellers have gathered for over a century. Cold
            beer, hearty meals and a Friday night that never gets old.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#fridays"
              className="rounded-full bg-gold px-7 py-3.5 text-center text-sm font-semibold text-gold-foreground transition-transform hover:scale-105"
            >
              See Friday Nights
            </a>
            <a
              href="#visit"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-gold hover:text-gold"
            >
              <MapPin className="size-4" aria-hidden="true" />
              131 Main Street, Zeehan
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
