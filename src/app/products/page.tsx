// import Navbar from "../components/Navbar";

// export default function ProductsPage() {
//   return (
//     <>
//       <Navbar />
//       <main style={{
//         padding: "6rem 2rem 2rem 2rem",
//         color: "#fff",
//         minHeight: "100vh",
//         background: "repeating-linear-gradient(135deg, #2a5298 0px, #2a5298 40px, #1e3c72 40px, #1e3c72 80px)",
//         boxSizing: "border-box"
//       }}>
//         <h1>Our Products</h1>
//         <p style={{ maxWidth: 700, fontSize: "1.2rem", margin: "2rem auto" }}>
//           We offer a wide range of high-quality, original products for the construction industry and beyond. All our products are sourced from trusted suppliers and come with a one-year guarantee.
//         </p>
//         <h2>Featured Products</h2>
//         <ul style={{ maxWidth: 700, margin: "1rem auto 2rem auto", fontSize: "1.1rem" }}>
//           <li>Premium Cement & Building Materials</li>
//           <li>Steel & Metal Products</li>
//           <li>Electrical & Plumbing Supplies</li>
//           <li>Tiles, Flooring & Finishing Materials</li>
//           <li>Custom Sourcing Solutions</li>
//         </ul>
//         <h2>Why Buy From Us?</h2>
//         <ul style={{ maxWidth: 700, margin: "1rem auto 2rem auto", fontSize: "1.1rem" }}>
//           <li>Competitive market prices</li>
//           <li>International quality standards</li>
//           <li>Fast, reliable global shipping</li>
//           <li>Expert support and after-sales service</li>
//         </ul>
//       </main>
//     </>
//   );
// } 
// src/app/products/page.tsx

import Navbar from "../components/Navbar";
export default function ProductsPage() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-12">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="rounded-lg overflow-hidden shadow hover:shadow-lg transition">
            <img
              src="/images/cement.jpg"
              alt="Cement & Aggregates"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Cement & Aggregates</h3>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow hover:shadow-lg transition">
            <img
              src="/images/steel.jpg"
              alt="Steel & Metals"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Steel & Metals</h3>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow hover:shadow-lg transition">
            <img
              src="/images/machinery.jpg"
              alt="Machinery & Equipment"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Machinery & Equipment</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
