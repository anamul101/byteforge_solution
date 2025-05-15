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
      title: "Why ByteForge Solutions",
      description:
        "At ByteForge Solutions, we believe in building more than just software — we build digital foundations for your success. As a passionate and forward-thinking IT company, we specialize in crafting customized web-based software, scalable e-commerce solutions, mobile applications, and result-driven digital marketing strategies. With a customer-first mindset, we combine creativity, technical excellence, and deep industry insight to help businesses evolve in the digital age. Whether you're a startup, SME, or enterprise, we provide tailored digital solutions that are not only functional but also future-ready.",
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
      title: "Our Mission",
      description:
        "Our mission is to empower businesses through innovative digital solutions that drive measurable impact. We aim to simplify complex challenges by providing reliable, scalable, and cost-effective technology tailored to our clients' unique needs. From idea to implementation, we strive to deliver excellence in every step of the digital journey — ensuring that our clients are not only competitive but also leading in their industries.",
      media: (
        <motion.div
          className="w-full xl:w-[624px] h-[300px] xl:h-[624px] relative z-10 flex justify-center xl:justify-end items-center xl:absolute xl:right-0 xl:top-[38px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={foundationModels.src}
            alt="Our Mission"
            className="w-full h-full object-contain"
          />
        </motion.div>
      ),
      mobileImage: dataModel.src,
    },
    {
      title: "Our Vision",
      description:
        "Our vision is to become a trusted global leader in digital transformation, known for helping businesses embrace innovation with confidence. We envision a world where every company — no matter the size — can harness the power of technology to reach its full potential.",
      media: (
        <motion.div
          className="w-full xl:w-[624px] h-[300px] xl:h-[624px] relative z-10 flex justify-center xl:justify-end items-center xl:absolute xl:right-0 xl:top-[38px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={dataModel.src}
            alt="Our Vision"
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