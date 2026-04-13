"use client";

import { useEffect, useRef, useState, type ReactElement } from "react";

/* ─── Intersection-observer hook ─── */
function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/* ─── Design tokens ─── */
const T = {
  accent: "#79A88B",
  accentDark: "#5a8a6e",
  accentLight: "#edf4f0",
  ink: "#0E0D0A",
  warm: "#8A8278",
  border: "#E2DDD6",
  muted: "#EAE6DF",
  bg: "#F0EDE8",
  white: "#F8F6F1",
};

/* ══════════════════════════════════════════════
   ABOUT HERO
══════════════════════════════════════════════ */
function AboutHero() {
  return (
    <section
      className="relative grid min-h-0 grid-cols-1 mt-[-32px] overflow-hidden bg-[#F8F6F1] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:min-h-[92vh]"
    >
      {/* LEFT */}
      <div
        className="order-2 flex flex-col justify-center px-4 pb-12 pt-16 font-bold sm:px-6 sm:pb-14 sm:pt-20 md:px-10 lg:order-1 lg:px-12 lg:pb-24 lg:pt-16 xl:pl-20 xl:pr-12"
      >

        {/* Tag */}
        <div
          className="opacity-0 font-bold uppercase"
          style={{
            display: "flex", alignItems: "center", gap: ".8rem",
            fontFamily: "'syne', sans-serif", fontSize: ".68rem",
            letterSpacing: ".4em", color: T.accent,
            marginBottom: "1.8rem",
            animation: "fadeUp .8s ease .3s both",
          }}
        >
          <span style={{ display: "inline-block", width: 28, height: 1, background: T.accent }} />
          Our Story
        </div>

        {/* Title */}
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2rem, 8vw, 5.5rem)",
            fontWeight: 300, lineHeight: 0.92, letterSpacing: "-.01em",
            color: T.ink, marginBottom: "2.2rem",
          }}
        >
          {[
            { text: "Trusted", color: T.ink },
            { text: "By Lahore's", color: T.accent },
            { text: "Professionals", color: T.ink },
          ].map(({ text, color }, i) => (
            <span key={i} style={{ display: "block", overflow: "hidden" }}>
              <span
                style={{
                  display: "block", color,
                  transform: "translateY(105%)",
                  animation: `wordIn .9s cubic-bezier(.16,1,.3,1) ${0.4 + i * 0.14}s both`,
                }}
              >
                {text}
              </span>
            </span>
          ))}
        </h1>

        <p
          className="opacity-0"
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "1rem", fontWeight: 300,
            color: T.warm, lineHeight: 1.9,
            maxWidth: 390,
            animation: "fadeUp .8s ease .9s both",
          }}
        >
          Since our founding, Al Jannat Scan n Print has been the go-to printing
          and scanning partner for architects, engineers, designers and businesses
          across Lahore — delivering precision output with unmatched speed and quality.
        </p>
      </div>

      {/* RIGHT image */}
      <div
        className="relative order-1 min-h-[42vh] overflow-hidden sm:min-h-[48vh] lg:order-2 lg:min-h-0 lg:h-[92vh]"
        style={{
          clipPath: "inset(0 100% 0 0)",
          animation: "revealR 1.1s cubic-bezier(.16,1,.3,1) .2s both",
        }}
      >
        <span
          className="absolute top-0 left-0 right-0 z-10"
          style={{
            height: 3, background: T.accent,
            transformOrigin: "left",
            animation: "barIn .9s cubic-bezier(.16,1,.3,1) .5s both",
          }}
        />
        <img
          className="w-full h-full object-cover"
          style={{
            transform: "scale(1.04)",
            animation: "zoomOut 1.3s cubic-bezier(.16,1,.3,1) .2s both",
          }}
          src="/images/shop.jpeg"
          alt="Al Jannat Scan n Print professional studio"
          onError={(e) => {
            const p = (e.target as HTMLImageElement).parentElement!;
            p.style.background = "linear-gradient(135deg,#c8d0c8,#b0b8b0)";
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      </div>
    </section>
  );
}



