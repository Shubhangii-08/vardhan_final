// src/components/Products.tsx

const products = [
    { name: "Cement & Aggregates", img: "/images/cement.jpg" },
    { name: "Steel & Metals",      img: "/images/steel.jpg"  },
    { name: "Machinery & Equipment", img: "/images/machinery.jpg" },
  ];
  
  export default function Products() {
    return (
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((p) => (
              <div
                key={p.name}
                className="rounded-lg overflow-hidden shadow hover:shadow-lg transition"
              >
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{p.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  