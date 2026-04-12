"use client";

const LINKS = [
  "Plotter Printing",
  "Wide Format Scanning",
  "Digital Color Printing",
  "Photocopy Services",
  "Document Scanning",
  "Digital Color Press",
];

export default function Footer() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Syne:wght@400;500;600&display=swap');
        .font-cormorant { font-family: 'Cormorant Garamond', serif; }
        .font-syne      { font-family: 'Syne', sans-serif; }

        .footer-cream {
          background-color: #edeadf;
          background-image: radial-gradient(circle, rgba(0,0,0,0.07) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        .cta-btn-dark {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 0 1.6rem;
          height: 50px;
          background: #1a1a1a;
          color: #fff;
          font-family: 'Syne', sans-serif;
          font-size: 0.67rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          text-decoration: none;
          border-radius: 10px;
          transition: opacity 0.2s, transform 0.2s;
        }
        .cta-btn-dark:hover { opacity: 0.82; transform: translateY(-2px); }

        .cta-btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 0 1.6rem;
          height: 50px;
          background: #79A88B;
          color: #fff;
          border: 1px solid #79A88B;
          font-family: 'Syne', sans-serif;
          font-size: 0.67rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          text-decoration: none;
          border-radius: 10px;
          transition: opacity 0.2s, transform 0.2s;
        }
        .cta-btn-outline:hover { opacity: 0.84; transform: translateY(-2px); }

        .footer-service-link {
          font-family: 'Syne', sans-serif;
          font-size: 0.72rem;
          font-weight: 400;
          color: rgba(0,0,0,0.38);
          text-decoration: none;
          letter-spacing: 0.04em;
          display: block;
          padding: 3px 0;
          transition: color 0.2s;
        }
        .footer-service-link:hover { color: rgba(0,0,0,0.75); }

        .info-icon {
          width: 28px;
          height: 28px;
          border-radius: 6px;
          background: rgba(121,168,139,0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
        }
      `}</style>

      <footer className="footer-cream">

        {/* ── MAIN THREE-COLUMN GRID ── */}
        <div className="mx-auto max-w-[1400px] px-6 py-12 md:px-10 md:py-16 grid grid-cols-1 md:grid-cols-[1.8fr_1.2fr_1fr] gap-10 md:gap-16 items-start">


          {/* ── COLUMN 1: CTA ── */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            {/* Eyebrow */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1.4rem" }}>
              <span style={{ display: "block", width: "2rem", height: "1px", background: "#79A88B" }} />
              <span className="font-syne"
                    style={{ fontSize: "0.55rem", fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase", color: "#79A88B" }}>
                Garden Town · Lahore
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-cormorant"
                style={{ fontWeight: 300, fontSize: "clamp(2rem, 4vw, 3.4rem)", lineHeight: 1.05, color: "#1a1a1a", margin: "0 0 1.6rem" }}>
              Ready to{" "}
              <em style={{ fontStyle: "italic", color: "#79A88B" }}>Print?</em>
              <br />Let's Get Started.
            </h2>

            {/* Sub-line */}
            <p className="font-syne"
               style={{ fontSize: "0.82rem", fontWeight: 400, color: "rgba(0,0,0,0.45)", letterSpacing: "0.03em", maxWidth: "310px", lineHeight: 1.9, margin: "0 0 1.8rem" }}>
              Send your files and get a precise quote — usually within minutes.
            </p>
          </div>

          {/* ── COLUMN 2: Contact Info ── */}
          <div style={{ paddingTop: "0.4rem" }}>
            <p className="font-syne"
               style={{ fontSize: "0.55rem", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: "#79A88B", margin: "0 0 1rem" }}>
              Contact & Location
            </p>

            {/* Address */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "14px" }}>
              <div className="info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#79A88B" strokeWidth="2" style={{ width: 13, height: 13 }}>
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <circle cx="12" cy="11" r="3"/>
                </svg>
              </div>
              <div>
                <p className="font-syne" style={{ fontSize: "0.78rem", color: "#1a1a1a", margin: 0, fontWeight: 500 }}>Garden Town, Lahore</p>
                <p className="font-syne" style={{ fontSize: "0.7rem", color: "rgba(0,0,0,0.42)", margin: "3px 0 0", letterSpacing: "0.02em" }}>Main Boulevard, Punjab</p>
              </div>
            </div>

            {/* Phone */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "14px" }}>
              <div className="info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#79A88B" strokeWidth="2" style={{ width: 13, height: 13 }}>
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </div>
              <div>
                <p className="font-syne" style={{ fontSize: "0.78rem", color: "#1a1a1a", margin: 0, fontWeight: 500 }}>+92 321 457 7000</p>
                <p className="font-syne" style={{ fontSize: "0.7rem", color: "rgba(0,0,0,0.42)", margin: "3px 0 0" }}>Mon – Sat · 9am – 8pm</p>
              </div>
            </div>

            {/* Email */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
              <div className="info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#79A88B" strokeWidth="2" style={{ width: 13, height: 13 }}>
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <p className="font-syne" style={{ fontSize: "0.78rem", color: "#1a1a1a", margin: 0, fontWeight: 500 }}>scanprint47@gmail.com</p>
                <p className="font-syne" style={{ fontSize: "0.7rem", color: "rgba(0,0,0,0.42)", margin: "3px 0 0" }}>Quick replies via WhatsApp</p>
              </div>
            </div>
          </div>

          {/* ── COLUMN 3: Services ── */}
          <div style={{ paddingTop: "0.4rem" }}>
            <p className="font-syne"
               style={{ fontSize: "0.55rem", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: "#79A88B", margin: "1.5rem 0 0.9rem" }}>
              Our Services
            </p>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {LINKS.map(l => (
                <a key={l} href="#" className="footer-service-link">{l}</a>
              ))}
            </div>
          </div>

        </div>

        {/* ── DIVIDER ── */}
        <div className="border-t border-black/10 mx-6 md:mx-10" />

        {/* ── BOTTOM BAR ── */}
        <div className="px-6 md:px-10 py-6 md:py-8 flex flex-col md:flex-row items-center justify-between gap-6">


          {/* Brand */}
          <span className="font-cormorant" style={{ fontSize: "1.5rem", fontWeight: 300, color: "#1a1a1a" }}>
            <em>Al</em>
            <em style={{ fontStyle: "italic", color: "#79A88B", fontWeight: 400 }}> Jannat</em>
          </span>

          {/* Tagline */}
          <span className="font-syne"
                style={{ fontSize: "0.62rem", color: "rgba(0,0,0,0.32)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
            Printing · Scanning · Lahore
          </span>

          {/* Copyright */}
          <p className="font-syne" style={{ fontSize: "0.63rem", color: "rgba(0,0,0,0.28)", margin: 0, whiteSpace: "nowrap" }}>
            © {new Date().getFullYear()} Scan n Print
          </p>
        </div>

      </footer>
    </>
  );
}