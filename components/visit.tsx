import { MapPin, Clock, Phone, BedDouble } from 'lucide-react'
import { Reveal } from './reveal'

export function Visit() {
  return (
    <section id="visit" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <div className="mb-4 flex items-center gap-2 text-gold">
              <span className="h-px w-8 bg-gold" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em]">
                Visit Us
              </span>
            </div>
            <h2 className="text-balance font-serif text-4xl font-semibold leading-tight text-foreground md:text-5xl">
              Find the Central in Zeehan
            </h2>
            <p className="mt-5 max-w-md text-pretty leading-relaxed text-foreground/80">
              Right on Main Street in the heart of town — easy to find whether
              you&apos;re a local or just driving through the West Coast.
            </p>

            <div className="mt-8 space-y-5">
              <InfoRow icon={MapPin} label="Address">
                131 Main Street, Zeehan TAS 7469
              </InfoRow>
              <InfoRow icon={Clock} label="Open">
                Wed–Sun from 3pm · Friday nights till late
              </InfoRow>
              <InfoRow icon={Phone} label="Call the bar">
                (03) 6471 0000
              </InfoRow>
            </div>

            <a
              href="https://maps.google.com/?q=131+Main+Street+Zeehan+TAS+7469"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-gold-foreground transition-transform hover:scale-105"
            >
              <MapPin className="size-4" aria-hidden="true" />
              Get Directions
            </a>
          </Reveal>

          <Reveal delay={120}>
            <div className="space-y-5">
              <div className="overflow-hidden rounded-2xl border border-border">
                <iframe
                  title="Map showing Central Hotel Zeehan at 131 Main Street"
                  src="https://www.google.com/maps?q=131%20Main%20Street%20Zeehan%20TAS%207469&output=embed"
                  className="h-72 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="grain relative overflow-hidden rounded-2xl bg-parchment p-7 text-parchment-foreground">
                <div className="relative z-10 flex items-start gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-parchment-foreground/10">
                    <BedDouble className="size-6" aria-hidden="true" />
                  </span>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-parchment-foreground/70">
                      Coming Soon
                    </span>
                    <h3 className="mt-1 font-serif text-2xl font-semibold">
                      Heritage accommodation
                    </h3>
                    <p className="mt-2 text-pretty leading-relaxed text-parchment-foreground/85">
                      Accommodation is not currently available, but the upstairs
                      rooms are part of the Central Hotel&apos;s future.
                      Restoration work is underway, with plans to reopen the
                      historic rooms once renovations are complete.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function InfoRow({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-full border border-border text-gold">
        <Icon className="size-5" />
      </span>
      <div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground">
          {label}
        </div>
        <div className="mt-0.5 font-medium text-foreground">{children}</div>
      </div>
    </div>
  )
}
