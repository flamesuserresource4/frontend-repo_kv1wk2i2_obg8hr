import { Home, Ruler, ShieldCheck, Truck } from "lucide-react";

const features = [
  {
    title: "Expert Guidance",
    desc: "Personalized recommendations for homes and commercial spaces.",
    icon: Home,
  },
  {
    title: "Precise Measurements",
    desc: "On-site measurements to minimize waste and ensure perfect fit.",
    icon: Ruler,
  },
  {
    title: "Quality Assured",
    desc: "Sourced from trusted brands with long-lasting finishes.",
    icon: ShieldCheck,
  },
  {
    title: "Fast Delivery",
    desc: "Quick and careful delivery right to your site.",
    icon: Truck,
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-neutral-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Your trusted tile partner
            </h2>
            <p className="mt-4 text-neutral-600">
              At KAG & Anuj Tiles, we help you create beautiful, lasting spaces. Whether you’re renovating a kitchen, upgrading a bathroom, or building from scratch, our curated selection of tiles brings together style, performance, and value.
            </p>
            <p className="mt-3 text-neutral-600">
              Visit our showroom to see full-size displays, touch real samples, and get expert advice tailored to your project.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {features.map((f) => (
              <div
                key={f.title}
                className="flex items-start gap-3 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm"
              >
                <div className="rounded-lg bg-amber-100 p-2 text-amber-700">
                  <f.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900">{f.title}</h3>
                  <p className="mt-1 text-sm text-neutral-600">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
