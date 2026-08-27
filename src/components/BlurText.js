'use client';
import { motion } from 'framer-motion';

export default function BlurText({ text = '' }) {
  const words = text.split(' ');

  return (
    <div className="flex flex-wrap justify-center gap-x-3 gap-y-1">
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ filter: 'blur(12px)', opacity: 0, y: 12 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: index * 0.15,
            ease: 'easeInOut',
          }}
          className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent inline-block pb-2"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}