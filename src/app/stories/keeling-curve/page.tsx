"use client";

import StoryLayout from "@/app/components/StoryLayout";
import BreathingSine from "@/app/stories/keeling-curve/BreathingSine";

export default function KeelingCurvePage() {
  return (
    <StoryLayout
    // title="The Keeling Curve"
    // subtitle="Earth’s carbon breath, recorded since 1958"
    >
      <section className="h-screen flex flex-col justify-center items-center px-4">
        <h1 className="text-3xl md:text-5xl mb-4 font-bold font-garamond italic">
          The Keeling Curve
        </h1>
        <p className="text-gray-500 mb-8">
          Earth’s carbon breath, recorded since 1958
        </p>
        <BreathingSine />
      </section>

      <section className="h-screen flex flex-col justify-center items-center px-4">
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
      </section>

      {/* <KeelingCurveChart /> */}

      <section className="h-screen flex flex-col justify-center items-center px-4">
        <p>
          The line wiggles—those are Earth’s seasons. In spring and summer,
          plants pull in CO₂. In fall and winter, it rises again. But over the
          decades, the upward trend has been unmistakable.
        </p>
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
