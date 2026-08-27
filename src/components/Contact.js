'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="my-16 w-full max-w-xl px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-slate-800/60 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8 shadow-xl text-center"
      >
        <h2 className="text-3xl font-bold text-white mb-2">Get In Touch</h2>
        <p className="text-slate-400 text-sm mb-6">
          Have a question or want to work together? Drop a message below!
        </p>

        {submitted ? (
          <div className="p-4 bg-cyan-500/10 border border-cyan-500/40 rounded-lg text-cyan-300 font-medium">
            Thank you for reaching out! I'll get back to you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-lg bg-slate-900/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 rounded-lg bg-slate-900/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              required
              className="w-full px-4 py-3 rounded-lg bg-slate-900/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-lg transition shadow-lg shadow-cyan-500/20"
            >
              Send Message
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
}