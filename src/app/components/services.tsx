// src/components/Services.tsx

const services = [
    {
      title: "Sourcing & Procurement",
      description: "High-quality products at competitive prices.",
      img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Freight Forwarding",
      description: "End-to-end logistics solutions worldwide.",
      img: "https://images.unsplash.com/photo-1505839673365-e3971f8d9184?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Customs Clearance",
      description: "Hassle-free import/export documentation.",
      img: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=400&q=80"
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
                className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow flex flex-col items-center"
              >
                <img src={s.img} alt={s.title} className="w-24 h-24 object-cover rounded-full mb-4 shadow" />
                <h3 className="text-xl font-semibold mb-2 text-center">{s.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  