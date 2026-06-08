import { User } from 'lucide-react'
import { Reveal } from './reveal'

export function MeetLarry() {
  return (
    <section id="larry" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-2xl border border-border bg-card">
              <div className="flex flex-col items-center gap-4 px-8 text-center">
                <span className="flex size-16 items-center justify-center rounded-full border border-gold/30 text-gold">
                  <User className="size-8" aria-hidden="true" />
                </span>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  Photo to be provided
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="mb-4 flex items-center gap-2 text-gold">
              <span className="h-px w-8 bg-gold" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em]">
                The People
              </span>
            </div>
            <h2 className="text-balance font-serif text-4xl font-semibold leading-tight text-foreground md:text-5xl">
              Meet Larry Cuevas
            </h2>
            <div className="mt-6 space-y-4 text-pretty leading-relaxed text-foreground/80">
              <p>
                Larry Cuevas has been managing, renovating and restoring the
                Central Hotel since 2020. At just 22, he has become a familiar
                face around Zeehan — behind the bar, helping locals, working on
                the property, driving the tractor around town or lending a hand
                where he can.
              </p>
              <p>
                Larry&apos;s vision is to keep the Central Hotel alive as a
                genuine West Coast community hub while restoring the historic
                rooms for future accommodation.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
