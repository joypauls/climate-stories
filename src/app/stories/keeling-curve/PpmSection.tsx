"use client";
import GasCloud from "@/app/stories/keeling-curve/visuals/GasCloud";

const steps = [
  "Parts per million measures the *tiny* fractions in the air.",
  "Only about 420 out of 1,000,000 molecules is CO₂.",
  "Even that small amount traps enough heat to change the climate.",
];

export default function PpmSection() {
  return (
    <section className="relative w-full h-[300vh]">
      {/* Sticky animation layer */}
      <div className="sticky top-0 h-screen w-full z-0">
        <GasCloud />
      </div>

      {/* Scroll-driven text overlay */}
      <div className="absolute top-0 w-full h-full flex flex-col justify-center items-center pointer-events-none z-10">
        <div className="w-full max-w-2xl mx-auto px-6 space-y-[100vh]">
          {steps.map((text, idx) => (
            <div key={idx} className="pointer-events-auto">
              <p className="text-lg md:text-xl leading-snug">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
