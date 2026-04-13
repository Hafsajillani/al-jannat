"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Cormorant_Garamond } from 'next/font/google';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
});

const productItems = [
  "All Products", "Plotter Printing", "Wide Format Scanning", "Digital Color Printing",
  "High Speed Photocopy", "Business Cards", "Signs & Banners", "Invitations & Events"
];

const mainNavItems = ["Home", "Services", "Wide Format", "Process", "About Us"];

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isWhatsAppHovered, setIsWhatsAppHovered] = useState(false);
  const [isQuoteHovered, setIsQuoteHovered] = useState(false);

  const createSlug = (item: string) =>
    `/${item.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-')}`;

  const getNavLink = (item: string) => {
    switch (item.toLowerCase()) {
      case "home": return "/#home";
      case "about us": return "/about";
      case "process": return "/#process";
      case "services": return "/#services";
      case "wide format": return "/#wide-format";
      default: return createSlug(item);
    }
  };

  return (
    <>
      {isServicesOpen && (
        <div className="fixed inset-0 z-[999]" onClick={() => setIsServicesOpen(false)} />
      )}

      <header className="fixed top-0 left-0 w-full bg-[#F8F6F1] z-[1000] text-base font-syne">
        <div className="max-w-[1400px] mx-auto px-6 h-[60px] flex items-center justify-between">
          <Link href="/" className="flex flex-col flex-shrink-0 -space-y-4">
            <div className="flex items-baseline gap-2">
              <span
                style={{ fontSize: '32px', }}
                className={`${cormorant.className} leading-none font-semibold tracking-[-0.02em] italic`}
              >
                <span className="text-[#000]">Al </span>
                <span className="text-[#79A88B]">Jannat</span>
              </span>
              <span
                style={{ height: '5px', width: '5px', backgroundColor: 'black', borderRadius: '50%', display: 'inline-block' }}
              ></span>
            </div>

            <span
              style={{ fontSize: '10px', letterSpacing: '0.59em', color: '#000' }}
              className="inline-block font-bold uppercase mt-4 pl-0"
            >
              SCAN N PRINT
            </span>
          </Link>

          {/* Desktop Nav - unchanged */}
          <nav className="hidden lg:flex items-center gap-10">
            <ul className="flex items-center gap-10">
              {mainNavItems.map((item) => (
                <li key={item} className="relative">
                  {item === "Services" ? (
                    <>
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="text-[14px] font-medium text-gray-700 hover:text-[#79A88B] transition-all flex items-center gap-1 py-6 cursor-pointer"
                      >
                        {item}
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                          className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                        >
                          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>

                      {isServicesOpen && (
                        <div className="absolute top-full left-0 pt-2 min-w-[240px] z-[1001]">
                          <div className="bg-white shadow-xl border border-gray-100 py-3 flex flex-col rounded-[12px] overflow-hidden">
                            {productItems.map(prod => (
                              <Link
                                key={prod}
                                href={createSlug(prod)}
                                onClick={() => setIsServicesOpen(false)}
                                className="px-6 py-2.5 hover:bg-[#F8F6F1] text-[13px] font-medium text-gray-600 hover:text-[#79A88B] transition-colors whitespace-nowrap block tracking-wide"
                              >
                                {prod}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={getNavLink(item)}
                      className="text-[14px] font-medium text-gray-700 hover:text-[#79A88B] transition-all flex items-center gap-1 py-6"
                    >
                      {item}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            <div className="flex items-center uppercase gap-3 ml-2">
              <a
                href="https://wa.me/923214577000"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setIsWhatsAppHovered(true)}
                onMouseLeave={() => setIsWhatsAppHovered(false)}
                style={{
                  whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '8px',
                  padding: '11px 22px', borderRadius: '6px', border: '1px solid #79A88B',
                  fontSize: '12px', fontWeight: '600', textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  backgroundColor: isWhatsAppHovered ? '#79A88B' : 'transparent',
                  color: isWhatsAppHovered ? '#F8F6F1' : '#79A88B',
                }}
              >
                <WhatsAppIcon />
                WhatsApp
              </a>

              <Link
                href="/quote"
                onMouseEnter={() => setIsQuoteHovered(true)}
                onMouseLeave={() => setIsQuoteHovered(false)}
                style={{
                  whiteSpace: 'nowrap', display: 'flex', alignItems: 'center',
                  padding: '12px 24px', borderRadius: '6px', border: '1px solid #111',
                  fontSize: '12px', fontWeight: '600', textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  backgroundColor: isQuoteHovered ? 'transparent' : '#111',
                  color: isQuoteHovered ? '#111' : '#F8F6F1',
                }}
              >
                Get a Quote
              </Link>
            </div>
          </nav>

          <button className="lg:hidden text-black" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu remains the same */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#F8F6F1] border-t border-[#e5e1d8] p-6 flex flex-col gap-6 shadow-lg absolute w-full left-0 z-[1001]">
            {/* Mobile menu content (same as before) */}
            {mainNavItems.map((item) => (
              <div key={item} className="flex flex-col gap-3">
                {item === "Services" ? (
                  <button
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    className="text-[14px] font-medium text-gray-700 hover:text-[#79A88B] transition-all text-left flex items-center gap-2"
                  >
                    {item}
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                      className={`transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`}
                    >
                      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                ) : (
                  <Link
                    href={getNavLink(item)}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-[14px] font-medium text-gray-700 hover:text-[#79A88B] transition-all"
                  >
                    {item}
                  </Link>
                )}

                {item === "Services" && isMobileServicesOpen && (
                  <div className="pl-5 flex flex-col gap-3 border-l border-[#79A88B]/30 mt-1">
                    {productItems.map(prod => (
                      <Link
                        key={prod}
                        href={createSlug(prod)}
                        onClick={() => { setIsMobileMenuOpen(false); setIsMobileServicesOpen(false); }}
                        className="text-[13px] font-medium text-gray-500 hover:text-[#79A88B] transition-colors"
                      >
                        {prod}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="flex flex-col gap-3 mt-4 pt-6 border-t border-[#e5e1d8]">
              <a
                href="https://wa.me/923214577000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3 border border-[#79A88B] text-[13px] font-medium text-[#79A88B] rounded-[6px] hover:bg-[#79A88B] hover:text-[#F8F6F1] transition-all"
              >
                <WhatsAppIcon />
                WhatsApp
              </a>
              <Link
                href="/quote"
                className="flex items-center justify-center gap-2 px-5 py-3 bg-[#111] border border-[#111] text-[13px] font-medium text-[#F8F6F1] rounded-[6px] hover:bg-transparent hover:text-[#111] transition-all"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </header>

      <div className="h-[92px]" />
    </>
  );
};

export default Header;