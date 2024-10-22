import Image from "next/image";
import { SpotlightText } from "./components/SpotlightText";
import HeroSection from "./components/HeroSection";
import { CardHoverEffect } from "./components/CardHoverEffect";
import { BackgroundLinesAndMainText } from "./components/BackgroundLinesAndMainText";
import { TextRevealCardPreview } from "./components/TextRevealCardPreview";

export default function Home() {
  return (
    <div>
      <BackgroundLinesAndMainText />
      <HeroSection />
      <CardHoverEffect />
      <TextRevealCardPreview />
    </div>
  );
}
