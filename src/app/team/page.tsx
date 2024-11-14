"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type TeamMember = {
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
  };
};

const roles = [
  "Marketing Strategist",
  "SEO Specialist",
  "Content Creator",
  "Social Media Manager",
  "Graphic Designer",
  "Brand Manager",
  "Copywriter",
  "Web Developer",
  "PPC Specialist",
  "Email Marketing Specialist",
  "Account Manager",
  "Analytics Expert",
];

export default function TeamSection() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  const generateEmail = (first: string, last: string) =>
    `${first.toLowerCase()}.${last.toLowerCase()}@example.com`;
  const generatePhone = () =>
    `+1 (555) ${Math.floor(100 + Math.random() * 900)}-${Math.floor(
      1000 + Math.random() * 9000
    )}`;

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=12")
      .then((res) => res.json())
      .then((data) => setTeamMembers(data.results))
      .catch((error) => console.error("Error fetching team members:", error));
  }, []);

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-900">
          <div className="absolute inset-0 bg-[#2FA4F9]/10 mix-blend-overlay" />
        </div>
        <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            Our <span className="text-[#2FA4F9]">Team</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-base sm:text-lg md:text-xl max-w-2xl text-gray-300 px-4"
          >
            Meet the talented professionals behind our success
          </motion.p>
        </div>
      </div>

      {/* Team Section */}
      <div className="flex lg:flex-row flex-col items-center px-4 lg:px-8 py-16">
        {/* Left Side: Text Section */}
        <div className="lg:w-1/3 flex flex-col justify-center text-left space-y-6 mb-8 lg:mb-0">
          <h2 className="text-3xl lg:text-5xl font-bold">
            Meet Our Team of{" "}
            <span className="text-[#2FA4F9]">Professionals</span>
          </h2>
          <p className="text-md lg:text-lg text-gray-400">
            Certified experts, each specializing in their field to bring you the
            best solutions. Reach out to any of our team members directly.
          </p>
        </div>

        {/* Right Side: Image Grid with Info Overlay */}
        <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 h-[70vh]">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-lg bg-gray-800 shadow-lg hover:shadow-[0_0_15px_rgba(47,164,249,0.3)] transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={member.picture.large}
                alt={`${member.name.first} ${member.name.last}`}
                width={400}
                height={400}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
              />

              {/* Overlay with name, role, email, and phone */}
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 hover:opacity-100 flex flex-col items-center justify-center text-center transition-opacity duration-300 p-4">
                <h3 className="text-lg font-semibold">
                  {member.name.first} {member.name.last}
                </h3>
                <p className="text-sm text-[#2FA4F9] mb-2">
                  {roles[index % roles.length]}
                </p>
                <p className="text-xs text-gray-400">
                  {generateEmail(member.name.first, member.name.last)}
                </p>
                <p className="text-xs text-gray-400">{generatePhone()}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
