import { AuroraBackgroundAbout } from "../components/AuroraBackgroundAbout";
import { CanvasRevealEffectCustomization } from "../components/CanvasRevealEffectCustomization";
import { CardStackAbout } from "../components/CardStackAbout";
import { CoverTextAbout } from "../components/CoverTextAbout";
import { FocusCardsAbout } from "../components/FocusCardsAbout";
import { MultiStepLoaderFeatureOverview } from "../components/MultistepLoaderFeatureOverview";
import { SafetyAndSecurity } from "../components/SafetyAndSecurity";

export default function UserManual() {
    return (
        <div>
            <AuroraBackgroundAbout />
            <MultiStepLoaderFeatureOverview />
            <CoverTextAbout />
            <FocusCardsAbout />
            <CanvasRevealEffectCustomization />
            <CardStackAbout />
            <SafetyAndSecurity />
        </div>
    )
}