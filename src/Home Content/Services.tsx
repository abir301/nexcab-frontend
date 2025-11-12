function Services() {
 const services = [
    {
      icon: "public/images/car.png",
      title: "Standard Car Rental",
      desc: "Enjoy comfortable and affordable rides for any occasion.",
    },
    {
      icon: "public/images/truck.png",
      title: "Express Delivery Service",
      desc: "Fast and reliable transport for goods with timely tracking.",
    },
    {
      icon: "public/images/key.png",
      title: "Key Handover Service",
      desc: "Quick and easy vehicle handoff for a seamless rental experience.",
    },
  ];

  return (
    <section className="bg-[#f4fdff] py-20">
      <div className="max-w-7xl mx-auto text-center px-6">
        <h2 className="text-5xl font-bold text-gray-900 mb-12">
          Explore our wide range of <br /> rental services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-sm p-8 flex flex-col items-center hover:shadow-xl transition duration-300"
            >
              <div className="mb-6">
                <div className="w-16 h-16 flex items-center justify-center">
                  <img src={service.icon} alt={service.title} />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
