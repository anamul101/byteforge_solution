"use client";
import { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import openai from "../assets/images/openai.webp";
import meta from "../assets/images/meta.webp";
import adept from "../assets/images/adept.webp";
import cohere from "../assets/images/cohere.webp";
import anthropic from "../assets/images/anthropic.webp";

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    loop: true,
    mode: "snap",
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 1, spacing: 32 },
      },
    },
    slides: { perView: 1 },
  });

  const testimonials = [
    {
      id: 1,
      quote:
        "We partnered with Scale AI to work with Enterprises to adopt Llama and train custom models with their own data. We are excited to collectively make Llama the industry standard and bring the benefits of AI to everyone.",
      name: "Mark Zuckerberg",
      title: "Founder and CEO, Meta",
      logo: meta,
    },
    {
      id: 2,
      quote:
        "Great to see Gemini 1.5 pro top the new Scale SEAL leaderboard for adversarial robustness! Congrats to the entire Gemini team…and the AI safety team for leading the charge on building in robustness to our models as a core capability. Thanks to the Scale AI team for doing the vital work to create these rigorous benchmarks, the field needs more great work on topics like this",
      name: "Demis Hassabis",
      title: "CEO, Deepmind",
      logo: adept,
    },
    {
      id: 3,
      quote:
        "Nice, a serious contender to LMSYS in evaluating LLMs has entered the chat: SEAL Leaderboards. LLM evals are improving, but not so long ago their state was very bleak, with qualitative experience very often disagreeing with quantitative rankings. Good evals are very difficult to build…They have to be comprehensive, representative, of high quality, and measure gradient signal, and there are a lot of details to think through and get right before your qualitative and quantitative assessments line up. …Good evals are unintuitively difficult, highly work-intensive, but quite important, so I'm happy to see more organizations join the effort to do it well.",
      name: "Andrej Karpathy",
      title: "Founder, EurekaLabsAI",
      logo: cohere,
    },
    {
      id: 4,
      quote:
        "Scale is doing an amazing job providing high-quality uncontaminated evals, now with code and instruction following!",
      name: "Noam Brown",
      title: "Member of Technical Staff, OpenAI",
      logo: anthropic,
    },
    {
      id: 5,
      quote:
        "We're going to need a lot more investment in high-quality evals and benchmarks to help us understand the actual comparative utility of the various models. This new set of private evals and leaderboards from Scale are great to see",
      name: "Nat Friedman",
      title: "Entrepreneur and Investor, and Former CEO of GitHub",
      logo: openai,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col max-w-3xl mx-auto items-center justify-center text-center mb-10 md:mb-20 md:mt-12">
          <div className="mb-5 lg:mb-5 overflow-hidden tracking-[3px] text-xs md:px-5 md:py-2 lg:text-xs uppercase bg-white bg-opacity-5 text-[#D1AAD7] rounded-full px-4 py-2">
            <span>Customers</span>
          </div>
          <h2 className="font-bold leading-snug lg:leading-[1.25] text-3xl md:text-4xl lg:text-5xl [text-wrap:balance]">
            We have changed the game of AI Evaluations - hear it from Industry
            Leaders.
          </h2>
          <p className="mt-4 lg:mt-2 leading-[1.60] text-neutral-100 lg:text-gray-300 lg:text-xl [text-wrap:balance] [white-space:inherit] block font-normal">
            Scale's SEAL Leaderboards are bringing trust to AI; learn from
            experts why expert-driven private evaluations are so important.
          </p>
        </div>

        <div className="relative z-10">
          <div className="select-none flex items-center justify-center mx-auto pointer-events-none absolute -top-[60%] -left-[10%] -right-[10%] opacity-50"></div>

          <div ref={sliderRef} className="keen-slider relative">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="keen-slider__slide flex items-center justify-center min-w-full px-6 py-10 md:py-20 bg-[#0A0B0D] to-transparent border border-[#e5e7eb37] rounded-[16px]"
              >
                <div className="lg:flex-1 max-w-[700px] text-center">
                  <q className="inline-block mb-8 text-base md:leading-[1.6] md:text-xl text-pretty">
                    {testimonial.quote}
                  </q>
                  <div className="flex items-center justify-center gap-4">
                    <div className="flex flex-col text-center">
                      <h4 className="inline-block font-medium md:leading-7 md:text-lg sm:mb-0">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm md:text-base text-white text-opacity-75">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full sm:flex items-center hidden grow min-h-[40px] mt-12 justify-evenly">
            {testimonials.map((testimonial, idx) => (
              <div
                key={testimonial.id}
                onClick={() => instanceRef.current?.moveToIdx(idx)}
                className={`cursor-pointer flex justify-center align-middle items-center relative transition-opacity duration-200 ${
                  currentSlide === idx ? "opacity-100" : "opacity-30"
                }`}
              >
                <img
                  alt={testimonial.name}
                  width={140}
                  height={40}
                  className="object-contain max-h-12 max-w-[70%] filter contrast-0 brightness-100"
                  src={typeof testimonial.logo === "string" ? testimonial.logo : testimonial.logo.src}
                />
              </div>
            ))}
          </div>

          {loaded && instanceRef.current && (
            <div className="relative mx-auto mt-8 max-w-max sm:hidden flex">
              {[...Array(testimonials.length).keys()].map((idx) => (
                <button
                  key={idx}
                  onClick={() => instanceRef.current?.moveToIdx(idx)}
                  className="px-1 py-2 sm:px-2"
                >
                  <div
                    className={`h-1 sm:h-1.5 md:h-2 rounded-full transition-width duration-300 ${
                      currentSlide === idx
                        ? "bg-white/40 w-4 sm:w-5 md:w-6"
                        : "bg-white w-1 sm:w-1.5 md:w-2"
                    }`}
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