/* ══════════════════════════════════════════════
   HOW WE DELIVER
══════════════════════════════════════════════ */
const steps = [
  { num: "01", title: "You Send the Files", body: "Walk in with a USB, email your files, or send them via WhatsApp. We accept PDF, DWG, DXF, TIFF, AI, PSD and all major formats. No file size restrictions for walk-ins." },
  { num: "02", title: "We Check Everything", body: "Our team reviews your file for quality, dimensions, colour mode and printability. We catch problems before we print — saving you time and money. You get a confirmed quote within minutes." },
  { num: "03", title: "Precision Production", body: "We use professional-grade HP DesignJet plotters and wide-format scanners. Every job is quality-checked before it leaves our studio." },
  { num: "04", title: "Ready for Collection or Delivery", body: "Collect from our studio in Garden Town or receive your scanned files digitally. Same-day service is available for most standard print and scan jobs." },
];

function HowWeDeliver() {
  const { ref, inView } = useInView();
  return (
    <section className="py-16 sm:py-20 lg:py-28" style={{ background: T.white }}>
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 md:px-10 lg:px-12 xl:px-20">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-24">
          {/* LEFT */}
          <div>
            <div
              className="opacity-0 font-bold uppercase"
              style={{
                display: "flex", alignItems: "center", gap: ".8rem",
                fontFamily: "'syne', sans-serif", fontSize: ".68rem",
                letterSpacing: ".4em", color: T.accent,
                marginBottom: "1.8rem",
                animation: "fadeUp .8s ease .3s both",
              }}
            >
              <span style={{ display: "inline-block", width: 28, height: 1, background: T.accent }} />
              How to Deliever
            </div>
            <SectionTitle>
              Precision at<br />Every{" "}
              <em style={{ color: T.accent, fontStyle: "italic" }}>Step</em>
            </SectionTitle>
            <p style={{ fontFamily: "'Syne', sans-serif", fontSize: ".95rem", fontWeight: 300, color: T.warm, lineHeight: 1.9, maxWidth: 400, marginBottom: "2.8rem" }}>
              Our process is designed to be simple for you and meticulous for us.
              From the moment you send your files to the moment you receive your
              output — quality is non-negotiable.
            </p>
            <div ref={ref}>
              {steps.map((s, i) => (
                <HowStep key={i} step={s} delay={i * 0.08} inView={inView} isLast={i === steps.length - 1} />
              ))}
            </div>
          </div>

          {/* RIGHT: image stack */}
          <div className="relative mx-auto h-[min(52vw,380px)] min-h-[260px] w-full max-w-lg lg:mx-0 lg:h-[520px] lg:max-w-none">
            <div className="absolute overflow-hidden" style={{ top: 0, right: 0, width: "80%", height: "85%" }}>
              <img
                className="w-full h-full object-cover"
                src="/images/ser-2.jpg"
                alt="Plotter printer in operation"
                onError={(e) => { (e.target as HTMLImageElement).parentElement!.style.background = "#d5d0c8"; (e.target as HTMLImageElement).style.display = "none"; }}
              />
            </div>
            <div className="absolute overflow-hidden" style={{ bottom: 0, left: 0, width: "55%", height: "55%", border: `5px solid ${T.white}` }}>
              <img
                className="w-full h-full object-cover"
                src="/images/ser-4.jpg"
                alt="Wide format scanner"
                onError={(e) => { (e.target as HTMLImageElement).parentElement!.style.background = "#c0c8c0"; (e.target as HTMLImageElement).style.display = "none"; }}
              />
            </div>
            {/* Badge — inline on small screens to avoid overflow */}
            <div
              className="absolute right-3 top-1/2 flex -translate-y-1/2 flex-col items-center sm:right-0 lg:-right-2 xl:-right-7"
              style={{ background: T.accent, padding: "1rem 0.85rem", gap: ".35rem", boxShadow: "0 10px 36px rgba(121,168,139,.38)" }}
            >
              <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(1.75rem, 5vw, 2.4rem)", fontWeight: 600, color: T.white, lineHeight: 1 }}>15+</span>
              <span style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: ".5rem", letterSpacing: ".25em", color: "rgba(255,255,255,.75)", textAlign: "center" }}>YEARS OF<br />EXPERTISE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowStep({ step, delay, inView, isLast }: { step: typeof steps[0]; delay: number; inView: boolean; isLast: boolean }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      className="flex flex-col gap-4 py-5 sm:flex-row sm:gap-6 sm:py-7"
      style={{
        borderBottom: isLast ? "none" : `1px solid ${T.border}`,
        opacity: inView ? 1 : 0,
        transform: inView ? "translateX(0)" : "translateX(-30px)",
        transition: `opacity .7s cubic-bezier(.16,1,.3,1) ${delay}s, transform .7s cubic-bezier(.16,1,.3,1) ${delay}s`,
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2rem, 6vw, 2.8rem)", fontWeight: 300, color: hov ? T.accent : "#C8C4BC", lineHeight: 1, flexShrink: 0, width: 44, transition: "color .4s" }} className="sm:w-[50px]">
        {step.num}
      </span>
      <div>
        <h4 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.2rem", fontWeight: 400, color: T.ink, marginBottom: ".5rem" }}>{step.title}</h4>
        <p style={{ fontFamily: "'Syne',sans-serif", fontSize: ".84rem", color: T.warm, lineHeight: 1.85, fontWeight: 300 }}>{step.body}</p>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════
   CLIENTS
══════════════════════════════════════════════ */
/* ══════════════════════════════════════════════
   CLIENT SVG ICONS
══════════════════════════════════════════════ */
const ClientIcons: Record<string, ReactElement> = {
  engineering: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="1" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /><line x1="12" y1="12" x2="12" y2="16" /><line x1="10" y1="14" x2="14" y2="14" />
    </svg>
  ),
  architecture: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18M3 7l9-4 9 4M4 21V7M20 21V7M9 21v-5a3 3 0 0 1 6 0v5" />
    </svg>
  ),
  government: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" />
    </svg>
  ),
  university: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5" />
    </svg>
  ),
  realestate: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" /><path d="M9 21V12h6v9" />
    </svg>
  ),
  law: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L3 7l1.5 9L12 22l7.5-6L21 7z" /><path d="M12 2v20M3 7h18" />
    </svg>
  ),
  creative: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="13.5" cy="6.5" r="2.5" /><circle cx="17.5" cy="10.5" r="2.5" /><circle cx="8.5" cy="7.5" r="2.5" /><circle cx="6.5" cy="12.5" r="2.5" /><path d="M12 20c-4 0-8-2-8-6s4-5 8-5 8 1 8 5-4 6-8 6z" />
    </svg>
  ),
  healthcare: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  ),
  manufacturing: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 20h20M4 20V10l4-4 4 4V4l4 4v12" /><rect x="10" y="14" width="4" height="6" />
    </svg>
  ),
  retail: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  ),
};

