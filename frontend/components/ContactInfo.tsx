"use client";

import { Syne } from "next/font/google";
import { useEffect, useRef, useState } from "react";

/* ── helpers ── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function FadeUp({
  children, delay = 0, visible, className = "",
}: { children: React.ReactNode; delay?: number; visible: boolean; className?: string }) {
  return (
    <div
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(22px)",
        transition: `opacity 0.7s ease-out ${delay}ms, transform 0.7s ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ── SVG icons ── */
const IconPin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M12 2C8.686 2 6 4.686 6 8c0 4.5 6 13 6 13s6-8.5 6-13c0-3.314-2.686-6-6-6z"/>
    <circle cx="12" cy="8" r="2"/>
  </svg>
);
const IconPhone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M6.6 10.8a15.4 15.4 0 006.6 6.6l2.2-2.2a1 1 0 011.1-.2c1.2.5 2.6.8 4 .8a1 1 0 011 1V17a1 1 0 01-1 1C9.6 18 3 11.4 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.4.3 2.8.8 4a1 1 0 01-.2 1.1L6.6 10.8z"/>
  </svg>
);
const IconMail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="M2 7l10 7 10-7"/>
  </svg>
);
const IconClock = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <circle cx="12" cy="12" r="9"/>
    <path d="M12 7v5l3 3"/>
  </svg>
);
const IconWhatsApp = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L0 24l6.336-1.508A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.368l-.36-.213-3.76.895.944-3.657-.235-.375A9.818 9.818 0 012.182 12c0-5.42 4.398-9.818 9.818-9.818 5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z"/>
  </svg>
);

const INFO = [
  { Icon: IconPin,   label: "Our Studio",     value: "Central Plaza Rd, Commercial Area, Garden Town, Lahore" },
  { Icon: IconPhone, label: "WhatsApp / Call", value: "+92 321 4577000" },
  { Icon: IconMail,  label: "Email",           value: "scanprint47@gmail.com" },
  { Icon: IconClock, label: "Hours",           value: "Mon–Sat 9AM–9PM · Sun 10AM–6PM" },
];

const SERVICES = [
  "Plotter Printing — HP DesignJet T1300",
  "Wide Format Scanning — Colortrac LF 40e",
  "Digital Color Printing — Konica Minolta 668c",
  "Photocopy — Xerox 5875",
  "Digital Color Press",
  "Document Scanning — Ricoh MFP 6502",
  "Multiple Services",
];

