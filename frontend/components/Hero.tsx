"use client";

import { useState, useCallback, useEffect } from "react";
import PsdImage from "./PsdImage";
import { Cormorant_Garamond } from 'next/font/google';

const cormorant = Cormorant_Garamond({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const TICKER_ITEMS = [
  "ARCHITECTURAL PLANS", "SAME-DAY DELIVERY", "PLOTTER PRINTING",
  "WIDE FORMAT SCANNING", "DIGITAL COLOR PRINTING", "HIGH SPEED PHOTOCOPY", "CAD DRAWINGS"
];

function MarqueeTicker() {
  return (
    <div
      className="w-full bg-white py-4 overflow-hidden flex whitespace-nowrap relative"
      style={{ borderTop: "1px solid #d1cdc4", borderBottom: "1px solid #d1cdc4", fontFamily: "var(--font-syne, 'Syne', sans-serif)" }}
    >
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee { animation: marquee 40s linear infinite; }
      `}</style>
      <div className="animate-marquee flex gap-10 items-center">
        {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
          <div key={i} className="flex items-center gap-10 shrink-0">
            <div className="w-5 h-[1px] bg-[#79A88B]" />
            <span style={{ fontSize: "10px", letterSpacing: "0.22em", fontWeight: 700, color: "#000000ff", textTransform: "uppercase" as const }}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const slides = [
  {
    image: "/images/plotter-printing.png",
    tag: "HP DESIGN JET",
    headingBlack: "HP Design",
    headingGreen: "Jet",
    body: "CAD plotting & architectural drawings printed to razor-sharp precision — up to A0+ format. Same-day delivery for architects, engineers & designers.",
    btn1: { text: "GET A QUOTE", href: "/quote" },
    btn2: { text: "WHATSAPP US", href: "https://wa.me/923214577000", isWhatsApp: true },
  },
  {
    image: "/images/wide.png",
    tag: "WIDE FORMAT SCANNING",
    headingBlack: "Wide Format",
    headingGreen: "Scanning",
    body: "Scan maps, plans & oversized documents up to 42\" wide at 1200 DPI — zero distortion, perfect digitisation for archiving or reproduction.",
    btn1: { text: "REQUEST A SCAN", href: "/quote" },
    btn2: { text: "LEARN MORE", href: "/services" },
  },
  {
    image: "/images/Photocopy.png",
    tag: "DIGITAL COLOR PRINTING",
    headingBlack: "Digital",
    headingGreen: "Printing",
    body: "Vibrant full-colour prints on banners, brochures, posters & marketing materials — fast turnaround, professional finish every time.",
    btn1: { text: "START YOUR ORDER", href: "/order" },
    btn2: { text: "SEE ALL MACHINES", href: "/machines" },
  },
  {
    image: "/images/digital-print.png",
    tag: "HIGH SPEED PHOTOCOPY",
    headingBlack: "Photocopy",
    headingGreen: "Services",
    body: "Crisp B&W and full-colour photocopying for single sheets to bulk runs. Collation, binding & stapling all in-house.",
    btn1: { text: "CONTACT US", href: "/contact" },
    btn2: { text: "WHATSAPP US", href: "https://wa.me/923214577000", isWhatsApp: true },
  },
];

function SliderSection() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [visible, setVisible] = useState(false);
  const DURATION = 3000;

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(t);
  }, []);

  const goTo = useCallback((idx: number) => {
    if (animating) return;
    setAnimating(true);
    setVisible(false);
    setTimeout(() => {
      setCurrent(idx);
      requestAnimationFrame(() => {
        setVisible(true);
        setAnimating(false);
      });
    }, 420);
  }, [animating]);

  useEffect(() => {
    const t = setTimeout(() => goTo((current + 1) % slides.length), DURATION);
    return () => clearTimeout(t);
  }, [current, goTo]);

  const slide = slides[current];

  // Fade IN: stagger each element with its delay for a nice cascade effect.
  // Fade OUT: no delay so all elements disappear together before content swaps.
  const fu = (delay = 0): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(14px)",
    transition: visible
      ? `opacity 0.4s ease ${delay}ms, transform 0.4s ease ${delay}ms`
      : `opacity 0.25s ease 0ms, transform 0.25s ease 0ms`,
  });

  return (
    <>
      <style>{`

        /* ── Shared grid texture (reusable) ── */
        .hero-grid-texture {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image:
            linear-gradient(to right, rgba(180,176,168,0.35) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(180,176,168,0.35) 1px, transparent 1px);
          background-size: 40px 40px;
        }

        /* ─── MOBILE (≤ 767px) ─── */
        @media (max-width: 767px) {

          .hero-section {
            min-height: unset !important;
            background: #F8F6F1 !important;
          }

          .hero-grid {
            display: flex !important;
            flex-direction: column !important;
            min-height: unset !important;
            background: #F8F6F1 !important;
            position: relative !important;
          }

          /* Grid texture covers the ENTIRE hero on mobile */
          .hero-grid > .hero-grid-texture {
            display: block !important;
            z-index: 0 !important;
          }

          /* ── 1. Content block (top) ── */
          .hero-left {
            order: 1 !important;
            width: 100% !important;
            padding: 36px 22px 20px !important;
            border-right: none !important;
            background: transparent !important;
            position: relative !important;
            z-index: 1 !important;
          }

          /* Hide texture inside right panel on mobile — parent covers it */
          .hero-right > .hero-grid-texture {
            display: none !important;
          }

          .hero-heading {
            font-size: clamp(42px, 12vw, 62px) !important;
            line-height: 1.0 !important;
            margin-bottom: 10px !important;
          }

          .hero-body {
            font-size: 13px !important;
            line-height: 1.75 !important;
            max-width: 100% !important;
            margin-bottom: 14px !important;
          }

          .hero-tagline {
            font-size: 15px !important;
            margin-bottom: 10px !important;
          }

          /* ── Buttons: side by side on mobile ── */
          .hero-buttons {
            flex-direction: row !important;
            gap: 10px !important;
            width: 100% !important;
          }

          .hero-btn-primary,
          .hero-btn-secondary {
            flex: 1 !important;
            width: auto !important;
            justify-content: center !important;
            text-align: center !important;
            padding: 13px 10px !important;
            font-size: 9.5px !important;
            border-radius: 7px !important;
            white-space: nowrap !important;
          }

          /* ── 2. Image box (below content, seamless) ── */
          /* ── 2. Image box (below content, seamless) ── */
.hero-right {
  order: 2 !important;
  width: 100% !important;
  height: auto !important;
  min-height: 320px !important;
  max-height: none !important;
  border-right: none !important;
  border-top: none !important;
  background: transparent !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  position: relative !important;
  overflow: visible !important;
  padding: 0px 24px 50px !important;
  z-index: 1 !important;
}

.hero-machine-wrap {
  width: 92% !important;
  padding: 0 !important;
  max-height: none !important;
  min-height: 260px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}

          .hero-machine-photocopy {
            margin-top: 20px !important;
          }

          .hero-watermark {
            font-size: clamp(60px, 22vw, 100px) !important;
            top: 8px !important;
            left: 12px !important;
          }

          .hero-dots { display: flex !important; }
        }
          /* ── Slides 2–4: scale up images on mobile ── */
.hero-machine-secondary {
  transform: scale(1.5) !important;
  transform-origin: center center !important;
}

        /* Dots — hidden on desktop */
        .hero-dots {
          display: none;
          position: absolute;
          bottom: 10px;
          left: 50%;
          transform: translateX(-50%);
          gap: 7px;
          z-index: 20;
        }
        .hero-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #b8b4ac;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s;
          border: none;
        }
        .hero-dot.active {
          background: #79A88B;
          transform: scale(1.35);
        }
      `}</style>

      <section
        id="home"
        className="hero-section bg-[#F8F6F1] overflow-hidden relative z-[1]"
        style={{ minHeight: "88vh", marginTop: "-32px" }}
      >
        <div
          className="hero-grid h-full grid grid-cols-2"
          style={{ minHeight: "88vh" }}
        >
          {/* Full-section grid texture — visible on mobile via CSS, hidden on desktop */}
          <div className="hero-grid-texture" style={{ display: "none", }} />

          {/* ── LEFT / CONTENT ── */}
          <div
            className="hero-left flex flex-col justify-center gap-7 border-r border-[#dedad2]"
            style={{ padding: "56px 56px 56px 64px" }}
          >
            {/* Tag */}
            <div className="flex items-center gap-3" style={fu(0)}>
              <div className="w-7 h-px bg-[#79A88B]" />
              <span style={{
                fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                fontSize: "9px",
                letterSpacing: "0.2em",
                fontWeight: 700,
                color: "#79A88B",
                textTransform: "uppercase" as const,
              }}>
                0{current + 1} {slide.tag}
              </span>
            </div>

            {/* Heading */}
            <h1
              className={`${cormorant.className} hero-heading`}
              style={{
                fontSize: "clamp(54px, 5.8vw, 84px)",
                fontWeight: 400,
                lineHeight: 1.0,
                letterSpacing: "-0.01em",
                color: "#1a1a1a",
                marginBottom: "16px",
                ...fu(60),
              }}
            >
              {slide.headingBlack}
              <br />
              <span style={{ color: "#79A88B" }}>{slide.headingGreen}</span>
            </h1>

            {/* Tagline */}
            <p
              className={`${cormorant.className} hero-tagline`}
              style={{
                fontSize: "clamp(16px, 1.6vw, 20px)",
                fontStyle: "italic",
                fontWeight: 500,
                color: "#79A88B",
                letterSpacing: "0.02em",
                lineHeight: 1.4,
                paddingLeft: "14px",
                borderLeft: "2px solid rgba(121,168,139,0.4)",
                marginBottom: "14px",
                ...fu(80),
              }}
            >
              We <span style={{ color: "#1a1a1a" }}>scan</span> your image &amp; print your <span style={{ color: "#1a1a1a" }}>imaginations</span>
            </p>

            {/* Body */}
            <p
              className="hero-body"
              style={{
                fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                fontSize: "13.5px",
                lineHeight: 1.85,
                color: "#7a7670",
                maxWidth: "400px",
                marginBottom: "16px",
                ...fu(100),
              }}
            >
              {slide.body}
            </p>

            {/* Buttons */}
            <div className="hero-buttons flex items-center gap-3" style={fu(140)}>
              <a
                href={slide.btn1.href}
                className="hero-btn-primary"
                style={{
                  fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "11px 24px",
                  background: "#111",
                  color: "#fff",
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase" as const,
                  borderRadius: "6px",
                  border: "1px solid #111",
                  textDecoration: "none",
                  transition: "background 0.2s, color 0.2s",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#111";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "#111";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                }}
              >
                {slide.btn1.text}
              </a>

              <a
                href={slide.btn2.href}
                className="hero-btn-secondary"
                style={{
                  fontFamily: "var(--font-syne, 'Syne', sans-serif)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "7px",
                  padding: "11px 20px",
                  background: "transparent",
                  color: "#79A88B",
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase" as const,
                  borderRadius: "6px",
                  border: "1px solid #79A88B",
                  textDecoration: "none",
                  transition: "border-color 0.2s, color 0.2s, background 0.2s",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#79A88B";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "#79A88B";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#79A88B";
                  (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                }}
              >
                {slide.btn2.isWhatsApp && <WhatsAppIcon />}
                {slide.btn2.text}
              </a>
            </div>
          </div>

          {/* ── RIGHT / IMAGE BOX ── */}
          <div className="hero-right relative flex items-center justify-center overflow-hidden">

            {/* Grid texture — desktop only (mobile uses parent) */}
            <div className="hero-grid-texture" />

            {/* Watermark number */}
            <div
              className={`${cormorant.className} hero-watermark`}
              style={{
                position: "absolute",
                top: "80px",
                left: "24px",
                fontSize: "clamp(80px, 9vw, 130px)",
                fontWeight: 600,
                lineHeight: 1,
                color: "rgba(26,26,26,0.07)",
                userSelect: "none",
                pointerEvents: "none",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(14px)",
                transition: "opacity 0.4s ease, transform 0.4s ease",
              }}
            >
              0{current + 1}
            </div>

            {/* Machine images — all stacked, only current visible */}
            <div
              className="hero-machine-wrap"
              style={{
                width: "90%",
                maxHeight: "65vh",
                position: "relative",
                zIndex: 10,
                padding: "60px 48px 10px 30px",
                ...fu(80),
              }}
            >
              {slides.map((s, i) => (
                <div
                  key={i}
                  className={[
                    s.image === "/images/photocopy.png" ? "hero-machine-photocopy" : "",
                    i > 0 ? "hero-machine-secondary" : "",
                  ].filter(Boolean).join(" ")}
                  style={{
                    position: i === 0 ? "relative" : "absolute",
                    inset: i === 0 ? undefined : 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: i === 0 ? undefined : "60px 48px 10px 30px",
                    opacity: i === current ? 1 : 0,
                    transition: "opacity 0.25s ease",
                    pointerEvents: i === current ? "auto" : "none",
                  }}
                >
                  <PsdImage
                    src={s.image}
                    alt={s.headingBlack}
                    className="w-full h-auto object-contain"
                    style={{
                      maxHeight: "65vh",
                      filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.12))",
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Mobile slide dots */}
            <div className="hero-dots">
              {slides.map((_, i) => (
                <button
                  key={i}
                  className={`hero-dot${i === current ? " active" : ""}`}
                  onClick={() => goTo(i)}
                />
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default function HeroPage() {
  return (
    <div style={{ fontFamily: "var(--font-syne, sans-serif)" }} className="antialiased bg-[#F2EFE8]">
      <SliderSection />
      <MarqueeTicker />
    </div>
  );
}