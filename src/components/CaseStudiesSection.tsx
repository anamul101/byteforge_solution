"use client";
import React, { useRef, useState, useEffect } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image, { StaticImageData } from 'next/image';
import img1 from "../assets/images/img1.webp"
import img2 from "../assets/images/img2.webp"
import img3 from "../assets/images/img3.webp"
import img4 from "../assets/images/img4.webp"
import img5 from "../assets/images/img5.webp"
import img6 from "../assets/images/img6.webp"
import img7 from "../assets/images/img7.webp"
import img8 from "../assets/images/img8.webp"

interface Slide {
  type: string;
  title: string;
  imageUrl: string | StaticImageData;
  href: string;
}

const CaseStudiesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    slides: {
      perView: 'auto',
      spacing: 24,
    },
    breakpoints: {
      '(max-width: 640px)': {
        slides: {
          perView: 1.2,
          spacing: 16,
        },
      },
      '(min-width: 1024px)': {
        slides: {
          perView: 3,
          spacing: 24,
        },
      },
    },
  });

  const slides: Slide[] = [
    {
      type: 'Partner',
      title: 'OpenAI Names Scale as Preferred Fine-Tuning Partner',
      imageUrl: img1,
      href: '/blog/open-ai-scale-partnership-gpt-3-5-fine-tuning',
    },
    {
      type: 'Partner',
      title: 'Anthropic Partners with Scale to Bring Generative AI to Enterprises',
      imageUrl: img2,
      href: '/news/partnering-with-scale',
    },
    {
      type: 'Partner',
      title: 'Meta and Scale Partner to Drive Enterprise Adoption of Llama',
      imageUrl: img3,
      href: '/blog/meta-llama-3-1-launch-partner',
    },
    {
      type: 'Case Studies',
      title: 'Customer Case Study: Cohere',
      imageUrl: img4,
      href: '/customers/cohere',
    },
    {
      type: 'Blog',
      title: "Scale's SEAL Research Lab Launches Expert-Evaluated LLM Leaderboards",
      imageUrl: img2,
      href: '/blog/leaderboard',
    },
    {
      type: 'Blog',
      title: 'Why Is ChatGPT So Good?',
      imageUrl: img5,
      href: '/blog/chatgpt-reinforcement-learning',
    },
    {
      type: 'Dataset',
      title: 'Open Dataset: Ukraine Damage Identification',
      imageUrl:img6,
      href: '/blog/ukraine-detection',
    },
    {
      type: 'Blog',
      title: "Meet Claude: Anthropic's rival to ChatGPT",
      imageUrl: img7,
      href: '/blog/chatgpt-vs-claude',
    },
    {
      type: 'Blog',
      title: 'How Much Better Is OpenAI\'s Newest GPT-3 Model?',
      imageUrl: img8,
      href: '/blog/gpt-3-davinci-003-comparison',
    },
    {
      type: 'Blog',
      title: 'How OpenAI worked with Scale to build InstructGPT',
      imageUrl: img5,
      href: '/blog/how-to-label-1m-data-points-week',
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0A0B0D] relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10 opacity-30 pointer-events-none select-none bg-gradient-to-b from-[#D1AAD7] to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col max-w-3xl mx-auto items-center justify-center text-center mb-10 md:mb-20">
          <div className="mb-5 lg:mb-5 overflow-hidden tracking-[3px] text-xs md:px-5 md:py-2 lg:text-xs uppercase bg-white bg-opacity-5 text-[#D1AAD7] rounded-lg md:rounded-full p-3">
            <span>LEARN HOW WE SERVE ENTERPRISES LARGE AND SMALL</span>
          </div>
          <h2 className="font-sans leading-snug lg:leading-[1.25] text-3xl md:text-4xl lg:text-5xl text-white [text-wrap:balance]">
            Case Studies & Resources
          </h2>
          <p className="mt-4 lg:mt-2 leading-[1.60] text-neutral-100 lg:text-gray-300 lg:text-xl [text-wrap:balance] font-normal max-w-2xl">
            We've worked with the world's leading AI teams for years, and delivered more high-quality data than anybody else.
          </p>
        </div>

        {/* Slider */}
        <div className="relative z-0 overflow-hidden">
          <div ref={sliderRef} className="keen-slider !overflow-visible cursor-grab h-full opacity-100 visible">
            {slides.map((slide, index) => (
              <a
                key={index}
                href={slide.href}
                className="keen-slider__slide"
                style={{ transform: 'translate3d(-2784px, 0px, 0px)', minWidth: '348px', maxWidth: '348px' }}
              >
                <div className="aspect-[389/243] rounded-lg relative z-10 bg-black overflow-hidden">
                  <Image
                    src={slide.imageUrl}
                    alt={slide.title}
                    width={640}
                    height={402}
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
                <div className="relative z-20 pt-6">
                  <p className="text-sm font-medium leading-[1.71] text-[#D1AAD7]">{slide.type}</p>
                  <h5 className="line-clamp-2 text-2xl font-sans leading-[1.33] mt-1 text-white">
                    {slide.title}
                  </h5>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;