"use client";
import Button from "@/utility/button";
import Image from "next/image";
import cursor from "../assets/images/cursor.png";
import message from "../assets/images/message.png";
import hero from "../assets/images/hero.webp";
import microsoft from "../assets/images/microsoft.webp";
import meta from "../assets/images/meta.webp";
import openai from "../assets/images/openai.webp";
import cohere from "../assets/images/cohere.webp";
import adept from "../assets/images/adept.webp";
import { useEffect, useRef, useState } from "react";

// export const Hero = () => {
//   return (
//     <section className="bg-[#020202] container text-white py-40">
//       <div className="flex justify-center ">
//         <div className="inline-flex relative">
//           <div className="absolute top-0 hidden -translate-x-1/2 lg:block left-1/2">
//             <div className="w-full lg:w-auto pointer-events-none select-none">
//               <div className="hidden md:block">
//                 <div style={{ width: 1400, height: 650 }}>
//                   <div
//                     className="[&>canvas]:!w-full [&>canvas]:!h-full"
//                     style={{ width: "100%", height: "100%" }}
//                   >
//                     <canvas
//                       style={{ display: "block", width: 2800, height: 1300 }}
//                       width={0}
//                       height={0}
//                     ></canvas>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <Image src={hero} alt="hero" />
//           <h1
//             className="text-[2.7rem] font-light sm:leading-none leading-[1.1] sm:text-7xl xl:text-[89px] tracking-[-0.89px] font-aeonik text-center"
//             style={{ textShadow: "0px 10px 20px rgba(0, 0, 0, 0.35)" }}
//           >
//             Power
//             <br className="lg:hidden" />
//             <span className="relative">
//               <span className="invisible">Government&nbsp;AI</span>
//               <div className="hero_cubespinner__5nU4O">
//                 <div className="hero_face1____5ZN">Enterprise&nbsp;AI</div>
//                 <div className="hero_face2__hWvJM">Government&nbsp;AI</div>
//                 <div className="hero_face3__qUXn4">Generative&nbsp;AI</div>
//               </div>
//             </span>
//             <br />
//             With Your&nbsp;Data
//           </h1>

//           {/* <Image
//             src={message}
//             alt="hero"
//             className="absolute top-[50px] sm:left-[850px] mt-20"
//           /> */}
//         </div>
//       </div>
//       <p className="my-6 font-sans text-base text-[#F5F5F5] sm:px-0 font-medium leading-normal lg:my-[22px] lg:text-lg md:w-11/12 lg:w-full text-center lg:max-w-[860px] mx-auto">
//         Make the best models with the best data. Scale Data Engine powers nearly
//         every major foundation model, and with Scale GenAI Platform, leverages
//         your enterprise data to unlock the value of AI.
//       </p>
//       <div className="text-black flex justify-center">
//         <Button />
//         <a
//           href="#"
//           className="text-white text-sm relative focus-visible:outline outline-[rgba(255,255,255,0.64)] rounded-xl outline-offset-[3px] inline-block"
//         >
//           <div className="new-button_button--primary__EJ4AI font-medium justify-center flex flex-nowrap whitespace-nowrap transition-translate duration-300 cursor-pointer group items-center h-full group leading-[150%] new-button_button--purple__hhI2y text-sm px-[20px] py-[14px]">
//             <div className="py-2 px-4 rounded-md flex items-center font-medium">
//               Build AI
//               <span className="inline-block items-center ml-1 font-normal duration-300 w-fit transition-translate group-hover:translate-x-1 font-unicode">
//                 →
//               </span>
//             </div>
//           </div>
//         </a>
//       </div>
//     </section>
//   );
// };

import React from "react";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after the component is mounted
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Delay to ensure smooth animation
    return () => clearTimeout(timer);
  }, []);
  return (
    <section
      id=""
      className="py-18 lg:py-20 bg-transparent pt-0 lg:pt-0 pb-0 lg:pb-0 text-white bg-black"
      style={{ backgroundColor: "black" }}
    >
      <div className="container relative py-5">
        {/* Canvas Section */}
        <div className="absolute top-0 hidden -translate-x-1/2 lg:block left-1/2">
          <div className="w-full lg:w-auto pointer-events-none select-none">
            <div className="hidden md:block">
              <div>
                <div
                  className="[&>canvas]:!w-full [&>canvas]:!h-full"
                  style={{ width: "100%", height: "100%" }}
                >
                  <canvas
                    style={{ display: "block", width: 2800, height: 1300 }}
                    width={0}
                    height={0}
                  ></canvas>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <Image
          alt=""
          loading="lazy"
          width={1100}
          height={511}
          decoding="async"
          data-nimg={1}
          className={`top-7 my-7 sm:top-0 transition-opacity duration-1000 pointer-events-none absolute object-cover md:left-1/2 -translate-x-1/2 py-4 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ color: "transparent" }}
          src={hero}
        />

        {/* Content Section */}
        <div className="pt-10 xl:pt-44">
          <div className="relative z-10">
            {/* Heading */}
            <h1
              className="text-[2.7rem] font-light sm:leading-none leading-[1.1] sm:text-7xl xl:text-[89px] tracking-[-0.89px] font-aeonik text-center"
              style={{ textShadow: "0px 10px 20px 0px rgba(0, 0, 0, 0.35)" }}
            >
              Power <br className="lg:hidden" />
              <span className="relative">
                <span className="invisible">Government&nbsp;AI</span>
                <div className="hero_cubespinner__5nU4O">
                  <div className="hero_face1____5ZN">Enterprise&nbsp;AI</div>
                  <div className="hero_face2__hWvJM">Government&nbsp;AI</div>
                  <div className="hero_face3__qUXn4">Generative&nbsp;AI</div>
                </div>
              </span>
              <br />
              With Your&nbsp;Data
            </h1>

            {/* Subheading */}
            <h2 className="my-6 font-sans text-base text-[#F5F5F5] sm:px-0 font-medium leading-normal lg:my-[22px] lg:text-lg md:w-11/12 lg:w-full text-center lg:max-w-[860px] mx-auto">
              Make the best models with the best data. Scale Data Engine powers
              nearly every major foundation model, and with Scale GenAI
              Platform, leverages your enterprise data to unlock the value of
              AI.
            </h2>

            {/* Buttons */}
            <div className="items-center w-full mx-auto space-x-6 md:mb-0 xl:mb-9 max-w-max">
              <Button />
              <a
                style={{ WebkitTapHighlightColor: "transparent" }}
                className="text-[#F4F0FF] hover:text-white transition-colors duration-300 py-2 font-medium whitespace-nowrap text-sm leading-5 group relative focus-visible:outline outline-[rgba(255,255,255,0.64)] rounded-xl outline-offset-[3px] inline-block"
                href="#"
              >
                Build AI
                <span className="inline-block ml-1 font-normal duration-300 w-fit transition-translate group-hover:translate-x-1 font-unicode">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
