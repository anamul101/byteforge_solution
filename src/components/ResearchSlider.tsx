"use client"
import React from "react";
import Plasmic from "../assets/images/plasmic.webp";
import Refusal from "../assets/images/Refusal.webp";
import Reward from "../assets/images/Reward.webp";
import Researc from "../assets/images/Researc.webp";
import Robust from "../assets/images/Robust.webp";
import Careful from "../assets/images/Careful.webp";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react"
const ResearchSlider: React.FC = () => {
 
  const researchItems = [
    {
      href: "/",
      src: Careful,
      category: "Leaderboards",
      title: "SEAL Leaderboards: Expert-Driven Private Evaluations",
    },
    {
      href: "/",
      src: Robust,
      category: "Research",
      title: "LLMs Easily Jailbroken as Browser Agents",
    },
    {
      href: "/",
      src: Researc,
      category: "Research",
      title: "Multi-Turn Human Jailbreaks on LLM Defenses",
    },
    {
      href: "/",
      src: Reward,
      category: "Research",
      title: "Examination of LLM Performance on Grade School Arithmetic",
    },
    {
      href: "/",
      src: Refusal,
      category: "Research",
      title: "Goal-Conditioned Representations for Reward Models",
    },
    {
      href: "/",
      src: Plasmic,
      category: "Research",
      title: "Measuring and Reducing Malicious Use With Unlearning",
    },
  ];
 // slider functionality
 const [sliderRef] = useKeenSlider<HTMLDivElement>({
  breakpoints: {
    "(min-width: 400px)": {
      slides: { perView: 1, spacing: 5 },
    },
    "(min-width: 700px)": {
      slides: { perView: 2, spacing: 5 },
    },
    "(min-width: 1000px)": {
      slides: { perView: 3, spacing: 10 },
    },
  },
  slides: { 
    perView: 1,
    origin: "center"
  },
  // loop: true,
  // drag: true,
});
  return (
    <section className="py-5 lg:py-20 bg-transparent pt-0 lg:pt-0 pb-0 lg:pb-0 overflow-hidden bg-black">
      <div className="container relative bg-black text-white py-5">
        <div>
          <div  ref={sliderRef} className="keen-slider flex !overflow-visible cursor-grab  h-[140px] sm:h-[167px] xl:h-[192px] gap-3  opacity-100 visible">
            {researchItems.map((items, i) => (
              <a
                key={i}
                href={items.href}
                className="w-[467.2px] sm:w-[467.2px] research-slider_event-card___fO5x keen-slider__slide group rounded-2xl relative text-left !opacity-100 !visible focus-visible:outline outline-[rgba(255,255,255,0.64)] outline-offset-[3px] bg-white/[0.04]"
                style={{
                  transform: `translated(${
                    -998.399 + i * 32
                  }px, 0px, 0px)`,
                  minWidth: "467.2px",
                  maxWidth: "467.2px",
                }}
              >
                <div className="flex items-center xl:items-start xl:py-8 justify-start h-full transition-colors bg-[#D1AAD7]/[0.01]">
                  <Image
                    alt={`${items.category}.png`}
                    loading="lazy"
                    width="120"
                    height="106"
                    decoding="async"
                    className="max-w-[120px] w-full sm:max-w-[120px] xl:max-w-max px-2 lg:px-5"
                    style={{ color: "transparent" }}
                    src={items.src}
                  />
                  <div className="flex flex-col pr-2.5 sm:pr-4 lg:pr-10">
                    <p className="mb-2 text-base font-medium sm:text-sm text-scale-lightmauve text-[#cca7d2]">
                      {items.category}
                    </p>
                    <p className="font-aeonik text-lg leading-6 sm:text-xl lg:text-2xl lg:leading-[27px] line-clamp-2 xl:line-clamp-3">
                      {items.title}
                    </p>
                  </div>
                </div>
                <div
                  role="none"
                  className="absolute items-center duration-150 overflow-hidden justify-center w-6 h-6 group-hover:bg-white bg-white/10 border group-hover:border-white transition-colors ease-linear border-white/[0.13] flex rounded-full pointer-events-none right-3 bottom-3 sm:right-4 sm:bottom-4 sm:w-10 sm:h-10"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path
                        className="transition-colors duration-150 ease-linear group-hover:stroke-black"
                        d="M7.75 7.5V4.25H4.5"
                        stroke="#fff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        className="transition-colors duration-150 ease-linear group-hover:stroke-black"
                        d="M7.5 4.5L0.75 11.25"
                        stroke="#fff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        className="transition-colors duration-150 ease-linear group-hover:stroke-black"
                        d="M5.785 10.25H8.75C9.855 10.25 10.75 9.355 10.75 8.25V2.75C10.75 1.645 9.855 0.75 8.75 0.75H3.75C2.645 0.75 1.75 1.645 1.75 2.75V6.215"
                        stroke="#fff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSlider;
