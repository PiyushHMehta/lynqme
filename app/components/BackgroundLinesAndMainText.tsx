import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { CardHoverEffect } from "./CardHoverEffect";
import { SpotlightText } from "./SpotlightText";

export function BackgroundLinesAndMainText() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <SpotlightText />
    </BackgroundLines>
  );
}
