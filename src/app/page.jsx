"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const router = useRouter();

  // Disable double-tap zoom issue on mobile
  useEffect(() => {
    const handler = (e) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    };
    document.addEventListener("touchmove", handler, { passive: false });
    return () => {
      document.removeEventListener("touchmove", handler);
    };
  }, []);

  const startGame = () => {
    // Vibrate on click (if supported)
    if (navigator.vibrate) navigator.vibrate(80);

    // Play sound effect
    const clickSound = new Audio("/click.mp3");
    clickSound.volume = 0.5;
    clickSound.play();

    // Navigate to game page
    router.push("/game");
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 relative">
      {/* Futuristic Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-700/30 via-blue-800/20 to-black blur-3xl"></div>

      {/* Title */}
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold text-cyan-400 drop-shadow-lg z-10"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        🚀 Futuristic Arcade Challenge
      </motion.h1>

      {/* Rules Card */}
      <motion.div
        className="bg-gray-900/60 backdrop-blur-lg p-6 rounded-2xl mt-8 max-w-lg shadow-xl border border-cyan-500 z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h2 className="text-2xl font-semibold text-cyan-300 mb-4">🎮 Rules</h2>
        <ul className="space-y-3 text-gray-200">
          <li>⏳ Game duration: <b>30 seconds</b></li>
          <li>⚡ Unique scoring system — speed + precision matter</li>
          <li>📲 Automatic Telegram score updates</li>
          <li>🏆 Live leaderboard with top player</li>
          <li>🔊 Sound + Vibration on every click</li>
        </ul>
      </motion.div>

      {/* Start Button */}
      <motion.button
        onClick={startGame}
        className="mt-8 px-8 py-3 text-lg font-bold bg-cyan-500 text-black rounded-full shadow-lg hover:bg-cyan-400 transition-all duration-300 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        🚀 Start Game
      </motion.button>
    </div>
  );
}