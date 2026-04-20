"use client";

import { useRef, useState, useEffect, useCallback } from "react";

// ── Types ──────────────────────────────────────────────────────────────────────
interface Spec {
  val: string;
  key: string;
}

interface ServiceCardData {
  id: string;
  num: string;
  category: string;
  name: string;
  model: string;
  desc: string;
  specs: Spec[];
  tags: string[];
  ctaHref: string;
  ctaLabel: string;
  img: string;
  imgAlt: string;
}

// ── Font stacks ────────────────────────────────────────────────────────────────
const SYNE = "'Syne', sans-serif";
const CORMORANT = "'Cormorant Garamond', serif";

// ── Data ───────────────────────────────────────────────────────────────────────
const CARDS: ServiceCardData[] = [
  {
    id: "01",
    num: "01",
    category: "HP DesignJet T1300",
    name: "Plotter Printing",
    model: "CAD · Technical · Architectural",
    desc: "Razor-sharp plotting for CAD drawings, blueprints & architectural plans. Trusted by engineers and architects across Lahore.",
    specs: [
      { val: '44"', key: "Max Width" },
      { val: "2400", key: "DPI" },
      { val: "25s", key: "Per A1" },
    ],
    tags: ["CAD Drawings", "Blueprints", "A0+", "Same-Day"],
    ctaHref: "https://wa.me/923214577000",
    ctaLabel: "Get a Quote",
    img: "/images/ser-1.jpg",
    imgAlt: "Plotter printing architectural drawings",
  },
  {
    id: "02",
    num: "02",
    category: "Colortrac LF 40e",
    name: "Wide Format Scanning",
    model: "Maps · Plans · Oversized Docs",
    desc: '42" wide scanning at 1200 DPI — zero distortion. Perfect for archiving maps, engineering drawings & vintage documents.',
    specs: [
      { val: '42"', key: "Max Width" },
      { val: "1200", key: "DPI" },
      { val: "3s", key: "Per A0" },
    ],
    tags: ["Map Digitisation", "PDF Output", "TIFF · JPEG", "Archive"],
    ctaHref: "https://wa.me/923214577000",
    ctaLabel: "Book a Scan",
    img: "/images/wide-scanning.png",
    imgAlt: "Wide format scanning",
  },
  {
    id: "03",
    num: "03",
    category: "Konica Minolta Bizhub 668c",
    name: "Digital Color Printing",
    model: "Brochures · Posters · Presentations",
    desc: "Stunning full-colour output at 66 pages per minute. Professional-grade brochures, marketing collateral & high-volume colour jobs.",
    specs: [
      { val: "66", key: "PPM" },
      { val: "1200", key: "DPI" },
      { val: "A3", key: "Max Size" },
    ],
    tags: ["Brochures", "Posters", "Flyers", "Duplex"],
    ctaHref: "https://wa.me/923214577000",
    ctaLabel: "Start Order",
    img: "/images/ser-3.jpg",
    imgAlt: "Digital color printing",
  },
  {
    id: "04",
    num: "04",
    category: "Xerox 5875",
    name: "High Speed Photocopy",
    model: "Bulk B&W · Colour · Legal Docs",
    desc: "75ppm workhorse for bulk photocopying — single sheets to thousands of copies with crisp, consistent output every time.",
    specs: [
      { val: "75", key: "PPM" },
      { val: "250", key: "ADF Cap." },
      { val: "5K", key: "Monthly" },
    ],
    tags: ["Bulk Copy", "Collation", "Binding", "Legal"],
    ctaHref: "https://wa.me/923214577000",
    ctaLabel: "Get Quote",
    img: "/images/ser-4.jpg",
    imgAlt: "High speed photocopying",
  },
  // ── NEW CARD ────────────────────────────────────────────────────────────────
  {
    id: "05",
    num: "05",
    category: "Binding & Finishing Studio",
    name: "Thesis & Binding",
    model: "Hard Bind · Spiral · Perfect Bind",
    desc: "Complete thesis finishing under one roof — hard cover, spiral, perfect binding & lamination. University-spec covers with gold foil titling available.",
    specs: [
      { val: "6+", key: "Bind Types" },
      { val: "A4/A3", key: "Max Size" },
      { val: "1 Day", key: "Turnaround" },
    ],
    tags: ["Hard Cover", "Spiral", "Perfect Bind", "Gold Foil", "Lamination"],
    ctaHref: "https://wa.me/923214577000",
    ctaLabel: "Book Binding",
    img: "/images/thesis.webp",
    imgAlt: "Thesis and book binding services",
  },
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: "06",
    num: "06",
    category: "Ricoh MFP 6502",
    name: "Scanning Services",
    model: "OCR · Searchable PDF · Batch",
    desc: "65ppm high-speed scanning with OCR and searchable PDF output. Ideal for law firms, government & corporate batch digitisation.",
    specs: [
      { val: "65", key: "PPM" },
      { val: "OCR", key: "Searchable" },
      { val: "A3", key: "Max Size" },
    ],
    tags: ["Batch Scan", "OCR", "Cloud Upload", "Email"],
    ctaHref: "https://wa.me/923214577000",
    ctaLabel: "Book Now",
    img: "/images/ser-5.jpg",
    imgAlt: "Document scanning batch processing",
  },
];

