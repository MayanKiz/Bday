'use client';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Leaderboard from './Leaderboard';
import toast from 'react-hot-toast';
import axios from 'axios';

function getRandomPosition() {
  // returns percent values for CSS
  return {
    top: `${Math.floor(Math.random() * 70) + 10}%`,
    left: `${Math.floor(Math.random() * 70) + 10}%`,
  };
}

export default function Game() {
  const [score, setScore] = useState(0);
  const [name, setName] = useState('');
  const [positions, setPositions] = useState([getRandomPosition()]);
  const [gameOver, setGameOver] = useState(false);
  const intervalRef = useRef();
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      // Move object every 1.2 sec
      setPositions([getRandomPosition()]);
    }, 1200);
    return () => clearInterval(intervalRef.current);
  }, []);

  function handleClickObject() {
    setScore(prev => prev + 1);
    setPositions([getRandomPosition()]);
  }

  function handleEndGame() {
    setGameOver(true);
    // Local leaderboard update
    let lb = JSON.parse(localStorage.getItem('leaderboard') || '[]');
    lb.push({ name, score });
    lb.sort((a, b) => b.score - a.score);
    lb = lb.slice(0, 10);
    localStorage.setItem('leaderboard', JSON.stringify(lb));
    setLeaderboard(lb);

    // Send score to Telegram API Route
    axios.post('/api/submit-score', { name, score })
      .then(res => {
        if (res.data.success) {
          toast.success('Score sent to Telegram!');
        } else {
          toast.error('Failed! Try again.', { action: { text: 'Retry', onClick: handleEndGame } });
        }
      })
      .catch(() => toast.error('API failed', { action: { text: 'Retry', onClick: handleEndGame } }));
  }

  if (gameOver) return (<Leaderboard leaderboard={leaderboard} />);

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Enter Name"
        className="bg-glass mb-4 px-4 py-2 rounded-xl neon-btn outline-none"
        disabled={score > 0}
      />
      <div className="text-2xl font-semibold neon-btn mb-3 px-6 py-2">Score: {score}</div>
      <div className="relative h-[360px] w-[320px] bg-glass rounded-2xl overflow-hidden">
        {positions.map((pos, idx) =>
          <motion.div
            key={idx}
            onClick={handleClickObject}
            initial={{ scale: 0 }}
            animate={{ ...pos, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="absolute bg-cyan-400 neon-btn rounded-full w-16 h-16 flex items-center justify-center cursor-pointer"
            whileHover={{ scale: 1.2, boxShadow: "0 0 24px #00ffe7" }}
          >
          </motion.div>
        )}
      </div>
      <button
        onClick={handleEndGame}
        className="mt-8 neon-btn text-lg px-8 py-3">End Game & Submit Score
      </button>
    </div>
  );
}
