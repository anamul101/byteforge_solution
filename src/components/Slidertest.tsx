import { useKeenSlider } from "keen-slider/react";
import { AnimatePresence, motion } from "framer-motion";
import "keen-slider/keen-slider.min.css";
import { useState, useEffect, useRef } from "react";
import foundationModels from "../assets/images/foundationModels.webp";
import dataModel from "../assets/images/dataModel.webp";

const Slidertest = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile view on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1280); // xl breakpoint
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto slide configuration
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
    created: (s) => {
      s.on("slideChanged", () => {
        setActiveTab(s.track.details.rel);
      });
    },
    dragStarted: () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    },
    dragEnded: () => {
      startAutoSlide();
    },
  });

  const [contentSliderRef, contentSlider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
  });
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      slider.current?.next();
      contentSlider.current?.next();
    }, 5000); // Change slide every 5 seconds
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const features = [
    {
      title: "Fine-Tuning and RLHF",
      description:
        "Adapt best-in-class foundation models to your business and your specific data to build sustainable, successful AI programs and data from your enterprise.",
      media: (
        <div className=" w-full xl:w-[624px] h-[300px] xl:h-[624px] relative z-10 flex justify-center xl:justify-end items-center xl:absolute xl:right-0 xl:top-[38px]">
          <video autoPlay playsInline loop muted className="w-full h-full object-contain">
            <source
              src="https://scale.com//static/images/pages/homepage//why-scale/rlhf.webm"
              type="video/webm"
            />
          </video>
        </div>
      ),
      mobileImage: foundationModels.src,
    },
    {
      title: "Foundation Models",
      description:
        "Scale partners or integrates with all of the leading AI models, from open-source to closed-source, including OpenAI, Google, Meta, Cohere, and more.",
      media: (
        <motion.div
          className="w-full xl:w-[624px] h-[300px] xl:h-[624px] relative z-10 flex justify-center xl:justify-end items-center xl:absolute xl:right-0 xl:top-[38px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={foundationModels.src}
            alt="Foundation models"
            className="w-full h-full object-contain"
          />
        </motion.div>
      ),
      mobileImage: dataModel.src,
    },
    {
      title: "Enterprise Data",
      description:
        "Scale's Data Engine enables you to integrate your enterprise data into the fold of these models, providing the base for long-term strategic differentiation.",
      media: (
        <motion.div
          className="w-full xl:w-[624px] h-[300px] xl:h-[624px] relative z-10 flex justify-center xl:justify-end items-center xl:absolute xl:right-0 xl:top-[38px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={dataModel.src}
            alt="Enterprise data"
            className="w-full h-full object-contain"
          />
        </motion.div>
      ),
      mobileImage: foundationModels.src,
    },
  ];

  // Sync sliders when activeTab changes
  useEffect(() => {
    if (!isMobile) return;
    slider.current?.moveToIdx(activeTab);
    contentSlider.current?.moveToIdx(activeTab);
  }, [activeTab, isMobile]);

  return (
    <div className=" w-full max-w-[1216px] flex flex-col gap-x-20 mb-10 md:mb-20 xl:mb-16 h-auto min-h-[590px] sm:min-h-[700px] lg:min-h-[700px] md:min-h-[500px] mx-auto px-4 xl:px-0 xl:flex-row mt-10 xl:mt-0">
      {/* Desktop View - Left Side (Tabs) */}
      <div className="relative z-10 hidden w-full -mr-9 xl:inline-block xl:w-6/12 xl:min-w-[510px] ">
        <div className="absolute w-auto -translate-y-1/2 top-1/2">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`border-b group last:border-transparent border-white/10 hover:border-white hover:last:border-white transition-all duration-300 cursor-pointer ${
                activeTab === index ? "opacity-100" : "opacity-30"
              }`}
              whileHover={{ opacity: 1 }}
              onClick={() => {
                setActiveTab(index);
                slider.current?.moveToIdx(index);
              }}
            >
              <p className="w-full pt-6 pb-2 text-2xl leading-10 text-left text-white font-aeonik">
                {feature.title}
              </p>
              <p className="pb-6 overflow-hidden text-white transition-colors group-hover:text-white/70">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Desktop View - Right Side (Media) */}
      <div className="relative w-full xl:w-6/12 xl:mb-10 xl:mx-auto">
        {!isMobile ? (
          <div className="relative hidden w-full h-full xl:block">
            <AnimatePresence mode="wait">
              {features[activeTab].media}
            </AnimatePresence>
          </div>
        ) : (
          <div
            ref={sliderRef}
            className="keen-slider  pb-6"
          >
            {features.map((feature, index) => (
              <div key={index} className="keen-slider__slide">
                <motion.div
                  className="w-full h-[300px] flex justify-center items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={feature.mobileImage}
                    alt={`Slide ${index}`}
                    className="object-contain w-full h-full"
                  />
                </motion.div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Mobile View - Content Slider */}
      {isMobile && (
        <div className="w-full left-1/2 -translate-x-1/2 relative xl:hidden mt-4">
          <div
            ref={contentSliderRef}
            className="keen-slider pb-12"
          >
            {features.map((item, index) => (
              <div key={index} className="space-y-4 keen-slider__slide px-4">
                <p className="text-2xl leading-10 font-aeonik">{item.title}</p>
                <p className="text-white/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Mobile View - Dots Indicator */}
      {isMobile && (
        <div className="relative z-50 mx-auto -mt-8 lg:-mt-10 xl:hidden flex justify-center">
          {features.map((_, index) => (
            <button
              key={index}
              className="px-1 py-2 sm:px-2"
              aria-label={`Slide ${index + 1}`}
              onClick={() => {
                setActiveTab(index);
                slider.current?.moveToIdx(index);
                contentSlider.current?.moveToIdx(index);
              }}
            >
              <motion.div
                className="h-1 sm:h-1.5 md:h-2 rounded-full bg-white"
                animate={{
                  width: activeTab === index ? "1.5rem" : "0.5rem",
                  backgroundColor:
                    activeTab === index
                      ? "rgba(255, 255, 255, 1)"
                      : "rgba(255, 255, 255, 0.4)",
                }}
                transition={{ duration: 0.3 }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Slidertest;