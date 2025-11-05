import { ArrowRight, Star } from "lucide-react";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Spline full-width interactive background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Soft gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="rounded-xl bg-white/70 p-6 shadow-lg backdrop-blur">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/80 px-3 py-1 text-xs font-medium text-amber-700 shadow-sm backdrop-blur">
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              Retail & contractor partner since 2010
            </div>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
              KAG & Anuj Tiles
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-neutral-700 sm:text-lg">
              Premium floor and wall tiles with enterprise-grade pricing, curated collections, and expert guidance for homes and commercial projects.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#collection" className="inline-flex items-center gap-2 rounded-lg bg-amber-600 px-5 py-3 text-white shadow hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2">
                Explore Products
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 bg-white px-5 py-3 text-neutral-900 shadow hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2">
                Request a Quote
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-neutral-700">
              <div className="flex items-center gap-1.5">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              </div>
              <span>Loved by homeowners, architects, and contractors</span>
            </div>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-orange-200/40 blur-3xl" />
            <div className="relative rounded-2xl border border-neutral-200 bg-white/80 p-3 shadow-xl backdrop-blur">
              <img
                src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop"
                alt="Showroom with tile displays"
                className="h-80 w-full rounded-xl object-cover sm:h-96"
              />
              <div className="mt-3 grid grid-cols-3 gap-3">
                {[
                  "https://images.unsplash.com/photo-1582582621959-48d09f146e8b?q=80&w=800&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1595278069441-2e1e3f9d7511?q=80&w=800&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=800&auto=format&fit=crop",
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Tile sample"
                    className="h-24 w-full rounded-lg object-cover"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
