"use client";

import CarbonCycle from "@/app/stories/keeling-curve/visuals/CarbonCycle";

export default function CarbonCycleSection() {
  return (
    <section className="h-[200vh] relative bg-white">
      <div className="sticky top-0 h-screen flex flex-col justify-center items-center px-6 text-center">
        <div className="mt-10 w-full max-w-4xl">
          <CarbonCycle />
        </div>
      </div>
    </section>
  );
}
