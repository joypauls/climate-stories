"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function ScrollIndicator({
  show,
  displayText = true,
}: {
  show: boolean;
  displayText?: boolean;
}) {
  return (
    <motion.div
      // className="flex flex-col items-center text-gray-500"
      className="flex flex-col items-center"
      initial={false}
      animate={{ opacity: show ? 1 : 0 }}
      transition={{ duration: 0.4 }}
    >
      {displayText && <span className="text-sm">Scroll to continue</span>}
      <svg
        className="w-7 h-7 mt-1 animate-bounce"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </motion.div>
  );
}
