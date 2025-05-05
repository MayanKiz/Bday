"use client"

import { useState, useEffect } from "react" import { motion } from "framer-motion" import { Heart, Gift, Cake, Star } from "lucide-react"

function calculateTimeLeft(targetDate) { const difference = targetDate - new Date() let timeLeft = {}

if (difference > 0) { timeLeft = { days: Math.floor(difference / (1000 * 60 * 60 * 24)), hours: Math.floor((difference / (1000 * 60 * 60)) % 24), minutes: Math.floor((difference / 1000 / 60) % 60), seconds: Math.floor((difference / 1000) % 60), } }

return timeLeft }

export default function Countdown() { const targetDate = new Date("2025-06-11T00:00:00") const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate))

useEffect(() => { const timer = setTimeout(() => { const updated = calculateTimeLeft(targetDate) setTimeLeft(updated) }, 1000)

return () => clearTimeout(timer)

}, [timeLeft, targetDate])

const icons = [ <Heart key="heart" className="text-blue-500 fill-blue-200" />, <Gift key="gift" className="text-cyan-500" />, <Cake key="cake" className="text-indigo-500" />, <Star key="star" className="text-sky-400 fill-sky-200" />, ]

return ( <div className="flex flex-col items-center justify-center"> <motion.h1 className="text-3xl md:text-4xl font-bold text-center text-blue-600 min-h-20 sm:min-h-11 mb-6" initial={{ scale: 0.95 }} animate={{ scale: 1 }} transition={{ duration: 1.5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", }} > Big Day is on the Horizon! 💙✨ </motion.h1>

<div className="flex flex-wrap justify-center gap-4 mb-8">
    {Object.keys(timeLeft).length > 0 ? (
      Object.entries(timeLeft).map(([unit, value], index) => (
        <motion.div
          key={unit}
          className="bg-white rounded-3xl shadow-lg p-4 w-28 h-28 flex flex-col items-center justify-center border-2 border-blue-200"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          whileHover={{ scale: 1.05, rotate: [-1, 1, -1, 0] }}
        >
          <div className="text-3xl font-bold text-blue-600">{value}</div>
          <div className="text-sm text-blue-500 capitalize">{unit}</div>
          <div className="mt-1">{icons[index % icons.length]}</div>
        </motion.div>
      ))
    ) : (
      <p className="text-2xl text-blue-600 font-bold">The Moment is Here! 🎉</p>
    )}
  </div>

  <motion.div
    className="text-center max-w-md mx-auto bg-blue-50 p-4 rounded-3xl border-2 border-blue-100"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5 }}
  >
    <p className="text-lg text-blue-700 mb-4">
      Counting down every second to celebrate YOU! Can't wait to make your day as special as you are. 💫
    </p>

    <div className="flex justify-center space-x-2">
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={i}
          className="w-3 h-3 rounded-full bg-blue-400"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 1,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.3,
          }}
        />
      ))}
    </div>
  </motion.div>
</div>

) }

