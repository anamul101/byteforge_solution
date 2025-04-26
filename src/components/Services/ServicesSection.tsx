"use client";
import { useEffect, useState } from "react";
import Button from "../../utility/button";
import datacuration from "@/assets/images/datacuration.webp"
import donovan from "@/assets/images/donovan.webp"

export const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const mediaItems = [
    {
      type: "video",
      src: "https://pub-9ba39fa3c4764cd0bb3a9579562941d6.r2.dev/Public%20Selector%2FPublic-Selector.webm",
    },
    {
      type: "image",
      src: donovan,
    },
    {
      type: "image",
      src: datacuration,
    },
  ];

  return (
    <section className="bg-black text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full mx-auto py-12 md:py-20">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
          {/* Left Content */}
          <div className="flex-1 flex flex-col justify-center items-start lg:pr-4">
            <div className="max-w-2xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 [text-wrap:balance]">
                We Provide <br className="hidden md:inline"/> Professional Services
              </h1>
              <h2 className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8 [text-wrap:balance]">
                Powering AI for Defense, Intelligence,<br className="hidden md:inline"/> and Civilian Agencies.
              </h2>
              <div className="w-full sm:w-auto">
                <Button/>
              </div>
            </div>
          </div>

          {/* Right Carousel */}
          <div className="flex-1 mt-8 md:mt-0 relative border border-white/15 rounded-xl md:rounded-2xl overflow-hidden"
            style={{ aspectRatio: "674 / 432" }}>
            <div className="absolute inset-0">
              {mediaItems.map((item, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === activeIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {item.type === "video" ? (
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src={typeof item.src === "string" ? item.src : item.src.src} type="video/webm" />
                    </video>
                  ) : (
                    <img
                      src={typeof item.src === "string" ? item.src : item.src.src}
                      alt=""
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};