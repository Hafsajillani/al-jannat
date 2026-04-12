"use client";

import { useEffect, useRef, useState } from "react";

const specs = [
  { val: '42"', key: "Max Scan Width" },
  { val: "1200", key: "DPI Resolution" },
  { val: "PDF", key: "TIFF / JPEG" },
  { val: "24H", key: "Turnaround" },
];

export default function WideFormatFeature() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300;1,400&family=Bebas+Neue&family=Syne:wght@300;400;500;600&display=swap');
        .font-cormorant { font-family: 'Cormorant Garamond', serif; }
        .font-bebas     { font-family: 'Bebas Neue', sans-serif; }
        .font-syne      { font-family: 'Syne', sans-serif; }

        .feat-title-size {
          font-size: clamp(2rem, 4vw, 4rem);
          line-height: 1.02;
        }

        .feat-eyebrow-line::before {
          content: '';
          display: block;
          width: 26px;
          height: 1px;
          background: #79A88B;
        }

        .rv {
          transition: opacity 0.7s ease-out, transform 0.7s ease-out;
        }
        .rv.hidden-init {
          opacity: 0;
          transform: translateY(24px);
        }
        .rv.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .btn-primary {
          background: #1a1a1a;
          color: #fff;
          padding: 0.85rem 2rem;
          font-family: 'Syne', sans-serif;
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          border-radius: 6px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          transition: all 0.3s;
          min-width: 160px;
          height: 48px;
        }
        .btn-primary::before {
          content: '';
          position: absolute;
          inset: 0;
          background: #79A88B;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s cubic-bezier(.16,1,.3,1);
        }
        .btn-primary:hover::before { transform: scaleX(1); }
        .btn-primary span { position: relative; z-index: 1; }

        .btn-outline {
          background: transparent;
          color: #79A88B;
          border: 1px solid #79A88B;
          padding: 0.85rem 2rem;
          font-family: 'Syne', sans-serif;
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          text-decoration: none;
          border-radius: 6px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 160px;
          height: 48px;
          transition: all 0.3s;
        }
        .btn-outline:hover {
          background: #79A88B;
          color: #fff;
        }
      `}</style>

      <section
        ref={sectionRef}
        id="feature"
        className="min-h-screen grid grid-cols-1 lg:grid-cols-2 items-stretch"
        style={{ background: "#fff" }}
      >
        {/* ── LEFT: Image ── */}
        <div className="relative overflow-hidden min-h-[65vh] lg:min-h-0">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1000&q=85&auto=format&fit=crop"
            alt="Wide format scanning in professional use"
            onError={(e) => {
              const p = (e.target as HTMLImageElement).parentElement;
              if (p) p.style.background = "linear-gradient(135deg,#cfd8d0,#b8c0b8)";
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          {/* Overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "linear-gradient(135deg, rgba(121,168,139,.2) 0%, transparent 60%)" }}
          />
          {/* Tag — Bebas Neue as per original CSS */}
          <div
            className="absolute top-8 right-8 font-syne text-white text-[0.3rem] tracking-[0.3em] px-4 py-[0.4rem]"
            style={{ background: "#79A88B" }}
          >
            Flagship Service
          </div>
        </div>

        {/* ── RIGHT: Content ── */}
        <div className="px-10 py-24 lg:px-[4.5rem] lg:py-24 flex flex-col justify-center">

          {/* Eyebrow */}
          <div
            className={`feat-eyebrow-line font-syne text-[0.65rem] tracking-[0.38em] mb-7 flex items-center gap-3 rv ${visible ? "visible" : "hidden-init"}`}
            style={{ color: "#79A88B", transitionDelay: "0ms" }}
          >
            Colortrac LF 40e
          </div>

          {/* Title */}
          <h2
            className={`font-cormorant font-light feat-title-size mb-5 rv ${visible ? "visible" : "hidden-init"}`}
            style={{ color: "#1a1a1a", transitionDelay: "100ms" }}
          >
            Wide Format<br />
            <em style={{ color: "#79A88B", fontStyle: "italic" }}>Scanning</em><br />
            at Its Finest
          </h2>

          {/* Body — Syne as requested */}
          <p
            className={`font-syne text-[0.92rem] font-light leading-[1.95] max-w-[400px] mb-8 rv ${visible ? "visible" : "hidden-init"}`}
            style={{ color: "#8A8278", transitionDelay: "200ms" }}
          >
            Our professional Colortrac LF 40e wide-format scanner handles
            everything from delicate vintage maps to fresh engineering drawings —
            every detail captured at true resolution, ready for archiving,
            reproduction, or digital delivery.
          </p>

          {/* Specs */}
          <div
            className={`grid grid-cols-2 mb-10 rv ${visible ? "visible" : "hidden-init"}`}
            style={{ transitionDelay: "300ms", gap: "2rem 0" }}
          >
            {specs.map(({ val, key }, i) => (
              <div
                key={key}
                className="pl-5 pt-1 pb-1"
                style={{
                  borderLeft: "2px solid #79A88B",
                  paddingRight: "2rem",
                  borderRight: i % 2 === 0 ? "1px solid #e5e1d8" : "none",
                }}
              >
                <div
                  className="font-cormorant leading-none"
                  style={{ fontSize: "2.2rem", fontWeight: 600, color: "#1a1a1a" }}
                >
                  {val}
                </div>
                <div
                  className="font-syne uppercase tracking-[0.1em] mt-1"
                  style={{ fontSize: "0.62rem", color: "#6b7280" }}
                >
                  {key}
                </div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div
            className={`flex flex-row gap-4 flex-wrap rv ${visible ? "visible" : "hidden-init"}`}
            style={{ transitionDelay: "400ms" }}
          >
            <a className="btn-primary" href="https://wa.me/923214577000" target="_blank" rel="noopener">
              <span>Book via WhatsApp</span>
            </a>
            <a className="btn-outline" href="#contact">Get a Quote</a>
          </div>

        </div>
      </section>
    </>
  );
}