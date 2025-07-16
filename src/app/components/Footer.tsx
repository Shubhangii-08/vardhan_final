'use client';

import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-[rgba(30,44,61,0.92)] text-white text-center px-2 sm:px-4 pt-10 pb-4 font-medium mt-auto shadow-[0_-2px_8px_rgba(30,44,61,0.04)]">
      <div className="flex flex-col md:flex-row flex-wrap justify-center items-start gap-8 md:gap-12 max-w-6xl mx-auto mb-6 px-2">
        {/* Company Info */}
        <div className="min-w-[180px] flex-1 text-left">
          <div className="text-slate-300 text-base mb-1">
            <b>Phone:</b> <a href="tel:+919929754424" className="text-slate-300 hover:text-blue-300 transition">+91 9929754424</a>
          </div>
          <div className="text-slate-300 text-base mb-1">
            <b>Email:</b> <a href="mailto:info@sourcingsharks.com" className="text-slate-300 hover:text-blue-300 transition">info@sourcingsharks.com</a>
          </div>
          <div className="text-slate-300 text-base">
            <b>Address:</b> C/O : Jerry's Trading & Company
          </div>
        </div>
        {/* Quick Links */}
        <div className="min-w-[140px] flex-1 text-left">
          <div className="font-bold mb-2">Quick Links</div>
          <div className="flex flex-col gap-1">
            <a href="/about" className="text-slate-300 hover:text-blue-300 transition">About Us</a>
            <a href="/products" className="text-slate-300 hover:text-blue-300 transition">Products</a>
            <a href="/contact" className="text-slate-300 hover:text-blue-300 transition">Contact</a>
          </div>
        </div>
        {/* Newsletter Signup */}
        <div className="min-w-[200px] flex-1 text-left">
          <div className="font-bold mb-2">Subscribe to our Newsletter</div>
          <form className="flex gap-2 flex-col sm:flex-row items-start sm:items-center mb-2" onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="Your email address" className="px-3 py-2 rounded border-none text-base outline-none min-w-[120px] w-full sm:w-auto" />
            <button type="submit" className="bg-blue-600 text-white rounded px-4 py-2 font-semibold hover:bg-blue-700 transition">Subscribe</button>
          </form>
          <div className="text-slate-300 text-sm">Get updates on new products and offers.</div>
        </div>
        {/* Social Media */}
        <div className="min-w-[120px] flex-1 text-left">
          <div className="font-bold mb-2">Follow Us</div>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-slate-300 hover:text-blue-300 transition">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-slate-300 hover:text-blue-300 transition">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.254a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.21-.005-.423-.015-.633A9.936 9.936 0 0 0 24 4.557z"/></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-300 hover:text-blue-300 transition">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-700 pt-4 text-slate-300 flex flex-col md:flex-row flex-wrap justify-center items-center gap-2 md:gap-8 text-sm">
        <div>&copy; {new Date().getFullYear()} Sourcing Sharks. All rights reserved. | Powered by Sourcing Sharks</div>
        <div>
          <a href="/privacy" className="text-slate-300 hover:text-blue-300 mx-2 transition">Privacy Policy</a>
          |
          <a href="/terms" className="text-slate-300 hover:text-blue-300 mx-2 transition">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
} 