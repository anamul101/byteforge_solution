"use client";
import React from "react";
import industry1 from "../assets/icons/industry1.svg";
import industry2 from "../assets/icons/industry2.svg";
import adept from "../assets/images/adept.webp";
import meta from "../assets/images/meta.webp";
import openai from "../assets/images/openai.webp";
import Image from "next/image"; // Recommended for Next.js image handling

const Industry = () => {
  const standards = [
    {
      id: 1,
      name: "fedramp",
      width: 54,
      height: 54,
      src: openai
    },
    {
      id: 2,
      name: "ISO",
      width: 68,
      height: 54,
      src: meta
    },
    {
      id: 3,
      name: "aicpa-soc",
      width: 60,
      height: 60,
      src: adept
    }
  ];

  return (
    <section style={{ backgroundColor: "black", color: "white" }} className="py-10">
      <div className="container mx-auto overflow-hidden">
        <div className="w-[500px] mx-auto">
          <p className="w-full mb-12 text-base text-center text-balance text-silver max-w-[698px] px-4 mx-auto">
            <span className="mr-2 text-white text-opacity-75">Scale is certified compliant with the following industry best practice standards and frameworks</span>
          </p>
          
          {/* Desktop View - Grid Layout */}
          <ul className="items-center justify-center md:gap-y-16 sm:min-h-[52px] gap-8 hidden sm:flex md:justify-around md:container">
            {standards.map((standard) => (
              <li key={standard.id} className="flex items-center justify-center ml-12 lg:ml-0">
                <div className="relative">
                  <Image
                    alt={standard.name}
                    width={standard.width}
                    height={standard.height}
                    src={standard.src}
                  />
                </div>
              </li>
            ))}
          </ul>
          
          {/* Mobile View - Marquee */}
          <div className="md:hidden overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
              {standards.map((standard) => (
                <div key={`mobile-${standard.id}`} className="inline-flex items-center justify-center mx-8">
                  <div className="relative">
                    <Image
                      alt={standard.name}
                      width={standard.width}
                      height={standard.height}
                      className="invert"
                      src={standard.src}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industry;