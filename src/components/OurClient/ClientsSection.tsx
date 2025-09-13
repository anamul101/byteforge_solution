"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import client1 from "@/assets/images/Clients/client1.png";
import client2 from "@/assets/images/Clients/client2.jpg";
import client3 from "@/assets/images/Clients/client3.jpg";
import client4 from "@/assets/images/Clients/client4.jpg";
import client5 from "@/assets/images/Clients/client5.jpg";
import client6 from "@/assets/images/Clients/client6.jpg";
import client7 from "@/assets/images/Clients/client7.jpg";
import client8 from "@/assets/images/Clients/client8.jpg";
import client9 from "@/assets/images/Clients/client9.jpg";
import client10 from "@/assets/images/Clients/client10.jpg";
import client11 from "@/assets/images/Clients/client4.jpg";
import client12 from "@/assets/images/Clients/client6.jpg";

interface Client {
  id: number;
  name: string;
  logo: StaticImageData;
  description: string;
}

const ClientsSection = () => {
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    const mockClients: Client[] = [
      { id: 1, name: 'Microsoft', logo: client1, description: 'Technology Partner' },
      { id: 2, name: 'Amazon', logo: client2, description: 'Cloud Services' },
      { id: 3, name: 'Google', logo: client3, description: 'Search Engine Collaboration' },
      { id: 4, name: 'Tesla', logo: client4, description: 'Automotive Solutions' },
      { id: 5, name: 'Netflix', logo: client5, description: 'Streaming Services' },
      { id: 6, name: 'Apple', logo: client6, description: 'Device Integration' },
      { id: 7, name: 'Meta', logo: client7, description: 'Social Media Platforms' },
      { id: 8, name: 'Samsung', logo: client8, description: 'Electronics Partnership' },
      { id: 9, name: 'Intel', logo: client9, description: 'Hardware Solutions' },
      { id: 10, name: 'IBM', logo: client10, description: 'Enterprise Services' },
      { id: 11, name: 'Oracle', logo: client11, description: 'Database Management' },
      { id: 12, name: 'Salesforce', logo: client12, description: 'CRM Solutions' },
    ];
    setClients(mockClients);
  }, []);

  return (
    <section className="w-full py-12 px-4 bg-black text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-white bg-clip-text text-transparent">
          Our Valued Clients
        </h2>
        <p className="text-center text-gray-400 mb-12">
          We have more than 50 customers worldwide
        </p>

        {/* Top section with 2 rows and 6 columns */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-2 mb-8">
          {/* First card with col-span-2 and row-span-2 */}
          <div className="col-span-2 row-span-2 p-6 rounded-lg border border-white/10 bg-gradient-to-br from-[#111] to-[#222] flex flex-col justify-center items-center">
            <p className=" text-gray-400 text-xl font-bold mb-2">Unisoft Clients</p>
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent relative text-2xl font-extrabold text-center">
                  Our&nbsp;Customers.
                </span>
            <p className="text-gray-400 text-center">We have more than 50 customers worldwide</p>
          </div>

          {/* Next 4 cards in the top row */}
          {clients.slice(0, 4).map((client) => (
            <div 
              key={client.id}
              className="h-32 md:h-auto overflow-hidden rounded-lg border border-white/10 bg-[#111] hover:border-white/30 hover:shadow-white/20 transition-all duration-300 p-4 flex flex-col justify-center items-center"
            >
              <div className="relative w-16 h-16 mb-2">
                <Image 
                  src={client.logo} 
                  alt={client.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 64px, 64px"
                />
              </div>
              <h4 className="text-sm font-semibold text-center">{client.name}</h4>
            </div>
          ))}

          {/* Next 4 cards in the second row */}
          {clients.slice(4, 8).map((client) => (
            <div 
              key={client.id}
              className="h-32 md:h-auto overflow-hidden rounded-lg border border-white/10 bg-[#111] hover:border-white/20 hover:shadow-white/10 transition-all duration-300 p-4 flex flex-col justify-center items-center"
            >
              <div className="relative w-16 h-16 mb-2">
                <Image 
                  src={client.logo} 
                  alt={client.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 64px, 64px"
                />
              </div>
              <h4 className="text-sm font-semibold text-center">{client.name}</h4>
            </div>
          ))}
        </div>

        {/* Bottom section with 8 cards in 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {clients.slice(0, 8).map((client) => (
            <div 
              key={client.id}
              className="block overflow-hidden rounded-lg border border-white/10 bg-[#111] hover:border-white/30 hover:shadow-white/20 transition-all duration-300 p-6"
            >
              <div className="relative w-20 h-20 mx-auto mb-4">
                <Image 
                  src={client.logo} 
                  alt={client.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 80px, 80px"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center">{client.name}</h3>
              <p className="text-gray-400 text-sm text-center">{client.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;