import React from "react";
import aboutimg2 from "../../assets/images/Aboutimg2.webp";
import Image from "next/image";

export default function AboutInfo() {
  return (
    <section className="py-20 bg-black text-white overflow-hidden">
      <div className="w-[1280px] mx-auto container">
        <div className="ρd__all ρd__div ρ_3DUbs">
          <Image
            alt=""
            loading="lazy"
            layout="responsive"
            width={1280}
            height={689}
            decoding="async"
            data-nimg={1}
            className="ρi ρnqSb"
            src={aboutimg2}
            style={{ color: "transparent" }}
          />

          <div className="flex flex-col max-w-3xl mx-auto items-center justify-center text-center mb-10 md:mb-20 md:mt-12 ρi ρpptuj">
            <div className="mb-5 lg:mb-5 overflow-hidden tracking-[3px] text-xs md:px-5 md:py-2 lg:text-xs uppercase bg-white bg-opacity-5 text-[#D1AAD7] rounded-full px-4 py-2">
              <span>headquarters</span>
            </div>
            <h2 className="font-aeonik leading-snug lg:leading-[1.25] text-3xl md:text-4.5xl lg:text-5xl [text-wrap:balance]">
              San Francisco
            </h2>
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row gap-8 pb-10">
          <div>
            <h3 className="text-8xl">900</h3>
            <div className="text-gray-400">Employees</div>
          </div>

          <div>
            <h3 className=" text-8xl">2016</h3>
            <div className="text-gray-400">Founded</div>
          </div>

          <div>
            <h3
              className="text-8xl"
              style={{
                backgroundImage:
                  "linear-gradient(74deg, #714DFF 0%, #9C83FF 23%, #E151FF 81%, #FFF759 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
              }}
            >
              $1.35B
            </h3>
            <div className="text-gray-400">Investment</div>
          </div>
        </div>
      </div>
    </section>
  );
}
