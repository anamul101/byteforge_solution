"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import team1 from "../../assets/images/team1.jpg";
import team2 from "@/assets/images/team2.webp";
import team3 from "@/assets/images/team3.webp";

interface TeamMember {
  name: string;
  role: string;
  imageUrl: string | StaticImageData;
  description: string;
}

interface TeamCardProps {
  member: TeamMember;
}

const TeamCard = ({ member }: TeamCardProps) => {
  return (
    <div className="flex items-center gap-6 p-6 border border-[rgba(255,255,255,0.1)] hover:border-[#a370ab] rounded-lg group bg-[#111] transition-all duration-300 ease-out hover:shadow-[0_4px_12px_rgba(163,112,171,0.25)]">
      {/* Image Section with animated border and scale */}
      <div className="flex-shrink-0 rounded-full border-2 border-white/20 p-1 hover:border-[#a370ab] transition-all duration-300 ease-out group-hover:scale-105 transform-gpu">
        <Image
          className="h-[100px] w-[100px] rounded-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
          src={member.imageUrl}
          alt={`${member.name} profile photo`}
          width={100}
          height={100}
        />
      </div>

      {/* Content Section */}
      <div className="flex-1">
        <div className="mb-2">
          <h3 className="text-lg font-semibold text-white">{member.name}</h3>
          <p className="text-sm text-[#D1AAD7]">{member.role}</p>
        </div>
        <p className="text-sm text-gray-300 leading-relaxed">
          {member.description}
        </p>
      </div>
    </div>
  );
};

const TeamSection = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "John Doe",
      role: "CEO & Founder",
      imageUrl: team1,
      description: "Visionary leader with 10+ years of experience in tech innovation...",
    },
    {
      name: "Jane Smith",
      role: "CTO",
      imageUrl: team1,
      description: "Technology expert specializing in scalable architecture...",
    },
    {
      name: "Mike Johnson",
      role: "Lead Designer",
      imageUrl: team1,
      description: "Creative director with a focus on user-centered design...",
    },
    {
      name: "Sarah Williams",
      role: "Marketing Director",
      imageUrl: team1,
      description: "Strategic marketing leader with digital campaign expertise...",
    },
    {
      name: "Sarah Williams",
      role: "Marketing Director",
      imageUrl: team1,
      description: "Strategic marketing leader with digital campaign expertise...",
    },
    {
      name: "Sarah Williams",
      role: "Marketing Director",
      imageUrl: team1,
      description: "Strategic marketing leader with digital campaign expertise...",
    },
  ];

  return (
    <section className="py-10 px-4 bg-black">
      <div className="container lg:w-[1280px] mx-auto py-10 overflow-hidden">
         <div className=" overflow-hidden tracking-[3px] text-xs md:px-5 md:py-2 lg:text-xs ">
            <span>Why</span>
          </div>
        <h2 className="text-3xl font-bold  mb-8 text-center uppercase text-[#D1AAD7] rounded-full ">
          Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;