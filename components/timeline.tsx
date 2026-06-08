import { Reveal } from './reveal'

const milestones = [
  {
    year: '1898',
    title: 'The doors open',
    text: 'The Central Hotel opens as Zeehan rides the West Coast silver boom into one of Tasmania\u2019s largest towns.',
  },
  {
    year: '1900s',
    title: 'Heart of a mining town',
    text: 'Miners pack the front bar after every shift. The Central becomes the meeting place of Zeehan.',
  },
  {
    year: '1950s',
    title: 'Weathering the quiet',
    text: 'As the mines slowed, the pub stayed open — a constant for the locals who remained.',
  },
  {
    year: 'Today',
    title: 'A heritage hotel reborn',
    text: 'Restored and welcoming, the Central is proudly the historic heart of Zeehan once again.',
  },
]

export function Timeline() {
  return (
    <section className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <Reveal>
          <div className="mb-4 flex items-center gap-2 text-gold">
            <span className="h-px w-8 bg-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em]">
              Our Timeline
            </span>
          </div>
          <h2 className="max-w-2xl text-balance font-serif text-4xl font-semibold leading-tight text-foreground md:text-5xl">
            Over a century on Main Street
          </h2>
        </Reveal>

        <ol className="mt-12 space-y-0">
          {milestones.map((m, i) => (
            <Reveal key={m.year} delay={i * 80}>
              <li className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 border-l border-border pb-10 pl-6 last:pb-0 md:grid-cols-[8rem_1fr] md:gap-x-10 md:pl-10">
                <span className="font-serif text-3xl font-semibold text-gold md:text-4xl">
                  {m.year}
                </span>
                <div className="-mt-1">
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    {m.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-pretty leading-relaxed text-foreground/75">
                    {m.text}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
