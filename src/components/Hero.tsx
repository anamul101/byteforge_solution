"use client";
import Image from "next/image";
import hero from "../assets/images/hero.webp";
import { useEffect, useRef, useState } from "react";
import React from "react"; // Ensure React is imported for JSX/TSX support

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after the component is mounted
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Delay to ensure smooth animation
    return () => clearTimeout(timer);
  }, []);
  return (
    <section
      id=""
      className="py-18 lg:py-20 bg-transparent pt-0 lg:pt-0 pb-0 lg:pb-0 text-white bg-black"
      style={{ backgroundColor: "black" }}
    >
      <div className="container relative py-5">
        {/* Canvas Section */}
        <div className="absolute top-0 hidden -translate-x-1/2 lg:block left-1/2">
          <div className="w-full lg:w-auto pointer-events-none select-none">
            <div className="hidden md:block">
              <div>
                <div
                  className="[&>canvas]:!w-full [&>canvas]:!h-full"
                  style={{ width: "100%", height: "100%" }}
                >
                  <canvas
                    style={{ display: "block", width: 2800, height: 1300 }}
                    width={0}
                    height={0}
                  ></canvas>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <Image
          alt=""
          loading="lazy"
          width={1100}
          height={511}
          decoding="async"
          data-nimg={1}
          className={`top-7 my-7 sm:top-0 transition-opacity duration-1000 pointer-events-none absolute object-cover md:left-1/2 -translate-x-1/2 py-4 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ color: "transparent" }}
          src={hero}
        />

        {/* Content Section */}
        <div className="pt-10 xl:pt-44">
          <div className="relative z-10">
            {/* Heading */}
            <h1
              className="text-[2rem] font-light sm:leading-none leading-[1.1] sm:text-7xl xl:text-[89px] tracking-[-0.89px] font-aeonik text-center"
              style={{ textShadow: "0px 10px 20px 0px rgba(0, 0, 0, 0.35)" }}
            >
              What we offer <br />
              <span className="relative inline-block h-[1.2em] my-4">
                <span className="invisible">Web&nbsp;Development</span>
                <div className="hero_cubespinner__5nU4O">
                  <div className="hero_face1____5ZN">Web&nbsp;Development</div>
                  <div className="hero_face2__hWvJM">Digital&nbsp;Marketing</div>
                  <div className="hero_face3__qUXn4">Video&nbsp;Editing</div>
                  <div className="hero_face4__qUXnd4">Mobile&nbsp;Application</div>
                </div>
              </span>
            </h1>

            {/* Subheading */}
            <h2 className="my-4 font-sans text-base text-[#F5F5F5] sm:px-0 font-medium leading-normal lg:my-[22px] lg:text-lg md:w-11/12 lg:w-full text-center lg:max-w-[860px] mx-auto">
              “ByteForge Solutions – Your All-in-One Partner for Digital
              Transformation”
            </h2>

            {/* Buttons */}
            <div className="flex items-start w-full mx-auto space-x-6 md:mb-0 xl:mb-9 max-w-max">
              {/* Social Icons */}
              <div className="flex items-start space-x-4">
                <a
                  href="#"
                  className="text-[#F4F0FF] hover:text-white transition-colors duration-300"
                  style={{ WebkitTapHighlightColor: "transparent" }}
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-[#F4F0FF] hover:text-white transition-colors duration-300"
                  style={{ WebkitTapHighlightColor: "transparent" }}
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-[#F4F0FF] hover:text-white transition-colors duration-300"
                  style={{ WebkitTapHighlightColor: "transparent" }}
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-[#F4F0FF] hover:text-white transition-colors duration-300"
                  style={{ WebkitTapHighlightColor: "transparent" }}
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
