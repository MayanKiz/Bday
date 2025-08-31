'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Leaderboard({ leaderboard }) {
  const [lb, setLb] = useState(leaderboard || []);

  useEffect(() => {
    if (!leaderboard) {
      const data = JSON.parse(localStorage.getItem('leaderboard') || '[]');
      setLb(data);
    }
  }, [leaderboard]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-glass max-w-md mx-auto p-8 rounded-3xl shadow-2xl"
    >
      <h2 className="text-3xl font-bold text-center neon-btn mb-8">🏆 Leaderboard</h2>
      <ul>
        {lb && lb.map((player, idx) => (
          <motion.li
            key={idx}
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: idx * 0.08 }}
            className={`flex justify-between py-2 px-6 my-2 rounded-lg bg-slate-900/60 text-white text-lg border-l-4 border-cyan-400`}
          >
            <span>{idx + 1}. {player.name || 'N/A'}</span>
            <span>{player.score}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
