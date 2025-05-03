"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function ScrollIndicator({ show }: { show: boolean }) {
  return (
    <motion.div
      className="flex flex-col items-center text-gray-500"
      initial={false}
      animate={{ opacity: show ? 1 : 0 }}
      transition={{ duration: 0.4 }}
    >
      <span className="text-sm">Scroll to continue</span>
      <svg
        className="w-5 h-5 mt-1 animate-bounce"
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
