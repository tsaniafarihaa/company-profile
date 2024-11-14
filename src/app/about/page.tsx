"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Target, HandshakeIcon, Sparkles, Sprout } from "lucide-react";

interface TeamMember {
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
  };
  email: string;
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const TeamMember = ({
  name,
  role,
  image,
  description,
}: {
  name: string;
  role: string;
  image: string;
  description: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="flex flex-col items-center p-4 sm:p-6 bg-gray-900 rounded-xl hover:bg-gray-800 transition-colors duration-300"
  >
    <div className="relative w-32 h-32 sm:w-40 sm:h-40 mb-4">
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover rounded-full border-4 border-[#2FA4F9] transition-transform duration-300 hover:scale-105"
        sizes="(max-width: 768px) 128px, 160px"
      />
    </div>
    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 text-center">
      {name}
    </h3>
    <p className="text-[#2FA4F9] font-medium mb-4 text-center">{role}</p>
    <p className="text-gray-400 text-center text-sm sm:text-base">
      {description}
    </p>
  </motion.div>
);

const MilestoneCard = ({
  year,
  title,
  description,
}: {
  year: string;
  title: string;
  description: string;
}) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-start text-center sm:text-left"
  >
    <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 bg-[#2FA4F9] rounded-xl flex items-center justify-center text-xl sm:text-2xl font-bold text-white">
      {year}
    </div>
    <div>
      <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm sm:text-base">{description}</p>
    </div>
  </motion.div>
);

const ValueCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="bg-gray-900 p-4 sm:p-6 rounded-xl hover:bg-gray-800 transition-all duration-300 group"
  >
    <div className="text-[#2FA4F9] mb-4 flex justify-center sm:justify-start">
      <Icon
        size={32}
        className="transition-transform duration-300 group-hover:scale-110"
      />
    </div>
    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 text-center sm:text-left">
      {title}
    </h3>
    <p className="text-gray-400 text-sm sm:text-base text-center sm:text-left">
      {description}
    </p>
  </motion.div>
);

export default function AboutPage() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await fetch(
          "https://randomuser.me/api/?results=2&gender=male"
        );
        const data = await response.json();
        setTeamMembers(data.results);
      } catch (error) {
        console.error("Error fetching team members:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  const getTeamMemberDescription = (index: number) => {
    if (index === 0) {
      return "With over 15 years of experience in creative industry, founded Fugo Creative with a vision to transform the digital landscape.";
    }
    return "Leading our creative direction, brings 12 years of expertise in design and branding to deliver exceptional creative solutions.";
  };

  const milestones = [
    {
      year: "2016",
      title: "Founded in Bandung",
      description:
        "Fugo Creative was established with a mission to provide innovative creative solutions.",
    },
    {
      year: "2018",
      title: "Expanded Services",
      description:
        "Added merchandise production and event organization to our service portfolio.",
    },
    {
      year: "2020",
      title: "Company Evolution",
      description:
        "Became PT. Fugo Creative Group and expanded our market reach.",
    },
    {
      year: "2023",
      title: "Digital Innovation",
      description:
        "Launched innovative digital solutions adapting to industry 4.0.",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description:
        "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.",
    },
    {
      icon: HandshakeIcon,
      title: "Client Partnership",
      description:
        "We build strong, lasting relationships with our clients, treating their success as our own.",
    },
    {
      icon: Sparkles,
      title: "Creative Excellence",
      description:
        "We maintain the highest standards of creativity and quality in everything we do.",
    },
    {
      icon: Sprout,
      title: "Continuous Growth",
      description:
        "We foster a culture of learning and development, always striving to improve.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-900">
          <div className="absolute inset-0 bg-[#2FA4F9]/10 mix-blend-overlay" />
        </div>
        <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-center text-center">
          <motion.h1
            {...fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
          >
            About <span className="text-[#2FA4F9]">Fugo Creative</span>
          </motion.h1>
          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl max-w-2xl text-gray-300 px-4"
          >
            Transforming ideas into impactful creative solutions since 2016
          </motion.p>
        </div>
      </div>

      {/* History Timeline Section */}
      <section className="py-12 sm:py-16 md:py-20 container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12"
        >
          Our <span className="text-[#2FA4F9]">Journey</span>
        </motion.h2>
        <div className="max-w-3xl mx-auto space-y-8 sm:space-y-12">
          {milestones.map((milestone) => (
            <MilestoneCard
              key={milestone.year}
              year={milestone.year}
              title={milestone.title}
              description={milestone.description}
            />
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12"
          >
            Meet Our <span className="text-[#2FA4F9]">Leadership</span>
          </motion.h2>
          {isLoading ? (
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
              {[...Array(2)].map((_, i) => (
                <div
                  key={`skeleton-${i}`}
                  className="h-64 sm:h-96 bg-gray-800 rounded-xl animate-pulse"
                />
              ))}
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
              {teamMembers.map((member, i) => (
                <TeamMember
                  key={`${member.email}-${i}`}
                  name={`${member.name.first} ${member.name.last}`}
                  role={
                    i === 0 ? "Founder & CEO" : "Co-Founder & Creative Director"
                  }
                  image={member.picture.large}
                  description={getTeamMemberDescription(i)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Culture & Values Section */}
      <section className="py-12 sm:py-16 md:py-20 container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12"
        >
          Our <span className="text-[#2FA4F9]">Culture & Values</span>
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {values.map((value) => (
            <ValueCard
              key={value.title}
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#2FA4F9]/10">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6"
          >
            Join Our Creative Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-300 max-w-2xl mx-auto mb-6 sm:mb-8 text-sm sm:text-base"
          >
            We&apos;re always looking for talented individuals who share our
            passion for creativity and innovation.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#2FA4F9] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-medium 
              hover:bg-[#2FA4F9]/90 transition-colors text-sm sm:text-base"
          >
            View Opportunities
          </motion.button>
        </div>
      </section>
    </div>
  );
}
