import React from 'react';
import Marquee from 'react-fast-marquee';
import openai from "../assets/images/openai.webp";
import meta from "../assets/images/meta.webp";
import adept from "../assets/images/adept.webp";
import cohere from "../assets/images/cohere.webp";
import anthropic from "../assets/images/anthropic.webp";

const LogoAnimationForMobaile = () => {
  const logos = [
    {
      name: 'openai',
      src: openai,
      width: 90,
      height: 24
    },
    {
      name: 'adept',
      src: adept,
      width: 75,
      height: 36
    },
    {
      name: 'meta',
      src: meta ,
      width: 90,
      height: 20
    },
    {
      name: 'cohere',
      src: cohere,
      width: 140,
      height: 24
    },
    {
      name: 'anthropic',
      src: anthropic,
      width: 126,
      height: 15
    }
  ];

  return (
    <div className="relative sm:pb-4 w-screen -translate-x-1/2 md:hidden left-1/2">
      <Marquee 
        speed={50} 
        gradient={false}
        pauseOnHover={true}
        pauseOnClick={true}
      >
        <div className="flex items-center justify-center gap-4 mx-6">
          {logos.map((logo, index) => (
            <div 
              key={index}
              className="relative flex items-center justify-center w-[230px] h-28 rounded-2xl overflow-hidden"
            >
              <div className="absolute bg-black/40 inset-px rounded-2xl"></div>
              <div className="absolute inset-0 border border-white/15 rounded-2xl"></div>
              <img 
                alt={logo.name}
                loading="lazy"
                width={logo.width}
                height={logo.height}
                decoding="async"
                className="logo-grid_full-white__9DeNP opacity-100 relative"
                srcSet={`
                  ${logo.src.src.replace('w=256', 'w=96')} 1x,
                  ${logo.src} 2x
                `}
                src={logo.src.src}
                style={{ color: 'transparent' }}
              />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default LogoAnimationForMobaile;