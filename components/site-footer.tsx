export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <span className="font-serif text-2xl font-semibold text-foreground">
              Central Hotel Zeehan
            </span>
            <p className="mt-3 max-w-sm text-pretty leading-relaxed text-muted-foreground">
              The historic heart of Zeehan — a heritage-listed pub on the West
              Coast of Tasmania. Locals, miners, riders and travellers all
              welcome.
            </p>
          </div>

          <nav aria-label="Footer">
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Explore
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#story" className="transition-colors hover:text-foreground">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#fridays" className="transition-colors hover:text-foreground">
                  Friday Nights
                </a>
              </li>
              <li>
                <a href="#events" className="transition-colors hover:text-foreground">
                  What&apos;s On
                </a>
              </li>
              <li>
                <a href="#larry" className="transition-colors hover:text-foreground">
                  Meet Larry
                </a>
              </li>
              <li>
                <a href="#visit" className="transition-colors hover:text-foreground">
                  Visit Us
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Find Us
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>131 Main Street</li>
              <li>Zeehan TAS 7469</li>
              <li>(03) 6471 0000</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>
            &copy; {new Date().getFullYear()} Central Hotel Zeehan · West Coast
            Tasmania Pub
          </p>
          <p>A historic pub &amp; community hub since 1898.</p>
        </div>
      </div>
    </footer>
  )
}
