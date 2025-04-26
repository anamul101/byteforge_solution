import Button from '@/utility/button'
import React from 'react'

export default function AboutPage() {
  return (
    <section className="bg-black text-white overflow-hidden py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row lg:flex-row gap-8 lg:gap-12 items-stretch">
          {/* Text Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left">
            <div className="mb-4 lg:mb-6">
              <a
                href="/"
                className="text-sm md:text-base font-medium text-purple-300 hover:text-purple-200 transition-colors"
              >
                Scale Data Engine
              </a>
            </div>
            
            <div className="space-y-4 md:space-y-6">
              <h1 className="font-aeonik text-4xl md:text-5xl lg:text-6xl [text-wrap:balance] text-gray-70">
                About Us
              </h1>
              
              <h2 className="text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto md:mx-0">
              Our mission is to accelerate the development
              </h2>
            </div>

            <div className="mt-6 md:mt-8 w-full flex justify-center md:justify-start">
              <Button />
            </div>
          </div>

          {/* Video Container - Responsive Aspect Ratio */}
          <div className="w-full md:w-1/2">
            <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-900 relative h-[300px]">
              <video 
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="w-full h-full object-cover"
              >
                <source
                  src="https://pub-9ba39fa3c4764cd0bb3a9579562941d6.r2.dev/Data%20Engine/Data%20Engine-4k-mp4.mp4"
                  type="video/mp4"
                />
                <source
                  src="https://pub-9ba39fa3c4764cd0bb3a9579562941d6.r2.dev/Data%20Engine/Data%20Engine-4k-webm.webm"
                  type="video/webm"
                />
              </video>
              <img
                alt="Video preview"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover opacity-0"
                srcSet="/_next/image?url=https%3A%2F%2Fsite-assets.plasmic.app%2Fa0750e96f5da0176c68e8346190b7827.png&w=320&q=75 320w, /_next/image?url=https%3A%2F%2Fsite-assets.plasmic.app%2Fa0750e96f5da0176c68e8346190b7827.png&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fsite-assets.plasmic.app%2Fa0750e96f5da0176c68e8346190b7827.png&w=768&q=75 768w, /_next/image?url=https%3A%2F%2Fsite-assets.plasmic.app%2Fa0750e96f5da0176c68e8346190b7827.png&w=992&q=75 992w, /_next/image?url=https%3A%2F%2Fsite-assets.plasmic.app%2Fa0750e96f5da0176c68e8346190b7827.png&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fsite-assets.plasmic.app%2Fa0750e96f5da0176c68e8346190b7827.png&w=1920&q=75 1920w"
                src="/_next/image?url=https%3A%2F%2Fsite-assets.plasmic.app%2Fa0750e96f5da0176c68e8346190b7827.png&w=1920&q=75"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}