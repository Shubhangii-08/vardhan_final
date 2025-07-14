// src/components/Hero.tsx

import Navbar from "../components/Navbar";
export default function Hero() {
    return (
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl font-extrabold mb-4">
          From Port to Port, Your Global Support
        </h1>
        <p className="text-xl mb-8 max-w-2xl">
          We simplify international trade—sourcing, logistics, compliance—and help
          your business expand with confidence.
        </p>
        <a
          href="/contact"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Get Started
        </a>
      </section>
    );
  }
  