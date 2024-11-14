"use client";

import Image from "next/image";
import { useState } from "react";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("history");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const tabs = [
    { id: "history", label: "Our History" },
    { id: "team", label: "Our Team" },
    { id: "culture", label: "Our Culture" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="container mx-auto px-4 pt-20 sm:pt-24 pb-6 sm:pb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">
          About Us
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex justify-center mb-8">
          <div className="flex space-x-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-lg transition-colors ${
                  activeTab === tab.id
                    ? "bg-blue-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="sm:hidden mb-6">
          <button
            onClick={toggleMobileMenu}
            className="w-full flex items-center justify-between px-4 py-2 bg-gray-800 rounded-lg"
          >
            <span>{tabs.find((tab) => tab.id === activeTab)?.label}</span>
            <div className="flex flex-col w-6 h-5 justify-between">
              <span className="w-full h-0.5 bg-white"></span>
              <span className="w-full h-0.5 bg-white"></span>
              <span className="w-full h-0.5 bg-white"></span>
            </div>
          </button>

          {isMobileMenuOpen && (
            <div className="mt-2 rounded-lg overflow-hidden bg-gray-800">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full px-4 py-3 text-left transition-colors ${
                    activeTab === tab.id
                      ? "bg-blue-600 text-white"
                      : "text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          )}
        </div>
        {/* Content Sections */}
        {activeTab === "history" && (
          <section className="animate-fade-in">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Text Content */}
              <div className="lg:w-1/2">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-blue-400">
                  Our History
                </h2>
                <p className="text-base sm:text-lg mb-4">
                  Founded in 2010, our company has been at the forefront of
                  innovation in the tech industry. We started as a small startup
                  with a big vision: to revolutionize the way people interact
                  with technology.
                </p>
                <p className="text-base sm:text-lg">
                  Over the years, we&apos;ve grown from a team of 5 to over 200
                  employees, with offices in major tech hubs around the world.
                  Our commitment to excellence and user-centric design has led
                  us to develop award-winning products used by millions.
                </p>
              </div>

              {/* Image Grid */}
              <div className="lg:w-1/2">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <Image
                    src="https://placehold.co/400x300/black/white"
                    alt="Singapore Office"
                    width={400}
                    height={300}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                  <Image
                    src="https://placehold.co/400x300/black/white"
                    alt="Sydney Office"
                    width={400}
                    height={300}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                  <Image
                    src="https://placehold.co/400x300/black/white"
                    alt="Tokyo Office"
                    width={400}
                    height={300}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                  <Image
                    src="https://placehold.co/400x300/black/white"
                    alt="Dubai Office"
                    width={400}
                    height={300}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                  <Image
                    src="https://placehold.co/400x300/black/white"
                    alt="Bangkok Office"
                    width={400}
                    height={300}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                  <Image
                    src="https://placehold.co/400x300/black/white"
                    alt="Cambodia Office"
                    width={400}
                    height={300}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {activeTab === "team" && (
          <section className="animate-fade-in">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-blue-400">
              Our Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg"
                >
                  <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-center">
                    {member.name}
                  </h3>
                  <p className="text-blue-400 mb-2 text-center text-sm sm:text-base">
                    {member.title}
                  </p>
                  <p className="text-center text-gray-300 text-sm sm:text-base">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === "culture" && (
          <section className="animate-fade-in">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-blue-400">
              Our Culture
            </h2>
            <p className="text-base sm:text-lg mb-4">
              At our core, we believe in fostering a culture of innovation,
              collaboration, and continuous learning. We encourage our team
              members to think outside the box, take risks, and push the
              boundaries of what&apos;s possible.
            </p>
            <p className="text-base sm:text-lg mb-4">Our values include:</p>
            <ul className="list-disc list-inside text-base sm:text-lg mb-4 space-y-2 pl-4">
              <li>Passion for excellence</li>
              <li>User-centric approach</li>
              <li>Embracing diversity and inclusion</li>
              <li>Commitment to sustainability</li>
              <li>Continuous learning and growth</li>
            </ul>
            <p className="text-base sm:text-lg">
              We believe that by nurturing a positive and inclusive work
              environment, we can bring out the best in our team and deliver
              exceptional products and services to our customers.
            </p>
          </section>
        )}
      </main>
    </div>
  );
}

const teamMembers = [
  {
    name: "Sona",
    title: "CEO & Founder",
    description: "Leads our company with vision and passion.",
    image: "/img/1. Sona.png",
  },
  {
    name: "Sandi",
    title: "CTO",
    description: "Technical mastermind behind our innovative products.",
    image: "/img/2. Sandi.png",
  },
  {
    name: "Rahdian",
    title: "Head of Design",
    description: "Brings creativity to every project.",
    image: "/img/3. Rahdian.png",
  },
  {
    name: "Melinda",
    title: "Product Manager",
    description: "Ensures our products meet user needs.",
    image: "/img/4. Melinda.png",
  },
  {
    name: "Nada",
    title: "Marketing Director",
    description: "Crafts our brand strategy and messaging.",
    image: "/img/5. Nada.png",
  },
  {
    name: "Fikri",
    title: "Lead Developer",
    description: "Oversees the development of our core products.",
    image: "/img/6. Fikri.png",
  },
  {
    name: "Rayi",
    title: "UX Researcher",
    description: "Ensures our products are user-friendly.",
    image: "/img/7. Rayi.png",
  },
  {
    name: "Raihan",
    title: "Data Scientist",
    description: "Drives our data-driven decision making.",
    image: "/img/8. Raihan.png",
  },
  {
    name: "Rudi",
    title: "Operations Manager",
    description: "Keeps our company running smoothly.",
    image: "/img/9. Rudi.png",
  },
  {
    name: "Afinda",
    title: "Customer Success Manager",
    description: "Ensures our clients' satisfaction and growth.",
    image: "/img/10. Afinda.png",
  },
  {
    name: "Rizki",
    title: "Quality Assurance Lead",
    description: "Maintains the high quality of our products.",
    image: "/img/11. Rizki.png",
  },
  {
    name: "Danang",
    title: "Business Development Manager",
    description: "Explores new opportunities for growth.",
    image: "/img/12. Danang.png",
  },
];
