import { Star } from "lucide-react";

const products = [
  {
    name: "Marble Luxe White",
    type: "Polished Porcelain",
    price: 4.99,
    image:
      "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?q=80&w=1600&auto=format&fit=crop",
    rating: 5,
  },
  {
    name: "Urban Concrete Grey",
    type: "Matt Ceramics",
    price: 2.89,
    image:
      "https://images.unsplash.com/photo-1523419409543-8c4f62b45c98?q=80&w=1600&auto=format&fit=crop",
    rating: 4,
  },
  {
    name: "Scandinavian Oak",
    type: "Wood-look Porcelain",
    price: 3.75,
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop",
    rating: 5,
  },
  {
    name: "Mediterranean Blue",
    type: "Glazed Ceramic",
    price: 3.2,
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop",
    rating: 4,
  },
];

function Rating({ value }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < value ? "fill-amber-400 text-amber-400" : "text-neutral-300"}`}
        />
      ))}
    </div>
  );
}

export default function ProductShowcase() {
  return (
    <section id="collection" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Featured Collection
          </h2>
          <p className="mt-2 max-w-2xl text-neutral-600">
            From timeless marble looks to modern concrete finishes, explore our most-loved tiles ready for your next project.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((item) => (
            <article
              key={item.name}
              className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-48 w-full object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="absolute right-2 top-2 rounded-full bg-white/90 px-2 py-1 text-xs font-medium text-neutral-700 shadow backdrop-blur">
                  ${item.price.toFixed(2)} / sq ft
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-neutral-900">
                  {item.name}
                </h3>
                <p className="mt-1 text-sm text-neutral-600">{item.type}</p>
                <div className="mt-3">
                  <Rating value={item.rating} />
                </div>
                <button className="mt-4 w-full rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-800">
                  Enquire
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
