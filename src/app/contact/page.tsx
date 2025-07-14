// 

// src/app/contact/page.tsx

import Navbar from "../components/Navbar";
export default function ContactPage() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="max-w-4xl mx-auto px-4 text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
        <p className="text-lg">
          Have questions or ready to get started? Fill out the form and our team will
          be in touch within 24 hours.
        </p>
      </div>
      <div className="max-w-2xl mx-auto px-4">
        <form className="grid gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded"
          />
          <textarea
            rows={6}
            placeholder="How can we help you?"
            className="w-full p-3 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
        <div className="mt-12 text-center text-gray-600 dark:text-gray-400">
          <p>+91 99297 54424</p>
          <p> info@sourcingsharks.com</p>
          <p>123 Trade Avenue, Mumbai, India</p>
        </div>
      </div>
    </section>
  );
}
