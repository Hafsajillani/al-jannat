"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { target: 5000, suffix: "+", label: "Jobs Completed", delay: 0 },
  { target: 1200, suffix: "+", label: "Happy Clients", delay: 150 },
  { target: 42, suffix: '"', label: "Max Scan Width", delay: 300 },
  { target: 15, suffix: "+", label: "Years Experience", delay: 450 },
];

function useCountUp(target: number, duration: number, started: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);
  return count;
}

function StatBlock({
  target, suffix, label, delay, started, index,
}: {
  target: number; suffix: string; label: string;
  delay: number; started: boolean; index: number;
}) {
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (!started) return;
    const t = setTimeout(() => setActive(true), delay);
    return () => clearTimeout(t);
  }, [started, delay]);

  const count = useCountUp(target, 2000, active);
  const formatted = count >= 1000 ? count.toLocaleString("en-US") : String(count);

  // Desktop: divider on right of all except last (index 3)
  // Mobile 2×2: divider on right of col 0 (index 0,2), divider on bottom of row 0 (index 0,1)
  const showRightDivider = index !== 3;           // all except last on desktop
  const showBottomDivider = index === 0 || index === 1; // top row on mobile

  return (
    <div
      className="stat-block relative flex flex-col items-center justify-center text-center"
      style={{
        opacity: active ? 1 : 0,
        transform: active ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {/* Right divider */}
      {showRightDivider && (
        <span className="stat-divider-right absolute right-0 top-1/2 -translate-y-1/2"
          style={{ width: "1px", height: "50%", background: "rgba(255,255,255,0.1)" }}
        />
      )}

      {/* Bottom divider — only visible on mobile for top row */}
      {showBottomDivider && (
        <span className="stat-divider-bottom absolute bottom-0 left-1/2 -translate-x-1/2"
          style={{ height: "1px", width: "50%", background: "rgba(255,255,255,0.1)" }}
        />
      )}

      {/* Number */}
      <div
        className="font-cormorant text-white leading-none mb-3"
        style={{ fontSize: "clamp(2.4rem, 4.5vw, 5rem)", fontWeight: 300 }}
      >
        {formatted}
        <sup style={{ fontSize: "0.32em", fontWeight: 400, color: "#79A88B", verticalAlign: "super" }}>
          {suffix}
        </sup>
      </div>

      {/* Label */}
      <div
        className="font-syne uppercase"
        style={{ fontSize: "clamp(0.48rem, 1.8vw, 0.6rem)", letterSpacing: "0.22em", color: "rgba(248,246,241,0.3)" }}
      >
        {label}
      </div>
    </div>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&family=Syne:wght@400;600&display=swap');
        .font-cormorant { font-family: 'Cormorant Garamond', serif; }
        .font-syne      { font-family: 'Syne', sans-serif; }

        /* ── Stat grid layout ── */
        #stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }

        .stat-block {
          padding: 6rem 1.5rem;
        }

        /* ── Mobile: 2×2 grid ── */
        @media (max-width: 640px) {
          #stats {
            grid-template-columns: repeat(2, 1fr);
          }

          .stat-block {
            padding: 3rem 1rem;
          }

          /* On mobile hide the desktop right-dividers for index 1 and 3
             (right column — no divider needed on the right edge) */
          .stat-block:nth-child(2) .stat-divider-right,
          .stat-block:nth-child(4) .stat-divider-right {
            display: none;
          }

          /* Show bottom dividers on mobile for top row */
          .stat-divider-bottom {
            display: block !important;
          }
        }

        /* ── Tablet: keep 4-col but tighten padding ── */
        @media (min-width: 641px) and (max-width: 1024px) {
          .stat-block {
            padding: 4rem 1rem;
          }

          /* Hide bottom dividers on tablet/desktop */
          .stat-divider-bottom {
            display: none;
          }
        }

        /* ── Desktop: hide bottom dividers ── */
        @media (min-width: 1025px) {
          .stat-divider-bottom {
            display: none;
          }
        }
      `}</style>

      <section ref={sectionRef} id="stats" style={{ background: "#0f0f0d" }}>
        {STATS.map((s, i) => (
          <StatBlock
            key={s.label}
            {...s}
            started={started}
            index={i}
          />
        ))}
      </section>
    </>
  );
}