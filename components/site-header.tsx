'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Story', href: '#story' },
  { label: 'Friday Nights', href: '#fridays' },
  { label: 'Whats On', href: '#events' },
  { label: 'Meet Larry', href: '#larry' },
  { label: 'Visit', href: '#visit' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border/60 bg-background/90 backdrop-blur-md'
          : 'bg-transparent',
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <a href="#top" className="flex flex-col leading-none">
          <span className="font-serif text-xl font-semibold tracking-wide text-foreground md:text-2xl">
            Central Hotel
          </span>
          <span className="text-[0.62rem] font-medium uppercase tracking-[0.32em] text-gold">
            Zeehan · Est. 1898
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium tracking-wide text-foreground/80 transition-colors hover:text-gold"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="#visit"
            className="rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground transition-transform hover:scale-105"
          >
            Find Us
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex size-10 items-center justify-center rounded-full border border-border text-foreground md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1.5">
            <span
              className={cn(
                'h-0.5 w-5 bg-current transition-transform',
                open && 'translate-y-2 rotate-45',
              )}
            />
            <span
              className={cn(
                'h-0.5 w-5 bg-current transition-opacity',
                open && 'opacity-0',
              )}
            />
            <span
              className={cn(
                'h-0.5 w-5 bg-current transition-transform',
                open && '-translate-y-2 -rotate-45',
              )}
            />
          </div>
        </button>
      </nav>

      {open && (
        <div className="border-t border-border/60 bg-background/95 backdrop-blur-md md:hidden">
          <ul className="flex flex-col px-5 py-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-medium text-foreground/90"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#visit"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-gold px-5 py-3 text-center text-sm font-semibold text-gold-foreground"
              >
                Find Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
