"use client";
import Button from "@/utility/button";
import React, { useEffect, useRef } from "react";

const ProductsHeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.error("Video autoplay failed:", error);
          // Fallback: Show play button or try again
        });
      }
    }
  }, []);

  return (
    <section className="bg-black text-white w-full overflow-hidden">
      <div className="container mx-auto px-4 py-10 md:py-20 lg:py-0 xl:max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="mb-4">
              <a
                href="/data-engine"
                className="text-sm md:text-base font-medium text-purple-300 hover:text-purple-200 transition-colors"
              >
                Scale Data Engine
              </a>
            </div>

            <h1
              className="font-aeonik text-4xl pb-2 md:text-5xl lg:text-5xl text-center w-full [text-wrap:balance] 
                px-4 sm:px-0 sm:pr-12  lg:pr-[16px] text-gray-70"
            >
              Generative AI Data Engine
            </h1>

            <h2
              className="text-base md:text-lg lg:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl 
                px-4 sm:px-0"
            >
              Powering the Next Frontier of AI.
            </h2>

            <div className="w-full flex justify-center lg:justify-start">
              <Button />
              {/* <button
                className="relative group bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-xl px-8 py-4 transition-all duration-300"
                style={{ WebkitTapHighlightColor: "transparent" }}
              >
                <div className="flex items-center">
                  Book a Demo
                  <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </div>
                <span className="absolute inset-0 rounded-xl border border-white border-opacity-30 pointer-events-none" />
              </button> */}
            </div>
          </div>

          {/* Video Container */}
          <div className="w-full lg:w-1/2 aspect-video rounded-xl overflow-hidden shadow-2xl">
            <div className="relative w-full h-full">
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-cover"
                poster="https://via.placeholder.com/800x450" // Replace with your poster image
              >
                <source
                  src="https://pub-9ba39fa3c4764cd0bb3a9579562941d6.r2.dev/GenAI%2F720p%2FGenAI-720p-mp4.mp4"
                  type="video/mp4"
                />
                <source
                  src="https://pub-9ba39fa3c4764cd0bb3a9579562941d6.r2.dev/GenAI%2F720p%2FGenAI-720p-webm.webm"
                  type="video/webm"
                />
                Your browser does not support the video tag.
              </video>

              {/* Fallback for browsers that don't support video */}
              <div className="absolute inset-0 bg-gray-900 flex items-center justify-center hidden">
                <p className="text-white">Video playback not supported</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsHeroSection;
