"use client";

import Image from 'next/image';
import { Users, Award, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  const locationMarkers = [
    { x: '15%', y: '30%' },
    { x: '20%', y: '35%' },
    { x: '25%', y: '65%' },
    { x: '27%', y: '75%' },
    { x: '45%', y: '25%' },
    { x: '48%', y: '28%' },
    { x: '51%', y: '30%' },
    { x: '47%', y: '50%' },
    { x: '50%', y: '60%' },
    { x: '52%', y: '70%' },
    { x: '58%', y: '35%' },
    { x: '65%', y: '40%' },
    { x: '72%', y: '35%' },
    { x: '78%', y: '32%' },
    { x: '70%', y: '55%' },
    { x: '82%', y: '75%' },
  ];

  return (
    <div
      id="about"
      className="w-full text-white pt-16 pb-20 px-4"
      style={{ backgroundColor: '#0F0F0F' }}
    >
      {/* Header Section */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <button style={{
          background: "#111",
          color: '#FFFFFFB8',
          fontSize: "16px",
          fontWeight: 600,
          padding: "14px 36px",
          border: "1px solid gray",
          borderRadius: "999px",
          cursor: "pointer",
          transition: "background 0.2s ease, border 0.2s ease",
        }}
        >
          About Us
        </button>

        <h1 className="text-4xl md:text-5xl font-bold mt-6 mb-4 text-white">
          We Print. We Pack. We Deliver.
        </h1>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-10">
          Click2Print Pvt. Ltd. is your complete printing and branding partner. From a single custom gift
          to full scale corporate campaigns, we handle every job with the same care, precision, and quality control.
        </p>
      </div>

      {/* World Map with Dots */}
      <div className="max-w-6xl mx-auto mb-10 relative">
        <div className="relative w-full">
          <Image
            src='/images/map.webp'
            alt="World Map"
            width={1400}
            height={700}
            className="w-full h-auto"
            style={{ filter: 'brightness(1) contrast(1.2)' }}
          />

          {locationMarkers.map((marker, i) => (
            <div
              key={`marker-${i}`}
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              style={{ left: marker.x, top: marker.y }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-6 h-6 aspect-square rounded-full border-2 border-white opacity-30 animate-ping"
                  style={{ animationDuration: '2s' }}
                ></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-6 h-6 aspect-square rounded-full border-2 border-white opacity-20 animate-ping"
                  style={{ animationDuration: '2s', animationDelay: '1s' }}
                ></div>
              </div>
              <div className="relative w-2 h-2 aspect-square rounded-full bg-white"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Three Features Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center p-6">
          <div className="w-16 h-16 mx-auto mb-6 bg-white/10 rounded-2xl flex items-center justify-center">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-white">Customer First</h3>
          <p className="text-gray-400">
            Every order, big or small, gets the same dedicated attention. Our team works closely
            with you from concept to delivery to ensure your vision comes to life perfectly.
          </p>
        </div>

        <div className="text-center p-6">
          <div className="w-16 h-16 mx-auto mb-6 bg-white/10 rounded-2xl flex items-center justify-center">
            <Award className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-white">Premium Quality</h3>
          <p className="text-gray-400">
            We use state-of-the-art digital, offset, UV and laser engraving technology to ensure
            every print meets the highest standards of quality and precision.
          </p>
        </div>

        <div className="text-center p-6">
          <div className="w-16 h-16 mx-auto mb-6 bg-white/10 rounded-2xl flex items-center justify-center">
            <Lightbulb className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-white">Fast & Reliable</h3>
          <p className="text-gray-400">
            Nationwide delivery with fast turnaround times. Whether it's a last-minute campaign
            or a planned corporate order, we deliver on time, every time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;