"use client";

import Image from 'next/image';
import { Users, Award, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  // Location markers with glowing effect
  const locationMarkers = [
    { x: '15%', y: '30%' }, // North America West
    { x: '20%', y: '35%' }, // North America East
    { x: '25%', y: '65%' }, // South America North
    { x: '27%', y: '75%' }, // South America South
    { x: '45%', y: '25%' }, // Europe West
    { x: '48%', y: '28%' }, // Europe Central
    { x: '51%', y: '30%' }, // Europe East
    { x: '47%', y: '50%' }, // North Africa
    { x: '50%', y: '60%' }, // Central Africa
    { x: '52%', y: '70%' }, // South Africa
    { x: '58%', y: '35%' }, // Middle East
    { x: '65%', y: '40%' }, // India
    { x: '72%', y: '35%' }, // China
    { x: '78%', y: '32%' }, // Japan
    { x: '70%', y: '55%' }, // Southeast Asia
    { x: '82%', y: '75%' }, // Australia
  ];

  return (
    <div className="w-full bg-white text-black pt-16 pb-20 px-4">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
        We Print - We Pack - We Deliver.
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
        Al Jannat is your complete printing and branding partner. From a single custom gift
        to full scale corporate campaigns, we handle every job with the same care, precision, and quality control.
        </p>
      </div>

      {/* World Map with Dots */}
      <div className="max-w-6xl mx-auto mb-20 relative">
        <div className="relative w-full">
        <Image
            src='/images/map.webp'
            alt="World Map"
            width={1400}
            height={700}
            className="w-full h-auto"
            style={{ filter: 'brightness(0.5) contrast(1.2)' }}
          />
          
          {/* Overlay glowing markers */}
          {locationMarkers.map((marker, i) => (
            <div
              key={`marker-${i}`}
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              style={{ left: marker.x, top: marker.y }}
            >
              {/* First glowing ring */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-6 aspect-square rounded-full border-2 opacity-40 animate-ping" 
                     style={{ 
                       animationDuration: '2s',
                       borderColor: '#79A88B'
                     }}></div>
              </div>
              {/* Second glowing ring (delayed) */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-6 aspect-square rounded-full border-2 opacity-40 animate-ping" 
                     style={{ 
                       animationDuration: '2s',
                       animationDelay: '1s',
                       borderColor: '#79A88B'
                     }}></div>
              </div>
              {/* Inner dot */}
              <div className="relative w-2 h-2 aspect-square rounded-full" style={{ backgroundColor: '#79A88B' }}></div>
            </div>
          ))}
        </div>
      </div>

      {/* Three Features Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Feature 1 */}
        <div className="text-center p-6">
          <div className="w-16 h-16 mx-auto mb-6 bg-gray-100 rounded-2xl flex items-center justify-center">
            <Users className="w-8 h-8 text-(--primary-color)" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Customer First</h3>
          <p className="text-gray-600">
          Every order, big or small, gets the same dedicated attention. Our team works closely
          with you from concept to delivery to ensure your vision comes to life perfectly.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="text-center p-6">
          <div className="w-16 h-16 mx-auto mb-6 bg-gray-100 rounded-2xl flex items-center justify-center">
            <Award className="w-8 h-8 text-(--primary-color)" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Premium Quality</h3>
          <p className="text-gray-600">
          We use state-of-the-art digital, offset, UV and laser engraving technology to ensure
          every print meets the highest standards of quality and precision.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="text-center p-6">
          <div className="w-16 h-16 mx-auto mb-6 bg-gray-100 rounded-2xl flex items-center justify-center">
            <Lightbulb className="w-8 h-8 text-(--primary-color)" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Fast & Reliable</h3>
          <p className="text-gray-600">
          Nationwide delivery with fast turnaround times. Whether it's a last-minute campaign
          or a planned corporate order, we deliver on time, every time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;