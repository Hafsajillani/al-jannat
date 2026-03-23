"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const productItems = [
  "All Products", "Business Cards", "Marketing & Stationery", 
  "Signs & Banners", "Invitations & Events", "Stickers & Labels", 
  "Gifts & Décor", "Apparel", "Industries", "Services"
];

const companyItems = [
  "About Us", "Contact Us", "Our Clients", "List of Tools"
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Helper to create clean URLs for the product bar
  const createSlug = (item: string) => `/${item.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-')}`;

  // Helper to handle specific page routing for company links
  const getCompanyLink = (item: string) => {
    switch (item) {
      case "About Us": return "/about";
      case "Contact Us": return "/contact";
      case "Our Clients": return "/clients";
      case "List of Tools": return "/tools";
      default: return createSlug(item);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white z-[1000] shadow-sm text-base">
        {/* Top Navigation Bar */}
        <div className="max-w-[1400px] mx-auto px-6 h-14 flex items-center justify-between border-b border-gray-100">
          <Link href="/" className="flex flex-col flex-shrink-0">
            <div className="flex items-baseline gap-0.5">
              <span className="text-2xl font-bold text-[#1a2e35]">al jannat</span>
              <span className="h-1 w-1 rounded-full bg-[#79A88B] mb-1"></span>
            </div>
            <span className="inline-block text-[10px] text-[#79A88B] font-bold uppercase tracking-[0.6em] -mt-1">
              SCAN N PRINT
            </span>
          </Link>

          {/* Corrected Desktop Company Links */}
          <nav className="hidden lg:flex items-center gap-12">
            {companyItems.map((item) => (
              <Link 
                key={item}
                href={getCompanyLink(item)} 
                className="text-[12px] font-bold text-[#1a2e35] hover:text-[#79A88B] transition-all uppercase tracking-widest"
              >
                {item}
              </Link>
            ))}
          </nav>

          <button className="lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Product Secondary Bar */}
        <nav className="bg-white hidden lg:block border-t border-gray-50">
          <div className="max-w-[1400px] mx-auto px-6">
            <ul className="flex justify-between items-center h-10">
              {productItems.map((item) => (
                <li key={item}>
                  <Link 
                    href={createSlug(item)} 
                    className="text-[12px] font-bold text-gray-500 hover:text-black transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Mobile Menu (Optional logic for better UX) */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 p-6 flex flex-col gap-4">
             {companyItems.map((item) => (
              <Link key={item} href={getCompanyLink(item)} onClick={() => setIsMobileMenuOpen(false)}>
                {item}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Spacers to prevent content from going under the fixed header */}
      <div className="h-[96px] hidden lg:block" /> 
      <div className="h-14 lg:hidden" />
    </>
  );
};

export default Header;