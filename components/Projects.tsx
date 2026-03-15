"use client";

import React, { useState, useRef, useEffect } from "react";

const projects = [
    {
      title: "Premium Business Cards",
      desc: "Custom-designed cards with matte, gloss, and spot UV finishes for elite brands.",
      bgColor: "bg-[#1a1c1e]",
      // Dark Slate to subtle Navy mesh
      hoverBg: "radial-gradient(circle at 0% 100%, #1e293b 0%,rgb(22, 22, 23) 100%)",
      span: "md:col-span-1 md:row-span-2",
      img: "/images/bussiness cards.jpg",
      hoverImg: "/images/hover-card.jpg",
      text: "text-white",
      align: "justify-center",
    },
    {
      title: "Corporate Apparel",
      desc: "Branded hoodies and shirts with high-quality screen printing.",
      bgColor: "bg-[#f8fafc]", 
      // Light Blue/Pink mesh (Top Right card style)
      hoverBg: "radial-gradient(circle at 0% 100%, #1e293b 0%,rgb(22, 22, 23) 100%)",
      span: "md:col-span-1 md:row-span-1",
      img: "/images/shirt.jpg",
      hoverImg: "/images/hover-shirt.jpg",
      text: "text-white",
      align: "justify-center",
    },
    {
      title: "Office Stationery",
      desc: "Professional letterheads and custom notebooks for modern offices.",
      bgColor: "bg-[#fffbeb]", 
      // Yellow/Orange mesh (Top Right yellow style)
      hoverBg: "radial-gradient(circle at 0% 100%, #1e293b 0%,rgb(22, 22, 23) 100%)",
      span: "md:col-span-1 md:row-span-1",
      img: "/images/stat.jpg",
      hoverImg: "/images/stationary.jpg",
      text: "text-white",
      align: "justify-center",
    },
    {
      title: "Web Design & SEO",
      desc: "High-performance digital experiences optimized for search visibility and conversion.",
      bgColor: "bg-[#334155]",
      // Teal/Cyan mesh (Bottom card style)
      hoverBg: "radial-gradient(circle at 0% 100%, #1e293b 0%,rgb(22, 22, 23) 100%)",
      span: "md:col-span-2 md:row-span-1",
      img: "/images/web-hover.jpg",
      hoverImg: "/images/web-design.jpg",
      text: "text-white",
      align: "justify-center",
    },
  ];

const ProjectsSection = () => {

  return (
    <section id="projects" className="py-24 px-6 bg-[#EDEDED]
">
      <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-4 text-black">See What We've Built</h2>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-10">
          Real examples of how we've helped businesses achieve their goals.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[340px]">
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
      </div>
    </section>
  );
};

type Project = (typeof projects)[number];

const ProjectCard = ({ project }: { project: Project }) => {
  const [active, setActive] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleTouchStart = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActive(true);
  };

  const handleTouchEnd = () => {
    // keep hover/active state a bit longer after touch ends
    timeoutRef.current = setTimeout(() => {
      setActive(false);
      timeoutRef.current = null;
    }, 600);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`${project.bgColor} ${project.span} group relative rounded-3xl overflow-hidden transition-all duration-700 border border-gray-100 cursor-pointer flex flex-col active:scale-95`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* GRADIENT OVERLAY LAYER */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 z-0 ${
          active ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
        style={{ background: project.hoverBg }}
      />

      {/* INITIAL CONTENT LAYER */}
      <div
        className={`relative z-20 h-full flex flex-col items-center text-center p-8 transition-all duration-500 ${project.align} ${
          active ? "opacity-0 scale-95" : "opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-95"
        }`}
      >
        <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${project.text}`}>
          {project.title}
        </h3>
        <p className={`text-sm md:text-base opacity-90 max-w-xs ${project.text}`}>
          {project.desc}
        </p>

        <div className="absolute inset-0 z-[-1]">
          <div className="absolute inset-0 bg-black/45 z-10" />
          <img src={project.img} alt={project.title} className="w-full h-full object-cover" />
        </div>
      </div>

      {/* HOVER / ACTIVE STATE */}
      <div
        className={`absolute inset-0 z-30 flex items-center justify-center transition-all duration-500 transform scale-90 ${
          active ? "opacity-100 scale-100" : "opacity-0 group-hover:opacity-100 group-hover:scale-100"
        }`}
      >
        <div className="w-[85%] h-[75%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/40">
          <img src={project.hoverImg} className="w-full h-full object-cover" alt="Hover Preview" />
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;