"use client";

import React from "react";

const products = [
  { name: "Brochures", description: "Full-color custom folding", image: "/images/path-to-brochures.jpg" },
  { name: "Stickers", description: "Durable vinyl indoor/outdoor", image: "/images/path-to-stickers.jpg" },
  { name: "Notepads", description: "Personalized office essentials", image: "/images/path-to-notepads.jpg" },
  { name: "Booklets", description: "Professional multi-page catalogs", image: "/images/path-to-booklets.jpg" },
  { name: "Door Hangers", description: "High-impact local marketing", image: "/images/path-to-doorhangers.jpg" },
  { name: "Folders", description: "Custom branded presentation", image: "/images/path-to-folders.jpg" },
  { name: "Rack Cards", description: "Standard promotional inserts", image: "/images/path-to-rackcards.jpg" },
  { name: "Postcards", description: "Direct mail marketing tools", image: "/images/path-to-postcards.jpg" },
  { name: "Flyers", description: "Quick distribution handouts", image: "/images/path-to-flyers.jpg" },
  { name: "Business Cards", description: "Premium cardstock finishes", image: "/images/path-to-businesscards.jpg" },
  { name: "Roll Labels", description: "Bulk packaging solutions", image: "/images/path-to-rolllabels.jpg" },
  { name: "Letterheads", description: "Official corporate stationery", image: "/images/path-to-letterheads.jpg" },
];

const PrintsSection = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16 text-base">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-3">
          Marketing Prints for Businesses
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          High-quality custom printing solutions designed to elevate your brand's physical presence.
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col items-center group cursor-pointer">
            {/* Image Container: Moves up on hover, no shadow */}
            <div className="w-full aspect-square bg-gray-50 rounded-md overflow-hidden mb-6 transition-transform duration-300 ease-out group-hover:-translate-y-2">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/400?text=Product+Image";
                }}
              />
            </div>
            
            {/* Product Details: Text changes color on group hover */}
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-800">
                {product.name}
              </h3>
              <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PrintsSection;