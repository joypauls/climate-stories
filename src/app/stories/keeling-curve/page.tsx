"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import StoryLayout from "@/app/components/StoryLayout";
import TitleSection from "@/app/stories/keeling-curve/TitleSection";
import IntroSection from "@/app/stories/keeling-curve/IntroSection";
import HistorySection from "@/app/stories/keeling-curve/HistorySection";
import PpmSection from "@/app/stories/keeling-curve/PpmSection";
import FullCurveSection from "@/app/stories/keeling-curve/FullCurveSection";
import RecentCurveSection from "@/app/stories/keeling-curve/RecentCurveSection";
import CarbonCycleSection from "@/app/stories/keeling-curve/CarbonCycleSection";

export default function KeelingCurvePage() {
  return (
    <StoryLayout
    // title="The Keeling Curve"
    // subtitle="Earth’s carbon breath, recorded since 1958"
    >
      <TitleSection />
      <IntroSection />
      <PpmSection />
      <HistorySection />
      <FullCurveSection />
      <CarbonCycleSection />
      <RecentCurveSection />
    </StoryLayout>
  );
}
