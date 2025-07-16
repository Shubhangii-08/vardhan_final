import Navbar from "../components/Navbar";

const products = [
  { name: "Cement & Aggregates", img: "/images/cement.jpg" },
  { name: "Steel & Metals", img: "/images/steel.jpg" },
  { name: "Machinery & Equipment", img: "/images/machinery.jpg" },
];

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen bg-gradient-to-br from-[#f1f5f9] to-[#e0e7ef]">
        <section className="text-center px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-slate-800">Our Products</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-slate-700">
            We offer a wide range of high-quality, original products for the construction industry and beyond. All our products are sourced from trusted suppliers and come with a one-year guarantee.
          </p>
        </section>
        <section className="max-w-6xl mx-auto px-4 py-8">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-8 text-center">Featured Products</h2>
          <div className="flex flex-col sm:flex-row flex-wrap gap-6 justify-center">
            {products.map((p) => (
              <div key={p.name} className="bg-white rounded-xl shadow-md w-full sm:w-80 overflow-hidden text-center mx-auto">
                <img src={p.img} alt={p.name} className="w-full h-44 object-cover" />
                <div className="p-5">
                  <h3 className="text-lg font-bold text-slate-800">{p.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="max-w-3xl mx-auto my-8 bg-white rounded-xl shadow-md px-4 py-8">
          <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-4">Why Buy From Us?</h2>
          <ul className="text-base md:text-lg text-slate-700 pl-5 list-disc">
            <li className="mb-2">Competitive market prices</li>
            <li className="mb-2">International quality standards</li>
            <li className="mb-2">Fast, reliable global shipping</li>
            <li className="mb-2">Expert support and after-sales service</li>
          </ul>
        </section>
      </main>
    </>
  );
}
