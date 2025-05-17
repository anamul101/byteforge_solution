export default function MissionSection() {
  return (
    <section className="relative text-white py-12 overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0 z-0">
        {/* Radial Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#2A0D45]/30 to-black" />
        
        {/* Angled Shape */}
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-r from-[#3A1D5D]/40 via-transparent to-[#3A1D5D]/40 transform skew-y-3 origin-top-left" />
        
        {/* Top Right Decoration */}
        <div className="absolute top-20 right-0 w-64 h-64 bg-[#3A1D5D]/20 rounded-full mix-blend-screen transform translate-x-1/2 -translate-y-1/3 blur-[100px]" />
        
        {/* Bottom Left Decoration */}
        <div className="absolute bottom-20 left-0 w-64 h-64 bg-[#3A1D5D]/20 rounded-full mix-blend-screen transform -translate-x-1/2 translate-y-1/3 blur-[100px]" />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex flex-col max-w-3xl mx-auto items-center justify-center text-center mb-10 md:mb-20 md:mt-12">
          <div className=" overflow-hidden tracking-[3px] text-xs md:px-5 md:py-2 lg:text-xs uppercase bg-white bg-opacity-5 text-[#D1AAD7] rounded-full px-4 py-2">
            <span>Why</span>
          </div>
          <h2 className="font-aeonik leading-snug lg:leading-[1.25] text-3xl md:text-4.5xl lg:text-5xl [text-wrap:balance] mb-8">
            Our Mission
          </h2>
        </div>

        {/* Two Column Content */}
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Left Column */}
          <div className="flex-1 space-y-6 text-lg md:text-xl text-gray-300 relative">
            <div className="absolute -left-8 top-0 w-1 h-full bg-gradient-to-b from-[#D1AAD7] to-transparent opacity-20" />
            <p className="[text-wrap:balance] text-justify">
              Our mission is to empower businesses through innovative digital solutions that drive measurable impact. 
              We aim to simplify complex challenges by providing reliable, scalable, and cost-effective technology tailored to our clients'
              unique needs. From idea to implementation, we strive to deliver excellence in every step of the digital journey — ensuring 
              that our clients are not only competitive but also leading in their industries.
            </p>
          </div>

          {/* Right Column */}
          <div className="flex-1 space-y-6 text-lg md:text-xl text-gray-300 relative">
            <div className="absolute -left-8 top-0 w-1 h-full bg-gradient-to-b from-[#D1AAD7] to-transparent opacity-20 md:hidden" />
            <p className="text-justify">
              We are dedicated to creating long-term value through technology,fostering a culture of innovation,and maintaining the highest standards of professionalism, support, and client satisfaction.
            </p>
            {/* Floating Accent */}
            <div className="absolute -right-8 bottom-0 w-24 h-24 bg-[#D1AAD7]/10 rounded-full blur-[60px]" />
          </div>
        </div>
      </div>
    </section>
  );
}