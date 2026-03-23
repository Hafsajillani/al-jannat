"use client";

import React from 'react';

const products = [
  { title: "Plotter Printing", desc: "High Quality", image: "/images/main-1.jpg" },
  { title: 'Photocopy', desc: "Bulk Rates", image: "/images/2.jpg" },
  { title: "Books Binding", desc: "Professional Finish", image: "/images/4-1.jpg" },
  { title: "Large Format Scanning", desc: "Digital Archiving", image: "/images/main-2.jpg" },
  { title: "Architectural Blueprints", desc: "Precise Detail", image: "/images/main-4.jpg" },
  { title: "Highspeed Scanning", desc: "Fast Turnaround", image: "/images/plotter.jpg" },
];

const BasicSection = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16 text-base">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header Section */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Most Popular Basics
        </h2>
        <p className="text-lg md:text-xl text-gray-400 font-light mb-12">
          Classic marketing materials with consistent results.
        </p>

        {/* Grid Section - Updated grid-cols-2 for mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Image Container */}
              <div className="bg-[#718e6c] w-full aspect-square rounded-md flex items-center justify-center overflow-hidden mb-4 md:mb-6 shadow-sm transition-transform duration-300 hover:-translate-y-2 cursor-pointer">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Text Info - Font size adjusted for mobile readability */}
              <h3 className="text-lg md:text-2xl font-semibold text-gray-800 mb-1 leading-tight">
                {product.title}
              </h3>
              <p className="text-sm md:text-base text-gray-400">
                {product.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BasicSection;