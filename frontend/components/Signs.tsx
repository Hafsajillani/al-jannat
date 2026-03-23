"use client";

import React from "react";

const products = [
  { name: "A-Frame Signs", desc: "Sidewalk Advertising", image: "/images/a_frame.jpg" },
  { name: "Banners", desc: "Vinyl Displays", image: "/images/banners.jpg" },
  { name: "Yard Signs", desc: "Stake Mounted", image: "/images/yard_signs.jpg" },
  { name: "Retractable Banners", desc: "Portable Stands", image: "/images/retractable.jpg" },
  { name: "Large Format Posters", desc: "High Resolution", image: "/images/large_posters.jpg" },
  { name: "Foam Boards", desc: "Rigid Mounting", image: "/images/foam_boards.jpg" },
  { name: "Bulk Posters", desc: "Volume Printing", image: "/images/bulk_posters.jpg" },
  { name: "PVC Boards", desc: "Durable Plastic", image: "/images/pvc_boards.jpg" },
  { name: "Corrugated Boards", desc: "Fluted Plastic", image: "/images/corrugated.jpg" },
];

const SignsBannerSection = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16 text-base">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-800 mb-1">
          Signs & Banner Displays
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Attention grabbing products for any promotion or event.
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col items-center group cursor-pointer">
            {/* Image Container - Removed shadow, kept lift effect */}
            <div className="w-full aspect-square bg-gray-100 rounded-sm overflow-hidden mb-4 transition-transform duration-300 ease-out group-hover:-translate-y-2">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/400?text=" + product.name;
                }}
              />
            </div>
            
            {/* Product Details - Static text colors */}
            <div className="text-center">
              <h3 className="text-lg font-semibold text-slate-700">
                {product.name}
              </h3>
              <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                {product.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SignsBannerSection;