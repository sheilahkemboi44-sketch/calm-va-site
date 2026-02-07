export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbf7f0] text-[#1f1f1f]">
      {/* Subtle background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(1000px_600px_at_20%_10%,rgba(190,160,120,0.18),transparent_60%),radial-gradient(900px_500px_at_80%_20%,rgba(220,200,170,0.16),transparent_55%)]" />

      <div className="mx-auto max-w-5xl px-5 py-12">
        {/* Header */}
        <header className="flex items-center justify-between gap-4">
          <div className="rounded-full border border-black/10 bg-white/70 px-4 py-2 shadow-sm backdrop-blur">
            <span className="brand-reveal text-xs font-semibold uppercase tracking-[0.12em] text-black/80">
              THE CALM VA
            </span>
          </div>

          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a className="opacity-80 hover:opacity-100" href="#services">
              Services
            </a>
            <a className="opacity-80 hover:opacity-100" href="#process">
              Process
            </a>
            <a className="opacity-80 hover:opacity-100" href="#packages">
              Packages
            </a>
            <a className="opacity-80 hover:opacity-100" href="#contact">
              Contact
            </a>
          </nav>
        </header>

        {/* Hero */}
        <section className="mt-12 rounded-3xl border border-black/10 bg-white/70 p-8 shadow-sm backdrop-blur md:p-12 animate-fadeUp">
          <p className="text-xs font-semibold tracking-[0.25em] text-black/60">
            VIRTUAL ASSISTANCE • CONTENT SUPPORT • RESEARCH
          </p>

          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            Calm systems for growing coaches & consultants.
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-black/75 md:text-lg">
            I help you reclaim time by organizing admin, supporting content, and handling research—so you can focus on clients
            and growth.
          </p>

          {/* Primary actions */}
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="https://calendly.com/sheilahkemboi44/30min"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-[#1f1f1f] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-[1px] hover:shadow-md"
            >
              Book a 30-min Discovery Call
            </a>

            <a
              href="mailto:thecalmva@gmail.com"
              className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-[#1f1f1f] shadow-sm transition-transform hover:-translate-y-[1px] hover:shadow-md"
            >
              Email Me
            </a>

            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white/60 px-5 py-3 text-sm font-semibold text-[#1f1f1f] transition-transform hover:-translate-y-[1px]"
            >
              View Services
            </a>
          </div>

          {/* Trust strip */}
          <div className="mt-10 grid gap-3 md:grid-cols-3">
            <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm transition-transform hover:-translate-y-[1px] hover:shadow-md">
              <div className="text-sm font-semibold">Reliable support</div>
              <div className="mt-1 text-sm text-black/70">Clear communication + structured execution.</div>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm transition-transform hover:-translate-y-[1px] hover:shadow-md">
              <div className="text-sm font-semibold">Systems-first</div>
              <div className="mt-1 text-sm text-black/70">Less chaos, more consistency.</div>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm transition-transform hover:-translate-y-[1px] hover:shadow-md">
              <div className="text-sm font-semibold">Calm authority</div>
              <div className="mt-1 text-sm text-black/70">Professional, faceless, and results-focused.</div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="mt-12 animate-fadeUp2">
          <h2 className="text-2xl font-semibold tracking-tight">Services</h2>
          <p className="mt-2 max-w-2xl text-black/70">Choose one area or combine them for full support.</p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Card
              title="Admin Support"
              items={["Inbox support", "Calendar coordination", "Document organization", "Client follow-ups"]}
            />
            <Card
              title="Content Support"
              items={["Caption drafts", "Content planning", "Repurposing ideas", "Posting support (optional)"]}
            />
            <Card
              title="Research & Organization"
              items={["Competitor research", "Audience insights", "Topic research", "Systems + process drafting"]}
            />
          </div>
        </section>

        {/* Process */}
        <section id="process" className="mt-12 animate-fadeUp3">
          <h2 className="text-2xl font-semibold tracking-tight">How it works</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Step title="1) 30-minute discovery call" text="We clarify your goals, tools, and priorities." />
            <Step title="2) Set up calm systems" text="I organize workflows so tasks move smoothly." />
            <Step title="3) Weekly execution + updates" text="You get consistent support and a simple update." />
          </div>
        </section>

        {/* Packages (no prices) */}
        <section id="packages" className="mt-12 animate-fadeUp4">
          <h2 className="text-2xl font-semibold tracking-tight">Packages</h2>
          <p className="mt-2 max-w-2xl text-black/70">
            No fixed pricing yet. I share a rate card after understanding your workload and goals.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Package
              name="Starter Support"
              desc="Light admin + organization to free up time."
            />
            <Package
              name="Growth Support"
              desc="Admin + content support for consistency."
            />
            <Package
              name="Full Support"
              desc="Admin + content + research + systems building."
            />
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-12 animate-fadeUp5">
          <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
          <p className="mt-2 max-w-2xl text-black/70">
            Prefer booking? Use Calendly. Prefer email? Send your request and I’ll reply with next steps.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition-transform hover:-translate-y-[1px] hover:shadow-md">
              <div className="text-sm font-semibold text-black/80">Book a discovery call</div>
              <p className="mt-2 text-sm text-black/70">
                A 30-minute call to understand your needs and recommend the best support plan.
              </p>
              <a
                href="https://calendly.com/sheilahkemboi44/30min"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center justify-center rounded-xl bg-[#1f1f1f] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-[1px] hover:shadow-md"
              >
                Open Calendly
              </a>
            </div>

            <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition-transform hover:-translate-y-[1px] hover:shadow-md">
              <div className="text-sm font-semibold text-black/80">Email</div>
              <p className="mt-2 text-sm text-black/70">
                Send what you need help with. I’ll reply with availability and a rate card.
              </p>
              <a
                className="mt-3 inline-block text-base font-semibold text-[#1f1f1f] underline decoration-black/20 underline-offset-4 hover:decoration-black/60"
                href="mailto:thecalmva@gmail.com"
              >
                thecalmva@gmail.com
              </a>
            </div>
          </div>
        </section>

        <footer className="mt-12 border-t border-black/10 py-8 text-sm text-black/60">
          © {new Date().getFullYear()} THE CALM VA • Built on Vercel
        </footer>
      </div>
    </main>
  );
}

function Card({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition-transform hover:-translate-y-[1px] hover:shadow-md">
      <div className="text-sm font-semibold">{title}</div>
      <ul className="mt-3 space-y-2 text-sm text-black/70">
        {items.map((x) => (
          <li key={x} className="flex gap-2">
            <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-black/30" />
            <span>{x}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Step({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition-transform hover:-translate-y-[1px] hover:shadow-md">
      <div className="text-sm font-semibold">{title}</div>
      <p className="mt-2 text-sm text-black/70">{text}</p>
    </div>
  );
}

function Package({ name, desc }: { name: string; desc: string }) {
  return (
    <div className="rounded-3xl border border-black/20 bg-white p-6 shadow-sm transition-transform hover:-translate-y-[1px] hover:shadow-md">
      <div className="text-sm font-semibold">{name}</div>
      <p className="mt-2 text-sm text-black/70">{desc}</p>
      <div className="mt-4 text-xs font-semibold tracking-wide text-black/50">
        Request a rate card via{" "}
        <a className="underline underline-offset-4" href="mailto:thecalmva@gmail.com">
          email
        </a>
      </div>
    </div>
  );
}
