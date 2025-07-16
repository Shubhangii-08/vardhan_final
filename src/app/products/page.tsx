"use client";

import Navbar from "../components/Navbar";
import { useState } from "react";

const referenceProducts = [
  {
    name: "Construction Materials",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80", // Construction site with materials
    desc: "With over three decades of experience, we deliver all types of construction materials for residential, commercial, and infrastructure projects. Our expertise covers foundational supplies to specialized sector-specific requirements. We ensure reliable supply, consistent quality, and on-time delivery—every time.",
    features: [
      "All types of construction materials",
      "Top-quality, trusted suppliers",
      "Highly competitive prices",
      "On-time, reliable delivery"
    ]
  },
  {
    name: "Scrap (Metals & Plastics)",
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80", // Scrap metal yard
    desc: "We are actively engaged in the global trade of non-ferrous metal scrap and a wide variety of plastic scrap materials. Our expertise covers procurement and supply of high-value non-ferrous metals such as aluminium, copper, etc., all sourced from trusted suppliers and processed to meet international quality standards.",
    features: [
      "Non-ferrous metals: aluminium, copper, etc.",
      "Recyclable plastic scraps",
      "Sustainable, cost-effective sourcing",
      "Supports circular economy"
    ]
  },
  {
    name: "Name It, We Source It!",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80", // Global logistics
    desc: "No matter what material you're looking for, we can source it for you—at highly competitive prices, without ever compromising on quality. Share your material specifications and preferred country of origin, and our experienced sourcing team will handle the rest.",
    features: [
      "Any material for any industry",
      "Custom sourcing as per your specs",
      "Global supplier network",
      "Seamless, reliable experience"
    ]
  }
];

export default function ProductsPage() {
  const [products] = useState(referenceProducts);

  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen bg-gradient-to-br from-[#f1f5f9] to-[#e0e7ef]">
        <section className="text-center px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-slate-800">Our Products</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-slate-700">
            We offer a wide range of high-quality, original products for the construction industry and beyond. All our products are sourced from trusted suppliers and come with a one-year guarantee.
          </p>
        </section>
        <section className="max-w-screen-2xl mx-auto px-4 py-8">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-8 text-center">Featured Products</h2>
          {/* Cards Container Start */}
          <div className="cards-container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
              {products.map((p) => (
                <div key={p.name} className="bg-white rounded-xl shadow-md w-full sm:w-96 overflow-hidden text-center mx-auto flex flex-col h-full">
                  <img src={p.img} alt={p.name} className="w-full h-44 object-cover" />
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-slate-800 mb-2">{p.name}</h3>
                    <p className="text-slate-600 text-base mb-3">{p.desc}</p>
                    <ul className="text-left text-slate-600 text-sm mb-4 list-disc pl-5">
                      {p.features && p.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Cards Container End */}
        </section>
        <section className="max-w-3xl mx-auto my-8 bg-white rounded-xl shadow-md px-4 py-8">
          <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-4">Why Buy From Us?</h2>
          <ul className="text-base md:text-lg text-slate-700 pl-5 list-disc">
            <li className="mb-2">Competitive market prices</li>
            <li className="mb-2">International quality standards</li>
            <li className="mb-2">Fast, reliable global shipping</li>
            <li className="mb-2">Expert support and after-sales service</li>
          </ul>
        </section>
      </main>
    </>
  );
}
