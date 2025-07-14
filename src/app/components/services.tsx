// src/components/Services.tsx


const services = [
    {
      title: "Sourcing & Procurement",
      description: "High-quality products at competitive prices.",
    },
    {
      title: "Freight Forwarding",
      description: "End-to-end logistics solutions worldwide.",
    },
    {
      title: "Customs Clearance",
      description: "Hassle-free import/export documentation.",
    },
  ];
  
  export default function Services() {
    return (
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow"
              >
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  