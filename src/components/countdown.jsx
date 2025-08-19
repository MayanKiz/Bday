"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, Sparkles, Gift, Cake } from "lucide-react";

// 🎉 Simple confetti component
const Confetti = ({ isActive }) => {
  if (!isActive) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      {[...Array(100)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{
            top: "-10%",
            left: `${Math.random() * 100}%`,
            opacity: 1,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            top: "100%",
            rotate: Math.random() * 360,
            opacity: 0,
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            repeatDelay: Math.random() * 2,
            ease: "linear",
          }}
        >
          <div
            className="w-3 h-3 rounded-sm"
            style={{
              backgroundColor: [
                "#FF69B4",
                "#FFD700",
                "#FF6347",
                "#8A2BE2",
                "#00CED1",
              ][Math.floor(Math.random() * 5)],
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default function BirthdayCelebration() {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center relative min-h-screen bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200 overflow-hidden">
      <Confetti isActive={showConfetti} />

      {/* Overlay (jab card open hoga) */}
      <AnimatePresence>
        {isCardOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-10"
          />
        )}
      </AnimatePresence>

      {/* Heading */}
      <motion.div
        initial={{ scale: 0, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.3 }}
        className="relative mb-2 z-20"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-pink-600 mb-2">
          Happy Birthday!
        </h1>
        <div className="flex justify-center gap-3">
          <Cake className="w-8 h-8 text-pink-500" />
          <Sparkles className="w-8 h-8 text-yellow-500" />
          <Heart className="w-8 h-8 text-pink-500" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-center text-pink-600 mt-2">
          To My Friend 💙
        </h3>
      </motion.div>

      {/* Card */}
      <motion.div
        className="w-full max-w-md mx-auto my-6 relative z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <div
          className="relative cursor-pointer"
          onClick={() => setIsCardOpen(!isCardOpen)}
        >
          {/* Front side */}
          <motion.div
            className="bg-gradient-to-r from-pink-400 to-purple-500 rounded-3xl p-14 sm:p-10 shadow-lg text-center text-white"
            animate={{ scale: isCardOpen ? 0.9 : 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg font-medium mb-4">
              Tap to {isCardOpen ? "close" : "open"} your card
            </p>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 5, 0, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
              }}
              className="flex justify-center"
            >
              <Gift className="w-14 h-14 text-white" />
            </motion.div>
          </motion.div>

          {/* Back side (message) */}
          <AnimatePresence>
            {isCardOpen && (
              <motion.div
                className="absolute inset-0 bg-white rounded-3xl p-6 shadow-2xl flex flex-col items-center justify-center"
                initial={{ scale: 0.5, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.5, opacity: 0, y: 50 }}
                transition={{ duration: 0.6, type: "spring" }}
              >
                <p className="text-purple-700 mb-4 text-center">
                  "Happy Birthday bro 🎉🔥! You’re one of my favorite people I’ve
                  met in FF. My days feel better, my smiles wider, and gaming
                  life sweeter because of you. May this year bring more
                  victories, happiness, and endless headshots 💯🎮."
                </p>
                <p className="text-pink-600 font-medium text-center">
                  आशा बा कि राउर जन्मदिन प्यार, जादू, आ हर ओह चीज से भरल होई
                  जवन रउरा के मुस्कुरा देला 💖
                </p>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="mt-4"
                >
                  <Heart className="w-8 h-8 stroke-none fill-rose-500" />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Footer message */}
      <motion.div
        className="w-full max-w-md mt-4 relative z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="text-center">
          <p className="text-lg text-purple-700 mb-4">
            May every wish you make today come true. You deserve the world, and
            I'll always be here to remind you of that.
          </p>
          <p className="text-pink-600 font-medium">
            Sorry for the pinkish theme🫶
          </p>
        </div>
      </motion.div>
    </div>
  );
}