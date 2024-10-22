"use client"

import { HoverEffect } from "@/components/ui/card-hover-effect";

export function CardHoverEffect() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "Children’s Safety",
    description: `Easy one-touch calling for emergencies with no distractions from games or apps.`,
    link: "#children-safety",
    bgColor: "bg-[#B2EBF2]", // Softer Light Cyan
  },
  {
    title: "Women's Self-Protection",
    description: `SOS emergency alert and satellite connectivity for safe communication in any situation.`,
    link: "#womens-safety",
    bgColor: "bg-[#FFCDD2]", // Softer Light Pink
  },
  {
    title: "For Adventurers",
    description: `Rugged and built for extreme conditions, with satellite communication for staying connected off-grid.`,
    link: "#adventurers",
    bgColor: "bg-[#C8E6C9]", // Softer Light Green
  },
  {
    title: "Remote Areas",
    description: `Reliable connectivity in rural and remote areas where networks struggle to reach.`,
    link: "#remote-connectivity",
    bgColor: "bg-[#FFE0B2]", // Softer Light Orange
  },
  {
    title: "Adults with Custom Needs",
    description: `Extra storage and flexible features tailored for specific personal or professional needs.`,
    link: "#adult-custom-uses",
    bgColor: "bg-[#E1BEE7]", // Softer Light Lavender
  },
  {
    title: "Emergency Situations",
    description: `Quick SOS and fallback options to ensure communication during critical moments.`,
    link: "#emergency-situations",
    bgColor: "bg-[#FFF9C4]", // Softer Light Yellow
  },
];




