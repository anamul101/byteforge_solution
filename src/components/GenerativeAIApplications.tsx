import React from "react";
import Image from "next/image";
import donovan from "../assets/images/donovan.webp"
import genai from "../assets/images/genai.webp"

const GenerativeAIApplications = () => {
  return (
    <section  style={{ backgroundColor: "black", color: "white" }} className="py-18 lg:py-20 bg-transparent pb-0 lg:pb-0 relative">
      <div className="container lg:max-w-[1344px] relative overflow-hidden">
        {/* Gradient background */}
        <div className="select-none pointer-events-none absolute top-0 -left-[10%] -right-[10%] bottom-[9%] opacity-50 "></div>

        {/* Header section */}
        <div className="flex flex-col max-w-3xl mx-auto items-center justify-center text-center mb-10 md:mb-20 md:mt-12 relative z-10 !mb-12 md:!mb-16">
          <div className=" mb-5 lg:mb-5 overflow-hidden tracking-[3px] text-xs md:px-5 md:py-2 lg:text-xs uppercase bg-white bg-opacity-5 text-[#7B8FDD] rounded-full px-4 py-2">
            <span>Apply AI</span>
          </div>
          <h2 className="font-aeonik leading-snug lg:leading-[1.25] text-3xl md:text-4.5xl lg:text-5xl [text-wrap:balance] text-white">
            Generative AI Applications
          </h2>
          <p className="mt-4 lg:mt-2 leading-[1.60] text-neutral-100 lg:text-gray-300 lg:text-xl [text-wrap:balance] [white-space:inherit] block font-normal">
            Easily Apply AI to your most challenging use cases with pre‑built
            applications that harness the power of customized LLMs.
          </p>
        </div>

        {/* Slider container */}
        <div className="relative w-screen -translate-x-1/2 sm:w-auto left-1/2 px-7 sm:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-20 !overflow-visible opacity-100 visible">
            {/* Donovan card */}
            <a href="/donovan" className="group">
              <div className="relative bg-[rgba(143,156,206,0.03)] border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 group-hover:border-white/20 group-hover:shadow-lg group-hover:shadow-blue-400/15">
                <div className="!pt-9 md:!pt-12 !pb-0 !overflow-hidden max-h-[436px] lg:h-[540px] min-h-[450px] lg:!min-h-[540px] z-10 3xl:py-[95px] relative lg:items-center xl:py-20 md:p-10 lg:py-12 p-6 pt-3 rounded-2xl overflow-hidden md:overflow-visible">
                  <p className="uppercase leading-4 text-xs tracking-[4px] mb-4 lg:mb-6 z-10 relative text-[#7B8FDD]">
                    Scale Donovan
                  </p>
                  <p className="md:text-[1.625rem] text-3.5xl leading-tight md:leading-8 mb-2 font-aeonik z-10 relative text-white">
                    AI-Powered Decision-Making for Defense
                  </p>
                  <p className="z-10 mb-8 leading-6 md:mb-18 text-zinc-400">
                    AI-powered decision-making support: plan, analyze, and act
                    in minutes.
                  </p>
                  <div className="absolute left-6 md:left-9 top-46 md:top-auto md:-bottom-32 lg:bottom-0 aspect-[436/276] w-full h-full md:h-auto overflow-hidden object-contain xl:-bottom-[85px] object-left-top">
                    <Image
                      src={donovan}
                      alt="Scale Donovan"
                      width={616}
                      height={333}
                      className="object-contain object-left-top"
                    />
                  </div>
                </div>
              </div>
            </a>

            {/* GenAI Platform card */}
            <a href="/genai-platform" className="group">
              <div className="relative bg-[rgba(143,156,206,0.03)] border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 group-hover:border-white/20 group-hover:shadow-lg group-hover:shadow-blue-400/15">
                <div className="!pt-9 md:!pt-12 !pb-0 !overflow-hidden max-h-[436px] lg:h-[540px] min-h-[450px] lg:!min-h-[540px] z-10 3xl:py-[95px] relative lg:items-center xl:py-20 md:p-10 lg:py-12 p-6 pt-3 rounded-2xl overflow-hidden md:overflow-visible">
                  <p className="uppercase leading-4 text-xs tracking-[4px] mb-4 lg:mb-6 z-10 relative text-[#7B8FDD]">
                    Scale GenAI Platform
                  </p>
                  <p className="md:text-[1.625rem] text-3.5xl leading-tight md:leading-8 mb-2 font-aeonik z-10 relative text-white">
                    AI for the Enterprise
                  </p>
                  <p className="z-10 mb-8 leading-6 md:mb-18 text-zinc-400">
                    Transform your data into customized enterprise-ready
                    Generative AI applications.
                  </p>
                  <div className="absolute left-6 md:left-9 top-46 md:top-auto md:-bottom-32 lg:bottom-0 aspect-[436/276] w-full h-full md:h-auto overflow-hidden object-contain xl:-bottom-[85px] object-left-top">
                    <Image
                      src={genai}
                      alt="Gen AI"
                      width={616}
                      height={333}
                      className="object-contain object-left-top"
                    />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenerativeAIApplications;
