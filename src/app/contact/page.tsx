'use client';

// src/app/contact/page.tsx

import React, { useState } from "react";
import Navbar from "../components/Navbar";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type ErrorState = {
  name?: string;
  email?: string;
  message?: string;
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<ErrorState>({});
  const [success, setSuccess] = useState("");
  const [submitting, setSubmitting] = useState(false);

  function validate(): ErrorState {
    const errs: ErrorState = {};
    if (!form.name.trim()) errs.name = "Name is required.";
    if (!form.email.trim()) errs.email = "Email is required.";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errs.email = "Invalid email address.";
    if (!form.message.trim()) errs.message = "Message is required.";
    return errs;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      setSuccess("");
      return;
    }
    setSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        setSuccess("Thank you! We'll be in touch within 24 hours.");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setSuccess("There was an error. Please try again later.");
      }
    } catch (err) {
      setSuccess("There was an error. Please try again later.");
    }
    setSubmitting(false);
  }

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
          <form className="grid gap-6" onSubmit={handleSubmit} noValidate aria-label="Contact form">
            <div>
              <label htmlFor="name" className="block font-medium text-gray-700 mb-1">Name<span className="text-red-500">*</span></label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                className={`w-full p-3 border rounded text-base focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition ${errors.name ? "border-red-400" : "border-gray-300"} text-black`}
                value={form.name}
                onChange={handleChange}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
                placeholder="Your Name"
                required
              />
              {errors.name && <div id="name-error" className="text-red-500 text-sm mt-1">{errors.name}</div>}
            </div>
            <div>
              <label htmlFor="email" className="block font-medium text-gray-700 mb-1">Email<span className="text-red-500">*</span></label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className={`w-full p-3 border rounded text-base focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition ${errors.email ? "border-red-400" : "border-gray-300"} text-black`}
                value={form.email}
                onChange={handleChange}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                placeholder="Your Email"
                required
              />
              {errors.email && <div id="email-error" className="text-red-500 text-sm mt-1">{errors.email}</div>}
            </div>
            <div>
              <label htmlFor="phone" className="block font-medium text-gray-700 mb-1">Phone</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                className="w-full p-3 border border-gray-300 rounded text-base focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition text-black"
                value={form.phone}
                onChange={handleChange}
                placeholder="Your Phone (optional)"
              />
            </div>
            <div>
              <label htmlFor="message" className="block font-medium text-gray-700 mb-1">Message<span className="text-red-500">*</span></label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className={`w-full p-3 border rounded text-base focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition ${errors.message ? "border-red-400" : "border-gray-300"} text-black`}
                value={form.message}
                onChange={handleChange}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
                placeholder="How can we help you?"
                required
              />
              {errors.message && <div id="message-error" className="text-red-500 text-sm mt-1">{errors.message}</div>}
            </div>
            <button
              type="submit"
              className="py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-bold text-lg flex items-center justify-center disabled:opacity-60"
              disabled={submitting}
              aria-busy={submitting}
            >
              {submitting ? (
                <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>
              ) : null}
              {submitting ? "Sending..." : "Send Message"}
            </button>
            {success && <div className="text-green-600 text-center font-medium mt-2">{success}</div>}
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
