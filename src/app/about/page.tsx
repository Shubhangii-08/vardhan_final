// src/app/about/page.tsx

import Navbar from "../components/Navbar";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen bg-gradient-to-br from-[#e0e7ef] to-[#f8fafc]">
        <section className="text-center px-4 py-12">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-slate-800">About Sourcing Sharks</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-slate-700">
            Sourcing Sharks is your trusted partner in global trade. Since 2010, we’ve connected businesses to reliable suppliers, handled end-to-end logistics, and simplified customs compliance—so you can focus on growth.
          </p>
        </section>
        <section className="flex flex-col md:flex-row flex-wrap justify-center gap-6 md:gap-8 my-8 px-4">
          <div className="bg-white rounded-xl shadow-md p-6 min-w-[200px] max-w-xs flex-1 mx-auto">
            <h3 className="text-lg font-bold mb-2 text-blue-600">Our Mission</h3>
            <p className="text-slate-600">To empower businesses of all sizes with seamless import/export solutions.</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 min-w-[200px] max-w-xs flex-1 mx-auto">
            <h3 className="text-lg font-bold mb-2 text-blue-600">Our Vision</h3>
            <p className="text-slate-600">To be the world’s most customer-centric trading partner.</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 min-w-[200px] max-w-xs flex-1 mx-auto">
            <h3 className="text-lg font-bold mb-2 text-blue-600">Our Team</h3>
            <p className="text-slate-600">A diverse group of trade experts, logistics pros, and compliance specialists.</p>
          </div>
        </section>
        <section className="text-center my-12 px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">Meet Our Team</h2>
          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 md:gap-8">
            <div className="bg-slate-100 rounded-lg p-6 min-w-[140px] max-w-xs mx-auto">
              <h4 className="font-bold text-blue-600">Vardhan Sharma</h4>
              <p className="text-slate-500">Founder & CEO</p>
            </div>
            <div className="bg-slate-100 rounded-lg p-6 min-w-[140px] max-w-xs mx-auto">
              <h4 className="font-bold text-blue-600">Priya Mehta</h4>
              <p className="text-slate-500">Head of Logistics</p>
            </div>
            <div className="bg-slate-100 rounded-lg p-6 min-w-[140px] max-w-xs mx-auto">
              <h4 className="font-bold text-blue-600">Rahul Singh</h4>
              <p className="text-slate-500">Compliance Manager</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
