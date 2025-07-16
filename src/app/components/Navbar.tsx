'use client';

import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full z-10 bg-[rgba(30,44,61,0.85)] text-white flex items-center justify-between px-4 md:px-8 py-3 font-semibold shadow backdrop-blur-sm">
      <div className="text-lg md:text-xl tracking-wide">Sourcing Sharks</div>
      <div className="md:hidden">
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="focus:outline-none"
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <div className={`flex-col md:flex-row md:flex gap-8 md:gap-8 text-base md:text-base font-medium items-center absolute md:static top-16 left-0 w-full md:w-auto bg-[rgba(30,44,61,0.97)] md:bg-transparent transition-all duration-200 ease-in-out ${open ? 'flex' : 'hidden md:flex'}`}>
        <a href="/" className="block py-2 md:py-0 px-6 md:px-0 hover:text-blue-300 transition">Home</a>
        <a href="/about" className="block py-2 md:py-0 px-6 md:px-0 hover:text-blue-300 transition">About Us</a>
        <a href="/products" className="block py-2 md:py-0 px-6 md:px-0 hover:text-blue-300 transition">Products</a>
        <a href="/contact" className="block py-2 md:py-0 px-6 md:px-0 hover:text-blue-300 transition">Contact</a>
      </div>
    </nav>
  );
} 