"use client";
import services1 from "../../assets/images/services/services1.jpg";
import services2 from "../../assets/images/services/services2.jpg";
import services3 from "../../assets/images/services/services3.png";
import Image from "next/image";
import Link from "next/link";

export const ServicesCards = () => {

  // Sample event data - replace with your actual data
  const Services = [
    {
      id: 1,
      title: "Tailored Solutions to Power Your Business",
      description:"We design and develop custom web-based software applications tailored specifically to your business workflows and operations. Our solutions improve efficiency, reduce manual work, and ensure seamless digital transformation.",
      features: ["1. Business-specific features and dashboards.","2. Scalable architecture for future growth"],
      category: "Customized Web-Based Software",
      image: services1,
    },
    {
      id: 2,
      title: "DPRTE 2025 Conference",
      Features: "March 26, 2025",
      category: "Conference",
      image: services2,
    },
    {
      id: 3,
      title: "DPRTE 2025 Conference",
      Features: "March 26, 2025",
      category: "Conference",
      image: services3,
    },
    {
      id: 4,
      title: "DPRTE 2025 Conference",
      Features: "March 26, 2025",
      category: "Conference",
      image: services1,
    },
    {
      id: 5,
      title: "DPRTE 2025 Conference",
      Features: "March 26, 2025",
      category: "Conference",
      image: services1,
    },
    {
      id: 6,
      title: "DPRTE 2025 Conference",
      Features: "March 26, 2025",
      category: "Conference",
      image: services1,
    },
    {
      id: 7,
      title: "DPRTE 2025 Conference",
      Features: "March 26, 2025",
      category: "Conference",
      image: services1,
    },
    {
      id: 8,
      title: "DPRTE 2025 Conference",
      Features: "March 26, 2025",
      category: "Conference",
      image: services1,
    },
    // Add other events with isUpcoming: true/false
  ];



  return (
    <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {Services.map((service) => (
            <Link 
            key={service.id}
            href={`/Service/${service.id}`}
            className="group block overflow-hidden rounded-lg border border-white/10 bg-[#111] hover:border-white/20 transition-all duration-300"
            onClick={() => {
              // Store the clicked service in sessionStorage
              sessionStorage.setItem(service.id.toString(), JSON.stringify(service));
            }}
          >
            {/* ... rest of your card content ... */}
            <div className="relative aspect-video sm:aspect-[4/3]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent" />
              </div>

              <div className="p-4 sm:p-5 md:p-6">
                <span className="inline-block mb-3 sm:mb-4 tracking-[2px] sm:tracking-[3px] text-xs sm:text-sm uppercase  text-[#D1AAD7] py-1 sm:py-1.5">
                  {service.category}
                </span>
                <p className="text-xs sm:text-sm text-white/50 mb-3 sm:mb-4">
                  {service.features?.map((feature, index) => (
                    <ul key={index}>
                      <li>{feature}</li>
                    </ul>
                  ))}
                </p>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white">
                  {service.title}
                </h3>
              </div>
          </Link>
          ))}
        </div>
      </div>
    </section>
  );
};