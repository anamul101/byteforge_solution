import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";
import foundationModels from "../assets/images/foundationModels.webp";
import dataModel from "../assets/images/dataModel.webp";
// import rlhf from "../assets/videos/rlhf.webm"; // Import your video file
// import chart from "../assets/videos/chart.webm";
// declare module "*.webm" {
//     const src: string;
//     export default src;
//   }
const Keenslider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
  });

  const slides = [
    {
      title: "Fine-Tuning and RLHF",
      content: "Adapt best-in-class foundation models to your business and your specific data to build sustainable, successful AI programs and data from your enterprise.",
      image: foundationModels,
      video: "https://scale.com/static/images/pages/homepage/why-scale/rlhf.webm",
    },
    {
      title: "Foundation Models",
      content: "Scale partners or integrates with all of the leading AI models, from open-source to closed-source, including OpenAI, Google, Meta, Cohere, and more.",
      image: dataModel,
      video: null,
    },
    {
      title: "Enterprise Data",
      content: "Scale's Data Engine enables you to integrate your enterprise data into the fold of these models, providing the base for long-term strategic differentiation.",
      image: dataModel,
      video: "https://scale.com//static/images/pages/homepage//why-scale/chart.webm",
    },
  ];

  return (
    <div className="lg:w-[1216px] flex justify-center flex-col mb-24 md:mb-40 xl:mb-16 sm:h-[700px] h-[590px] mx-auto xl:flex-row mt-28 xl:mt-0">
      {/* Desktop Left Panel */}
      <div className="relative z-10 hidden w-full -mr-9 xl:inline-block xl:w-6/12 xl:min-w-[510px]">
        <div className="absolute w-full  -translate-y-1/2 top-1/2">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`opacity-${currentSlide === index ? "100" : "30"} border-b group last:border-transparent border-white/10 hover:border-white hover:last:border-white hover:opacity-100 transition-all duration-300 cursor-pointer`}
              onClick={() => slider.current?.moveToIdx(index)}
            >
              <p className="w-full pt-6 pb-2 text-2xl leading-10 text-left text-white font-aeonik">
                {slide.title}
              </p>
              <p className="pb-6 overflow-hidden text-white transition-colors group-hover:text-white/70">
                {slide.content}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Right Panel */}
      <div className="relative inline-block w-full -mb-3 xl:h-full xl:mb-10 xl:mx-auto">
        <div className="relative hidden w-full h-full xl:block">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`transform translate-x-[6px] translate-y-[-1px] w-[624px] h-[624px] absolute z-10 transition-opacity duration-300 flex justify-end items-center right-0 top-[38px] ${
                currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
            >
              {slide.video ? (
                <video autoPlay playsInline loop>
                  <source src={slide.video} type="video/webm" />
                </video>
              ) : (
                <img
                  alt=""
                  loading="lazy"
                  width="624"
                  height="624"
                  className="object-contain"
                  src={typeof slide.image === "string" ? slide.image : slide.image.src}
                />
              )}
            </div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div
          ref={sliderRef}
          className="keen-slider !overflow-visible xl:absolute pb-6 xl:!hidden"
        >
          {slides.map((slide, index) => (
            <div key={index} className="keen-slider__slide">
              <img
                alt={slide.title}
                loading="lazy"
                width="334"
                height="307"
                className="object-contain"
                src={typeof slide.image === "string" ? slide.image : slide.image.src}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Content */}
      <div className="px-7 w-screen left-1/2 -translate-x-1/2 relative sm:w-auto sm:px-0 xl:mb-6 xl:hidden">
        <div ref={sliderRef} className="keen-slider !overflow-visible pb-24">
          {slides.map((slide, index) => (
            <div key={index} className="space-y-4 keen-slider__slide">
              <p className="text-2xl leading-10 font-aeonik">{slide.title}</p>
              <p className="text-white/70">{slide.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Dots */}
      <div className="relative z-50 mx-auto -mt-16 lg:-mt-10 xl:hidden">
        {slides.map((_, index) => (
          <button
            key={index}
            className="px-1 py-2 sm:px-2"
            aria-label={`Slide ${index + 1}`}
            type="button"
            onClick={() => slider.current?.moveToIdx(index)}
          >
            <div
              className={`h-1 sm:h-1.5 md:h-2 rounded-full transition-width duration-300 ${
                currentSlide === index ? "bg-white w-4 sm:w-5 md:w-6" : "bg-white/40 w-1 sm:w-1.5 md:w-2"
              }`}
            ></div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Keenslider;