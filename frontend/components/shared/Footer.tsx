import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  const socialLinks = [
    { name: 'LinkedIn', icon: '/icons/linkedin.svg', url: '#' },
    { name: 'Facebook', icon: '/icons/facebook.svg', url: '#' },
    { name: 'Instagram', icon: '/icons/instagram.svg', url: '#' },
    { name: 'Twitter', icon: '/icons/twitter.svg', url: '#' }
  ]

  const footerLinks = [
    { name: 'About Us', url: '/#about'},
    { name: 'Services', url: '/#services' },
    { name: 'Projects', url: '/#projects' },
    { name: 'Testimonials', url: '/#testimonials' },
  ]

  return (
    <footer className="w-full bg-[#1a1a1a] text-white font-syne-500">
      {/* Top Section */}
      <div className="w-full px-6 md:px-12 lg:px-20 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Section - Contact Info */}
            <div className="flex flex-col gap-6">
              {/* Email */}
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:business@acmchapter.design" className="hover:text-gray-300 transition-colors">
                  info@click2print.pk
                  <br />
                  faizi.click2print@gmail.com
                </a>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-300">62-A Shan Arcade Barkat Market New,
                  Garden Town, Lahore, 54000</p>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4 mt-4">
                <a href="#" className="hover:opacity-70 transition-opacity">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="#" className="hover:opacity-70 transition-opacity">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a href="#" className="hover:opacity-70 transition-opacity">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" className="hover:opacity-70 transition-opacity">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Section - Newsletter */}
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl md:text-3xl font-semibold">Subscribe to our newsletter</h2>
              <p className="text-gray-300">Get a summary of what we've been working on.</p>

              <form className="flex flex-col gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address *"
                  className="w-full px-6 py-4 rounded-full bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-(--primary-color)"
                  required
                />
                <button
                  type="submit"
                  className="w-full px-6 py-4 rounded-full border-2 border-white bg-transparent text-white hover:bg-white hover:text-black transition-all duration-300 font-medium"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Section */}
      <div className="w-full px-6 md:px-12 lg:px-20 py-12 md:py-16">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
          {/* Large Brand Text */}
          <div className="flex flex-col items-center text-center">
            <div className="relative flex items-center">
              <h1 className="text-5xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold italic text-white font-Zen Dots leading-none">
                al jannat
              </h1>
              {/* The yellow square icon */}
              <div className="w-3 h-3 md:w-6 md:h-6 bg-[#F5C842] ml-2 self-center"></div>
            </div>

            {/* Updated Scan n print Subtext */}
            <span style={{
              fontSize: "clamp(1rem, 2.5vw, 2rem)", // Scales from 16px to 32px based on screen size
              color: "#F5C842",
              textTransform: "uppercase",
              letterSpacing: "0.6em",
              fontWeight: 700,
              marginTop: "10px",
              display: "block",
              width: "100%",
              textAlign: "center"
            }}>
              Scan n print
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center items-center gap-6 md:gap-10 text-base md:text-lg">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="w-full border-t border-gray-700 px-6 md:px-12 lg:px-20 py-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 text-sm md:text-base">
            Copyright © 2025 <span className="italic">al jannat scan and print</span>. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer