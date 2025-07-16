// src/components/Services.tsx

const services = [
    {
      title: "Sourcing & Procurement",
      description: "High-quality products at competitive prices.",
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
      features: [
        "Global supplier network",
        "Strict quality control",
        "Custom sourcing solutions",
        "Transparent pricing"
      ]
    },
    {
      title: "Freight Forwarding",
      description: "End-to-end logistics solutions worldwide.",
      img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&q=80",
      features: [
        "Sea, air, and land freight",
        "Real-time shipment tracking",
        "Customs documentation assistance",
        "Door-to-door delivery"
      ]
    },
    {
      title: "Customs Clearance",
      description: "Hassle-free import/export documentation.",
      img: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=400&q=80",
      features: [
        "Expert compliance guidance",
        "Fast-track clearance",
        "Tariff and duty optimization",
        "24/7 support for urgent shipments"
      ]
    },
  ];
  
  export default function Services() {
    return (
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-screen-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow flex flex-col items-center min-h-[380px]"
              >
                <img src={s.img} alt={s.title} className="w-32 h-32 object-cover rounded-full mb-4 shadow" />
                <h3 className="text-xl font-semibold mb-2 text-center">{s.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center mb-3">
                  {s.description}
                </p>
                <ul className="text-left text-slate-600 dark:text-slate-200 text-sm mb-2 list-disc pl-5">
                  {s.features && s.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  