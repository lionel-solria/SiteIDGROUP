"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";

interface Vertical {
  id: string;
  title: string;
  image: string;
  logo: string;
  color: string;
  description: string;
  bgClass: string; // fallback color if image fails
}

const verticals: Vertical[] = [
  {
    id: "home",
    title: "Habitat & Décoration",
    image: "/images/ImageIDHome.jpg",
    logo: "/logos/ID HOME.png",
    color: "bg-id-home", // We will use CSS variables or hex for overlays
    description: "Solutions pour l'habitat et la décoration intérieure.",
    bgClass: "bg-orange-600",
  },
  {
    id: "pro",
    title: "Industrie & Bâtiment",
    image: "/images/ImageIDPro.jpg",
    logo: "/logos/ID PRO.png",
    color: "bg-id-pro",
    description: "Expertise industrielle et solutions pour le bâtiment.",
    bgClass: "bg-blue-900",
  },
  {
    id: "agri",
    title: "Agriculture & Élevage",
    image: "/images/ImageIDAgri.jpg",
    logo: "/logos/ID AGRI.png",
    color: "bg-id-agri",
    description: "Innovations pour l'agriculture et l'élevage.",
    bgClass: "bg-green-700",
  },
];

export default function VerticalSlider() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="h-screen w-full flex flex-col lg:flex-row overflow-hidden relative">
      {verticals.map((vertical) => {
        const isHovered = hoveredId === vertical.id;
        const isAnyHovered = hoveredId !== null;

        return (
          <motion.div
            key={vertical.id}
            onHoverStart={() => setHoveredId(vertical.id)}
            onHoverEnd={() => setHoveredId(null)}
            className={clsx(
              "relative flex-1 lg:h-full flex flex-col justify-center items-center overflow-hidden transition-all duration-500 ease-in-out cursor-pointer border-b lg:border-b-0 lg:border-r border-white/20 last:border-0",
              // Mobile styles: stacked, equal height initially
              "h-[33.33vh]",
              vertical.bgClass
            )}
            // Framer motion for width animation on desktop
            animate={{
              flex: isHovered ? 2 : isAnyHovered ? 0.5 : 1,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
               <Image
                 src={vertical.image}
                 alt={vertical.title}
                 fill
                 className="object-cover transition-transform duration-700 ease-out hover:scale-110"
                 priority
               />
               {/* Color Overlay */}
               <div
                 className={clsx(
                   "absolute inset-0 opacity-40 transition-opacity duration-300",
                   vertical.color,
                   isHovered ? "opacity-30" : "opacity-60"
                 )}
               />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center text-white p-6 flex flex-col items-center">
              <div className="mb-4 bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                 <Image
                    src={vertical.logo}
                    alt={`${vertical.title} Logo`}
                    width={150}
                    height={50}
                    className="object-contain filter brightness-0 invert drop-shadow-lg"
                 />
              </div>

              <h2 className="text-2xl lg:text-4xl font-heading font-bold uppercase tracking-wider mb-2 shadow-black drop-shadow-md">
                {vertical.title}
              </h2>

              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  height: isHovered ? "auto" : 0,
                  y: isHovered ? 0 : 20,
                }}
                className="overflow-hidden hidden lg:block"
              >
                <p className="text-lg mb-6 font-medium max-w-md mx-auto drop-shadow-md">
                  {vertical.description}
                </p>
                <button className="bg-id-cta text-white px-8 py-3 rounded-full font-bold uppercase tracking-wide hover:bg-white hover:text-id-cta transition-colors flex items-center gap-2 mx-auto">
                  Explorer l&apos;univers <ArrowRight size={20} />
                </button>
              </motion.div>

              {/* Mobile View Content (always visible or simplified) */}
               <div className="lg:hidden mt-2">
                   <span className="text-sm font-bold underline decoration-id-cta underline-offset-4">En savoir plus</span>
               </div>
            </div>
          </motion.div>
        );
      })}
    </section>
  );
}
