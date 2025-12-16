"use client";

import { useState } from "react";
import Image from "next/image";
import { Info } from "lucide-react";

interface Hotspot {
  id: string;
  x: number; // Percentage
  y: number; // Percentage
  label: string;
  description: string;
}

const hotspots: Hotspot[] = [
  { id: "1", x: 20, y: 40, label: "Zone de Production", description: "Ligne de montage automatisée avec tapis anti-fatigue." },
  { id: "2", x: 50, y: 60, label: "Logistique", description: "Système de gestion des stocks et expéditions optimisé." },
  { id: "3", x: 75, y: 30, label: "Bureaux", description: "Espaces de travail ergonomiques et insonorisés." },
];

export default function ArchitecturalSketchNav() {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  return (
    <section className="py-20 bg-id-bg-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-id-dark mb-12 text-center">
          Exploration Interactive <span className="text-id-red">ID PRO</span>
        </h2>

        <div className="relative max-w-4xl mx-auto border-4 border-id-dark rounded-xl overflow-hidden shadow-2xl bg-white">
            {/* Sketch Image Placeholder - In real app, this would be a specific architectural sketch */}
            <div className="aspect-video relative bg-gray-200">
                <Image
                    src="/images/ImageIDPro.jpg" // Using ID Pro image as placeholder but styled as sketch via CSS filters
                    alt="Plan Architectural"
                    fill
                    className="object-cover opacity-50 grayscale contrast-125"
                />
                <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply"></div>

                {/* Hotspots */}
                {hotspots.map((spot) => (
                    <div
                        key={spot.id}
                        className="absolute w-8 h-8 -ml-4 -mt-4 cursor-pointer group z-10"
                        style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                        onMouseEnter={() => setActiveHotspot(spot.id)}
                        onMouseLeave={() => setActiveHotspot(null)}
                        onClick={() => setActiveHotspot(activeHotspot === spot.id ? null : spot.id)}
                    >
                        <div className="relative w-full h-full">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-id-red opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-8 w-8 bg-id-red items-center justify-center text-white shadow-lg border-2 border-white">
                                <Info size={16} />
                            </span>
                        </div>

                        {/* Tooltip/Modal */}
                        {activeHotspot === spot.id && (
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 w-64 bg-white p-4 rounded-lg shadow-xl border-l-4 border-id-red z-20 text-left">
                                <h4 className="font-bold text-id-dark font-heading">{spot.label}</h4>
                                <p className="text-sm text-gray-600 mt-1 font-body">{spot.description}</p>
                                <div className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-4 h-4 bg-white transform rotate-45 border-r border-b border-gray-100"></div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="p-4 bg-id-dark text-white text-center font-mono text-xs opacity-80">
                PLAN DE MASSE - NIVEAU 1 - PROJET INDUSTRIEL TYPE A
            </div>
        </div>
      </div>
    </section>
  );
}
