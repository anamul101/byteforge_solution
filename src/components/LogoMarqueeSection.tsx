"use client";
import Marquee from 'react-fast-marquee';
import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import microsoft from "../assets/images/microsoft.webp";
import meta from "../assets/images/meta.webp";
import openai from "../assets/images/openai.webp";
import cohere from "../assets/images/cohere.webp";
import adept from "../assets/images/adept.webp";
import acmeLogo from "../assets/images/acme.png";
import quantumLogo from "../assets/images/quantum.png";
import echoLogo from "../assets/images/echo.png";
import celestialLogo from "../assets/images/celestial.png";

type LogoItem = {
  alt: string;
  width: number;
  height: number;
  src: string | StaticImageData;
};

type LogoGroup = {
  title: string;
  active: boolean;
  logos: LogoItem[];
};

const LogoMarqueeSection = () => {
  const [activeGroup, setActiveGroup] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Auto-rotate desktop logos every 3 seconds
    const interval = setInterval(() => {
      setActiveGroup((prev) => (prev + 1) % logoGroups.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const logoGroups: LogoGroup[] = [
    {
      title: "Generative AI Companies",
      active: activeGroup === 0,
      logos: [
        { alt: "microsoft", width: 100, height: 22, src: microsoft },
        { alt: "meta", width: 90, height: 20, src: meta },
        { alt: "openai", width: 90, height: 24, src: openai },
        { alt: "cohere", width: 140, height: 24, src: cohere },
        { alt: "adept", width: 75, height: 36, src: adept },
      ],
    },
    {
      title: "U.S. Government Agencies",
      active: activeGroup === 1,
      logos: [
        { alt: "usarmy", width: 40, height: 40, src: acmeLogo },
        { alt: "airforce", width: 65, height: 51, src: quantumLogo },
        { alt: "defense innovation unit", width: 120, height: 14, src: echoLogo },
        { alt: "cdao", width: 113, height: 30, src: celestialLogo },
        { alt: "adept", width: 75, height: 36, src: adept },
      ],
    },
    {
      title: "Enterprises",
      active: activeGroup === 2,
      logos: [
        { alt: "cisco", width: 80, height: 42, src: microsoft },
        { alt: "time", width: 90, height: 29, src: meta },
        { alt: "dlapiper", width: 90, height: 52, src: openai },
        { alt: "gafg", width: 208, height: 32, src: cohere },
        { alt: "howard-hughes", width: 180, height: 32, src: adept },
      ],
    },
  ];

  const mobileLogos = [...logoGroups[0].logos, ...logoGroups[1].logos, ...logoGroups[2].logos];

  const handleGroupClick = (index: number) => {
    setActiveGroup(index);
  };

  return (
    <section style={{ backgroundColor: "black", color: "white" }} className="py-18 lg:py-20 bg-transparent pt-0 lg:pt-0 pb-0 lg:pb-0 relative overflow-hidden">
      <div className="relative  mx-auto">
        <div className="pt-6 pb-12 sm:pb-16 sm:pt-20 xl:pb-16 xl:pt-24" style={{ opacity: 1, visibility: "inherit" }}>
          {/* Desktop Title and Navigation */}
          <div className="hidden mb-12 text-sm leading-6 text-center text-neutral-400 lg:block">
            Scale works with{" "}
            {logoGroups.map((group, index) => (
              <React.Fragment key={index}>
                <button
                  className={`section-title inline-block relative cursor-pointer transition-colors duration-300 ${
                    group.active ? "text-white" : "hover:text-neutral-200"
                  }`}
                  type="button"
                  onClick={() => handleGroupClick(index)}
                >
                  {group.title}
                  <div
                    className={`transition-opacity duration-300 absolute bottom-0 h-[1px] w-full ${
                      group.active ? "bg-white opacity-100" : "bg-silver opacity-0"
                    }`}
                  ></div>
                </button>
                {index < logoGroups.length - 1 ? ", " : ""}
                {index === logoGroups.length - 2 ? " & " : ""}
              </React.Fragment>
            ))}
          </div>

          {/* Desktop Logo Grid */}
          <div className="relative hidden lg:block h-14">
            {logoGroups.map((group, index) => (
              <div
                key={index}
                className={`logos absolute w-full top-1/2 -translate-y-1/2 transition-opacity duration-700 ${
                  group.active ? "opacity-100 delay-300" : "opacity-0 pointer-events-none"
                }`}
              >
                <div className="relative grid text-white">
                  <ul className="flex items-center justify-center gap-12">
                    {group.logos.map((logo, logoIndex) => (
                      <li key={logoIndex} className="flex justify-center items-center">
                        <div className="relative">
                          <Image
                            alt={logo.alt}
                            width={logo.width}
                            height={logo.height}
                            src={logo.src}
                            className="object-contain"
                            style={{ color: "transparent" }}
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Version */}
          <div className="lg:hidden">
            <p className="mb-10 text-sm leading-6 text-center text-gray-400">
              Scale works with Generative AI Companies, U.S. Government Agencies & Enterprises
            </p>
            <div className="relative w-full h-[60px] overflow-hidden">
              <Marquee speed={40} gradient={false} pauseOnHover>
                {mobileLogos.map((logo, index) => (
                  <div key={index} className="flex items-center justify-center mx-8">
                    <Image
                      alt={logo.alt}
                      width={logo.width}
                      height={logo.height}
                      src={logo.src}
                      className="object-contain h-[40px]"
                      style={{ color: "transparent" }}
                    />
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoMarqueeSection;