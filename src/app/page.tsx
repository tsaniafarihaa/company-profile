'use client';

import { memo, useEffect, useState, useCallback } from "react";
import Image from 'next/image';
import Link from "next/link";
import dynamic from 'next/dynamic';
import { BriefcaseIcon } from "@heroicons/react/outline";

// Types
type TeamMember = {
  picture: {
    large: string;
  };
};

// Lazy load motion components
const MotionDiv = dynamic(() => import('framer-motion').then(mod => mod.motion.div), {
  ssr: false,
});

// Constants
const ANIMATION_CONFIG = {
  fadeIn: {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  },
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  }
};

const SERVICES = [
  {
    id: 1,
    title: "Digital Design",
    description: "Creative and unique design solutions for branding and marketing.",
  },
  {
    id: 2,
    title: "Digital Branding",
    description: "Strategic branding and digital marketing solutions.",
  },
  {
    id: 3,
    title: "Merchandise Production",
    description: "High-quality merchandise for marketing and brand identity.",
  },
  {
    id: 4,
    title: "Production House",
    description: "Comprehensive video production services.",
  },
  {
    id: 5,
    title: "Event Organizer",
    description: "Memorable events tailored to your needs.",
  },
];

const TESTIMONIALS = [
  {
    id: 1,
    text: "FUGO Creative exceeded our expectations. Their attention to detail is top-notch!",
    author: "John Doe",
    role: "CEO of CompanyX",
    delay: 0
  },
  {
    id: 2,
    text: "An amazing team of professionals who truly care about our success.",
    author: "Sarah Lee",
    role: "Marketing Head",
    delay: 0.2
  },
  {
    id: 3,
    text: "Their team is skilled, and their support is exceptional.",
    author: "Emily Clark",
    role: "Project Manager",
    delay: 0.4
  }
];

// Optimized Components
const HeroHalf = memo(({ title, image }: { title: string; image: string }) => (
  <div
    className="w-full md:w-1/2 h-96 md:h-screen relative bg-cover bg-center group"
    style={{ backgroundImage: `url(${image})` }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition-all duration-300" />
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
      <h2 className="text-white text-lg font-bold mb-2">WE ARE</h2>
      <h1 className="text-white text-6xl font-extrabold tracking-widest transition-transform duration-300 transform group-hover:text-[#2Fa4F9] group-hover:scale-110">
        {title}
      </h1>
    </div>
  </div>
));
HeroHalf.displayName = 'HeroHalf'


const ServiceCard = memo(({ title, description, index }: { title: string; description: string; index: number }) => (
  <MotionDiv
    {...ANIMATION_CONFIG.fadeInUp}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="card bg-white/30 backdrop-blur-sm shadow-lg rounded-lg p-6 hover:bg-[#2FA4F9] transition-all duration-300 hover:-translate-y-1"
  >
    <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">{title}</h3>
    <p className="text-white text-sm sm:text-base">{description}</p>
  </MotionDiv>
));
ServiceCard.displayName = 'ServiceCard'

const TestimonialCard = memo(({ text, author, role, delay }: { text: string; author: string; role: string; delay: number }) => (
  <MotionDiv
    {...ANIMATION_CONFIG.fadeInUp}
    transition={{ duration: 0.6, delay }}
    className="bg-gray-800 p-6 rounded-lg shadow-lg"
  >
    <p className="text-lg italic">&quot;{text}&quot;</p>
    <p className="mt-4 text-right font-semibold">- {author}, {role}</p>
  </MotionDiv>
));
TestimonialCard.displayName = 'TestimonialCard'

// Main Component
export default function HomePage() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  const fetchTeamMembers = useCallback(async () => {
    const controller = new AbortController();
    
    try {
      const response = await fetch('https://randomuser.me/api/?results=12', {
        signal: controller.signal,
        next: { revalidate: 3600 } // Cache for 1 hour
      });
      
      if (!response.ok) throw new Error('Failed to fetch team members');
      
      const data = await response.json();
      setTeamMembers(data.results);
    } catch (error) {
      if (error instanceof Error && error.name !== 'AbortError') {
        console.error("Error fetching team members:", error);
      }
    }

    return () => controller.abort();
  }, []);

  useEffect(() => {
    fetchTeamMembers();
  }, [fetchTeamMembers]);

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col md:flex-row">
        <HeroHalf 
          title="FUGO" 
          image="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg" 
        />
        <HeroHalf 
          title="CREATIVE" 
          image="https://images.pexels.com/photos/2678468/pexels-photo-2678468.jpeg" 
        />
      </section>

      {/* About Section */}
      <section className="flex flex-col lg:flex-row items-center bg-white py-16 lg:px-24 px-6">
        <MotionDiv
          {...ANIMATION_CONFIG.fadeIn}
          className="lg:w-1/2 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 mb-8 lg:mb-0"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6 flex items-center group">
            <BriefcaseIcon className="h-8 w-8 text-[#2FA4F9] mr-2 group-hover:text-[#0E80C2] transition-colors duration-300" />
            About Us
          </h2>
          <p className="text-lg text-gray-600 mb-4 leading-relaxed">
            Fugo Creative, established in 2016 in Bandung, provides a one-stop solution for various creative services.
            In 2020, we became PT. Fugo Creative Group and have since expanded our sales channels, committed to
            delivering quality and excellent service in the era of Industry 4.0.
          </p>
          <Link 
            href="/about"
            className="mt-4 inline-block bg-[#2FA4F9] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#0E80C2] transition-colors duration-300"
          >
            Learn More
          </Link>
        </MotionDiv>
        <div className="lg:w-1/2 h-full flex items-center justify-center">
          <Image
            src="/img/fugo2.png"
            alt="About Us"
            width={500}
            height={500}
            className="object-cover rounded-lg"
            loading="lazy"
            quality={75}
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-20 px-6 lg:px-24">
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center"
          style={{
            backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
          }}
        />
        <div className="absolute inset-0 bg-black opacity-70" />
        <div className="container mx-auto relative z-10">
          <MotionDiv
            {...ANIMATION_CONFIG.fadeInUp}
            className="text-center text-3xl sm:text-4xl font-bold text-white mb-10"
          >
            Our Services
          </MotionDiv>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-8">
            {SERVICES.map((service, index) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="flex flex-col lg:flex-row items-center bg-black text-white py-16 lg:px-24 px-6">
        <div className="text-center lg:text-left lg:w-1/2 px-6 mb-6 lg:mb-0">
          <h2 className="text-5xl font-bold mb-4">
            With a talented{" "}
            <Link 
              href="/team"
              className="mt-4 inline-block bg-[#2FA4F9] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#0E80C2] transition-colors duration-300"
            >
              Team
            </Link>
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 w-full lg:w-1/2">
          {teamMembers.map((member, index) => (
            <div key={index} className="w-full h-32 overflow-hidden rounded-lg">
              <Image
                src={member.picture.large}
                alt={`Team Member ${index + 1}`}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                width={150}
                height={150}
                loading="lazy"
                quality={75}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-black py-16 px-6 lg:px-24 text-white" aria-label="Client Testimonials">
        <h2 className="text-center text-4xl font-bold mb-10">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map(testimonial => (
            <TestimonialCard
              key={testimonial.id}
              text={testimonial.text}
              author={testimonial.author}
              role={testimonial.role}
              delay={testimonial.delay}
            />
          ))}
        </div>
      </section>
    </main>
  );
}