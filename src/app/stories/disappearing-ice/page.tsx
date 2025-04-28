import StoryLayout from "@/app/components/StoryLayout";
// import KeelingCurveChart from '@/components/KeelingCurveChart';

export default function DisappearingIcePage() {
  return (
    <StoryLayout
      title="Disappearing Ice"
      subtitle="Shrinking ice sheets and rising sea levels."
    >
      <p>
        The Keeling Curve is one of the most important datasets in climate
        science. It shows the rise of atmospheric CO₂ concentrations, measured
        continuously at Mauna Loa Observatory since 1958.
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
