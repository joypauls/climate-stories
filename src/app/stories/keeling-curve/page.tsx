import StoryLayout from "@/app/components/StoryLayout";
// import KeelingCurveChart from '@/components/KeelingCurveChart';
import BreathingSine from "@/app/stories/keeling-curve/BreathingSine";

export default function KeelingCurvePage() {
  return (
    <StoryLayout
      title="The Keeling Curve"
      subtitle="Earth’s carbon breath, recorded since 1958"
    >
      <BreathingSine />
      <p>
        <i>Breathe in.</i>
        <br />
        <br />
        Every spring, as snow melts and leaves unfurl, the Northern Hemisphere
        comes alive. Plants awaken from dormancy and draw in carbon dioxide
        through photosynthesis, subtly lowering the planet’s CO₂ levels.
        <br />
        <br />
        <i>Breathe out.</i>
        <br />
        <br /> Autumn brings decay. Leaves fall, plants die back, and microbes
        break down organic matter, releasing carbon back into the atmosphere.
        The planet exhales.
      </p>

      {/* <KeelingCurveChart /> */}

      <p>
        The line wiggles—those are Earth’s seasons. In spring and summer, plants
        pull in CO₂. In fall and winter, it rises again. But over the decades,
        the upward trend has been unmistakable.
      </p>
    </StoryLayout>
  );
}
