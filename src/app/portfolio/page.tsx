"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";
import { IPort } from '../../types/portfolio';
import { getPort } from '@/libs/portfolio';

export default function PortfolioPage() {
  const [portfolioItems, setPortfolioItems] = useState<IPort[]>([]);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const data = await getPort();
        setPortfolioItems(data);
      } catch (error) {
        console.error("Failed to fetch portfolio:", error);
      }
    };
    fetchPortfolio();
  }, []);

  return (
    <div ref={ref} className="px-6 md:px-12 lg:px-20 min-h-screen bg-gray-50">
      <h1 className="text-center text-4xl font-bold text-gray-800 my-8">Our Portfolio</h1>
      <p className="text-center text-lg text-gray-600 mb-10">
        Explore our creative projects and solutions crafted with passion and precision.
      </p>
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioItems.map((item, index) => (
          <ParallaxCard
            key={item.fields.judul + index}
            imageUrl={`https:${item.fields.picture.fields.file.url}`}
            title={item.fields.judul}
            description={item.fields.desc}
            service={item.fields.service}
            index={index}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </div>
  );
}

// Component ParallaxCard for each portfolio item
interface ParallaxCardProps {
  imageUrl: string;
  title: string;
  description: string;
  service: string;
  index: number;
  scrollYProgress: MotionValue<number>; // Using MotionValue type for scrollYProgress
}

function ParallaxCard({ imageUrl, title, description, service, index, scrollYProgress }: ParallaxCardProps) {
  // Parallax effect for each card based on scroll position
  const translateY = useTransform(scrollYProgress, [0, 1], ["0%", `${index * 15}%`]);

  return (
    <motion.div
      style={{ translateY }}
      className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
    >
      <figure className="relative w-full h-52">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
      </figure>
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600 mt-3">
          {description.length > 100 ? `${description.slice(0, 100)}...` : description}
        </p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-sm font-medium bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
            {service}
          </span>
          <button className="text-blue-600 hover:text-blue-800 transition-colors duration-300 font-semibold">
            Learn More
          </button>
        </div>
      </div>
    </motion.div>
  );
}
