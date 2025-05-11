"use client";

import FadeInOnScroll from "@/app/components/FadeInOnScroll";

export default function IntroSection() {
  return (
    <FadeInOnScroll>
      <section className="min-h-[70vh] flex flex-col justify-center items-center py-24">
        <div className="max-w-3xl flex flex-col justify-center items-center px-4">
          <p className="pb-6 italic">Breathe in.</p>
          <p className="pb-6">
            Every spring, as snow melts and leaves unfurl, the Northern
            Hemisphere comes alive. Plants awaken from dormancy and draw in
            carbon dioxide through photosynthesis, subtly lowering the planet’s
            CO₂ levels.
          </p>
          <p className="pb-6 italic">Breathe out.</p>
          <p className="pb-6">
            Autumn brings decay. Leaves fall, plants die back, and microbes
            break down organic matter, releasing carbon back into the
            atmosphere. The planet exhales.
          </p>
          <p className="pb-6">
            This cycle of photosynthesis and respiration is a natural rhythm of
            life on Earth. It’s a dance between the planet and its atmosphere,
            where carbon dioxide (CO₂) levels rise and fall with the seasons.
          </p>
        </div>
      </section>
    </FadeInOnScroll>
  );
}
