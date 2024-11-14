"use client";

import { useEffect, useState, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { IPort } from "../../types/portfolio";
import { getPort } from "@/libs/portfolio";

const categories = [
  "All",
  "Digital Design",
  "Digital Branding",
  "Merchandise Production",
  "Production House",
  "Event Organizer",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function PortfolioPage() {
  const [portfolioItems, setPortfolioItems] = useState<IPort[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        setIsLoading(true);
        const data = await getPort();
        setPortfolioItems(data);
      } catch (error) {
        console.error("Failed to fetch portfolio:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPortfolio();
  }, []);

  const filteredItems = useMemo(() => {
    return selectedCategory === "All"
      ? portfolioItems
      : portfolioItems.filter(
          (item) => item.fields.service === selectedCategory
        );
  }, [portfolioItems, selectedCategory]);

  return (
    <div className="min-h-screen bg-black text-white">
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
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
          >
            Our <span className="text-[#2FA4F9]">Portfolio</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-base sm:text-lg md:text-xl max-w-2xl text-gray-300 px-4"
          >
            Explore our creative works and innovative solutions
          </motion.p>
        </div>
      </div>

      {/* Filter Section */}
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full text-base font-medium transition-all duration-300
          ${
            selectedCategory === category
              ? "bg-[#2FA4F9] text-white shadow-lg scale-105"
              : "bg-gray-800/80 text-gray-300 hover:bg-gray-700 hover:scale-105"
          } whitespace-nowrap`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4"
        >
          <AnimatePresence mode="wait">
            {isLoading
              ? [...Array(6)].map((_, i) => (
                  <div
                    key={`skeleton-${i}`}
                    className="w-full aspect-[4/5] bg-gray-800 rounded-xl animate-pulse"
                  />
                ))
              : filteredItems.map((item) => (
                  <PortfolioCard key={item.fields.judul} item={item} />
                ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

interface PortfolioCardProps {
  item: IPort;
}

function PortfolioCard({ item }: PortfolioCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      className="group bg-gray-900 rounded-xl overflow-hidden 
        hover:shadow-[0_0_25px_rgba(47,164,249,0.15)] transition-all duration-500
        hover:translate-y-[-5px]"
    >
      {/* Image Container */}
      <div className="relative w-full aspect-[16/12] overflow-hidden">
        <Image
          src={`https:${item.fields.picture.fields.file.url}`}
          alt={item.fields.judul}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900" />
      </div>

      {/* Content Container */}
      <div className="relative p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          <span
            className="inline-block px-3 py-1 text-sm font-medium text-white bg-[#2FA4F9]/90 
            rounded-full backdrop-blur-sm"
          >
            {item.fields.service}
          </span>
        </div>
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#2FA4F9] transition-colors duration-300">
          {item.fields.judul}
        </h3>
        <div className="text-gray-400 text-base line-clamp-3 hover:line-clamp-none transition-all duration-300">
          {item.fields.desc}
        </div>
      </div>
    </motion.div>
  );
}
