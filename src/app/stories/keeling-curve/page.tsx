"use client";

import { motion } from "framer-motion";

import StoryLayout from "@/app/components/StoryLayout";
// import BreathingSine from "@/app/stories/keeling-curve/visuals/BreathingSine";
import FadeInOnScroll from "@/app/components/FadeInOnScroll";
import KeelingCurveFull from "@/app/stories/keeling-curve/visuals/KeelingCurveFull";
import IntroSection from "@/app/stories/keeling-curve/IntroSection";
import PpmSection from "@/app/stories/keeling-curve/PpmSection";
import KeelingCurveRecent from "@/app/stories/keeling-curve/visuals/KeelingCurveRecent";
import CarbonCycle from "@/app/stories/keeling-curve/visuals/CarbonCycle";

export default function KeelingCurvePage() {
  return (
    <StoryLayout
    // title="The Keeling Curve"
    // subtitle="Earth’s carbon breath, recorded since 1958"
    >
      <IntroSection />
      <FadeInOnScroll>
        <section className="min-h-[70vh] flex flex-col justify-center items-center py-24">
          <div className="max-w-3xl flex flex-col justify-center items-center px-4">
            <p className="pb-6 italic">Breathe in.</p>
            <p className="pb-6">
              Every spring, as snow melts and leaves unfurl, the Northern
              Hemisphere comes alive. Plants awaken from dormancy and draw in
              carbon dioxide through photosynthesis, subtly lowering the
              planet’s CO₂ levels.
            </p>
            <p className="pb-6 italic">Breathe out.</p>
            <p className="pb-6">
              Autumn brings decay. Leaves fall, plants die back, and microbes
              break down organic matter, releasing carbon back into the
              atmosphere. The planet exhales.
            </p>
            <p className="pb-6">
              This cycle of photosynthesis and respiration is a natural rhythm
              of life on Earth. It’s a dance between the planet and its
              atmosphere, where carbon dioxide (CO₂) levels rise and fall with
              the seasons.
            </p>
          </div>
        </section>
      </FadeInOnScroll>
      <section className="flex flex-col lg:flex-row max-w-6xl mx-auto h-[200vh]">
        {/* Text column */}
        <div className="lg:w-1/2 space-y-32 px-4 py-20">
          <div className="min-h-[70vh]">
            <h2 className="text-xl font-semibold">Section 1</h2>
            <p className="text-base mt-2">Your first text block here...</p>
          </div>
          <div className="min-h-[70vh]">
            <h2 className="text-xl font-semibold">Section 2</h2>
            <p className="text-base mt-2">Your second block of text here...</p>
          </div>
          <div className="min-h-[70vh]">
            <h2 className="text-xl font-semibold">Section 3</h2>
            <p className="text-base mt-2">Another paragraph with info...</p>
          </div>
        </div>

        {/* Sticky image column */}
        <div className="lg:w-1/2 px-4 py-20 relative">
          <div className="sticky top-20">
            <img
              src="/images/mauna_kea.jpg"
              alt="Sticky visual"
              className="w-full shadow-xl"
            />
          </div>
        </div>
      </section>

      <FadeInOnScroll>
        <section className="min-h-[70vh] flex flex-col justify-center items-center py-24">
          <div className="max-w-3xl flex flex-col justify-center items-center px-4">
            <p className="pb-6">
              To understand this planetary respiration, scientists needed a
              place far from cities and forests—somewhere unaffected by daily
              human emissions. That place was Mauna Loa, a volcano in Hawaiʻi
              rising over 11,000 feet above sea level. Its isolated peak offered
              a pristine window into the atmosphere.
            </p>
            <p className="pb-6">
              In 1958, a scientist named Charles David Keeling began collecting
              continuous CO₂ measurements there. His meticulous work would
              become one of the most iconic records in climate science.
            </p>
          </div>
        </section>
      </FadeInOnScroll>
      <section className="h-[200vh] relative bg-white">
        <div className="sticky top-0 h-screen flex flex-col justify-center items-center px-6 text-center">
          {/* <motion.h2
            className="text-3xl md:text-5xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            A Curve Appears
          </motion.h2> */}
          {/* <motion.p
            className="mt-4 max-w-2xl text-lg md:text-xl text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            In 1958, a new experiment began — high above the clouds.
          </motion.p> */}

          <div className="mt-10 w-full max-w-4xl">
            <KeelingCurveFull />
          </div>
          <motion.p
            className="mt-20 max-w-2xl text-lg md:text-xl text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            In 1958, a new experiment began — high above the clouds.
          </motion.p>
          {/* <motion.p
            className="mt-20 max-w-2xl text-lg md:text-xl text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            In 1958, a new experiment began — high above the clouds.
          </motion.p> */}
        </div>
      </section>

      <PpmSection />

      <section className="h-[200vh] relative bg-white">
        <div className="sticky top-0 h-screen flex flex-col justify-center items-center px-6 text-center">
          <div className="mt-10 w-full max-w-4xl">
            <KeelingCurveRecent />
          </div>
        </div>
      </section>

      <section className="h-[200vh] relative bg-white">
        <div className="sticky top-0 h-screen flex flex-col justify-center items-center px-6 text-center">
          <div className="mt-10 w-full max-w-4xl">
            <CarbonCycle />
          </div>
        </div>
      </section>
    </StoryLayout>
  );
}

// import { useInView } from "react-intersection-observer";
// import { motion } from "framer-motion";

// export default function BreathSection() {
//   const { ref, inView } = useInView({ triggerOnce: true });

//   return (
//     <section
//       ref={ref}
//       className="h-screen flex flex-col justify-center items-center px-4 bg-white"
//     >
//       <motion.h1
//         className="text-4xl md:text-6xl font-semibold text-center"
//         initial={{ opacity: 0, y: 40 }}
//         animate={inView ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 1 }}
//       >
//         Breathe in.
//       </motion.h1>

//       <div className="w-full mt-8">
//         <BreathingSine />
//       </div>

//       <motion.h1
//         className="text-4xl md:text-6xl font-semibold text-center mt-8"
//         initial={{ opacity: 0, y: 40 }}
//         animate={inView ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 1, delay: 0.5 }}
//       >
//         Breathe out.
//       </motion.h1>
//     </section>
//   );
// }