/* ── Custom Dropdown ── */
function ServiceDropdown() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const dropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={dropRef} className="relative">
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between pb-3 font-syne text-[0.95rem] font-light text-left transition-colors duration-300"
        style={{
          borderBottom: `1px solid ${open ? "#79A88B" : "#e5e1d8"}`,
          color: selected ? "#1a1a1a" : "rgba(138,130,120,.45)",
        }}
      >
        <span>{selected || "Select a service…"}</span>
        <svg
          viewBox="0 0 24 24" fill="none" stroke="#79A88B" strokeWidth="1.5"
          strokeLinecap="round" strokeLinejoin="round"
          className="w-4 h-4 flex-shrink-0 transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </button>

      {/* Panel */}
      {open && (
        <div
          className="absolute left-0 right-0 top-full z-50"
          style={{
            background: "#F8F6F1",
            border: "1px solid #e5e1d8",
            borderTop: "2px solid #79A88B",
            boxShadow: "0 8px 32px rgba(0,0,0,.08)",
          }}
        >
          {SERVICES.map((s, i) => (
            <button
              key={s}
              type="button"
              onClick={() => { setSelected(s); setOpen(false); }}
              className="w-full text-left px-5 py-[0.85rem] font-syne text-[0.88rem] font-light transition-colors duration-150"
              style={{
                color: selected === s ? "#79A88B" : "#1a1a1a",
                background: selected === s ? "rgba(121,168,139,.06)" : "transparent",
                borderBottom: i < SERVICES.length - 1 ? "1px solid #e5e1d8" : "none",
              }}
              onMouseEnter={e => {
                if (selected !== s) (e.currentTarget as HTMLButtonElement).style.background = "rgba(121,168,139,.04)";
              }}
              onMouseLeave={e => {
                if (selected !== s) (e.currentTarget as HTMLButtonElement).style.background = "transparent";
              }}
            >
              {s}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ── main component ── */
export default function Contact() {
  const { ref: leftRef, visible: leftVis }   = useInView(0.1);
  const { ref: rightRef, visible: rightVis } = useInView(0.1);
  const [waHover, setWaHover]   = useState(false);
  const [btnHover, setBtnHover] = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Syne:wght@400;500;600&display=swap');
        .font-cormorant { font-family: 'Cormorant Garamond', serif; }
        .font-syne      { font-family: 'Syne', sans-serif; }

        .con-left-bg::before {
          content: 'SCAN';
          position: absolute;
          right: -1rem;
          bottom: -2rem;
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(6rem, 12vw, 12rem);
          font-weight: 600;
          color: rgba(248,246,241,.025);
          line-height: 1;
          pointer-events: none;
        }

        .f-ctrl {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid #e5e1d8;
          padding: .75rem 0;
          font-family: 'Syne', sans-serif;
          font-size: .95rem;
          font-weight: 300;
          color: #1a1a1a;
          outline: none;
          transition: border-color .3s;
        }
        .f-ctrl:focus { border-color: #79A88B; }
        .f-ctrl::placeholder { color: rgba(138,130,120,.35); }

        .submit-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: #79A88B;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform .45s cubic-bezier(.16,1,.3,1);
        }
        .submit-btn:hover::before { transform: scaleX(1); }
        .submit-btn span { position: relative; z-index: 1; }
      `}</style>

      <section id="contact" className="scroll-mt-[100px] grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">

        {/* ── LEFT ── */}
        <div
          ref={leftRef}
          className="con-left-bg relative overflow-hidden px-8 py-20 md:px-14 md:py-24 flex flex-col justify-center"
          style={{ background: "#1a1a1a" }}
        >
          <FadeUp visible={leftVis} delay={0}>
          <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-px bg-[#79A88B]" />
              <span
                style={{
                  fontSize: "0.6rem",
                  fontWeight: 700,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#79A88B",
                }}
              >
                Contact Us
              </span>
            </div>
          </FadeUp>

          <FadeUp visible={leftVis} delay={80}>
            <h2
              className="font-cormorant font-light text-white leading-[1.02] mb-5"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.8rem)" }}
            >
              Ready to<br />
              <em style={{ color: "#79A88B", fontStyle: "italic" }}>Print?</em><br />
              Let's Talk.
            </h2>
          </FadeUp>

          <FadeUp visible={leftVis} delay={160}>
            <p className="font-syne text-[0.9rem] font-light leading-[1.9] mb-10 max-w-[340px]"
               style={{ color: "rgba(248,246,241,.38)" }}>
              Send your project details and we'll get back to you with a precise quote — usually within minutes.
            </p>
          </FadeUp>

          <FadeUp visible={leftVis} delay={240}>
            <div className="flex flex-col gap-[1.1rem] mb-9">
              {INFO.map(({ Icon, label, value }) => (
                <div key={label} className="flex items-start gap-[0.9rem]">
                  <div
                    className="w-8 h-8 rounded-[6px] flex items-center justify-center flex-shrink-0"
                    style={{ border: "1px solid rgba(248,246,241,.1)", color: "#79A88B" }}
                  >
                    <Icon />
                  </div>
                  <div className="font-syne text-[0.83rem]" style={{ color: "rgba(248,246,241,.5)" }}>
                    <strong className="block font-medium mb-[0.18rem]" style={{ color: "#fff" }}>{label}</strong>
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>

          <FadeUp visible={leftVis} delay={320}>
            <a
              href="https://wa.me/923214577000"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setWaHover(true)}
              onMouseLeave={() => setWaHover(false)}
              className="inline-flex items-center rounded-[12px] gap-[0.9rem] px-6 py-[1.1rem] w-fit transition-all duration-300"
              style={{
                border: "1px solid #79A88B",
                color: waHover ? "#fff" : "#79A88B",
                background: waHover ? "#79A88B" : "transparent",
              }}
            >
              <IconWhatsApp />
              <span className="font-syne text-[0.78rem] font-medium tracking-[0.1em] uppercase">
                Chat on WhatsApp — +92 321 4577000
              </span>
            </a>
          </FadeUp>
        </div>

        {/* ── RIGHT ── */}
        <div
          ref={rightRef}
          className="px-8 py-20 md:px-14 md:py-24 flex flex-col justify-center"
          style={{ background: "#F8F6F1" }}
        >
          <FadeUp visible={rightVis} delay={0} className="flex flex-col gap-6">

            {/* Name */}
            <div>
              <label className="block text-[0.7rem] uppercase tracking-[0.22em] mb-[0.55rem]"
                     style={{ color: "#6b7280" }}>Your Name</label>
              <input className="f-ctrl" type="text" placeholder="Full name" />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-[0.7rem] uppercase tracking-[0.22em] mb-[0.55rem]"
                     style={{ color: "#6b7280" }}>Phone / WhatsApp</label>
              <input className="f-ctrl" type="tel" placeholder="+92 321 4577000" />
            </div>

            {/* Service — custom dropdown */}
            <div> 
              <label className="block text-[0.7rem] uppercase tracking-[0.22em] mb-[0.55rem]"
                     style={{ color: "#6b7280" }}>Service Required</label>
              <ServiceDropdown />
            </div>

            {/* Message */}
            <div>
              <label className="block text-[0.7rem] uppercase tracking-[0.22em] mb-[0.55rem]"
                     style={{ color: "#6b7280" }}>Project Details</label>
              <textarea
                className="f-ctrl resize-none"
                style={{ height: "88px" }}
                placeholder="Size, format, quantity, deadline…"
              />
            </div>

            {/* Submit */}
            <button
              className="submit-btn relative overflow-hidden inline-flex items-center rounded-[12px] justify-center self-start font-syne text-[0.75rem] font-medium tracking-[0.15em] uppercase text-white h-[50px] px-10 min-w-[180px]"
              style={{ background: "#1a1a1a" }}
              onMouseEnter={() => setBtnHover(true)}
              onMouseLeave={() => setBtnHover(false)}
            >
              <span>Send Enquiry →</span>
            </button>

          </FadeUp>
        </div>
      </section>
    </>
  );
}