"use client";

import { useEffect, useRef, useState } from "react";

/* ── Tokens ── */
const A = "#79A88B";
const INK = "#1a1a1a";
const WARM = "#8A8278";
const BG = "#F8F6F1";
const BORDER = "#E2DDD6";
const SYNE = "'Syne', sans-serif";
const CORMORANT = "'Cormorant Garamond', serif";

/* ── InView hook ── */
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

/* ── Data ── */
const services = [
  {
    eyebrow: "Colortrac LF 40e",
    title: "Wide Format",
    accent: "Scanning",
    subtitle: "at Its Finest",
    badge: "Flagship Scanner",
    body: "Our professional wide-format scanner handles everything from delicate vintage maps to fresh engineering drawings — every detail captured at true resolution, ready for archiving, reproduction, or digital delivery.",
    img: "/images/wide-scanning.png",
    imgAlt: "Wide format scanning",
    specs: [
      { val: '42"', label: "Max Scan Width" },
      { val: "1200", label: "DPI Resolution" },
      { val: "PDF", label: "TIFF / JPEG" },
      { val: "24H", label: "Turnaround" },
    ],
  },
  {
    eyebrow: "HP DesignJet T1300",
    title: "Plotter",
    accent: "Printing",
    subtitle: "Precision Output",
    badge: "Flagship Plotter",
    body: "Razor-sharp CAD plotting and architectural drawings printed to precision — up to A0+ format. Same-day delivery for architects, engineers and designers across Lahore.",
    img: "/images/ser-1.jpg",
    imgAlt: "HP DesignJet plotter printing",
    specs: [
      { val: '42"', label: "Max Print Width" },
      { val: "2400", label: "DPI Output" },
      { val: "A0+", label: "Max Size" },
      { val: "25s", label: "Per A1 Sheet" },
    ],
  },
];

