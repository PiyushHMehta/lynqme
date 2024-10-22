"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/ui/text-reveal-card";

export function TextRevealCardPreview() {
  return (
    <div className="flex items-center justify-center h-[40rem] rounded-2xl w-full -my-10">
      <TextRevealCard
        text="When things go sideways..."
        revealText="I’m just a button away!"
      >
      </TextRevealCard>
    </div>
  );
}
