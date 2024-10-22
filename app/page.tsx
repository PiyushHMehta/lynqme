import HeroSection from "./components/HeroSection";
import { CardHoverEffect } from "./components/CardHoverEffect";
import { BackgroundLinesAndMainText } from "./components/BackgroundLinesAndMainText";
import { TextRevealCardPreview } from "./components/TextRevealCardPreview";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div>
      <BackgroundLinesAndMainText />
      <HeroSection />
      <CardHoverEffect />
      <TextRevealCardPreview />
      <Footer />
    </div>
  );
}
