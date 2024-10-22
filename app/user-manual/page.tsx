import { AuroraBackgroundUserManual } from "../components/AuroraBackgroundUserManual";
import { BentoGridSpecificUseCase } from "../components/BentoGridSpecificUseCase";
import { CanvasRevealEffectCustomization } from "../components/CanvasRevealEffectCustomization";
import { CoverTextUserManual } from "../components/CoverTextUserManual";
import { FocusCardsUserManual } from "../components/FocusCardsUserManual";
import { MultiStepLoaderFeatureOverview } from "../components/MultistepLoaderFeatureOverview";

export default function UserManual() {
    return (
        <div>
            <AuroraBackgroundUserManual />
            <MultiStepLoaderFeatureOverview />
            {/* <BentoGridSpecificUseCase /> */}
            <CoverTextUserManual />
            <FocusCardsUserManual />
            <CanvasRevealEffectCustomization />
        </div>
    )
}