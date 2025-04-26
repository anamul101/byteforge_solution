import React from "react";
import hero from "../assets/images/hero.webp";

const FutureSection = () => {
  return (
    <div
      style={{ backgroundColor: "black", color: "white" }}
      className="relative w-full overflow-hidden sm:overflow-visible"
    >
      <hr className="border-0 bg-[linear-gradient(270deg,_rgba(255,_255,_255,_0.00)_0%,_#FFF_52.07%,_rgba(255,_255,_255,_0.00)_100%)] z-[1] opacity-[0.15] relative h-[1px] w-full max-w-[1006px] mx-auto" />
      <div className="absolute z-10 -translate-x-1/2 -top-10 sm:-top-6 left-[53%] lg:left-1/2 md:left-1/2">
        <div className="object-cover w-[370px] lg:w-[700px] md:w-[700px] translate-y-[85px] -translate-x-12 xl:w-[870px] xl:translate-y-14 xl:-translate-x-16 pointer-events-none select-none transform transition-transform duration-1000 aspect-[1400/650] lg:scale-90 md:scale-90 sm:scale-50">
          <video autoPlay playsInline loop>
            <source
              src="https://scale.com/static/images/pages/homepage/footer.webm"
              type="video/mp4;codecs=hvc1"
            />
            <source
              src="https://scale.com/static/images/pages/homepage/footer.webm"
              type="video/webm"
            />
          </video>
        </div>
      </div>
      <section
        id=""
        className="py-18 lg:py-20 bg-transparent !pb-28 !pt-[110px] md:!pb-36 md:!pt-[132px]"
      >
        <div className="container relative z-10 sm:px-0">
          <div className="max-w-[760px] w-fit space-y-6 lg:space-y-10 mx-auto">
            <div className="relative">
              <h3 className="relative text-4xl font-light xl:leading-none leading-tight mx-auto sm:leading-[1.1] sm:text-7xl xl:text-[85px] tracking-[-0.89px] font-aeonik text-center">
                <span className="inline">The future of your industry </span>
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent relative">
                  starts&nbsp;here.
                  {/* <span className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 rounded-full"></span> */}
                </span>
              </h3>
            </div>
            <div className="justify-center pt-4 flex items-center gap-x-6">
              <a
                aria-label="Book a Demo"
                style={{ WebkitTapHighlightColor: "transparent" }}
                className="relative focus-visible:outline outline-[rgba(255,255,255,0.64)] rounded-xl outline-offset-[3px] inline-block"
                href="/demo"
              >
                <div className="new-button_button--primary__EJ4AI font-medium justify-center flex flex-nowrap whitespace-nowrap transition-translate duration-300 cursor-pointer group items-center h-full group leading-[150%] new-button_button--purple__hhI2y text-sm px-[30px] py-[14px]">
                  Book a Demo
                  <span className="inline-block ml-1 font-normal duration-300 w-fit transition-translate group-hover:translate-x-1 font-unicode">
                    →
                  </span>
                </div>
                <span className="after:content-[''] after:inline-block absolute inset-0 after:inset-0 after:absolute select-none pointer-events-none after:rounded-[11px] rounded-[11px] shadow-[inset_0_0_0_1px_rgba(255,255,255,1)] after:shadow-[inset_0_0_0_1px_rgba(105,57,193,0.4)]"></span>
              </a>
              <a
                aria-label="Build AI"
                style={{ WebkitTapHighlightColor: "transparent" }}
                className="text-[#F4F0FF] hover:text-white transition-colors duration-300 py-2 font-medium whitespace-nowrap text-sm leading-5 group relative focus-visible:outline outline-[rgba(255,255,255,0.64)] rounded-xl outline-offset-[3px] inline-block"
                href="/data-engine"
              >
                Build AI
                <span className="inline-block ml-1 font-normal duration-300 w-fit transition-translate group-hover:translate-x-1 font-unicode">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FutureSection;
