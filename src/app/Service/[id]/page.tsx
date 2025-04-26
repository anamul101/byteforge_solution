"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Service {
  id: number;
  title: string;
  date: string;
  category: string;
  image: any;
  url: string;
  isUpcoming?: boolean;
  ispast?: boolean;
}

export default function ServiceInfo({ params }: { params: { id: string } }) {
  const [service, setService] = useState<Service | null>(null);
  useEffect(() => {
    const data = sessionStorage.getItem(params.id);
    if (data) setService(JSON.parse(data));
  }, [params.id]);

  if (!service) return <div>Loading...</div>;

  return (
    <section className="bg-black text-white w-full overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-20">
        <div className="flex flex-col items-center justify-center mb-6 md:mb-8">
          <Link href="/Services" className="text-neutral-400 hover:text-white transition-colors duration-200 text-sm md:text-base">
            &lt;- Back to Services
          </Link>
        </div>

        {/* Service Card */}
        <div className="group block overflow-hidden rounded-lg border border-white/15 bg-[#111] w-full md:w-3/4 lg:w-1/2 mx-auto hover:border-white/30 transition-all duration-300">
          <div className="relative aspect-video sm:aspect-[4/3]">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent" />
          </div>

          <div className="p-4 sm:p-5 md:p-6 text-center">
            <span className="inline-block mb-2 sm:mb-3 tracking-[1px] sm:tracking-[2px] text-xs md:text-sm uppercase bg-white/5 text-[#D1AAD7] rounded-full px-2.5 py-1 md:px-3 md:py-1.5">
              {service.category}
            </span>
            <p className="text-xs md:text-sm text-white/50 mb-2 sm:mb-3">
              {service.date}
            </p>
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white">
              {service.title}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}