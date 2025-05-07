"use client";
import services1 from "../../assets/images/services/services1.jpg";
import services2 from "../../assets/images/services/services2.jpg";
import services3 from "../../assets/images/services/services3.png";
import Image from "next/image";
import Link from "next/link";

export const ServicesCards = () => {
  // Sample event data - replace with your actual data
  const Services = [
    {
      id: 1,
      title: "Tailored Solutions to Power Your Business",
      description:
        "We design and develop custom web-based software applications tailored specifically to your business workflows and operations. Our solutions improve efficiency, reduce manual work, and ensure seamless digital transformation.",
      features: [
        "1.Business-specific features and dashboards.",
        "2.Scalable architecture for future growth",
        "3.Role-based access control & secure login",
        "4.Real-time analytics and reporting",
        "5.Integration with third-party systems (APIs)",
      ],
      category: "Customized Web-Based Software",
      image: services1,
    },
    {
      id: 2,
      title: "Your Online Store, Engineered for Sales",
      description:
        "We build responsive and high-performing e-commerce websites with user-friendly interfaces and secure transactions. Whether it's for retail or wholesale, our solutions are crafted to help you sell more effectively online.",
      features: [
        "1.Dynamic product catalog with categories",
        "2.Cart, wish list, and secure checkout",
        "3.Quotation or inquiry systems for B2B",
        "4.Customer login & order tracking",
        "5.Payment gateway integrations (SSLCommerz, bKash, Nagad)",
      ],
      category: "E-Commerce Website",
      image: services2,
    },
    {
      id: 3,
      title: "User-First Mobile Experiences",
      description:
        "We create intuitive, engaging mobile applications and UI/UX designs that offer seamless navigation and attractive interfaces for iOS and Android users.",
      features: [
        "1.Custom iOS/Android app development",
        "2.Clean, responsive user interface design",
        "3.API integration for web-app sync",
        "4.Push notifications and in-app messages",
        "5.Cross-platform compatibility",
      ],
      category: "Mobile Application and UI Design",
      image: services3,
    },
    {
      id: 4,
      title: "Your Technical Lifeline for Glitch-Free Systems",
      description:
        "We offer expert debugging and performance optimization for existing websites, mobile apps, or software systems. From broken layouts to backend errors, we fix it fast and professionally.",
      features: [
        "1.Frontend & backend bug resolution",
        "2.Performance and speed optimization",
        "3.Security patching and vulnerability fixes",
        "4.Cross-device and browser testing",
        "5.Clean documentation for all fixes",
      ],
      category: "Bugs Fixing",
      image: services1,
    },
    {
      id: 5,
      title: "Rank Higher. Reach More. Grow Faster.",
      description:
        "We provide strategic SEO services that improve your website's visibility on search engines. Our optimization ensures better ranking, more traffic, and improved user engagement.",
      features: [
        "1.On-page & technical SEO audits",
        "2.Keyword research & optimization",
        "3.Mobile and speed performance improvements",
        "4.SEO-friendly URL structure & meta tags",
        "5.Google Search Console & Analytics setup",
      ],
      category: "SEO Optimization",
      image: services1,
    },
    {
      id: 6,
      title: "Grow Your Brand with Targeted Campaigns",
      description:
        "Our digital marketing team creates and manages performance-driven campaigns across platforms to help you generate leads, increase traffic, and boost conversions.",
      features: [
        "1.Facebook, Instagram, LinkedIn, and Google Ads",
        "2.Audience targeting & campaign optimization",
        "3.Lead generation & conversion tracking",
        "4.Monthly analytics & performance reports",
        "5.Retargeting and email marketing campaigns",
      ],
      category: "Digital Marketing",
      image: services1,
    },
    {
      id: 7,
      title: "Create Impact with Visual Storytelling",
      description:
        "We offer professional video editing and creative design services for ads, social media, websites, and presentations, ensuring your brand looks polished and engaging.",
      features: [
        "1.Logo animation, intros & explainer videos",
        "2.Product & service promotional videos",
        "3.Subtitling, voiceovers & transitions",
        "4.Motion graphics and reels creation",
        "5.High-quality export for multiple platforms",
      ],
      category: "Video Editing and Designing",
      image: services1,
    },
    {
      id: 8,
      title: "Content-Driven Social Growth",
      description:
        "We manage your social media presence with strategic content creation and daily engagement. From post designs to community interaction, we grow your brand online.",
      features: [
        "1.Social content calendar & creative posts",
        "2.Reels, carousels, and stories designing",
        "3.Caption writing & hashtag research",
        "4.Page monitoring and inbox response",
        "5.Monthly growth tracking and reports",
      ],
      category: "Social Marketing with Content Making",
      image: services1,
    },
    // Add other events with isUpcoming: true/false
  ];

  return (
    <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {Services.map((service) => (
            <Link
              key={service.id}
              href={`/Service/${service.id}`}
              className="group hover:shadow-lg hover:shadow-white/10 block overflow-hidden rounded-lg border border-white/10 bg-[#111] hover:border-white/20 transition-all duration-300"
              onClick={() => {
                // Store the clicked service in sessionStorage
                sessionStorage.setItem(
                  service.id.toString(),
                  JSON.stringify(service)
                );
              }}
            >
              {/* ... rest of your card content ... */}
              <div className="relative aspect-video sm:aspect-[4/3]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent" />
              </div>

              <div className="p-4 sm:p-5 md:p-6">
                <span className="inline-block mb-3 sm:mb-4 tracking-[2px] sm:tracking-[3px] text-xs sm:text-sm uppercase  text-[#D1AAD7] py-1 sm:py-1.5">
                  {service.category}
                </span>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/50 mb-3 sm:mb-4">
                  {service.description?.slice(0, 100).trim()}
                  {service.description?.length > 100 && "..."}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
