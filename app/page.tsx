export default function Home() {
  return (
    <main style={{ fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif" }}>
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "56px 20px" }}>
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
          <div style={{ fontWeight: 700, letterSpacing: 0.2 }}>The Calm VA</div>
          <nav style={{ display: "flex", gap: 16, fontSize: 14 }}>
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#packages">Packages</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <section style={{ padding: "64px 0 40px" }}>
          <p style={{ margin: 0, fontSize: 13, letterSpacing: 1, opacity: 0.75 }}>
            VIRTUAL ASSISTANCE • CONTENT SUPPORT • RESEARCH
          </p>
          <h1 style={{ margin: "14px 0 10px", fontSize: 44, lineHeight: 1.1 }}>
            Calm systems for growing coaches & consultants.
          </h1>
          <p style={{ margin: "0 0 22px", fontSize: 18, lineHeight: 1.5, maxWidth: 720, opacity: 0.85 }}>
            I help you reclaim time by organizing admin, supporting content, and handling research—so you can focus on clients and growth.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href="#contact"
              style={{
                display: "inline-block",
                padding: "12px 16px",
                borderRadius: 10,
                border: "1px solid #111",
                textDecoration: "none",
                fontWeight: 600
              }}
            >
              Work with me
            </a>
            <a
              href="#services"
              style={{
                display: "inline-block",
                padding: "12px 16px",
                borderRadius: 10,
                border: "1px solid #ddd",
                textDecoration: "none",
                fontWeight: 600
              }}
            >
              See services
            </a>
          </div>
        </section>

        <section style={{ padding: "18px 0 46px", opacity: 0.9 }}>
          <div
            style={{
              border: "1px solid #eee",
              borderRadius: 14,
              padding: 16,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 12
            }}
          >
            <div>
              <div style={{ fontWeight: 700 }}>Reliable support</div>
              <div style={{ fontSize: 14, opacity: 0.85 }}>Clear communication + structured execution.</div>
            </div>
            <div>
              <div style={{ fontWeight: 700 }}>Systems-first</div>
              <div style={{ fontSize: 14, opacity: 0.85 }}>Less chaos, more consistency.</div>
            </div>
            <div>
              <div style={{ fontWeight: 700 }}>Professional & calm</div>
              <div style={{ fontSize: 14, opacity: 0.85 }}>A brand built on trust, not noise.</div>
            </div>
          </div>
        </section>

        <section id="services" style={{ padding: "18px 0 56px" }}>
          <h2 style={{ margin: "0 0 10px", fontSize: 28 }}>Services</h2>
          <p style={{ margin: "0 0 18px", opacity: 0.85, maxWidth: 720 }}>
            Choose one area or combine them for full support.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 14 }}>
            {[
              { title: "Admin Support", bullets: ["Inbox support", "Calendar coordination", "Document organization", "Client follow-ups"] },
              { title: "Content Support", bullets: ["Caption drafts", "Content planning", "Repurposing ideas", "Posting support (optional)"] },
              { title: "Research & Organization", bullets: ["Competitor research", "Audience insights", "Topic research", "Systems + SOP drafting"] }
            ].map((card) => (
              <div key={card.title} style={{ border: "1px solid #eee", borderRadius: 14, padding: 16 }}>
                <div style={{ fontWeight: 800, marginBottom: 10 }}>{card.title}</div>
                <ul style={{ margin: 0, paddingLeft: 18, opacity: 0.9 }}>
                  {card.bullets.map((b) => (
                    <li key={b} style={{ marginBottom: 6, fontSize: 14 }}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="process" style={{ padding: "18px 0 56px" }}>
          <h2 style={{ margin: "0 0 10px", fontSize: 28 }}>How it works</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 14 }}>
            {[
              { step: "1) Quick call", text: "We clarify your goals, tools, and priorities." },
              { step: "2) Set up systems", text: "I organize workflows so tasks move smoothly." },
              { step: "3) Weekly execution", text: "You get consistent support and a simple update." }
            ].map((x) => (
              <div key={x.step} style={{ border: "1px solid #eee", borderRadius: 14, padding: 16 }}>
                <div style={{ fontWeight: 800 }}>{x.step}</div>
                <p style={{ margin: "8px 0 0", opacity: 0.85 }}>{x.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="packages" style={{ padding: "18px 0 56px" }}>
          <h2 style={{ margin: "0 0 10px", fontSize: 28 }}>Packages</h2>
          <p style={{ margin: "0 0 18px", opacity: 0.85 }}>
            Start simple. Scale when you’re ready. (We can add pricing later.)
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 14 }}>
            {[
              { name: "Starter Support", desc: "Light admin + organization to free up time." },
              { name: "Growth Support", desc: "Admin + content support for consistency." },
              { name: "Full Support", desc: "Admin + content + research + systems building." }
            ].map((p) => (
              <div key={p.name} style={{ border: "1px solid #111", borderRadius: 14, padding: 16 }}>
                <div style={{ fontWeight: 900 }}>{p.name}</div>
                <p style={{ margin: "8px 0 0", opacity: 0.9 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" style={{ padding: "18px 0 56px" }}>
          <h2 style={{ margin: "0 0 10px", fontSize: 28 }}>Contact</h2>
          <p style={{ margin: "0 0 18px", opacity: 0.85, maxWidth: 720 }}>
            Email me with what you need help with, and I’ll reply with next steps.
          </p>

          <div style={{ border: "1px solid #eee", borderRadius: 14, padding: 16 }}>
            <p style={{ margin: 0, opacity: 0.9 }}>
              Email: <a href="thecalmva@gmail.com">youremail@example.com</a>
            </p>
            <p style={{ margin: "10px 0 0", fontSize: 14, opacity: 0.8 }}>
              Replace this email with yours. We can add a form or booking link later.
            </p>
          </div>
        </section>

        <footer style={{ paddingTop: 16, borderTop: "1px solid #eee", fontSize: 13, opacity: 0.75 }}>
          © {new Date().getFullYear()} The Calm VA • Built on Vercel
        </footer>
      </div>
    </main>
  );
}
