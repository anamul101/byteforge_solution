"use client";
import React from "react";
import openai from "../assets/images/openai.webp";
import meta from "../assets/images/meta.webp";
import adept from "../assets/images/adept.webp";
import cohere from "../assets/images/cohere.webp";
import anthropic from "../assets/images/anthropic.webp";
import Slidertest from "./Slidertest";
import LogoAnimationForMobaile from "./LogoAnimationForMobaile";

const GenerativeAISection = () => {
  return (
    <section
      id=""
      style={{ backgroundColor: "black", color: "white" }}
      className="py-18 lg:py-20 bg-transparent relative lg:pb-8 overflow-hidden "
    >
      <div className="container relative ">
        <div className="flex flex-col max-w-3xl mx-auto items-center justify-center text-center mb-10 md:mb-20 md:mt-12 !mb-16">
          <div className="mb-5 lg:mb-5 overflow-hidden tracking-[3px] text-xs md:px-5 md:py-2 lg:text-xs uppercase bg-white bg-opacity-5 text-[#D1AAD7] rounded-full px-4 py-2">
            <span>Why ByteForge Solutions</span>
          </div>
          <h2 className="font-aeonik leading-snug lg:leading-[1.25] text-3xl md:text-4.5xl lg:text-5xl [text-wrap:balance]">
          Our Mission & Vision
          </h2>
          <p className="text-center mt-4 lg:mt-2 leading-[1.60] text-neutral-100 lg:text-gray-300 lg:text-xl [text-wrap:balance] [white-space:inherit] block font-normal">
          What sets us apart is our commitment to collaboration, transparency, and continuous improvement. 
          We don’t just deliver projects — we build lasting partnerships to help you grow.
          </p>
          <div className="mt-8 flex items-center gap-x-6">
            <a
              style={{ border: " 1px solid #9e789b", background: "#72556f" }}
              className="relative focus-visible:outline outline-[rgba(255,255,255,0.64)] rounded-xl outline-offset-[1px] inline-block "
              href="/"
            >
              <div
                style={{ border: " 1px solid #9e789b" }}
                className="outline-[rgba(255,255,255,0.64)] rounded-xl outline-offset-[1px] new-button_button--primary__EJ4AI font-medium justify-center flex flex-nowrap whitespace-nowrap hover:bg-[#5b3557] transition-translate duration-300 cursor-pointer group items-center h-full group leading-[150%] new-button_button--pink__gdR3d text-sm px-[15px] py-[10px]"
              >
                Book a Demo
                <span className="inline-block ml-1 font-normal duration-300 w-fit transition-translate group-hover:translate-x-1 font-unicode">
                  →
                </span>
              </div>
              <span className="after:content-[''] after:inline-block absolute inset-0 after:inset-0 after:absolute select-none pointer-events-none after:rounded-[11px] rounded-[11px] shadow-[inset_0_0_0_1px_rgba(255,255,255,1)] after:shadow-[inset_0_0_0_1px_rgba(200,139,196,0.4)]"></span>
            </a>
          </div>
        </div>

        <Slidertest />

        <p className="max-w-max mb-10 md:mb-12 text-center mx-auto uppercase leading-[1.70] text-xs px-3 sm:px-0 md:text-sm tracking-[4px]">
          GENERATIVE AI PROVIDERS WE PARTNER&nbsp;WITH:
        </p>

        <div className="hidden md:block">
          <ul className="items-center justify-center flex gap-4">
            <li className="overflow-hidden relative flex items-center justify-center w-[230px] h-28 rounded-2xl">
              <div className="absolute bg-black/40 inset-px rounded-2xl"></div>
              <div className="absolute inset-0 border border-white/15 rounded-2xl"></div>
              <img
                alt="openai"
                loading="lazy"
                width="90"
                height="24"
                decoding="async"
                data-nimg="1"
                className="logo-grid_full-white__9DeNP opacity-100 relative"
                style={{ color: "transparent" }}
                src={openai.src}
              />
            </li>
            <li className="overflow-hidden relative flex items-center justify-center w-[230px] h-28 rounded-2xl">
              <div className="absolute bg-black/40 inset-px rounded-2xl"></div>
              <div className="absolute inset-0 border border-white/15 rounded-2xl"></div>
              <img
                alt="adept"
                loading="lazy"
                width="75"
                height="36"
                decoding="async"
                data-nimg="1"
                className="logo-grid_full-white__9DeNP opacity-100 relative"
                style={{ color: "transparent" }}
                src={adept.src}
              />
            </li>
            <li className="overflow-hidden relative flex items-center justify-center w-[230px] h-28 rounded-2xl">
              <div className="absolute bg-black/40 inset-px rounded-2xl"></div>
              <div className="absolute inset-0 border border-white/15 rounded-2xl"></div>
              <img
                alt="meta"
                loading="lazy"
                width="90"
                height="20"
                decoding="async"
                data-nimg="1"
                className="logo-grid_full-white__9DeNP opacity-100 relative"
                style={{ color: "transparent" }}
                src={meta.src}
              />
            </li>
            <li className="overflow-hidden relative flex items-center justify-center w-[230px] h-28 rounded-2xl">
              <div className="absolute bg-black/40 inset-px rounded-2xl"></div>
              <div className="absolute inset-0 border border-white/15 rounded-2xl"></div>
              <img
                alt="cohere"
                loading="lazy"
                width="140"
                height="24"
                decoding="async"
                data-nimg="1"
                className="logo-grid_full-white__9DeNP opacity-100 relative"
                style={{ color: "transparent" }}
                src={cohere.src}
              />
            </li>
            <li className="overflow-hidden relative flex items-center justify-center w-[230px] h-28 rounded-2xl">
              <div className="absolute bg-black/40 inset-px rounded-2xl"></div>
              <div className="absolute inset-0 border border-white/15 rounded-2xl"></div>
              <img
                alt="anthropic"
                loading="lazy"
                width="126"
                height="15"
                decoding="async"
                data-nimg="1"
                className="logo-grid_full-white__9DeNP opacity-100 relative"
                style={{ color: "transparent" }}
                src={anthropic.src}
              />
            </li>
          </ul>
        </div>

        {/* <div className="relative w-screen overflow-hidden -translate-x-1/2 md:hidden left-1/2">
          <div
            className="rfm-marquee-container space-x-6"
            style={
              {
                "--pause-on-hover": "running",
                "--pause-on-click": "running",
                "--width": "100%",
                "--transform": "none",
              } as React.CSSProperties
            }
          >
            <div
              className="rfm-marquee"
              style={
                {
                  "--play": "running",
                  "--direction": "normal",
                  "--duration": "24.28s",
                  "--delay": "0s",
                  "--iteration-count": "infinite",
                  "--min-width": "100%",
                } as React.CSSProperties
              }
            >
              <div className="rfm-initial-child-container">
                <div
                  className="rfm-child"
                  style={{ "--transform": "none" } as React.CSSProperties}
                >
                  <ul className="items-center justify-center flex gap-4">
                    <li className="overflow-hidden relative flex items-center justify-center w-[230px] h-28 rounded-2xl">
                      <div className="absolute bg-black/40 inset-px rounded-2xl"></div>
                      <div className="absolute inset-0 border border-white/15 rounded-2xl"></div>
                      <img
                        alt="openai"
                        loading="lazy"
                        width="90"
                        height="24"
                        decoding="async"
                        data-nimg="1"
                        className="logo-grid_full-white__9DeNP opacity-100 relative"
                        src={openai.src}
                        style={{ color: "transparent" }}
                      />
                    </li>
                    <li className="overflow-hidden relative flex items-center justify-center w-[230px] h-28 rounded-2xl">
                      <div className="absolute bg-black/40 inset-px rounded-2xl"></div>
                      <div className="absolute inset-0 border border-white/15 rounded-2xl"></div>
                      <img
                        alt="adept"
                        loading="lazy"
                        width="75"
                        height="36"
                        decoding="async"
                        data-nimg="1"
                        className="logo-grid_full-white__9DeNP opacity-100 relative"
                        src={adept.src}
                        style={{ color: "transparent" }}
                      />
                    </li>
                    <li className="overflow-hidden relative flex items-center justify-center w-[230px] h-28 rounded-2xl">
                      <div className="absolute bg-black/40 inset-px rounded-2xl"></div>
                      <div className="absolute inset-0 border border-white/15 rounded-2xl"></div>
                      <img
                        alt="meta"
                        loading="lazy"
                        width="90"
                        height="20"
                        decoding="async"
                        data-nimg="1"
                        className="logo-grid_full-white__9DeNP opacity-100 relative"
                        src={meta.src}
                        style={{ color: "transparent" }}
                      />
                    </li>
                    <li className="overflow-hidden relative flex items-center justify-center w-[230px] h-28 rounded-2xl">
                      <div className="absolute bg-black/40 inset-px rounded-2xl"></div>
                      <div className="absolute inset-0 border border-white/15 rounded-2xl"></div>
                      <img
                        alt="cohere"
                        loading="lazy"
                        width="140"
                        height="24"
                        decoding="async"
                        data-nimg="1"
                        className="logo-grid_full-white__9DeNP opacity-100 relative"
                        src={cohere.src}
                        style={{ color: "transparent" }}
                      />
                    </li>
                    <li className="overflow-hidden relative flex items-center justify-center w-[230px] h-28 rounded-2xl">
                      <div className="absolute bg-black/40 inset-px rounded-2xl"></div>
                      <div className="absolute inset-0 border border-white/15 rounded-2xl"></div>
                      <img
                        alt="anthropic"
                        loading="lazy"
                        width="126"
                        height="15"
                        decoding="async"
                        data-nimg="1"
                        className="logo-grid_full-white__9DeNP opacity-100 relative"
                        src={anthropic.src}
                        style={{ color: "transparent" }}
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <LogoAnimationForMobaile/>
      </div>
    </section>
  );
};

export default GenerativeAISection;
