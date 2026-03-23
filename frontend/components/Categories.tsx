"use client";

import React from "react";

const categories = [
  { title: "Marketing Materials", description: "Flyers, brochures & more", img: "/images/marketing_material_top.jpg", badge: true },
  { title: "Business Cards", description: "Make a lasting impression", img: "/images/cards.jpg", badge: false },
  { title: "Signs & Banners", description: "Bold displays for any space", img: "/images/signs.jpg", badge: true },
  { title: "Foam Boards", description: "Lightweight, sturdy displays", img: "/images/foam.jpg", badge: false },
  { title: "Apparel", description: "Custom tees, hats & more", img: "/images/apparel.jpg", badge: true },
  { title: "Stickers & Labels", description: "Stick your brand anywhere", img: "/images/stickers.jpg", badge: true },
  { title: "Gifts & Décor", description: "Personalized keepsakes & art", img: "/images/gifts.jpg", badge: true },
];

const CategorySection = () => {
  return (
    <section className="max-w-[1400px] mx-auto px-6 py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {categories.map((cat, index) => (
          <div key={index} className="flex flex-col group cursor-pointer">
            {/* Image Container */}
            <div className="relative aspect-square bg-[#f3f3f3] rounded-lg overflow-hidden mb-4">
              <img
                src={cat.img}
                alt={cat.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* "Browse Category" Badge */}
              {cat.badge && (
                <div className="absolute top-2 left-2 bg-[#ff7b61] text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm uppercase">
                  Browse Category
                </div>
              )}
            </div>

            {/* Text Content */}
            <div className="text-center">
              <h3 className="font-bold text-gray-800 text-sm md:text-base leading-tight mb-1">
                {cat.title}
              </h3>
              <p className="text-gray-500 text-xs md:text-sm">
                {cat.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;