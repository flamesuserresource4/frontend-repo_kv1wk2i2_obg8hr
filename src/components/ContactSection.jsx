import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [status, setStatus] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("Thanks! We'll get back to you shortly.");
    e.currentTarget.reset();
  }

  return (
    <section id="contact" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Let's talk about your project
          </h2>
          <p className="mt-2 text-neutral-600">
            Get a quick quote or book a free showroom consultation.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-neutral-800">Name</label>
                <input
                  required
                  type="text"
                  className="mt-1 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-neutral-900 placeholder-neutral-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-neutral-800">Email</label>
                <input
                  required
                  type="email"
                  className="mt-1 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-neutral-900 placeholder-neutral-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                  placeholder="jane@email.com"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-sm font-medium text-neutral-800">Message</label>
              <textarea
                required
                rows={4}
                className="mt-1 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-neutral-900 placeholder-neutral-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                placeholder="Tell us about your space, size, and preferred style..."
              />
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-amber-600 px-4 py-3 font-medium text-white shadow hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
            >
              Send message
            </button>
            {status && (
              <p className="mt-3 text-center text-sm text-emerald-700">{status}</p>
            )}
          </form>

          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-amber-100 p-2 text-amber-700">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-neutral-900">Showroom</p>
                  <p className="text-sm text-neutral-600">
                    Sandy Tiles, Main Market Road, Your City 123456
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-amber-100 p-2 text-amber-700">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-neutral-900">Phone</p>
                  <p className="text-sm text-neutral-600">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-amber-100 p-2 text-amber-700">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-neutral-900">Email</p>
                  <p className="text-sm text-neutral-600">hello@sandytiles.com</p>
                </div>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1591085686350-7986a12313b1?q=80&w=1600&auto=format&fit=crop"
                alt="Showroom interior"
                className="h-56 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
