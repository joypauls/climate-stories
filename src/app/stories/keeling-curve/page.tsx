"use client";

import StoryLayout from "@/app/components/StoryLayout";
import BreathingSine from "@/app/stories/keeling-curve/BreathingSine";
import FadeInOnScroll from "@/app/components/FadeInOnScroll";
import KeelingCurveReveal from "@/app/stories/keeling-curve/KeelingCurveReveal";
import { motion } from "framer-motion";

export default function KeelingCurvePage() {
  return (
    <StoryLayout
    // title="The Keeling Curve"
    // subtitle="Earth’s carbon breath, recorded since 1958"
    >
      <section className="h-screen flex flex-col justify-center items-center py-24">
        <h1 className="text-3xl md:text-5xl mb-4 font-bold font-garamond italic">
          The Keeling Curve
        </h1>
        <p className="text-gray-500 mb-8">
          Earth’s carbon breath, recorded since 1958
        </p>
        <BreathingSine />
      </section>

      <FadeInOnScroll>
        <section className="min-h-[70vh] flex flex-col justify-center items-center py-24">
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
        </section>
      </FadeInOnScroll>

      {/* <KeelingCurveChart /> */}

      <FadeInOnScroll>
        <section className="min-h-[70vh] flex flex-col justify-center items-center py-24">
          <p className="pb-6">
            To understand this planetary respiration, scientists needed a place
            far from cities and forests—somewhere unaffected by daily human
            emissions. That place was Mauna Loa, a volcano in Hawaiʻi rising
            over 11,000 feet above sea level. Its isolated peak offered a
            pristine window into the atmosphere.
          </p>
          <p className="pb-6">
            In 1958, a scientist named Charles David Keeling began collecting
            continuous CO₂ measurements there. His meticulous work would become
            one of the most iconic records in climate science.
          </p>
        </section>
      </FadeInOnScroll>
      <section className="h-[200vh] relative bg-white">
        <div className="sticky top-0 h-screen flex flex-col justify-center items-center px-6 text-center">
          <motion.h2
            className="text-3xl md:text-5xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            A Curve Appears
          </motion.h2>
          <motion.p
            className="mt-4 max-w-2xl text-lg md:text-xl text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            In 1958, a new experiment began — high above the clouds.
          </motion.p>

          <div className="mt-10 w-full max-w-4xl">
            <KeelingCurveReveal />
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
