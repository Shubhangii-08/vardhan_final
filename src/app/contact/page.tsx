// src/app/contact/page.tsx

import Navbar from "../components/Navbar";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen bg-gradient-to-br from-[#e0e7ef] to-[#f8fafc]">
        <section className="text-center px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-slate-800">Get in Touch</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-slate-700">
            Have questions or ready to get started? Fill out the form and our team will be in touch within 24 hours.
          </p>
        </section>
        <section className="max-w-xl mx-auto bg-white rounded-xl shadow-md px-4 py-8">
          <form className="grid gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded text-base mb-4"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded text-base mb-4"
            />
            <textarea
              rows={6}
              placeholder="How can we help you?"
              className="w-full p-3 border border-gray-300 rounded text-base mb-4"
            />
            <button
              type="submit"
              className="py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-bold text-lg"
            >
              Send Message
            </button>
          </form>
        </section>
        <section className="text-center mt-10 text-slate-500 px-4">
          <p className="text-base md:text-lg mb-1"><b>Phone:</b> +91 99297 54424</p>
          <p className="text-base md:text-lg mb-1"><b>Email:</b> info@sourcingsharks.com</p>
          <p className="text-base md:text-lg"><b>Address:</b> 123 Trade Avenue, Mumbai, India</p>
        </section>
      </main>
    </>
  );
}
