"use client";

import { useEffect, useRef, useState } from "react";

const STEPS = [
  {
    n: "01",
    title: "Send Your Files",
    body: "Walk in or send via WhatsApp, email or cloud. We accept PDF, DWG, TIFF, AI and all major formats — no size restrictions for walk-ins.",
    delay: 50,
  },
  {
    n: "02",
    title: "Quick Review",
    body: "We check specs, dimensions and file quality — then confirm your quote within minutes. Problems caught before we print.",
    delay: 150,
  },
  {
    n: "03",
    title: "Precision Production",
    body: "Professional-grade machines deliver perfect colour accuracy and crisp detail every single time. Quality-checked before leaving our studio.",
    delay: 250,
  },
  {
    n: "04",
    title: "Collect or Receive",
    body: "Pick up from our Garden Town studio or receive digital files online. Same-day service for most standard jobs.",
    delay: 350,
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function FadeUp({
  children,
  delay = 0,
  visible,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  visible: boolean;
  className?: string;
}) {
  return (
    <div
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.7s ease-out ${delay}ms, transform 0.7s ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function ProcessAndCTA() {
  const { ref: procRef, visible: procVisible } = useInView(0.1);
  const { ref: ctaRef, visible: ctaVisible } = useInView(0.2);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=Syne:wght@400;600&display=swap');
        .font-cormorant { font-family: 'Cormorant Garamond', serif; }
        .font-syne      { font-family: 'Syne', sans-serif; }
        .step-num { color: rgba(14,13,10,.08); transition: color .4s; }
        .step-wrap:hover .step-num { color: #79A88B; }
        .step-connector { opacity: 0; transition: opacity .4s; }
        .step-wrap:hover .step-connector { opacity: 1; }
        .cta-bg::before {
          content: 'PRINT';
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(8rem, 18vw, 18rem);
          font-weight: 600;
          color: rgba(255,255,255,.06);
          position: absolute;
          right: -2rem;
          top: 50%;
          transform: translateY(-50%);
          line-height: 1;
          pointer-events: none;
          letter-spacing: -.05em;
        }
      `}</style>

      {/* ── PROCESS ── */}
      <section
        ref={procRef as React.RefObject<HTMLElement>}
        id="process"
        className="scroll-mt-[72px] px-6 py-20 md:px-16 md:py-32"
        style={{ background: "#F8F6F1" }}
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 pb-10 border-b border-[#e5e1d8]">
          <FadeUp visible={procVisible} delay={0}>
            <h2
              className="font-cormorant font-light leading-[1.05]"
              style={{ fontSize: "clamp(2rem, 4vw, 3.8rem)", color: "#1a1a1a" }}
            >
              How We Work<br />With You
            </h2>
          </FadeUp>
          <FadeUp visible={procVisible} delay={100}>
            <p
              className="font-syne text-[0.88rem] font-light leading-[1.85] md:max-w-[260px]"
              style={{ color: "#6b7280" }}
            >
              Simple, transparent — designed around your deadline, not ours.
            </p>
          </FadeUp>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {STEPS.map((step, i) => (
            <FadeUp key={step.n} visible={procVisible} delay={step.delay}>
              <div
                className={`step-wrap relative pr-0 pb-10 lg:pb-0 lg:pr-10
                  ${i < 3 ? "border-b sm:border-b-0" : ""}
                  ${i % 2 === 0 && i < 3 ? "sm:border-r" : ""}
                  ${i === 1 ? "sm:border-b lg:border-r lg:border-b-0" : ""}
                  ${i < 3 ? "lg:border-r lg:border-b-0" : "lg:border-r-0"}
                  border-[#e5e1d8]
                  ${i > 0 ? "pt-10 lg:pt-0 lg:pl-10" : ""}
                `}
              >
                {/* Accent connector (right edge, desktop) */}
                {i < 3 && (
                  <div
                    className="step-connector absolute top-10 right-0 w-[2px] h-7 hidden lg:block"
                    style={{ background: "#79A88B" }}
                  />
                )}

                <div
                  className="step-num font-cormorant font-light leading-none mb-4"
                  style={{ fontSize: "clamp(3rem, 4vw, 4.5rem)" }}
                >
                  {step.n}
                </div>
                <div
                  className="font-cormorant text-[1.3rem] font-normal mb-3"
                  style={{ color: "#1a1a1a" }}
                >
                  {step.title}
                </div>
                <p
                  className="font-syne text-[0.83rem] font-light leading-[1.85]"
                  style={{ color: "#6b7280" }}
                >
                  {step.body}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section
        ref={ctaRef as React.RefObject<HTMLElement>}
        id="cta-band"
        className="cta-bg relative overflow-hidden px-6 py-20 md:px-16 md:py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 flex-wrap"
        style={{ background: "#79A88B" }}
      >
        <FadeUp visible={ctaVisible} delay={0} className="relative z-10">
          <h2
            className="font-cormorant font-light text-white leading-[1.05]"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Ready to Print?<br />Let's Get Started.
          </h2>
          <p className="font-syne text-[0.9rem] font-light mt-2" style={{ color: "rgba(255,255,255,.7)" }}>
            Send your files and get a quote in minutes.
          </p>
        </FadeUp>

        <FadeUp visible={ctaVisible} delay={150} className="relative z-10 flex flex-wrap gap-4">
          {/* WhatsApp button */}
          <a
            href="https://wa.me/923214577000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-[6px] px-8 h-12 font-syne text-[0.72rem] font-semibold tracking-[0.12em] uppercase transition-all duration-300 hover:-translate-y-0.5"
            style={{ background: "#fff", color: "#79A88B" }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#1a1a1a";
              (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#fff";
              (e.currentTarget as HTMLAnchorElement).style.color = "#79A88B";
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L0 24l6.336-1.508A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.368l-.36-.213-3.76.895.944-3.657-.235-.375A9.818 9.818 0 012.182 12c0-5.42 4.398-9.818 9.818-9.818 5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z" />
            </svg>
            WhatsApp Us
          </a>

          {/* Contact Form button */}
          <a
            href="#contact"
            className="inline-flex items-center rounded-[6px] justify-center gap-2 px-8 h-12 font-syne text-[0.72rem] font-medium tracking-[0.12em] uppercase text-white transition-all duration-300 hover:-translate-y-0.5"
            style={{ border: "1.5px solid rgba(255,255,255,.45)" }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "#fff";
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,.12)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,.45)";
              (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
            }}
          >
            Contact Form
          </a>
        </FadeUp>
      </section>
    </>
  );
}