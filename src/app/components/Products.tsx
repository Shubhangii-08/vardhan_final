"use client";
// src/components/Products.tsx
import { motion } from "framer-motion";

// New, high-quality images sourced from Unsplash
const products = [
  {
    name: "Construction Materials",
    img: "https://images.unsplash.com/photo-1519995451813-39e21b0ba48a?auto=format&fit=crop&w=800&q=80",
    desc: "All types of construction materials for residential, commercial, and infrastructure projects. Reliable supply, consistent quality, and competitive pricing.",
  },
  {
    name: "Scrap (Metals & Plastics)",
    img: "https://images.unsplash.com/photo-1611270418597-a6c77d5bdeed?auto=format&fit=crop&w=800&q=80",
    desc: "Global trade of non-ferrous metal scrap (aluminium, copper, etc.) and recyclable plastic scraps. Sustainable, cost-effective sourcing meeting international standards.",
  },
  {
    name: "Custom Sourcing",
    img: "https://images.unsplash.com/photo-1579226905180-636b76d96a65?auto=format&fit=crop&w=800&q=80",
    desc: "Name it, we source it! Any material for construction, manufacturing, medicine, FMCG, or specialized needs. Share your specs and preferred origin — we handle the rest.",
  },
];

// Animation variants for the container to orchestrate staggered children animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Each child will animate 0.2s after the previous one
    },
  },
};

// Animation variants for each product card
const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
    },
  },
};

export default function Products() {
  return (
    <section className="py-20 sm:py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            className="text-3xl sm:text-4xl font-extrabold tracking-tight"
            style={{ color: "#394655" }}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            Our Product Offerings
          </motion.h2>
          <motion.p
            className="mt-4 max-w-2xl mx-auto text-lg text-slate-500"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Delivering quality and reliability across our entire product range.
          </motion.p>
        </div>

        {/* The motion.div container that controls the staggered animation */}
        <motion.div
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible" // Triggers the animation when the element is in view
          viewport={{ once: true, amount: 0.2 }} // Animation runs once
        >
          {products.map((p) => (
            <motion.div
              key={p.name}
              className="group rounded-xl overflow-hidden bg-white shadow-lg"
              variants={cardVariants} // Apply card-specific animation variants
              whileHover={{
                scale: 1.05,
                translateY: -8,
                boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
              }} // Enhanced hover animation
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-56 object-cover"
                />
              </div>
              <div className="p-6">
                <h3
                  className="text-2xl font-bold"
                  style={{ color: "#394655" }}
                >
                  {p.name}
                </h3>
                <p className="mt-3 text-base text-slate-600 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}