import React from "react";

const DesignChoice = () => {
  const stages = [
    { label: "Timely Delivery", desc: "Fast, reliable shipping across Pakistan and beyond." },
    { label: "Premium Quality", desc: "Sharp colors and perfect finishing on every print." },
    { label: "Affordable Rates", desc: "Top-tier printing solutions for any budget." },
    { label: "23000+ Clients", desc: "Trusted globally by startups, NGOs, and creatives." },
  ];

  return (
    <div id="pricing" className="w-full bg-white py-12 md:py-20 flex flex-col items-center overflow-hidden">

      {/* Heading Section */}
      <div className="text-center mb-8 md:mb-16 px-6 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mt-6 mb-4 text-black">
          Design, on your rhythm
        </h1>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-10">
          Our pricing is straightforward, with no hidden fees, ensuring you get the best value for your investment.
        </p>
      </div>

      {/* Main Container: Relative on desktop, Flex on mobile */}
      <div className="relative w-full max-w-6xl px-4 flex flex-col md:block min-h-[auto] md:min-h-[600px]">

        {/* Hand-Drawn Loop Line (Hidden on mobile for cleaner look, or kept as decoration) */}
        <svg
          className="hidden md:block absolute left-[15%] top-[50%] z-0"
          width="400"
          height="250"
          viewBox="0 0 400 250"
          fill="none"
        >
          <path
            d="M80 0C80 80 110 130 130 100C150 70 130 60 120 90C110 120 150 160 180 140C210 120 190 100 180 120C170 140 210 180 350 160"
            stroke="#1a1a1a"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.3"
          />
        </svg>

        {/* Yellow Card - Top on mobile, Left-floating on desktop */}
        <div className="relative md:absolute top-0 md:top-10 left-0 md:left-10 lg:left-20 z-20 bg-[#F5C842] text-white p-8 md:p-12 rounded-3xl w-full md:max-w-[480px] shadow-xl mb-6 md:mb-0">
          <h2 className="text-[28px] md:text-[40px] leading-[1.1] font-bold tracking-tight mb-6">
            The gold standard in custom printing
          </h2>

          <div className="relative w-2/3 mb-8">
            <div className="h-[1px] bg-white opacity-40 w-full" />
            <svg className="absolute -bottom-2 left-0 w-full" height="6">
              <path d="M0 2 Q 100 5, 250 2" stroke="white" strokeWidth="1.5" fill="none" opacity="0.5" />
            </svg>
          </div>

          <button className="text-sm px-8 py-3 border-2 border-white rounded-full font-bold hover:bg-white hover:text-[#F5C842] active:bg-white active:text-[#F5C842] transition-all duration-300">
            Show Me What I'm Missing
          </button>
        </div>

        {/* White Card - Bottom on mobile, Right-floating on desktop */}
        <div className="relative md:absolute top-0 md:top-48 right-0 md:right-10 lg:right-20 z-30 bg-white p-8 md:p-10 rounded-3xl w-full md:max-w-[590px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-50">

          {/* Decorative Sparkle SVG */}
          <div className="absolute -top-6 -right-2 md:-right-6 rotate-12 scale-75 md:scale-100">
            <svg width="60" height="60" viewBox="0 0 100 100" fill="none">
              <path d="M30 60L10 30" stroke="#F5C842" strokeWidth="5" strokeLinecap="round" />
              <path d="M50 70L50 40" stroke="#F5C842" strokeWidth="5" strokeLinecap="round" />
              <path d="M75 75L95 65" stroke="#F5C842" strokeWidth="5" strokeLinecap="round" />
            </svg>
          </div>

          <ul className="space-y-4">
            {stages.map((stage, index) => (
              <li key={index} className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-6 h-6 mt-1 bg-[#F5C842] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#1a1a1a] text-base leading-relaxed">
                    <strong className="font-bold text-black">{stage.label}:</strong>
                    <span className="text-gray-600 ml-1">{stage.desc}</span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default DesignChoice;