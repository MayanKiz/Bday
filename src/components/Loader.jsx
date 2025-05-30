import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, Sparkles, Star } from "lucide-react"

function Loader() {
  const [randomPositions, setRandomPositions] = useState([]);
  const [showPhoto, setShowPhoto] = useState(true);
  const [showLoader, setShowLoader] = useState(false);

  // Only run the random position generation after the component mounts
  useEffect(() => {
    const positions = Array.from({ length: 20 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
    }));
    setRandomPositions(positions);

    // Show photo for 3 seconds, then show loader
    const timer = setTimeout(() => {
      setShowPhoto(false);
      setShowLoader(true);
    }, 3000);

    
  // Loading screen component
  return () => clearTimeout(timer);
  }, []);

  // Photo display component
  if (showPhoto) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-rose-100 to-purple-100 overflow-hidden">
        {/* Floating background hearts */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {randomPositions.map((position, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${position.x}%`,
                top: `${position.y}%`,
              }}
              animate={{
                y: [0, -20, 0],
                x: [0, Math.random() * 20 - 10, 0],
                rotate: [0, Math.random() * 10 - 5, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            >
              <Heart className="w-4 h-4 text-pink-300 fill-pink-100 opacity-70" />
            </motion.div>
          ))}
        </div>

        {/* Photo Display Card */}
        <motion.div
          className="relative z-10 bg-white bg-opacity-90 backdrop-blur-sm rounded-3xl shadow-xl shadow-rose-200 p-8 border-4 border-pink-200 flex flex-col items-center max-w-sm mx-auto"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Large Profile Photo */}
          <motion.div
            className="relative mb-6"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 p-2"
              animate={{ rotate: 360 }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              <div className="w-32 h-32 rounded-full bg-white p-2">
                <img
                  src="https://images.pexels.com/photos/32330322/pexels-photo-32330322.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/400x400/ff69b4/ffffff?text=❤️";
                  }}
                />
              </div>
            </motion.div>
            
            {/* Floating hearts around photo */}
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  top: `${Math.sin((i * Math.PI * 2) / 6) * 80 + 50}%`,
                  left: `${Math.cos((i * Math.PI * 2) / 6) * 80 + 50}%`,
                  transform: "translate(-50%, -50%)",
                }}
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.3, 1],
                  rotate: [0, 15, -15, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.2,
                }}
              >
                <Heart className="w-5 h-5 text-pink-400 fill-pink-200" />
              </motion.div>
            ))}
          </motion.div>

          {/* Title */}
          <motion.h2
            className="text-2xl font-bold text-center text-pink-600 mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Our Special Story
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="text-lg text-center text-purple-600 mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Hey Cutiepie, you are my Soulmate
          </motion.p>

          {/* Cute emojis */}
          <div className="flex justify-center space-x-3">
            {["💕", "✨", "🌟", "💖", "🎈"].map((emoji, i) => (
              <motion.span
                key={i}
                className="text-2xl"
                animate={{
                  rotate: [-10, 10, -10],
                  scale: [1, 1.2, 1],
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.2,
                }}
              >
                {emoji}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    );
  }
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-rose-100 to-purple-100 overflow-hidden">
      {/* Floating background hearts */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {randomPositions.map((position, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${position.x}%`,
              top: `${position.y}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.random() * 20 - 10, 0],
              rotate: [0, Math.random() * 10 - 5, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          >
            {i % 5 === 0 ? (
              <Star
                className={`w-4 h-4 text-yellow-300 fill-yellow-100 opacity-70`}
              />
            ) : i % 5 === 1 ? (
              <Sparkles
                className={`w-4 h-4 text-purple-300 opacity-70`}
              />
            ) : (
              <Heart
                className={`w-4 h-4 ${i % 3 === 0
                    ? "text-pink-300"
                    : i % 3 === 1
                      ? "text-pink-400"
                      : "text-purple-300"
                  } ${i % 2 === 0 ? "fill-pink-100" : "fill-pink-200"} opacity-70`}
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* Main loading card */}
      <motion.div
        className="relative z-10 bg-white bg-opacity-80 backdrop-blur-sm rounded-3xl shadow-lg shadow-rose-100 p-8 border-4 border-pink-200 flex flex-col items-center max-w-xs mx-auto"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Profile Photo - ADD THIS SECTION */}
        <motion.div
          className="relative mb-6"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Animated ring around photo */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 p-1"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <div className="w-24 h-24 rounded-full bg-white p-1">
              <img
                src="https://images.pexels.com/photos/32330322/pexels-photo-32330322.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
                onError={(e) => {
                  // Fallback image if Pexels URL doesn't work
                  e.target.src = "https://via.placeholder.com/400x400/ff69b4/ffffff?text=❤️";
                }}
              />
            </div>
          </motion.div>
          
          {/* Floating hearts around photo */}
          {Array.from({ length: 4 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                top: i === 0 ? "-10px" : i === 1 ? "50%" : i === 2 ? "calc(100% + 10px)" : "50%",
                left: i === 0 ? "50%" : i === 1 ? "-10px" : i === 2 ? "50%" : "calc(100% + 10px)",
                transform: "translate(-50%, -50%)",
              }}
              animate={{
                y: [0, -8, 0],
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.3,
              }}
            >
              <Heart className="w-4 h-4 text-pink-400 fill-pink-200" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bouncing hearts */}
        <div className="flex justify-center space-x-3 mb-5">
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -15, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.2,
              }}
            >
              <Heart
                className={`w-6 h-6 ${i === 0
                  ? "text-pink-400 fill-pink-200"
                  : i === 1
                    ? "text-pink-500 fill-pink-300"
                    : "text-purple-400 fill-purple-200"
                  }`}
              />
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-xl font-bold text-center text-pink-600 mb-3"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
          }}
        >
          Loading something special...
        </motion.p>

        {/* Cute emojis */}
        <div className="flex justify-center space-x-4 mt-5">
          {["🎂", "✨", "🎁", "💖", "🎈"].map((emoji, i) => (
            <motion.span
              key={i}
              className="text-xl"
              animate={{
                rotate: [-10, 10, -10],
                scale: [1, 1.2, 1],
                y: [0, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.2,
              }}
            >
              {emoji}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Loader