/* ── Collaboration logos ── */
const COLLAB_LOGOS = [
  { id: 1, src: "/images/bop-logo.png",        alt: "Bank of Punjab" },
  { id: 2, src: "/images/logo-descon.jpg",     alt: "Descon Engineering" },
  { id: 3, src: "/images/nes-pack.jpg",        alt: "Nes Pack" },
  { id: 4, src: "/images/barclays-logo.png",   alt: "Barclays" },
  { id: 5, src: "/images/silk-bank.jpg",       alt: "Silk Bank" },
  { id: 6, src: "/images/UBL-Logo-Vector.png", alt: "UBL" },
];

function CompaniesSection() {
  const { ref, inView } = useInView();
  return (
    <section style={{ background: "#ffffff", padding: "clamp(3rem, 8vw, 5rem) 0" }}>
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 md:px-10 lg:px-12 flex flex-col items-center">
        {/* Eyebrow */}
        <div
          style={{
            display: "flex", alignItems: "center", gap: ".8rem",
            fontFamily: "'syne', sans-serif", fontSize: ".68rem",
            fontWeight: 700, letterSpacing: ".4em", color: T.accent,
            textTransform: "uppercase" as const,
            marginBottom: "1.8rem",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            transition: "opacity .7s cubic-bezier(.16,1,.3,1), transform .7s cubic-bezier(.16,1,.3,1)",
          }}
        >
          <span style={{ display: "inline-block", width: 28, height: 1, background: T.accent }} />
          Trusted Partners
        </div>

        {/* Heading */}
        <h2
          style={{
            fontFamily: "'Cormorant Garamond',serif",
            fontSize: "clamp(2rem,4.5vw,3.5rem)",
            fontWeight: 300, color: T.ink, lineHeight: 1.05,
            textAlign: "center",
            marginBottom: "1.2rem",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            transition: "opacity .7s cubic-bezier(.16,1,.3,1) .05s, transform .7s cubic-bezier(.16,1,.3,1) .05s",
          }}
        >
          Companies We{" "}
          <em style={{ color: T.accent, fontStyle: "italic" }}>Worked With</em>
        </h2>

        {/* Body */}
        <p
          className="mx-auto max-w-[min(100%,440px)]"
          style={{
            fontFamily: "'Syne', sans-serif", fontSize: ".92rem",
            color: T.warm, lineHeight: 1.85, fontWeight: 300,
            textAlign: "center", marginBottom: "3.5rem",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            transition: "opacity .7s cubic-bezier(.16,1,.3,1) .1s, transform .7s cubic-bezier(.16,1,.3,1) .1s",
          }}
        >
          Al Jannat Scan &amp; Print is providing satisfactory printer maintenance
          services all over Pakistan. The performance and trouble shooting time
          is very good.
        </p>

        {/* Logo grid */}
        <div
          ref={ref}
          className="w-full max-w-3xl grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-10"
        >
          {COLLAB_LOGOS.map((logo, i) => (
            <div
              key={logo.id}
              className="relative w-full h-20 flex items-center justify-center"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(24px)",
                transition: `opacity .6s cubic-bezier(.16,1,.3,1) ${0.12 + i * 0.08}s, transform .6s cubic-bezier(.16,1,.3,1) ${0.12 + i * 0.08}s`,
              }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                draggable={false}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
          ))}
        </div>

        {/* Footer tag */}
        <div
          style={{
            display: "flex", alignItems: "center", gap: ".8rem",
            marginTop: "3.5rem",
            opacity: inView ? 1 : 0,
            transition: "opacity .7s cubic-bezier(.16,1,.3,1) .5s",
          }}
        >
          <span style={{ display: "inline-block", width: 24, height: 1, background: T.border }} />
          <span style={{
            fontFamily: "'syne',sans-serif", fontSize: ".58rem",
            letterSpacing: ".18em", textTransform: "uppercase" as const,
            color: T.warm,
          }}>
            Serving across Pakistan
          </span>
          <span style={{ display: "inline-block", width: 24, height: 1, background: T.border }} />
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   TESTIMONIALS
══════════════════════════════════════════════ */
const testimonials = [
  { stars: 5, quote: "The plotter prints for our architectural plans were flawless — perfectly scaled and delivered the same day. We've been coming here for years and the quality is always consistent.", initials: "AK", name: "Ahmed Khan", role: "Senior Architect, Lahore", delay: .05 },
  { stars: 5, quote: "We had 50+ old maps that needed scanning and digitising. Al Jannat did them in a single day at incredible resolution. Their wide format scanning service is unmatched in the city.", initials: "SF", name: "Sara Farooq", role: "Project Manager, Engineering Co.", delay: .15 },
  { stars: 5, quote: "Fast, professional, and always willing to go the extra mile. I send my files over WhatsApp and my prints are ready within hours. Couldn't ask for better service.", initials: "MR", name: "Muhammad Raza", role: "Interior Designer, Lahore", delay: .25 },
  { stars: 5, quote: "Our university department relies on Al Jannat for all large format printing. The team is always helpful — especially for technical drawings.", initials: "DR", name: "Dr. Rizwan A.", role: "Professor, Civil Engineering Dept.", delay: .05 },
  { stars: 5, quote: "Needed 200 copies of a presentation in full colour on short notice. Done perfectly and on time. Their bulk photocopy service is genuinely the best I've experienced in Lahore.", initials: "HB", name: "Hina Baig", role: "Marketing Manager", delay: .15 },
  { stars: 5, quote: "Have been a client for over 8 years. The consistency, the speed, the communication — everything is top-notch. Al Jannat is the only place I trust for my project blueprints.", initials: "ZM", name: "Zubair Malik", role: "Construction Consultant", delay: .25 },
];

function Testimonials() {
  const { ref, inView } = useInView();
  return (
    <section style={{ background: T.ink, padding: "clamp(3rem, 8vw, 5rem) 0 clamp(3rem, 8vw, 7rem)" }}>
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 md:px-10 lg:px-12">
        <div className="mb-10 text-center sm:mb-14 md:mb-16">
          <div
            className="opacity-0 font-bold uppercase"
            style={{
              display: "flex", alignItems: "center", justifyContent: "center", gap: ".8rem",
              fontFamily: "'syne', sans-serif", fontSize: ".68rem",
              letterSpacing: ".4em", color: T.accent,
              marginBottom: "1.8rem",
              animation: "fadeUp .8s ease .3s both",
            }}
          >
            <span style={{ display: "inline-block", width: 28, height: 1, background: T.accent }} />
            Client Reviews
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2rem,4.5vw,3.5rem)", fontWeight: 300, color: T.white, lineHeight: 1.05 }}>
            What Our<br />
            <em style={{ color: T.accent, fontStyle: "italic" }}>Clients Say</em>
          </h2>
        </div>
        <div
          ref={ref}
          className="grid grid-cols-1 gap-px bg-[rgba(248,246,241,.06)] sm:grid-cols-2 xl:grid-cols-3"
        >
          {testimonials.map((t, i) => (
            <TestCard key={i} t={t} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestCard({ t, inView }: { t: typeof testimonials[0]; inView: boolean }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      style={{
        padding: "clamp(1.35rem, 4vw, 2.8rem)",
        background: hov ? "rgba(121,168,139,.08)" : "transparent",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity .8s cubic-bezier(.16,1,.3,1) ${t.delay}s, transform .8s cubic-bezier(.16,1,.3,1) ${t.delay}s, background .4s`,
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <div style={{ color: T.accent, fontSize: ".9rem", letterSpacing: ".1em", marginBottom: "1.2rem" }}>
        {"★".repeat(t.stars)}
      </div>
      <p style={{ fontFamily: "'Syne',sans-serif", fontSize: "1rem", fontWeight: 300, color: "rgba(248,246,241,.72)", lineHeight: 1.8, fontStyle: "italic", marginBottom: "1.6rem" }}>
        "{t.quote}"
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: ".9rem" }}>
        <div style={{ width: 38, height: 38, borderRadius: "50%", flexShrink: 0, background: T.accent, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Bebas Neue',sans-serif", fontSize: ".7rem", color: T.white, letterSpacing: ".05em" }}>
          {t.initials}
        </div>
        <div>
          <div style={{ fontSize: ".82rem", fontWeight: 500, color: T.white }}>{t.name}</div>
          <div style={{ fontSize: ".68rem", color: "rgba(248,246,241,.35)", letterSpacing: ".08em", textTransform: "uppercase", marginTop: ".2rem" }}>{t.role}</div>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════
   MAP SECTION
══════════════════════════════════════════════ */
function MapSection() {
  return (
    <section style={{ background: T.white, padding: "clamp(3rem, 8vw, 5rem) 0 clamp(3rem, 8vw, 7rem)" }}>
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 md:px-10 lg:px-12">
        <div className="mb-10 text-center sm:mb-14 md:mb-16">
          <div
            className="opacity-0 font-bold uppercase"
            style={{
              display: "flex", alignItems: "center", justifyContent: "center", gap: ".8rem",
              fontFamily: "'syne', sans-serif", fontSize: ".68rem",
              letterSpacing: ".4em", color: T.accent,
              marginBottom: "1.8rem",
              animation: "fadeUp .8s ease .3s both",
            }}
          >
            <span style={{ display: "inline-block", width: 28, height: 1, background: T.accent }} />
            Find Us
          </div>
          <SectionTitle center>
            Visit Our{" "}
            <em style={{ color: T.accent, fontStyle: "italic" }}>Studio</em>
          </SectionTitle>
          <p className="mx-auto max-w-[min(100%,400px)] px-2" style={{ fontFamily: "'Syne', sans-serif", fontSize: ".92rem", color: T.warm, margin: ".6rem auto 0", lineHeight: 1.85, fontWeight: 300 }}>
            We&apos;re located on Central Plaza Road in the commercial heart of Garden
            Town, Lahore — easy to find, easy to reach.
          </p>
        </div>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-20">
          {/* Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {[
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                ),
                title: "Studio Address", body: "Central Plaza Road, Commercial Area\nGarden Town, Lahore, Pakistan",
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6 6l.86-.86a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.5 16z" />
                  </svg>
                ),
                title: "WhatsApp / Call", link: { href: "https://wa.me/923214577000", label: "+92 321 4577000" },
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                  </svg>
                ),
                title: "Email", link: { href: "mailto:scanprint47@gmail.com", label: "scanprint47@gmail.com" },
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                  </svg>
                ),
                title: "Opening Hours", body: "Mon – Sat: 9:00 AM – 9:00 PM\nSunday: 10:00 AM – 6:00 PM",
              },
            ].map((d, i) => (
              <div key={i} style={{ display: "flex", gap: "1.2rem", alignItems: "flex-start" }}>
                <div style={{
                  width: 44, height: 44, flexShrink: 0,
                  background: T.accentLight,
                  color: T.accent,
                  border: `1px solid ${T.accent}`,
                  borderRadius: 6,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  {d.icon}
                </div>
                <div>
                  <h4 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.05rem", fontWeight: 400, color: T.ink, marginBottom: ".35rem" }}>{d.title}</h4>
                  {"body" in d && d.body && (
                    <p style={{ fontFamily: "'Syne',sans-serif", fontSize: ".84rem", color: T.warm, lineHeight: 1.75, fontWeight: 300, whiteSpace: "pre-line" }}>{d.body}</p>
                  )}
                  {"link" in d && d.link && (
                    <a href={d.link.href} style={{ fontFamily: "'Syne',sans-serif", fontSize: ".84rem", color: T.accent, fontWeight: 300, textDecoration: "none" }}>{d.link.label}</a>
                  )}
                </div>
              </div>
            ))}
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap" style={{ marginTop: ".5rem" }}>
              <MapBtn href="https://www.google.com/maps/search/Central%20Plaza%20Rd%2C%20Commercial%20Area%20Garden%20Town%2C%20Lahore%2C%20Pakistan/@31.5004,74.3218,17z" variant="primary">
                Open in Google Maps →
              </MapBtn>
              <MapBtn href="https://wa.me/923214577000" variant="outline">
                WhatsApp for Directions
              </MapBtn>
            </div>
          </div>

          {/* Map embed */}
          <div className="relative overflow-hidden" style={{ border: `1px solid ${T.border}`, boxShadow: "0 10px 48px rgba(14,13,10,.09)" }}>
            <span className="absolute top-0 left-0 right-0 z-10" style={{ height: 3, background: T.accent }} />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.0!2d74.3218!3d31.5004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904b7f0da6f3f%3A0x1e5b8a5b5b5b5b5b!2sCentral+Plaza+Rd%2C+Commercial+Area+Garden+Town%2C+Lahore!5e0!3m2!1sen!2spk!4v1704067200000!5m2!1sen!2spk"
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Al Jannat Scan n Print - Garden Town Lahore"
              className="min-h-[280px] w-full sm:min-h-[360px] lg:min-h-[420px]"
              style={{ display: "block", height: "clamp(280px, 50vh, 460px)", border: "none", filter: "grayscale(30%) contrast(1.05)" }}
            />
            <div className="absolute rounded-[6px] bottom-4 left-4 z-10 px-3 py-1" style={{ background: T.ink, fontFamily: "'syne',sans-serif", fontSize: ".62rem", letterSpacing: ".28em", color: T.white }}>
              AL JANNAT <em style={{ color: T.accent, fontStyle: "normal" }}>·</em> GARDEN TOWN, LAHORE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MapBtn({ href, variant, children }: { href: string; variant: "primary" | "outline"; children: React.ReactNode }) {
  const [hov, setHov] = useState(false);
  const p = variant === "primary";
  return (
    <a
      href={href} target="_blank" rel="noopener noreferrer"
      className="flex w-full items-center justify-center gap-2 sm:inline-flex sm:w-auto"
      style={{
        padding: ".85rem 1.25rem", fontSize: "clamp(.65rem, 2.5vw, .75rem)", fontWeight: 500,
        letterSpacing: ".12em", textTransform: "uppercase", textDecoration: "none",
        borderRadius: 12,
        background: p ? (hov ? T.accent : T.ink) : (hov ? T.accent : "transparent"),
        color: p ? T.white : (hov ? T.white : T.accent),
        border: p ? "none" : `1px solid ${T.accent}`,
        transition: "all .3s",
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {children}
    </a>
  );
}

/* ══════════════════════════════════════════════
   SHARED PRIMITIVES
══════════════════════════════════════════════ */
function SectionTag({ children, center = false, dark = false }: { children: React.ReactNode; center?: boolean; dark?: boolean }) {
  return (
    <div
      style={{
        display: "flex", alignItems: "center", gap: ".7rem",
        justifyContent: center ? "center" : "flex-start",
        fontFamily: "'Bebas Neue',sans-serif",
        fontSize: ".65rem", letterSpacing: ".38em",
        color: T.accent, marginBottom: "1.4rem",
      }}
    >
      {!center && <span style={{ display: "inline-block", width: 24, height: 1, background: T.accent }} />}
      {children}
    </div>
  );
}

function SectionTitle({ children, center = false }: { children: React.ReactNode; center?: boolean }) {
  return (
    <h2
      style={{
        fontFamily: "'Cormorant Garamond',serif",
        fontSize: "clamp(2rem,4.5vw,3.8rem)",
        fontWeight: 300, lineHeight: 1.05,
        color: T.ink, marginBottom: "1.5rem",
        textAlign: center ? "center" : "left",
      }}
    >
      {children}
    </h2>
  );
}

/* ══════════════════════════════════════════════
   GLOBAL STYLES
══════════════════════════════════════════════ */
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Syne:wght@300;400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; }

  @keyframes fadeUp  { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
  @keyframes wordIn  { to   { transform:translateY(0); } }
  @keyframes revealR { to   { clip-path:inset(0 0% 0 0); } }
  @keyframes zoomOut { to   { transform:scale(1); } }
  @keyframes barIn   { from { transform:scaleX(0); } to { transform:scaleX(1); } }
`;

/* ══════════════════════════════════════════════
   ROOT EXPORT
══════════════════════════════════════════════ */
export default function AboutPage() {
  return (
    <>
      <style>{globalStyles}</style>
      <main style={{ background: T.white }}>
        <AboutHero />
        <HowWeDeliver />
        <CompaniesSection />
        <Testimonials />
        <MapSection />
      </main>
    </>
  );
}