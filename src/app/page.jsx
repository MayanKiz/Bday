'use client';
import { useState } from 'react';
import Countdown from '../components/countdown';
import Game from '../components/Game';
import { motion, AnimatePresence } from 'framer-motion';

export default function Page() {
  const [started, setStarted] = useState(false);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-[#151a30] via-[#2230ff] to-[#1ec3f3]">
      <AnimatePresence>
        {!started && (
          <motion.div
            key="countdown"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.25, y: -100 }}
            transition={{ duration: 1 }}
            className="flex items-center justify-center w-full h-full"
          >
            <Countdown duration={3} onComplete={() => setStarted(true)} />
          </motion.div>
        )}
      </AnimatePresence>
      {started && <Game />}
    </main>
  );
}
