"use client";

import Image from "next/image";

const services = [
  {
    id: 1,
    title: "DIGITAL PRINTING",
    description: "High-quality digital prints for all your business needs. Fast turnaround with vibrant colors and sharp detail on any material.",
    image: "/images/digital-printing.jpg",
  },
  {
    id: 2,
    title: "OFFSET PRINTING",
    description: "Perfect for large volume orders. Consistent, professional results with precise color matching for corporate campaigns.",
    image: "/images/offset-printing.jpg",
  },
  {
    id: 3,
    title: "UV & LASER ENGRAVING",
    description: "Premium finishing with UV coating and laser engraving for a lasting impression on corporate gifts and branded merchandise.",
    image: "/images/uv-laser.jpg",
  },
  {
    id: 4,
    title: "CORPORATE BRANDING",
    description: "Complete branding solutions from concept to delivery. Uniforms, packaging, stationery, and everything your brand needs.",
    image: "/images/branding.jpg",
  },
  {
    id: 5,
    title: "CUSTOM PACKAGING",
    description: "Tailored packaging solutions that protect your product and elevate your brand with premium materials and finishes.",
    image: "/images/packaging.jpg",
  },
  {
    id: 6,
    title: "NATIONWIDE DELIVERY",
    description: "Fast and reliable delivery across Pakistan. We ensure your orders arrive on time, every time, in perfect condition.",
    image: "/images/delivery.jpg",
  },
];

const ServicesSection = () => {
  return (
    <div className="w-full bg-white pt-16 pb-4">
      {/* Header */}
      <div className="text-center mb-12 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mt-6 mb-4 text-black">
          Services We Offer
        </h1>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-10">
          We provide end-to-end printing and branding solutions.
        </p>
      </div>

      {/* Services List */}
      <div className="w-full divide-y divide-gray-200 border-t border-gray-200">
        {services.map((service) => (
          <div
            key={service.id}
            className="group flex items-center gap-6 py-6 cursor-pointer px-6 md:px-16 transition-colors duration-300 hover:bg-black"
          >
            {/* Image */}
            <div className="flex-shrink-0 w-28 h-16 rounded-full overflow-hidden relative">
              <Image
                src={service.image}
                alt={service.title}
                layout="fill"
                objectFit="cover"
              />
            </div>

            {/* Title */}
            <div className="w-64 flex-shrink-0">
              <h2 className="text-xl md:text-2xl font-bold text-black group-hover:text-white leading-tight transition-colors duration-300">
                {service.title}
              </h2>
            </div>

            {/* Description */}
            <div className="flex-1 hidden md:block">
              <p className="text-gray-500 group-hover:text-gray-300 text-sm md:text-base leading-relaxed transition-colors duration-300">
                {service.description}
              </p>
            </div>

            {/* Arrow - yellow on hover */}
            {/* Arrow - white arrow on yellow circle hover */}
<div className="flex-shrink-0 ml-auto">
  <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full  transition-colors duration-300 group-hover:bg-yellow-400 group-hover:border-yellow-400">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 md:w-6 md:h-6 text-black group-hover:text-white transition-colors duration-300"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 17L17 7M17 7H7M17 7v10"
      />
    </svg>
  </div>
</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;