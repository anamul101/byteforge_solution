"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import thumbnil1 from "../../assets/images/thumbnil1.webp";
import thumbnil2 from "../../assets/images/thumbnil2.webp";
import thumbnil3 from "../../assets/images/thumbnil3.webp";

const VideoSection = () => {
  const demos = [
    {
      id: "1",
      title: "Assisted Instruction Following Demo",
      thumbnail: thumbnil1.src,
      videoId: "4n8xcpuanb",
    },
    {
      id: "2",
      title: "Span RLHF",
      thumbnail: thumbnil2.src,
      videoId: "10r609ojj4",
    },
    {
      id: "3",
      title: "Human Feedback and Preference Ranking",
      thumbnail: thumbnil3.src,
      videoId: "10r609ojj4",
    },
  ];

  const [activeVideo, setActiveVideo] = useState<string | null>(demos[0].videoId);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleVideoClick = (videoId: string) => {
    setActiveVideo(videoId);
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
    if (sliderRef.current) {
      const slide = sliderRef.current.children[index] as HTMLElement;
      const scrollPosition = slide.offsetLeft - 16; // Adjust for mobile padding
      sliderRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
    setActiveVideo(demos[index].videoId);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (sliderRef.current) {
        const scrollPosition = sliderRef.current.scrollLeft;
        const containerWidth = sliderRef.current.clientWidth;
        const children = Array.from(sliderRef.current.children) as HTMLElement[];
        
        let newSlide = 0;
        let minDistance = Infinity;
        
        children.forEach((child, index) => {
          const childLeft = child.offsetLeft;
          const childWidth = child.clientWidth;
          const distance = Math.abs(scrollPosition - childLeft + (containerWidth - childWidth) / 2);
          
          if (distance < minDistance) {
            minDistance = distance;
            newSlide = index;
          }
        });
        
        setCurrentSlide(newSlide);
        setActiveVideo(demos[newSlide].videoId);
      }
    };

    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => {
      if (slider) {
        slider.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <section className="py-8 md:py-16 bg-black text-white px-4">
      <div className="container mx-auto w-full max-w-7xl overflow-hidden px-0 sm:px-4">
        <div className="flex flex-col max-w-3xl mx-auto items-center justify-center text-center mb-8 md:mb-16">
          <div className="mb-4 md:mb-5 overflow-hidden tracking-[3px] text-xs md:px-5 md:py-2 uppercase bg-white bg-opacity-5 text-[#D1AAD7] rounded-full px-4 py-2">
            <span>Demos</span>
          </div>
          <h2 className="font-aeonik leading-snug md:leading-[1.25] text-2xl md:text-4xl [text-wrap:balance]">
            Scale Data Engine Demos
          </h2>
        </div>

        {/* Main Video Player */}
        <div className="relative mb-8 md:mb-12 w-full">
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
            <div className="w-full h-0 pb-[56.25%] relative">
              {activeVideo && (
                <div className="wistia_responsive_padding">
                  <div className="wistia_responsive_wrapper">
                    <iframe
                      src={`https://fast.wistia.net/embed/iframe/${activeVideo}?autoplay=1`}
                      allow="autoplay; fullscreen"
                      className="wistia_embed"
                      name="wistia_embed"
                      frameBorder="0"
                      scrolling="no"
                      allowFullScreen
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                      }}
                    ></iframe>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Video Thumbnail Slider */}
        <div className="relative px-0 sm:px-4">
          <div
            ref={sliderRef}
            className="flex overflow-x-auto scroll-snap-x-mandatory scrollbar-hide gap-4 md:gap-8 pb-4 pl-4 sm:pl-0"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {demos.map((demo, index) => (
              <div
                key={demo.id}
                className={`flex-shrink-0 w-[85vw] sm:w-96 scroll-snap-align-start transition-opacity duration-300 ${
                  currentSlide === index
                    ? "opacity-100"
                    : "sm:opacity-50 hover:opacity-70"
                }`}
              >
                <div
                  className="cursor-pointer"
                  onClick={() => handleVideoClick(demo.videoId)}
                >
                  <div className="rounded-[11px] overflow-hidden relative aspect-[16/10]">
                    <Image
                      src={demo.thumbnail}
                      alt={demo.title}
                      fill
                      className="w-full h-full object-cover"
                      priority
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 transition-opacity hover:bg-opacity-10">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
                        <svg
                          className="w-6 h-6 md:w-8 md:h-8 text-black"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="relative mt-2">
                    <h4 className="mb-2 md:mb-3 leading-[1.33] text-lg md:text-2xl text-white">
                      {demo.title}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-4 space-x-2">
            {demos.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`px-0.5 py-2 cursor-pointer`}
                aria-label={`Slide to ${index + 1}`}
                type="button"
              >
                <span
                  className={`rounded-full w-2 h-2 md:w-3 md:h-3 block transition-colors ${
                    currentSlide === index ? "bg-white" : "bg-[#37383B]"
                  }`}
                ></span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Wistia Script */}
      <script
        src="https://fast.wistia.com/assets/external/E-v1.js"
        async
      ></script>
    </section>
  );
};

export default VideoSection;