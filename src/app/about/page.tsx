// src/app/about/page.tsx

import Navbar from "../components/Navbar";
export default function AboutPage() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="max-w-4xl mx-auto px-4 text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg">
          Sourcing Sharks is your trusted partner in global trade. Since 2010, 
          we’ve connected businesses to reliable suppliers, handled end-to-end logistics, 
          and simplified customs compliance—so you can focus on growth.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
          <p className="text-gray-600 dark:text-gray-300">
            To empower businesses of all sizes with seamless import/export solutions.
          </p>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
          <p className="text-gray-600 dark:text-gray-300">
            To be the world’s most customer-centric trading partner.
          </p>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-2">Our Team</h3>
          <p className="text-gray-600 dark:text-gray-300">
            A diverse group of trade experts, logistics pros, and compliance specialists.
          </p>
        </div>
      </div>
    </section>
  );
}
