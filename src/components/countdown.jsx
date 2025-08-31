'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Countdown({ duration, onComplete }) {
  const [counter, setCounter] = useState(duration);

  useEffect(() => {
    if (counter === 0) onComplete();
    if (counter > 0) {
      const timer = setTimeout(() => setCounter(counter - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [counter, onComplete]);

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0.4 }}
      animate={{ scale: 1.25, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="text-7xl font-extrabold neon-btn px-12 py-8 bg-glass"
    >
      {counter}
    </motion.div>
  );
}
