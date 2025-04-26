import React from "react";
import Image from "next/image";
import productimg1 from "../../assets/images/products/productimg1.webp";
import productimg2 from "../../assets/images/products/productimg2.svg";
import productimg3 from "../../assets/images/products/productimg3.svg";
import productimg4 from "../../assets/images/products/productimg4.svg";
import productimg5 from "../../assets/images/products/productimg5.svg";
import productimg6 from "../../assets/images/products/productimg6.svg";
import productimg7 from "../../assets/images/products/productimg7.webp";

interface CustomerCard {
  id: string;
  title: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
}

const CustomersSection = () => {
  const customers: CustomerCard[] = [
    {
      id: "time",
      title: "TIME AI",
      href: "/customers/time",
      imageSrc: productimg7.src,
      imageAlt: "time",
      description: "Disrupting the media industry with TIME AI.",
    },
    {
      id: "cohere",
      title: "Cohere",
      href: "/customers/cohere",
      imageSrc: productimg1.src,
      imageAlt: "cohere",
      description: "Cohere Enhances its Large Language Models with Scale.",
    },
    {
      id: "cohere",
      title: "Cohere",
      href: "/customers/cohere",
      imageSrc: productimg1.src,
      imageAlt: "cohere",
      description: "Cohere Enhances its Large Language Models with Scale.",
    },
    {
      id: "cohere",
      title: "Cohere",
      href: "/customers/cohere",
      imageSrc: productimg1.src,
      imageAlt: "cohere",
      description: "Cohere Enhances its Large Language Models with Scale.",
    },
    {
      id: "cohere",
      title: "Cohere",
      href: "/customers/cohere",
      imageSrc: productimg1.src,
      imageAlt: "cohere",
      description: "Cohere Enhances its Large Language Models with Scale.",
    },
    {
      id: "cohere",
      title: "Cohere",
      href: "/customers/cohere",
      imageSrc: productimg1.src,
      imageAlt: "cohere",
      description: "Cohere Enhances its Large Language Models with Scale.",
    },
    // Add all other customers following the same pattern
    // ...
  ];

  return (
    <section className="py-12 bg-black">
      <div className="container mx-auto px-4 xl:px-0 max-w-7xl">
        {" "}
        {/* Changed from fixed width to responsive max-width */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {" "}
          {/* Improved grid responsive structure */}
          {customers.map((customer) => (
            <div
              key={customer.id}
              className="group transition-all duration-300 hover:-translate-y-1 border border-white/15 rounded-lg hover:border-white/30 hover:shadow-lg hover:shadow-white/10" /* Fixed typo in hover class */
            >
              <a
                href={customer.href}
                className="block h-full overflow-hidden rounded-lg bg-black"
              >
                {/* Image container */}
                <div className="bg-[#111] p-4 md:p-6">
                  {" "}
                  {/* Responsive padding */}
                  <div className="relative h-40 md:h-48 lg:w-[70%]  mx-auto flex items-center justify-center">
                    {" "}
                    {/* Responsive height */}
                    <Image
                      src={customer.imageSrc}
                      alt={customer.imageAlt}
                      fill
                      className="object-contain p-2 md:p-4" /* Responsive padding */
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Text container */}
                <div className="p-4 md:p-6 bg-gradient-to-b from-black/80 to-black/60 backdrop-blur-sm">
                  {" "}
                  {/* Responsive padding */}
                  <h3 className="text-base md:text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {" "}
                    {/* Responsive text */}
                    {customer.title}
                  </h3>
                  <p className="mt-2 text-sm md:text-base text-white/80 line-clamp-2">
                    {" "}
                    {/* Responsive text and opacity */}
                    {customer.description}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomersSection;
