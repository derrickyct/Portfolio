import React from 'react'
import { AnimatePresence, motion } from "motion/react";

const HomeAnimatedTitle = ({ title, isVisible }) => {
  return (
    <div className="w-full min-h-[8.5rem] sm:min-h-[5rem] lg:min-h-[9rem]">
      <AnimatePresence initial={false}>
        {isVisible && (
          <motion.h1
            className="text-2xl font-bold mb-4 text-green-400"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 0, scale: 0.95 }}
            key="title"
          >
            {title}
          </motion.h1>
        )}
      </AnimatePresence>
    </div>
  )
}

export default HomeAnimatedTitle