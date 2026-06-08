import { Reveal } from './reveal'

export function Story() {
  return (
    <section id="story" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/vintage-historic.png"
                alt="Historic early-1900s photograph of Zeehan's main street and grand hotel during the West Coast Tasmania mining boom"
                className="col-span-2 aspect-[4/3] w-full rounded-2xl object-cover"
              />
              <img
                src="/images/interior-bar.png"
                alt="Warm timber bar interior of the Central Hotel Zeehan"
                className="aspect-square w-full rounded-2xl object-cover"
              />
              <img
                src="/images/counter-meal.png"
                alt="Hearty pub counter meal served at the Central Hotel"
                className="aspect-square w-full rounded-2xl object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={120} className="order-1 lg:order-2">
            <div className="mb-4 flex items-center gap-2 text-gold">
              <span className="h-px w-8 bg-gold" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em]">
                Our Story
              </span>
            </div>
            <h2 className="text-balance font-serif text-4xl font-semibold leading-tight text-foreground md:text-5xl">
              A historic pub built on Tasmanian silver
            </h2>
            <div className="mt-6 space-y-4 text-pretty leading-relaxed text-foreground/80">
              <p>
                When silver was struck on the West Coast, Zeehan boomed into one
                of Tasmania&apos;s largest towns — and the Central Hotel stood
                right at its centre. More than a century on, this heritage hotel
                in Zeehan still pours cold beer beneath the same timber beams.
              </p>
              <p>
                We&apos;re proud to be one of the great historic pubs of
                Tasmania: weathered, welcoming and full of character. The
                miners changed, the town quietened, but the front bar never
                stopped being the place where Zeehan comes together.
              </p>
            </div>

            <dl className="mt-8 grid grid-cols-3 gap-6 border-t border-border pt-6">
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                  Established
                </dt>
                <dd className="mt-1 font-serif text-3xl font-semibold text-gold">
                  1898
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                  Heritage
                </dt>
                <dd className="mt-1 font-serif text-3xl font-semibold text-gold">
                  Listed
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                  Locals served
                </dt>
                <dd className="mt-1 font-serif text-3xl font-semibold text-gold">
                  125+ yrs
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