// ── Card ───────────────────────────────────────────────────────────────────────
function Card({ card }: { card: ServiceCardData }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative flex-shrink-0 overflow-hidden bg-[#1a1a18] select-none"
      style={{ width: 380, height: 560 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Accent bar */}
      <div
        className="absolute top-0 left-0 right-0 z-10 bg-[#79A88B]"
        style={{
          height: 3,
          transformOrigin: "left",
          transform: hovered ? "scaleX(1)" : "scaleX(0)",
          transition: "transform 0.5s cubic-bezier(0.16,1,0.3,1)",
        }}
      />

      {/* Image */}
      <img
        src={card.img}
        alt={card.imgAlt}
        draggable={false}
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          transform: hovered ? "scale(1.07)" : "scale(1)",
          filter: hovered
            ? "brightness(0.45) saturate(0.6)"
            : "brightness(0.55) saturate(0.7)",
          transition:
            "transform 0.8s cubic-bezier(0.16,1,0.3,1), filter 0.8s cubic-bezier(0.16,1,0.3,1)",
        }}
      />

      {/* Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(14,13,10,0.95) 0%, rgba(14,13,10,0.4) 45%, rgba(14,13,10,0.1) 100%)",
        }}
      />

      {/* Number watermark */}
      <div
        className="absolute top-5 left-7 pointer-events-none select-none leading-none"
        style={{
          fontFamily: CORMORANT,
          fontSize: "5rem",
          fontWeight: 300,
          color: "rgba(248,246,241,0.06)",
        }}
      >
        {card.num}
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end p-8">

        {/* Category — Syne */}
        <div
          className="flex items-center gap-2 mb-2 text-[#79A88B] uppercase"
          style={{ fontFamily: SYNE, fontSize: "0.6rem", letterSpacing: "0.22em", fontWeight: 700 }}
        >
          <span className="flex-shrink-0 bg-[#79A88B]" style={{ width: 18, height: 1 }} />
          {card.category}
        </div>

        {/* Name — Cormorant (display) */}
        <h3
          className="font-light text-white leading-[1.05] mb-1.5 whitespace-pre-line"
          style={{ fontFamily: CORMORANT, fontSize: "clamp(1.6rem,3vw,2.2rem)" }}
        >
          {card.name}
        </h3>

        {/* Model — Syne */}
        <p
          className="mb-4 text-[rgba(248,246,241,0.75)] uppercase"
          style={{ fontFamily: SYNE, fontSize: "0.55rem", letterSpacing: "0.18em", fontWeight: 400 }}
        >
          {card.model}
        </p>

        {/* Description — Syne */}
        <div
          className="text-[rgba(248,246,241,0.75)] leading-[1.75] overflow-hidden"
          style={{
            fontFamily: SYNE,
            fontSize: "0.78rem",
            fontWeight: 400,
            maxHeight: hovered ? "110px" : "0",
            opacity: hovered ? 1 : 0,
            marginBottom: hovered ? "1.4rem" : "0",
            transition:
              "max-height 0.5s cubic-bezier(0.16,1,0.3,1), opacity 0.4s, margin-bottom 0.4s",
          }}
        >
          {card.desc}
        </div>

        {/* Specs — val: Cormorant, key: Syne */}
        <div className="flex gap-6 mb-5">
          {card.specs.map((s) => (
            <div key={s.key} className="flex flex-col">
              <span
                className="font-semibold text-white leading-none"
                style={{ fontFamily: CORMORANT, fontSize: "1.5rem" }}
              >
                {s.val}
              </span>
              <span
                className="uppercase mt-1"
                style={{ fontFamily: SYNE, fontSize: "0.5rem", letterSpacing: "0.1em", fontWeight: 500, color: "rgba(248,246,241,0.45)" }}
              >
                {s.key}
              </span>
            </div>
          ))}
        </div>

        {/* Tags — Syne */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {card.tags.map((t) => (
            <span
              key={t}
              className="text-[#79A88B] border rounded-[3px] border-[rgba(121,168,139,0.35)] uppercase"
              style={{
                fontFamily: SYNE,
                fontSize: "0.5rem",
                letterSpacing: "0.16em",
                fontWeight: 600,
                padding: "0.2rem 0.55rem",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* CTA button — Syne */}
        <a
          href={card.ctaHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-[6px]gap-2 border-b w-fit pb-0.5 uppercase"
          style={{
            fontFamily: SYNE,
            fontSize: "0.6rem",
            letterSpacing: "0.2em",
            fontWeight: 700,
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateY(0)" : "translateY(8px)",
            color: hovered ? "#79A88B" : "white",
            borderColor: hovered ? "#79A88B" : "rgba(248,246,241,0.2)",
            transition:
              "opacity 0.4s 0.1s, transform 0.4s 0.1s cubic-bezier(0.16,1,0.3,1), color 0.3s, border-color 0.3s",
          }}
        >
          {card.ctaLabel}
          <span className="relative inline-block bg-current" style={{ width: 14, height: 1 }}>
            <span
              className="absolute right-0 border-l-[5px] border-l-current border-y-[2.5px] border-y-transparent"
              style={{ top: "-2.5px" }}
            />
          </span>
        </a>
      </div>
    </div>
  );
}

// ── Main ───────────────────────────────────────────────────────────────────────
export default function ServicesSection() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerInView, setHeaderInView] = useState(false);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const anchorOffset = useRef(0);
  const velocity = useRef(0);
  const lastX = useRef(0);
  const currentOffset = useRef(0);
  const rafId = useRef<number | null>(null);

  // ── Auto-scroll refs ─────────────────────────────────────────────────────────
  const autoScrollRef = useRef<number | null>(null);
  const isPaused = useRef(false);

  const AUTO_SPEED = 0.6; // px per frame — increase for faster, decrease for slower

  const getMaxScroll = useCallback((): number => {
    const track = trackRef.current;
    const wrapper = wrapperRef.current;
    if (!track || !wrapper) return 0;
    return Math.max(0, track.scrollWidth - wrapper.clientWidth);
  }, []);

  const applyOffset = useCallback(
    (raw: number): void => {
      const offset = Math.max(0, Math.min(raw, getMaxScroll()));
      currentOffset.current = offset;
      if (trackRef.current)
        trackRef.current.style.transform = `translateX(-${offset}px)`;
      if (thumbRef.current && wrapperRef.current) {
        const max = getMaxScroll();
        const thumbFraction = 1 / CARDS.length;
        const pct = max > 0 ? offset / max : 0;
        const trackWidth = wrapperRef.current.clientWidth - 192;
        thumbRef.current.style.transform = `translateX(${pct * (1 - thumbFraction) * trackWidth
          }px)`;
      }
    },
    [getMaxScroll]
  );

  const runInertia = useCallback(() => {
    if (Math.abs(velocity.current) < 0.5) {
      velocity.current = 0;
      // Resume auto-scroll after inertia finishes
      isPaused.current = false;
      return;
    }
    velocity.current *= 0.93;
    applyOffset(currentOffset.current - velocity.current);
    rafId.current = requestAnimationFrame(runInertia);
  }, [applyOffset]);

  // ── Auto-scroll loop ─────────────────────────────────────────────────────────
  useEffect(() => {
    const tick = (): void => {
      if (!isPaused.current) {
        const max = getMaxScroll();
        const next = currentOffset.current + AUTO_SPEED;
        // After last card, start from the beginning
        applyOffset(next > max ? 0 : next);
      }
      autoScrollRef.current = requestAnimationFrame(tick);
    };

    autoScrollRef.current = requestAnimationFrame(tick);
    return () => {
      if (autoScrollRef.current) cancelAnimationFrame(autoScrollRef.current);
    };
  }, [applyOffset, getMaxScroll]);

  // ── Drag / touch / wheel events ──────────────────────────────────────────────
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const onMouseMove = (e: MouseEvent): void => {
      if (!isDragging.current) return;
      velocity.current = e.pageX - lastX.current;
      lastX.current = e.pageX;
      applyOffset(anchorOffset.current - (e.pageX - startX.current));
    };

    const onMouseUp = (): void => {
      if (!isDragging.current) return;
      isDragging.current = false;
      wrapper.style.cursor = "grab";
      // Let inertia run; isPaused stays true until runInertia finishes
      rafId.current = requestAnimationFrame(runInertia);
    };

    const onTouchStart = (e: TouchEvent): void => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      isPaused.current = true;
      startX.current = e.touches[0].pageX;
      anchorOffset.current = currentOffset.current;
      lastX.current = e.touches[0].pageX;
      velocity.current = 0;
    };

    const onTouchMove = (e: TouchEvent): void => {
      velocity.current = e.touches[0].pageX - lastX.current;
      lastX.current = e.touches[0].pageX;
      applyOffset(anchorOffset.current - (e.touches[0].pageX - startX.current));
    };

    const onTouchEnd = (): void => {
      // Let inertia run; isPaused resumes after inertia settles
      rafId.current = requestAnimationFrame(runInertia);
    };


    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
    wrapper.addEventListener("touchstart", onTouchStart, { passive: true });
    wrapper.addEventListener("touchmove", onTouchMove, { passive: true });
    wrapper.addEventListener("touchend", onTouchEnd);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
      wrapper.removeEventListener("touchstart", onTouchStart);
      wrapper.removeEventListener("touchmove", onTouchMove);
      wrapper.removeEventListener("touchend", onTouchEnd);
    };
  }, [applyOffset, runInertia]);

  // ── Header intersection observer (fixed for scroll-up) ───────────────────────
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        setHeaderInView(entry.isIntersecting);
      },
      { threshold: [0, 0.05, 0.12], rootMargin: "80px 0px 0px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // ── Mouse down on track ──────────────────────────────────────────────────────
  const handleMouseDown = (e: React.MouseEvent) => {
    if (rafId.current) cancelAnimationFrame(rafId.current);
    isPaused.current = true;
    isDragging.current = true;
    startX.current = e.pageX;
    anchorOffset.current = currentOffset.current;
    lastX.current = e.pageX;
    velocity.current = 0;
    if (wrapperRef.current) wrapperRef.current.style.cursor = "grabbing";
    e.preventDefault();
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&display=swap');
        @keyframes arrowPulse {
          0%, 100% { opacity: 0.4; transform: translateX(0); }
          50%       { opacity: 1;   transform: translateX(6px); }
        }
        .arrow-pulse { animation: arrowPulse 1.8s ease-in-out infinite; }
      `}</style>

      <section
        id="services"
        className="overflow-hidden relative scroll-mt-[100px]"
        style={{ background: "#0E0D0A", paddingTop: "5rem", fontFamily: SYNE }}
      >
        {/* ── Header ─────────────────────────────────────────────────────────── */}
        <div
          ref={headerRef}
          className="flex items-end justify-between gap-8 flex-wrap"
          style={{
            padding: "0 4rem 3.5rem",
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? "translate3d(0, 0, 0)" : "translate3d(0, 36px, 0)",
            transition:
              "opacity 0.55s cubic-bezier(0.22, 1, 0.36, 1), transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          <div>
            {/* Eyebrow — inline line + label */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-px bg-[#79A88B]" />
              <span
                style={{
                  fontFamily: SYNE,
                  fontSize: "0.6rem",
                  fontWeight: 700,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#79A88B",
                }}
              >
                Our Machines &amp; Services
              </span>
            </div>

            {/* Title — Cormorant */}
            <h2
              className="font-light text-white"
              style={{
                fontFamily: CORMORANT,
                fontSize: "clamp(2.5rem, 5vw, 5rem)",
                lineHeight: 0.95,
                letterSpacing: "-0.01em",
              }}
            >
              Professional
              <br />
              <em style={{ color: "#79A88B", fontStyle: "italic" }}>Grade</em> Equipment
            </h2>

            {/* Drag hint */}
            <div
              className="flex items-center gap-2.5 mt-5 uppercase"
              style={{
                fontFamily: SYNE,
                fontSize: "0.55rem",
                letterSpacing: "0.28em",
                fontWeight: 600,
                color: "rgba(248,246,241,0.25)",
              }}
            >
              <span
                className="arrow-pulse relative inline-block bg-[#79A88B]"
                style={{ width: 28, height: 1 }}
              >
                <span
                  className="absolute right-0 border-l-[6px] border-l-[#79A88B] border-y-[3px] border-y-transparent"
                  style={{ top: "-3px" }}
                />
              </span>
              Drag to Explore
            </div>
          </div>

          {/* Sub text */}
          <p
            className="flex-shrink-0"
            style={{
              fontFamily: SYNE,
              fontSize: "0.88rem",
              fontWeight: 400,
              maxWidth: 280,
              lineHeight: 1.85,
              color: "rgba(248,246,241,0.35)",
            }}
          >
            Every machine in our studio is a professional-grade workhorse —
            chosen for precision, reliability and speed.
          </p>
        </div>

        {/* ── Card track ─────────────────────────────────────────────────────── */}
        <div
          ref={wrapperRef}
          className="relative overflow-hidden cursor-grab"
          onMouseDown={handleMouseDown}
          onMouseEnter={() => { isPaused.current = true; }}
          onMouseLeave={() => {
            // Only resume if not in the middle of a drag
            if (!isDragging.current) isPaused.current = false;
          }}
        >
          <div
            ref={trackRef}
            className="flex"
            style={{
              gap: 2,
              padding: "0 4rem",
              willChange: "transform",
              transform: "translateX(0px)",
            }}
          >
            {CARDS.map((card) => (
              <Card key={card.id} card={card} />
            ))}
          </div>

          {/* Progress bar */}
          <div
            className="relative"
            style={{
              margin: "2.5rem 4rem 0",
              height: 2,
              background: "rgba(248,246,241,0.07)",
            }}
          >
            <div
              ref={thumbRef}
              className="h-full bg-[#79A88B]"
              style={{ width: `${100 / CARDS.length}%`, transition: "none" }}
            />
          </div>
        </div>

        {/* ── Bottom bar ─────────────────────────────────────────────────────── */}
        <div
          className="flex items-center justify-between flex-wrap gap-4"
          style={{
            padding: "2rem 4rem",
            marginTop: 2,
            borderTop: "1px solid rgba(248,246,241,0.07)",
          }}
        >
          <p
            style={{
              fontFamily: SYNE,
              fontSize: "0.78rem",
              fontWeight: 400,
              color: "rgba(248,246,241,0.25)",
            }}
          >
            All machines maintained &amp; calibrated regularly for consistent output quality.
          </p>

          <a
            href="#contact"
            className="text-white no-underline uppercase rounded-[6px] inline-block"
            style={{
              fontFamily: SYNE,
              fontSize: "0.6rem",
              fontWeight: 700,
              letterSpacing: "0.2em",
              background: "#79A88B",
              padding: "0.8rem 2rem",
              transition: "background 0.3s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "#5C8A6E")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "#79A88B")
            }
          >
            Request a Quote →
          </a>
        </div>
      </section>
    </>
  );
}