/* ── Service Card ── */
function ServiceFeature({ s, index }: { s: typeof services[0]; index: number }) {
  const { ref, inView } = useInView();
  const reverse = index % 2 !== 0;
  const [hovBtn1, setHovBtn1] = useState(false);
  const [hovBtn2, setHovBtn2] = useState(false);

  const rv = (delay: number): React.CSSProperties => ({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(28px)",
    transition: `opacity .7s cubic-bezier(.16,1,.3,1) ${delay}ms, transform .7s cubic-bezier(.16,1,.3,1) ${delay}ms`,
  });

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-0`}
      style={{
        background: "#fff",
        border: `1px solid ${BORDER}`,
        overflow: "hidden",
      }}
    >
      {/* Image side */}
      <div
        className={`relative overflow-hidden min-h-[50vh] lg:min-h-[580px] ${reverse ? "lg:order-2" : ""}`}
      >
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={s.img}
          alt={s.imgAlt}
          style={{
            transform: inView ? "scale(1)" : "scale(1.08)",
            transition: "transform 1.2s cubic-bezier(.16,1,.3,1)",
          }}
          onError={(e) => {
            const p = (e.target as HTMLImageElement).parentElement;
            if (p) p.style.background = "linear-gradient(135deg,#d5d0c8,#c0c8c0)";
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
        {/* Subtle top-left gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(135deg, rgba(121,168,139,.15) 0%, transparent 50%)" }}
        />
        {/* Badge */}
        <div
          className="absolute top-6 right-6 z-10"
          style={{
            fontFamily: SYNE,
            fontSize: "0.58rem",
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#fff",
            background: A,
            padding: "0.55rem 1.3rem",
            borderRadius: 5,
            boxShadow: "0 4px 16px rgba(121,168,139,.3)",
          }}
        >
          {s.badge}
        </div>
        {/* Number watermark */}
        <div
          className="absolute bottom-6 left-8 pointer-events-none select-none"
          style={{
            fontFamily: CORMORANT,
            fontSize: "clamp(6rem, 12vw, 10rem)",
            fontWeight: 300,
            lineHeight: 1,
            color: "rgba(255,255,255,.12)",
          }}
        >
          0{index + 1}
        </div>
      </div>

      {/* Content side */}
      <div
        className={`flex flex-col justify-center px-8 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24 ${reverse ? "lg:order-1" : ""}`}
      >
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-6" style={rv(0)}>
          <span style={{ display: "inline-block", width: 26, height: 1, background: A }} />
          <span
            style={{
              fontFamily: SYNE,
              fontSize: "0.62rem",
              fontWeight: 700,
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: A,
            }}
          >
            {s.eyebrow}
          </span>
        </div>

        {/* Title */}
        <h2
          style={{
            ...rv(80),
            fontFamily: CORMORANT,
            fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)",
            fontWeight: 300,
            lineHeight: 1.02,
            color: INK,
            marginBottom: "1.5rem",
          }}
        >
          {s.title}<br />
          <em style={{ color: A, fontStyle: "italic" }}>{s.accent}</em>
        </h2>

        {/* Body */}
        <p
          style={{
            ...rv(160),
            fontFamily: SYNE,
            fontSize: "0.9rem",
            fontWeight: 300,
            lineHeight: 1.9,
            color: WARM,
            maxWidth: 420,
            marginBottom: "2.2rem",
          }}
        >
          {s.body}
        </p>

        {/* Specs */}
        <div
          className="grid grid-cols-2"
          style={{
            ...rv(240),
            gap: "1.6rem 0",
            marginBottom: "2.5rem",
          }}
        >
          {s.specs.map(({ val, label }, i) => (
            <div
              key={label}
              style={{
                paddingLeft: "1.2rem",
                borderLeft: `2px solid ${A}`,
                paddingRight: "1.5rem",
                borderRight: i % 2 === 0 ? `1px solid ${BORDER}` : "none",
              }}
            >
              <div
                style={{
                  fontFamily: CORMORANT,
                  fontSize: "2rem",
                  fontWeight: 600,
                  color: INK,
                  lineHeight: 1,
                }}
              >
                {val}
              </div>
              <div
                style={{
                  fontFamily: SYNE,
                  fontSize: "0.58rem",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#9b958d",
                  marginTop: "0.35rem",
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="wide-btns flex flex-row gap-3 flex-wrap" style={rv(320)}>
          <a
            href="https://wa.me/923214577000"
            target="_blank"
            rel="noopener noreferrer"
            className="wide-btn-primary"
            style={{
              fontFamily: SYNE,
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1rem 2.4rem",
              borderRadius: 7,
              background: hovBtn1 ? A : INK,
              color: "#fff",
              transition: "background 0.3s",
            }}
            onMouseEnter={() => setHovBtn1(true)}
            onMouseLeave={() => setHovBtn1(false)}
          >
            Book via WhatsApp
          </a>
          <a
            href="#contact"
            className="wide-btn-outline"
            style={{
              fontFamily: SYNE,
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1rem 2.4rem",
              borderRadius: 7,
              background: hovBtn2 ? A : "transparent",
              color: hovBtn2 ? "#fff" : A,
              border: `1px solid ${A}`,
              transition: "all 0.3s",
            }}
            onMouseEnter={() => setHovBtn2(true)}
            onMouseLeave={() => setHovBtn2(false)}
          >
            Get a Quote
          </a>
        </div>
      </div>
    </div>
  );
}

/* ── Main Export ── */
export default function WideFormatFeature() {
  const { ref, inView } = useInView();
  return (
    <>
      <style>{`
        @media (max-width: 767px) {
          .wide-btns {
            flex-direction: row !important;
            gap: 8px !important;
            width: 100% !important;
          }
          .wide-btn-primary,
.wide-btn-outline {
  flex: 1 !important;
  min-width: 0 !important;
  padding: 13px 6px !important;
  font-size: 8.5px !important;
  letter-spacing: 0.08em !important;
  white-space: nowrap !important;
  border-radius: 7px !important;
}
          .wide-btn-outline {
            flex: 1 !important;
            min-width: 0 !important;
            padding: 13px 10px !important;
            font-size: 9.5px !important;
            white-space: nowrap !important;
            border-radius: 7px !important;
          }
          .wide-content {
            padding: 2rem 1.4rem !important;
          }
          .wide-img {
            min-height: 42vh !important;
          }
          .wide-specs {
            gap: 1.2rem 0 !important;
            margin-bottom: 1.8rem !important;
          }
          .wide-section-header {
            margin-bottom: 2rem !important;
          }
          .wide-heading-br { display: inline !important; }
        }
        .wide-heading-br { display: none; }
      `}</style>
      <section id="wide-format" style={{ background: BG, padding: "clamp(3rem, 8vw, 5.5rem) 0" }}>
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-10 lg:px-12">

          {/* Section header */}
          <div
            ref={ref}
            className="text-center mb-12 sm:mb-16"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(28px)",
              transition: "opacity .7s cubic-bezier(.16,1,.3,1), transform .7s cubic-bezier(.16,1,.3,1)",
            }}
          >
            <div
              className="flex items-center justify-center gap-3 mb-5"
              style={{
                fontFamily: SYNE,
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.38em",
                textTransform: "uppercase",
                color: A,
              }}
            >
              <span style={{ display: "inline-block", width: 28, height: 1, background: A }} />
              Flagship Equipment
              <span style={{ display: "inline-block", width: 28, height: 1, background: A }} />
            </div>
            <h2
              style={{
                fontFamily: CORMORANT,
                fontSize: "clamp(2rem, 4.5vw, 3.6rem)",
                fontWeight: 300,
                lineHeight: 1.05,
                color: INK,
                marginBottom: ".8rem",
              }}
            >
              Scan &amp; Plot with<br className="wide-heading-br" />{" "}
              <em style={{ color: A, fontStyle: "italic" }}>Precision</em>
            </h2>
            <p
              className="mx-auto"
              style={{
                fontFamily: SYNE,
                fontSize: "0.9rem",
                fontWeight: 300,
                lineHeight: 1.85,
                color: WARM,
                maxWidth: 460,
              }}
            >
              Two flagship machines powering our wide-format studio — built for
              speed, accuracy and professional-grade results.
            </p>
          </div>

          {/* Service panels */}
          <div className="flex flex-col gap-6">
            {services.map((s, i) => (
              <ServiceFeature key={i} s={s} index={i} />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}