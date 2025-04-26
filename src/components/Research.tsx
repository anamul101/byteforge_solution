import React from "react";
import ResearchSlider from "./ResearchSlider";

export const Research = () => {
  return (
    <section className=" py-10 bg-black text-white">
      <div className=" container gap-16">
        <div className="flex flex-col max-w-3xl mx-auto items-center justify-center text-center mb-5 md:mb-5 md:mt-12">
          {/* Heading */}
          <h2 className="font-aeonik leading-snug lg:leading-[1.25] text-3xl md:text-4.5xl lg:text-5xl [text-wrap:balance]">
            Frontier AI Research
          </h2>

          {/* Description */}
          <p className="mt-4 lg:mt-2 leading-[1.60] text-neutral-100 lg:text-gray-300 lg:text-xl [text-wrap:balance] [white-space:inherit] block font-normal">
            SEAL (Safety, Evaluations, and Alignment Lab) is our research
            initiative to improve model capabilities through challenging private
            evaluations and novel research.
          </p>

          {/* Button */}
          <div className="mt-8 flex items-center gap-x-6">
            <a
              style={{ border: " 1px solid #9e789b", background: "#72556f" }}
              className="relative focus-visible:outline outline-[rgba(255,255,255,0.64)] rounded-xl outline-offset-[1px] inline-block "
              href="/"
            >
              <div style={{border: " 1px solid #9e789b"}} className="outline-[rgba(255,255,255,0.64)] rounded-xl outline-offset-[1px] new-button_button--primary__EJ4AI font-medium justify-center flex flex-nowrap whitespace-nowrap hover:bg-[#5b3557] transition-translate duration-300 cursor-pointer group items-center h-full group leading-[150%] new-button_button--pink__gdR3d text-sm px-[15px] py-[10px]">
                Learn More
                <span className="inline-block ml-1 font-normal duration-300 w-fit transition-translate group-hover:translate-x-1 font-unicode">
                  →
                </span>
              </div>
              <span className="after:content-[''] after:inline-block absolute inset-0 after:inset-0 after:absolute select-none pointer-events-none after:rounded-[11px] rounded-[11px] shadow-[inset_0_0_0_1px_rgba(255,255,255,1)] after:shadow-[inset_0_0_0_1px_rgba(200,139,196,0.4)]"></span>
            </a>
          </div>
          
        </div>
        <ResearchSlider/>
      </div>
    </section>
  );
};
