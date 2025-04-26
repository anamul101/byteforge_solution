"use client";
import { useState } from "react";
import services1 from "../../assets/images/services/services1.jpg";
import services2 from "../../assets/images/services/services2.jpg";
import services3 from "../../assets/images/services/services3.png";
import Image from "next/image";
import Link from "next/link";

export const ServicesCards = () => {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");

  // Sample event data - replace with your actual data
  const Services = [
    {
      id: 1,
      title: "DPRTE 2025 DEVELOPER",
      date: "March 26, 2025",
      category: "DEVELOPER",
      image: services1,
      url: "https://www.dprte.co.uk/",
      isUpcoming: true,
    },
    {
      id: 2,
      title: "DPRTE 2025 Conference",
      date: "March 26, 2025",
      category: "Conference",
      image: services2,
      url: "https://www.dprte.co.uk/",
      isUpcoming: true,
    },
    {
      id: 3,
      title: "DPRTE 2025 Conference",
      date: "March 26, 2025",
      category: "Conference",
      image: services3,
      url: "https://www.dprte.co.uk/",
      ispast: true,
    },
    {
      id: 4,
      title: "DPRTE 2025 Conference",
      date: "March 26, 2025",
      category: "Conference",
      image: services1,
      url: "https://www.dprte.co.uk/",
      ispast: true,
    },
    {
      id: 5,
      title: "DPRTE 2025 Conference",
      date: "March 26, 2025",
      category: "Conference",
      image: services1,
      url: "https://www.dprte.co.uk/",
      ispast: true,
    },
    // Add other events with isUpcoming: true/false
  ];

  const filterEvents = (type: "upcoming" | "past") => {
    return Services.filter((event) =>
      type === "upcoming" ? event.isUpcoming : !event.isUpcoming
    );
  };

  return (
    <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Tabs Navigation */}
        <div className="relative mb-6 md:mb-10 lg:mb-12">
          <div className="inline-flex justify-center space-x-2 sm:space-x-4 border border-white/10 rounded-[48px] p-1 sm:p-2">
            <button
              onClick={() => setActiveTab("upcoming")}
              className="relative"
            >
              <span
                className={`text-sm sm:text-base font-medium ${
                  activeTab === "upcoming"
                    ? "text-[#D1AAD7] bg-[#111] px-3 sm:px-4 py-1 sm:py-2 rounded-full"
                    : "text-white hover:text-white/80"
                } transition-colors duration-200`}
              >
                Upcoming
              </span>
            </button>

            <button
              onClick={() => setActiveTab("past")}
              className="relative"
            >
              <span
                className={`text-sm sm:text-base font-medium ${
                  activeTab === "past"
                    ? "text-[#D1AAD7] bg-[#111] px-3 sm:px-4 py-1 sm:py-2 rounded-full"
                    : "text-white hover:text-white/80"
                } transition-colors duration-200`}
              >
                Past
              </span>
            </button>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {filterEvents(activeTab).map((event) => (
            <Link 
            key={event.id}
            href={`/Service/${event.id}`}
            className="group block overflow-hidden rounded-lg border border-white/10 bg-[#111] hover:border-white/20 transition-all duration-300"
            onClick={() => {
              // Store the clicked service in sessionStorage
              sessionStorage.setItem(event.id.toString(), JSON.stringify(event));
            }}
          >
            {/* ... rest of your card content ... */}
            <div className="relative aspect-video sm:aspect-[4/3]">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent" />
              </div>

              <div className="p-4 sm:p-5 md:p-6 text-center">
                <span className="inline-block mb-3 sm:mb-4 tracking-[2px] sm:tracking-[3px] text-xs sm:text-sm uppercase bg-white/5 text-[#D1AAD7] rounded-full px-3 sm:px-4 py-1 sm:py-1.5">
                  {event.category}
                </span>
                <p className="text-xs sm:text-sm text-white/50 mb-3 sm:mb-4">
                  {event.date}
                </p>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white">
                  {event.title}
                </h3>
              </div>
          </Link>
          ))}
        </div>
      </div>
    </section>
  );
};