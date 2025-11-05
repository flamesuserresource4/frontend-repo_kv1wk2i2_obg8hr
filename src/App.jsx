import Hero from "./components/Hero";
import ProductShowcase from "./components/ProductShowcase";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
          <a href="#home" className="text-lg font-extrabold tracking-tight">
            Sandy Tiles
          </a>
          <nav className="hidden gap-6 text-sm font-medium text-neutral-700 sm:flex">
            <a href="#collection" className="hover:text-neutral-900">
              Collection
            </a>
            <a href="#about" className="hover:text-neutral-900">
              About
            </a>
            <a href="#contact" className="rounded-lg bg-amber-600 px-3 py-1.5 text-white hover:bg-amber-700">
              Get a Quote
            </a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <ProductShowcase />
        <AboutSection />
        <ContactSection />
      </main>

      <footer className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-8 text-center text-sm text-neutral-600 lg:px-8">
          © {new Date().getFullYear()} Sandy Tiles. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
