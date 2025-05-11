"use client";

import { useInView } from "react-intersection-observer";

import ScrollIndicator from "@/app/components/ScrollIndicator";
import BreathingSine from "@/app/stories/keeling-curve/visuals/BreathingSine";

export default function TitleSection() {
  const { ref, inView } = useInView({
    threshold: 0.6, // show until 60% of section scrolled past
    triggerOnce: false,
  });

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col justify-center items-center"
    >
      <div className="w-full flex-1 flex flex-col justify-center items-center pt-16">
        <h1 className="text-3xl md:text-5xl mb-4 font-bold font-garamond italic">
          The Keeling Curve
        </h1>
        <p className="text-gray-500 mb-8">
          Earth’s carbon breath, recorded since 1958
        </p>
        <BreathingSine />
      </div>
      <div className="mb-6 h-8">
        <ScrollIndicator show={inView} />
      </div>
    </section>
  );
}
