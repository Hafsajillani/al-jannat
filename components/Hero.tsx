"use client"

import { useState, useEffect } from "react"

const cyclingWords = [
  "Design & Production",
  "Web Applications",
  "Printing",
  "Web SEO & Tools",
  "Forms & Policies",
  "Custom Software",
]

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % cyclingWords.length)
        setAnimating(false)
      }, 400)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Zen+Dots&family=DM+Sans:wght@300;400;500;700&display=swap');

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes badgePop {
          0%   { opacity: 0; transform: scale(0.85) translateY(10px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes floatBlob {
          0%, 100% { transform: translateY(0px) scale(1); }
          50%       { transform: translateY(-18px) scale(1.04); }
        }
        @keyframes pulseRing {
          0%   { box-shadow: 0 0 0 0 rgba(245, 200, 66, 0.35); }
          70%  { box-shadow: 0 0 0 7px rgba(245, 200, 66, 0); }
          100% { box-shadow: 0 0 0 0 rgba(245, 200, 66, 0); }
        }
        @keyframes wordEnter {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes wordExit {
          from { opacity: 1; transform: translateY(0); }
          to   { opacity: 0; transform: translateY(-16px); }
        }

        .hero-title       { animation: fadeUp 0.7s ease 0.25s both; }
        .hero-sub         { animation: fadeUp 0.7s ease 0.45s both; }
        .hero-tagline     { animation: fadeUp 0.7s ease 0.6s both; }
        .hero-cta         { animation: fadeUp 0.7s ease 0.75s both; }
        .blob1            { animation: floatBlob 7s ease-in-out infinite; }
        .blob2            { animation: floatBlob 9s ease-in-out 1.5s infinite; }
        .blob3            { animation: floatBlob 11s ease-in-out 3s infinite; }

        .cta-primary:hover   { background: #e0b800; transform: translateY(-2px); box-shadow: 0 12px 32px rgba(245,200,66,0.35); }
        .cta-secondary:hover { background: rgba(255,255,255,0.08); transform: translateY(-2px); }
        .animate-scroll      { animation: scroll 22s linear infinite; }
        .animate-scroll:hover { animation-play-state: paused; }

        .trademark {
          font-size: 0.55em;
          vertical-align: super;
          letter-spacing: 0;
          opacity: 0.8;
        }
        .asterisk-spin { animation: spinSlow 8s linear infinite; }

        .hero-badge {
          animation: badgePop 0.6s cubic-bezier(0.34,1.56,0.64,1) 0.1s both;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 5px 14px 5px 6px;
          background: #ffffff;
          border: 1.5px solid #e8e8e8;
          border-radius: 999px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 500;
          color: #222;
          letter-spacing: -0.01em;
          box-shadow: 0 2px 10px rgba(0,0,0,0.06);
          cursor: default;
          transition: transform 0.2s ease;
          position: absolute;
          top: 28px;
          left: 92px;
          z-index: 10;
        }
        .hero-badge:hover { transform: translateY(-1px); }
        .badge-icon-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          background: #fffbea;
          border-radius: 50%;
          flex-shrink: 0;
          animation: pulseRing 2.4s ease-out infinite;
        }

        .cycling-wrapper {
          display: block;
          overflow: hidden;
          min-height: 1.1em;
        }
        .cycling-word-enter { animation: wordEnter 0.4s ease forwards; }
        .cycling-word-exit  { animation: wordExit 0.4s ease forwards; }

        .top-hero-desc { text-align: center; }
      `}</style>

      <section
        style={{
          position: "relative",
          width: "100%",
          minHeight: "88vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          background: "#fafafa",
          padding: "60px 24px 40px",
        }}
      >
        <div className="blob1" style={{ position:"absolute", top:"10%", left:"8%", width:"340px", height:"340px", borderRadius:"50%", background:"radial-gradient(circle, rgba(245,200,66,0.28) 0%, transparent 70%)", filter:"blur(48px)", zIndex:0 }} />
        <div className="blob2" style={{ position:"absolute", top:"30%", right:"6%", width:"280px", height:"280px", borderRadius:"50%", background:"radial-gradient(circle, rgba(245,200,66,0.22) 0%, transparent 70%)", filter:"blur(40px)", zIndex:0 }} />
        <div className="blob3" style={{ position:"absolute", bottom:"15%", left:"30%", width:"220px", height:"220px", borderRadius:"50%", background:"radial-gradient(circle, rgba(0,0,0,0.05) 0%, transparent 70%)", filter:"blur(32px)", zIndex:0 }} />
        <div style={{ position:"absolute", top:"12%", left:"5%", width:"360px", height:"360px", borderRadius:"50%", background:"radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)", filter:"blur(52px)", zIndex:0 }} />
        <div style={{ position:"absolute", bottom:"10%", right:"5%", width:"300px", height:"300px", borderRadius:"50%", background:"radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)", filter:"blur(44px)", zIndex:0 }} />

        <div style={{ position:"relative", zIndex:1, maxWidth:"820px", margin:"0 auto" }}>

          {/* ── Announcement Badge ── */}
          <div
  className="hero-title"
  style={{ display:"flex", justifyContent:"center", marginBottom:"24px" }}
>
  <div
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      padding: "6px 20px 6px 6px",
      background: "#ffffff",
      border: "1px solid rgb(0, 0, 0)",
      borderRadius: "999px",
      boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
      cursor: "pointer",
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
      fontFamily: "'DM Sans', sans-serif",
    }}
    onMouseEnter={e => {
      (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
      (e.currentTarget as HTMLDivElement).style.boxShadow = "0 6px 20px rgba(0,0,0,0.12)";
    }}
    onMouseLeave={e => {
      (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
      (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.07)";
    }}
  >
   <span className="text-white text-sm leading-relaxed whitespace-pre-line" style={{
  background: "#F5C842",
  color: "#000",
  fontWeight: 500,
  padding: "5px 14px",
  borderRadius: "999px",
  letterSpacing: "0.03em",
  fontFamily: "'DM Sans', sans-serif",
}}>
  NEW
</span>
    <span className="text-gray-700 text-sm leading-relaxed whitespace-pre-line" style={{
      fontFamily: "'DM Sans', sans-serif",
    }}>
      smart-land-services.design is live now
    </span>
    <span className="text-gray-700 text-sm leading-relaxed" style={{
      fontWeight: 600,
      fontFamily: "'DM Sans', sans-serif",
    }}>↗</span>
  </div>
</div>

          <p
            className="hero-title w-full text-center"
            style={{
              fontSize: "clamp(36px, 6vw, 72px)",
              fontWeight: 700,
              color: "#111",
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              margin: "20px 0 4px",
            }}
          >
            Providing you with
          </p>

          <div
            className="hero-sub w-full text-center"
            style={{
              fontSize: "clamp(36px, 6vw, 72px)",
              fontWeight: 700,
              color: "#F5C842",
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              margin: "0 0 32px",
              textAlign: "center",
            }}
          >
            <span className="cycling-wrapper">
              <span
                key={currentIndex}
                className={animating ? "cycling-word-exit" : "cycling-word-enter"}
                style={{ display: "block" }}
              >
                {cyclingWords[currentIndex]}
              </span>
            </span>
          </div>

          <p
            className="top-hero-desc hero-sub"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(14px, 1.6vw, 17px)",
              fontWeight: 400,
              color: "#666",
              lineHeight: 1.7,
              maxWidth: "560px",
              margin: "0 auto 36px",
              letterSpacing: "-0.01em",
            }}
          >
            A commitment that guarantees a beneficial partnership that is proven through successful
            resultant products. We assure you that you'll have a great experience working with us.
          </p>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              style={{
                background: "#111",
                color: "#ffffff",
                fontSize: "16px",
                fontWeight: 600,
                padding: "14px 36px",
                border: "2px solid #111",
                borderRadius: "999px",
                cursor: "pointer",
                transition: "background 0.2s ease, color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#111";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.1)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "#111";
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      <div className="w-full bg-black py-3 overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="flex items-center">
              <span className="text-white text-sm md:text-base font-medium px-8">Design</span>
              <span className="text-white text-xl px-4">✱</span>
              <span className="text-white text-sm md:text-base font-medium px-8">Develop</span>
              <span className="text-white text-xl px-4">✱</span>
              <span className="text-white text-sm md:text-base font-medium px-8">Dominate</span>
              <span className="text-white text-xl px-4">✱</span>
              <span className="text-white text-sm md:text-base font-medium px-8">Design</span>
              <span className="text-white text-xl px-4">✱</span>
              <span className="text-white text-sm md:text-base font-medium px-8">Develop</span>
              <span className="text-white text-xl px-4">✱</span>
              <span className="text-white text-sm md:text-base font-medium px-8">Dominate</span>
              <span className="text-white text-xl px-4">✱</span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Hero