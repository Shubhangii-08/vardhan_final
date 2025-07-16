// src/components/Products.tsx

const products = [
  {
    name: "Construction Materials",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    desc: "All types of construction materials for residential, commercial, and infrastructure projects. Reliable supply, consistent quality, and competitive pricing."
  },
  {
    name: "Scrap (Metals & Plastics)",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    desc: "Global trade of non-ferrous metal scrap (aluminium, copper, etc.) and recyclable plastic scraps. Sustainable, cost-effective sourcing meeting international standards."
  },
  {
    name: "Custom Sourcing",
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    desc: "Name it, we source it! Any material for construction, manufacturing, medicine, FMCG, or specialized needs. Share your specs and preferred origin — we handle the rest."
  },
];

export default function Products() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Our Product Offerings
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p) => (
            <div
              key={p.name}
              className="rounded-lg overflow-hidden shadow hover:shadow-lg transition bg-white flex flex-col"
            >
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex-1 flex flex-col justify-between">
                <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
                <p className="text-gray-600 text-sm">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
  