"use client";

import * as React from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = React.useState(false);
  const [form, setForm] = React.useState({ name: "", phone: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-primary/10 border border-primary/20 rounded-2xl p-10 text-center">
        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-white text-2xl">✓</span>
        </div>
        <h3 className="font-logo text-3xl text-foreground mb-2">Message Sent!</h3>
        <p className="font-display text-muted-foreground">Thanks for reaching out. We'll get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-display text-lg font-semibold text-foreground mb-1.5">Name *</label>
          <input
            required
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full border border-border rounded-lg px-4 py-3 font-display text-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block font-display text-lg font-semibold text-foreground mb-1.5">Phone</label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full border border-border rounded-lg px-4 py-3 font-display text-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="(859) 555-0000"
          />
        </div>
      </div>
      <div>
        <label className="block font-display text-lg font-semibold text-foreground mb-1.5">Email *</label>
        <input
          required
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full border border-border rounded-lg px-4 py-3 font-display text-lg focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label className="block font-display text-lg font-semibold text-foreground mb-1.5">Message *</label>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full border border-border rounded-lg px-4 py-3 font-display text-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          placeholder="How can we help?"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-primary text-white font-display font-semibold py-3.5 rounded-full hover:bg-accent"
      >
        Send Message
      </button>
    </form>
  );
}
