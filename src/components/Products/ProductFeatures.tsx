import React from 'react';

const ProductFeatures = () => {
  const features = [
    {
      title: "Ops Center for Quality Control",
      description: "Real-time visibility into data collection and curation",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 32 32">
          <g clipPath="url(#a)">
            <mask id="b" width="32" height="32" x="0" y="0" maskUnits="userSpaceOnUse" style={{ maskType: 'luminance' }}>
              <path fill="#fff" d="M32 0H0v32h32V0Z"></path>
            </mask>
            <g mask="url(#b)">
              <path fillRule="evenodd" d="M16.003 24.01c-7.338 0-10.983-5.836-11.89-7.539a.978.978 0 0 1 0-.922c.907-1.703 4.552-7.539 11.89-7.539 7.338 0 10.983 5.836 11.89 7.54a.977.977 0 0 1 0 .921c-.907 1.703-4.552 7.54-11.89 7.54Zm.007-13.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Zm0 9a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z" clipRule="evenodd"></path>
            </g>
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M0 0h32v32H0z"></path>
            </clipPath>
          </defs>
        </svg>
      )
    },
    {
      title: "Experts, Linguists, and Coders",
      description: "Access a global network of hand-picked experts across diverse fields to build the highest quality datasets",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 32 32">
        <g clipPath="url(#a)">
          <mask id="b" width="32" height="32" x="0" y="0" maskUnits="userSpaceOnUse" style={{ maskType: 'luminance' }}>
            <path fill="#fff" d="M32 0H0v32h32V0Z"></path>
          </mask>
          <g mask="url(#b)">
            <path fillRule="evenodd" d="M16.003 24.01c-7.338 0-10.983-5.836-11.89-7.539a.978.978 0 0 1 0-.922c.907-1.703 4.552-7.539 11.89-7.539 7.338 0 10.983 5.836 11.89 7.54a.977.977 0 0 1 0 .921c-.907 1.703-4.552 7.54-11.89 7.54Zm.007-13.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Zm0 9a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z" clipRule="evenodd"></path>
          </g>
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h32v32H0z"></path>
          </clipPath>
        </defs>
      </svg>
      )
    },
    {
      title: "Improved Models",
      description: "Train your models with advanced datasets delivered through our purpose-built infrastructure",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 32 32">
        <g clipPath="url(#a)">
          <mask id="b" width="32" height="32" x="0" y="0" maskUnits="userSpaceOnUse" style={{ maskType: 'luminance' }}>
            <path fill="#fff" d="M32 0H0v32h32V0Z"></path>
          </mask>
          <g mask="url(#b)">
            <path fillRule="evenodd" d="M16.003 24.01c-7.338 0-10.983-5.836-11.89-7.539a.978.978 0 0 1 0-.922c.907-1.703 4.552-7.539 11.89-7.539 7.338 0 10.983 5.836 11.89 7.54a.977.977 0 0 1 0 .921c-.907 1.703-4.552 7.54-11.89 7.54Zm.007-13.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Zm0 9a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z" clipRule="evenodd"></path>
          </g>
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h32v32H0z"></path>
          </clipPath>
        </defs>
      </svg>
      )
    },
    {
      title: "Increased Efficiency",
      description: "Faster, more cost-effective dataset creation",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 32 32">
        <g clipPath="url(#a)">
          <mask id="b" width="32" height="32" x="0" y="0" maskUnits="userSpaceOnUse" style={{ maskType: 'luminance' }}>
            <path fill="#fff" d="M32 0H0v32h32V0Z"></path>
          </mask>
          <g mask="url(#b)">
            <path fillRule="evenodd" d="M16.003 24.01c-7.338 0-10.983-5.836-11.89-7.539a.978.978 0 0 1 0-.922c.907-1.703 4.552-7.539 11.89-7.539 7.338 0 10.983 5.836 11.89 7.54a.977.977 0 0 1 0 .921c-.907 1.703-4.552 7.54-11.89 7.54Zm.007-13.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Zm0 9a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z" clipRule="evenodd"></path>
          </g>
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h32v32H0z"></path>
          </clipPath>
        </defs>
      </svg>
      )
    },
    {
      title: "Model Evaluation",
      description: "Scale proactively finds and surfaces model weaknesses, including targeted red-teaming.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 32 32">
        <g clipPath="url(#a)">
          <mask id="b" width="32" height="32" x="0" y="0" maskUnits="userSpaceOnUse" style={{ maskType: 'luminance' }}>
            <path fill="#fff" d="M32 0H0v32h32V0Z"></path>
          </mask>
          <g mask="url(#b)">
            <path fillRule="evenodd" d="M16.003 24.01c-7.338 0-10.983-5.836-11.89-7.539a.978.978 0 0 1 0-.922c.907-1.703 4.552-7.539 11.89-7.539 7.338 0 10.983 5.836 11.89 7.54a.977.977 0 0 1 0 .921c-.907 1.703-4.552 7.54-11.89 7.54Zm.007-13.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Zm0 9a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z" clipRule="evenodd"></path>
          </g>
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h32v32H0z"></path>
          </clipPath>
        </defs>
      </svg>
      )
    },
    {
      title: "Responsible Development",
      description: "Upholding privacy, fairness, transparency and ethics",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 32 32">
          {/* SVG paths for sixth icon */}
        </svg>
      )
    }
  ];

  return (
    <section className="bg-black text-white w-full overflow-hidden">
      <div className="mx-auto px-4 py-10  xl:max-w-7xl">
        <div className="flex flex-col max-w-3xl mx-auto items-center justify-center text-center mb-10 md:mb-20 md:mt-12">
          <div className="mb-5 lg:mb-5 overflow-hidden tracking-[3px] text-xs md:px-5 md:py-2 lg:text-xs uppercase bg-white bg-opacity-5 text-[#D1AAD7] rounded-full px-4 py-2">
            <span>Key Features</span>
          </div>
          <h2 className="font-aeonik leading-snug lg:leading-[1.25] text-3xl md:text-4.5xl lg:text-5xl [text-wrap:balance]">
            Enabling the Next Generation of LLMs
          </h2>
          <p className="mt-4 lg:mt-2 leading-[1.60] text-neutral-100 lg:text-gray-300 lg:text-xl [text-wrap:balance] [white-space:inherit] block font-normal">
            Scale has deep experience providing the data underpinning the most advanced LLMs.
          </p>
        </div>

        <div className="!flex flex-wrap gap-16 md:gap-y-20 md:gap-x-6 xl:gap-x-14">
          {features.map((feature, index) => (
            <div key={index} className="flex-grow flex-shrink-0 basis-full lg:basis-1/4 md:max-w-[368px]">
              <figure className="relative flex items-center justify-center rounded-lg select-none w-11 h-11 bg-white/[0.09] border border-white/10">
                <div className="relative w-6 h-6">
                  {feature.icon}
                </div>
              </figure>
              <p className="relative mt-6 text-2xl font-aeonik">{feature.title}</p>
              <p className="relative mt-4 text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;