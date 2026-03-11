"use client";

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '../ui/button';

const servicesMenu = [
  { label: "Company",             href: "/company" },
  { label: "Web SEO & Tools",     href: "/web-seo-tools" },
  { label: "Printing",            href: "/printing" },
  { label: "Design & Production", href: "/design-production" },
  { label: "Forms & Policies",    href: "/forms-policies" },
  { label: "Careers",             href: "/careers" },
];

const Logo = () => (
  <>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Zen+Dots&display=swap');
    `}</style>
    <div className="flex flex-col items-start leading-tight">
      <div className="flex items-center gap-0">
        <span style={{
          fontFamily: "'Zen Dots', cursive",
          fontSize: "1.75rem",
          fontWeight: 400,
          letterSpacing: "0.02em",
          color: "white",
          lineHeight: "1",
        }}>
          al jannat
        </span>
        <span style={{
          display: "inline-block",
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          backgroundColor: "#F5C842",
          marginLeft: "2px",
          alignSelf: "flex-end",
          marginBottom: "6px",
        }} />
      </div>
      <span style={{
        fontSize: "0.65rem",
        color: "#F5C842",
        textTransform: "uppercase",
        letterSpacing: "0.45em", 
        fontWeight: 600,
        marginTop: "4px",
        paddingLeft: "2px"
      }}>
        Scan n print
      </span>
    </div>
  </>
);

const ServicesDropdown = ({ onClose }: { onClose?: () => void }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-base hover:bg-white/10 font-bold px-4 py-2 rounded-full transition-all cursor-pointer text-white"
      >
        Services
        <ChevronDown
          size={14}
          style={{
            transition: "transform 0.2s",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </button>

      {open && (
        <div style={{
          position: "fixed",
          top: "90px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "300px",
          backgroundColor: "#111111",
          borderRadius: "16px",
          padding: "12px",
          zIndex: 9999,
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.8)",
          display: "flex",
          flexDirection: "column",
          gap: "2px",
        }}>
          {servicesMenu.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => { setOpen(false); onClose?.(); }}
              style={{
                fontSize: "15px",
                fontWeight: 600,
                color: "white",
                display: "block",
                padding: "10px 16px",
                borderRadius: "10px",
                transition: "background 0.15s",
                textDecoration: "none",
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.10)")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <div className="w-full pt-6 pb-2 px-4 overflow-x-hidden">

      {/* Desktop Header */}
      <div className="hidden lg:block w-full max-w-6xl rounded-full h-20 mx-auto bg-black text-white px-6">
        <div className="flex justify-between items-center h-full">
          <Logo />
          <nav>
            <ul className="flex gap-2 items-center">
              <li>
                <Link href="/" className="text-base hover:bg-white/10 font-bold px-4 py-2 rounded-full transition-all cursor-pointer inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-base hover:bg-white/10 font-bold px-4 py-2 rounded-full transition-all cursor-pointer inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <ServicesDropdown />
              </li>
              <li>
                <Link href="/projects" className="text-base hover:bg-white/10 font-bold px-4 py-2 rounded-full transition-all cursor-pointer inline-block">
                  Projects
                </Link>
              </li>
            </ul>
          </nav>
          <Link href="/contact">
            <Button className="bg-transparent text-white font-bold px-10 py-7 rounded-full border-2 border-white hover:bg-white hover:text-black transition-all cursor-pointer">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>

      {/* Tablet Header */}
      <div className="hidden md:block lg:hidden w-full max-w-4xl rounded-full h-16 mx-auto bg-black text-white px-4">
        <div className="flex justify-between items-center h-full">
          <Logo />
          <nav>
            <ul className="flex gap-1 items-center">
              <li>
                <Link href="/" className="text-base text-sm hover:bg-white/10 px-3 py-2 rounded-full transition-all cursor-pointer inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-base text-sm hover:bg-white/10 px-3 py-2 rounded-full transition-all cursor-pointer inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <ServicesDropdown />
              </li>
              <li>
                <Link href="/projects" className="text-base text-sm hover:bg-white/10 px-3 py-2 rounded-full transition-all cursor-pointer inline-block">
                  Projects
                </Link>
              </li>
            </ul>
          </nav>
          <Link href="/contact">
            <Button className="bg-transparent text-white text-base font-bold px-6 py-5 text-sm rounded-full border border-white hover:bg-white hover:text-black transition-all cursor-pointer">
              Contact
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden rounded-full h-16 bg-black text-white px-4">
        <div className="flex justify-between items-center h-full">
          <Logo />
          <Button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white w-14 h-14 -mr-3 hover:bg-white/10 rounded-full transition-all"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute w-[92%] z-50 mt-4 rounded-3xl bg-black text-white p-4">
          <nav>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/" className="text-base font-bold hover:bg-white/10 px-4 py-3 rounded-full transition-all cursor-pointer text-center block" onClick={() => setMobileMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-base font-bold hover:bg-white/10 px-4 py-3 rounded-full transition-all cursor-pointer text-center block" onClick={() => setMobileMenuOpen(false)}>
                  About Us
                </Link>
              </li>

              {/* Mobile Services Accordion */}
              <li>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex items-center justify-center gap-2 text-base font-bold hover:bg-white/10 px-4 py-3 rounded-full transition-all cursor-pointer"
                >
                  Services
                  <ChevronDown
                    size={14}
                    style={{
                      transition: "transform 0.2s",
                      transform: mobileServicesOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </button>
                {mobileServicesOpen && (
                  <div style={{
                    marginTop: "8px",
                    backgroundColor: "rgba(255,255,255,0.05)",
                    borderRadius: "16px",
                    padding: "8px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "2px",
                  }}>
                    {servicesMenu.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); }}
                        style={{
                          fontSize: "14px",
                          fontWeight: 600,
                          color: "white",
                          display: "block",
                          padding: "10px 16px",
                          borderRadius: "10px",
                          textDecoration: "none",
                          textAlign: "center",
                          transition: "background 0.15s",
                        }}
                        onMouseEnter={e => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.10)")}
                        onMouseLeave={e => (e.currentTarget.style.backgroundColor = "transparent")}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>

              <li>
                <Link href="/projects" className="text-base font-bold hover:bg-white/10 px-4 py-3 rounded-full transition-all cursor-pointer text-center block" onClick={() => setMobileMenuOpen(false)}>
                  Projects
                </Link>
              </li>
            </ul>
          </nav>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
            <Button className="w-full mt-4 bg-white text-black font-bold px-10 py-7 rounded-full border border-white hover:bg-white/90 transition-all cursor-pointer">
              Contact Us
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;