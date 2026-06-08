import { Reveal } from './reveal'

const events = [
  {
    tag: 'Live Music',
    title: 'Friday Night Sessions',
    text: 'Live acoustic and band nights every Friday in the front bar.',
    img: '/images/friday-live-music.png',
  },
  {
    tag: 'Celebrate',
    title: 'Birthdays & Private Events',
    text: 'Book the pub for birthdays, send-offs and get-togethers — we look after the rest.',
    img: '/images/interior-bar.png',
  },
  {
    tag: 'On The Road',
    title: 'Riders & Road Trippers',
    text: 'A favourite West Coast Tasmania attraction for bike riders and tourers passing through.',
    img: '/images/bikers-tourists.png',
  },
  {
    tag: 'Theme Nights',
    title: 'Trivia & Theme Nights',
    text: 'Keep an eye out for trivia, theme nights and one-off community events.',
    img: '/images/counter-meal.png',
  },
]

export function Events() {
  return (
    <section id="events" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="mb-4 flex items-center gap-2 text-gold">
            <span className="h-px w-8 bg-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em]">
              What&apos;s On
            </span>
          </div>
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="max-w-2xl text-balance font-serif text-4xl font-semibold leading-tight text-foreground md:text-5xl">
              Things to do in Zeehan, all under one roof
            </h2>
            <p className="max-w-sm text-pretty leading-relaxed text-muted-foreground">
              From live music to private functions, there&apos;s always a reason
              to pull up a stool at the Central.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {events.map((e, i) => (
            <Reveal key={e.title} delay={i * 100}>
              <article className="group h-full overflow-hidden rounded-2xl border border-border bg-card">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={e.img || '/placeholder.svg'}
                    alt={e.title}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-gold-foreground">
                    {e.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    {e.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                    {e.text}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
