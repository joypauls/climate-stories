"use client";

import { motion } from "framer-motion";
import KeelingCurveFull from "@/app/stories/keeling-curve/visuals/KeelingCurveFull";

export default function FullCurveSection() {
  return (
    <section className="h-[200vh] relative bg-white">
      <div className="sticky top-0 h-screen flex flex-col justify-center items-center px-6 text-center">
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
      </div>
    </section>
  );
}
