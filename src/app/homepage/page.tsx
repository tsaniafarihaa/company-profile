"use client";

import { BriefcaseIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type TeamMember = {
  picture: {
    large: string;
  };
};

// Simplified animation variant - only for important content reveals
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.3 },
  viewport: { once: true },
};

const services = [
  {
    title: "Digital Design",
    description:
      "We offer creative and unique design solutions for branding, marketing, and more.",
  },
  {
    title: "Digital Branding",
    description:
      "Enhance your brand's digital presence through strategic branding and digital marketing.",
  },
  {
    title: "Merchandise Production",
    description:
      "High-quality merchandise for marketing or as part of your brand identity.",
  },
  {
    title: "Production House",
    description:
      "We handle all aspects of video production from concept to final cut.",
  },
  {
    title: "Event Organizer",
    description:
      "Creating memorable events tailored to your brand and audience.",
  },
];

const testimonials = [
  {
    quote:
      "FUGO Creative exceeded our expectations. Their attention to detail and creativity are top-notch!",
    author: "John Doe",
    position: "CEO of CompanyX",
  },
  {
    quote:
      "An amazing team of professionals who truly care about our success. Highly recommended!",
    author: "Sarah Lee",
    position: "Marketing Head",
  },
  {
    quote:
      "Their team is skilled, and their support is exceptional. We're thrilled with the results.",
    author: "Emily Clark",
    position: "Project Manager",
  },
];

export default function HomePage() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          fetchTeamMembers();
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const teamSection = document.getElementById("team-section");
    if (teamSection) observer.observe(teamSection);

    return () => observer.disconnect();
  }, []);

  const fetchTeamMembers = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("https://randomuser.me/api/?results=8");
      const data = await response.json();
      setTeamMembers(data.results);
    } catch (error) {
      console.error("Error fetching team members:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="overflow-hidden">
      {/* Hero Section - Removed animations */}
      <section className="min-h-screen flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative">
          <Image
            src="/img/hero-1.jpeg"
            alt="Fugo Hero"
            fill
            priority
            className="object-cover"
            quality={75}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 transition-all duration-300" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
            <h2 className="text-white text-base sm:text-lg font-bold mb-2">
              WE ARE
            </h2>
            <h1 className="text-white text-4xl sm:text-6xl font-extrabold tracking-widest">
              FUGO
            </h1>
          </div>
        </div>

        <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative">
          <Image
            src="/img/hero-2.jpeg"
            alt="Creative Hero"
            fill
            priority
            className="object-cover"
            quality={75}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 transition-all duration-300" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
            <h2 className="text-white text-base sm:text-lg font-bold mb-2">
              WE ARE
            </h2>
            <h1 className="text-white text-4xl sm:text-6xl font-extrabold tracking-widest">
              CREATIVE
            </h1>
          </div>
        </div>
      </section>

      {/* About Section - Keep animation for main content reveal */}
      <section className="flex flex-col lg:flex-row items-center bg-white py-16 px-4 lg:px-24">
        <motion.div
          {...fadeInUp}
          className="lg:w-1/2 p-6 sm:p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 mb-8 lg:mb-0"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 flex items-center">
            <BriefcaseIcon className="h-8 w-8 text-[#2FA4F9] mr-2" />
            About Us
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-4 leading-relaxed">
            Fugo Creative, established in 2016 in Bandung, provides a one-stop
            solution for various creative services. In 2020, we became PT. Fugo
            Creative Group and have since expanded our sales channels, committed
            to delivering quality and excellent service in the era of Industry
            4.0.
          </p>
          <Link
            href="/about"
            className="mt-4 inline-block bg-[#2FA4F9] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#0E80C2] transition-colors duration-300"
          >
            Learn More
          </Link>
        </motion.div>

        <div className="lg:w-1/2 p-4">
          <Image
            src="/img/fugo2.png"
            alt="About Us"
            width={500}
            height={500}
            className="object-cover rounded-lg shadow-lg"
            priority
            quality={75}
          />
        </div>
      </section>

      {/* Services Section - Simplified animations */}
      <section className="relative py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl sm:text-4xl font-bold text-white mb-10">
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="card bg-white/30 backdrop-blur-sm shadow-lg rounded-lg p-6 hover:bg-[#2FA4F9] transition-all duration-300"
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-white text-sm sm:text-base">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Minimal animations */}
      <section
        id="team-section"
        className="flex flex-col lg:flex-row items-center bg-black text-white py-16 px-4 lg:px-24"
      >
        <div className="text-center lg:text-left lg:w-1/2 px-6 mb-6 lg:mb-0">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            With a talented{" "}
            <Link
              href="/team"
              className="inline-block bg-[#2FA4F9] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#0E80C2] transition-colors duration-300"
            >
              Team
            </Link>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 w-full lg:w-1/2 px-4 lg:px-0">
          {isLoading
            ? [...Array(8)].map((_, index) => (
                <div
                  key={index}
                  className="w-full h-32 bg-gray-700 animate-pulse rounded-lg"
                />
              ))
            : teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="w-full h-32 overflow-hidden rounded-lg"
                >
                  <Image
                    src={member.picture.large}
                    alt="Team Member"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                    quality={75}
                  />
                </div>
              ))}
        </div>
      </section>

      {/* Testimonials Section - Minimal animations */}
      <section className="bg-black py-16 px-4 lg:px-24 text-white">
        <h2 className="text-center text-3xl sm:text-4xl font-bold mb-10">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              {...fadeInUp}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <p className="text-base sm:text-lg italic">
                &quot;{testimonial.quote}&quot;
              </p>
              <p className="mt-4 text-right font-semibold">
                - {testimonial.author}, {testimonial.position}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
