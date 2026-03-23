"use client";

import React from "react";

const Hero = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&display=swap');

        .hero-font {
          font-family: 'Courier Prime', monospace;
        }

        @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-33.333%); }
  }
  .animate-scroll {
    animation: scroll 28s linear infinite;
  }
  .animate-scroll:hover {
    animation-play-state: paused;
  }

        .guarantee-badge {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: white;
          border: 2px solid #76bc21;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
          position: absolute;
          /* Adjusted to sit perfectly over the cards */
          right: 22%; 
          top: 15%;
          z-index: 20;
          transform: rotate(3deg);
        }
      `}</style>

      {/* Main Hero Section */}
      <section className="relative w-full h-[400px] md:h-[420px] flex items-center overflow-hidden">
        
        {/* Background Image Layer - Fixed to full visibility */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/background.png')", 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-20">
          <div className="max-w-2xl">
            {/* Left Side Content */}
            <h1 className="hero-font text-white text-5xl md:text-6xl font-bold mb-1 tracking-tight">
              Back to Basics
            </h1>
            <p className="hero-font text-white text-2xl md:text-3xl mb-4 leading-tight">
            We scan your image n  <br />
            print your imaginations
            </p>
            <p className="hero-font text-white/90 text-lg md:text-xl mb-8 opacity-80">
              Simple pricing. Premium results.
            </p>

            <button className="bg-white text-gray-800 font-bold py-2.5 px-10 rounded-full text-md hover:scale-105 transition-transform shadow-lg">
              Shop Now
            </button>
          </div>
        </div>

      </section>

      {/* Bottom Marquee */}
      <div className="w-full bg-black py-3 overflow-hidden">
  <div className="flex animate-scroll whitespace-nowrap">
    {[...Array(3)].map((_, index) => (
      <div key={index} className="flex items-center">
        <span className="text-white text-xl px-4">✱</span>
        <span className="text-white text-sm md:text-base font-medium px-8">Highspeed Scanning</span>
        <span className="text-white text-xl px-4">✱</span>
        <span className="text-white text-sm md:text-base font-medium px-8">Eco Friendly</span>
        <span className="text-white text-xl px-4">✱</span>
        <span className="text-white text-sm md:text-base font-medium px-8">Custom Designing</span>
        <span className="text-white text-xl px-4">✱</span>
        <span className="text-white text-sm md:text-base font-medium px-8">Fast Turnaround</span>
        <span className="text-white text-xl px-4">✱</span>
        <span className="text-white text-sm md:text-base font-medium px-8">Wide Format</span>
        <span className="text-white text-xl px-4">✱</span>
        <span className="text-white text-sm md:text-base font-medium px-8">Reprographics</span>
        <span className="text-white text-xl px-4">✱</span>
        <span className="text-white text-sm md:text-base font-medium px-8">Digitization</span>
        <span className="text-white text-xl px-4">✱</span>
        <span className="text-white text-sm md:text-base font-medium px-8">Bulk Orders Welcome</span>
        <span className="text-white text-xl px-4">✱</span>
      </div>
    ))}
  </div>
</div>
    </>
  );
};

export default Hero;      