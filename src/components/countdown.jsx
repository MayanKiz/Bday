"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Heart, Gift, Cake, Star } from "lucide-react"

function calculateTimeLeft(targetDate) {
  const difference = targetDate - new Date()
  let timeLeft = {}

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    }
  }

  return timeLeft
}

export default function Countdown() {
  const targetDate = new Date("2025-06-07T00:00:00")
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate))

  useEffect(() => {
    const timer = setTimeout(() => {
      const updated = calculateTimeLeft(targetDate)
      setTimeLeft(updated)
      if (!updated || Object.keys(updated).length <= 0) {
        window.location.href = "/surprise"  // ✅ auto jump
      }
    }, 1000)

    return () => clearTimeout(timer)
  }, [timeLeft, targetDate])

  const icons = [
    <Heart key="heart" className="text-pink-500 fill-pink-200" />,
    <Gift key="gift" className="text-purple-500" />,
    <Cake key="cake" className="text-pink-500" />,
    <Star key="star" className="text-yellow-400 fill-yellow-200" />,
  ]

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 p-4">
      <motion.div
        className="bg-white rounded-3xl shadow-2xl border-4 border-pink-200 w-[90%] max-w-sm aspect-[3/4] p-4 flex flex-col justify-between items-center relative"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        {/* DP Circle at Top */}
        <motion.div
          className="absolute -top-12 flex justify-center items-center w-24 h-24 rounded-full border-4 border-pink-300 shadow-xl bg-gradient-to-tr from-pink-100 to-purple-200 overflow-hidden"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/tumhari-photo.jpg"  // ✅ Yahan apni photo ka naam dena
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="mt-16 flex flex-col items-center">
          <motion.h1
            className="text-2xl font-bold text-center text-pink-600 mb-4"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          >
            Your Special Day is Almost Here💕
          </motion.h1>

          <div className="flex flex-wrap justify-center gap-3">
            {Object.keys(timeLeft).length > 0 ? (
              Object.entries(timeLeft).map(([unit, value], index) => (
                <motion.div
                  key={unit}
                  className="bg-white rounded-2xl shadow-md p-3 w-20 h-20 flex flex-col items-center justify-center border-2 border-pink-200"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, rotate: [-1, 1, -1, 0] }}
                >
                  <div className="text-xl font-bold text-purple-600">{value}</div>
                  <div className="text-xs text-pink-500 capitalize">{unit}</div>
                  <div className="mt-1">{icons[index % icons.length]}</div>
                </motion.div>
              ))
            ) : (
              <p className="text-xl text-pink-600 font-bold">It's time!</p>
            )}
          </div>

          <motion.div
            className="text-center bg-pink-50 p-3 rounded-2xl border mt-4 border-pink-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-sm text-purple-700 mb-2">
              Just a little more... A small gift for my favorite person❤️
            </p>

            <div className="flex justify-center space-x-1">
              {Array.from({ length: 3 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-pink-400"
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
      </motion.div>
    </div>
  )
}