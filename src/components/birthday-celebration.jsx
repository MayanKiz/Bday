"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, Sparkles, Gift, Cake, Play } from "lucide-react";
import { useRouter } from "next/navigation";

// Simple confetti component
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
              backgroundColor: ['#FF69B4', '#FFD700', '#FF6347', '#8A2BE2', '#00CED1'][Math.floor(Math.random() * 5)]
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default function BirthdayCelebration() {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [showMoreButton, setShowMoreButton] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const [showConfetti, setShowConfetti] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => setShowMoreButton(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Stop confetti when video is playing
    if (showVideo) {
      setShowConfetti(false);
    } else {
      setShowConfetti(true);
    }
  }, [showVideo]);

  const handleVideoEnd = () => {
    setVideoEnded(true);
  };

  const handleRedirect = () => {
    router.push("https://for-u-three.vercel.app/");
  };

  return (
    <div className="flex flex-col items-center relative">
      <Confetti isActive={showConfetti} />
      
      <motion.div
        initial={{ scale: 0, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.3 }}
        className="relative mb-2"
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
          To My Cutiepie
        </h3>
      </motion.div>

      <motion.div  
        className="w-full max-w-md mx-auto my-6"  
        initial={{ opacity: 0, y: 20 }}  
        animate={{ opacity: 1, y: 0 }}  
        transition={{ delay: 0.6 }}  
      >  
        <div  
          className={`relative cursor-pointer transition-all duration-700 ease-in-out transform ${  
            isCardOpen ? "rotate-0" : "rotate-2"  
          }`}  
          onClick={() => setIsCardOpen(!isCardOpen)}  
        >  
          <div  
            className={`bg-gradient-to-r from-pink-400 to-purple-500 rounded-3xl p-14 sm:p-10 shadow-lg transition-all duration-700 transform ${  
              isCardOpen ? "scale-95" : "scale-100"  
            }`}  
          >  
            <div className="absolute top-2 right-2">  
              <motion.div  
                animate={{ rotate: 360 }}  
                transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}  
              >  
                <Sparkles className="w-6 h-6 text-yellow-200" />  
              </motion.div>  
            </div>  

            <div className="text-center text-white">  
              <p className="text-lg font-medium mb-4">  
                Tap to {isCardOpen ? "close" : "open"} your card  
              </p>  
              <div className="flex justify-center">  
                <motion.div  
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 5, 0, -5, 0] }}  
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}  
                >  
                  <Gift className="w-14 h-14 text-white" />  
                </motion.div>  
              </div>  
            </div>  
          </div>  

          <AnimatePresence>  
            {isCardOpen && (  
              <motion.div  
                className="absolute inset-0 bg-white max-[350px]:-top-6 max-[350px]:min-h-[275px] rounded-3xl p-4 shadow-xl shadow-rose-100 flex flex-col items-center justify-center"  
                initial={{ rotate: 2, rotateX: -90, opacity: 0 }}  
                animate={{ rotate: 0, rotateX: 0, opacity: 1, zIndex: 10 }}  
                exit={{ rotateX: -90, opacity: 0 }}  
                transition={{ duration: 0.5 }}  
              >  
                <div className="text-center">  
                  <p className="text-purple-700 mb-2">  
                    Just wanted to remind you—you're my favorite person. My days are better, smiles are wider, and life is sweeter because of you.  
                  </p>  
                  <p className="text-pink-600 font-medium">  
                    I hope your birthday is full of love, magic, and everything that makes you smile 💖  
                  </p>  
                  <div className="flex justify-center">  
                    <motion.div  
                      animate={{ scale: [1, 1.2, 1] }}  
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}  
                    >  
                      <Heart className="w-8 h-8 stroke-none fill-rose-500" />  
                    </motion.div>  
                  </div>  
                </div>  
              </motion.div>  
            )}  
          </AnimatePresence>  
        </div>  
      </motion.div>  

      <motion.div  
        className="w-full max-w-md mt-4"  
        initial={{ opacity: 0 }}  
        animate={{ opacity: 1 }}  
        transition={{ delay: 1 }}  
      >  
        <div className="text-center">  
          <p className="text-lg text-purple-700 mb-4">  
            May every wish you make today come true. You deserve the world, and I'll always be here to remind you of that.  
          </p>  
          <div className="flex justify-center items-center gap-2">  
            <p className="text-pink-600 font-medium">  
              Let's always stay like this... together, forever 🫶  
            </p>  
          </div>  
        </div>  
      </motion.div>  

      {showMoreButton && (  
        <motion.button  
          className="mt-6 px-6 py-3 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 transition duration-300 flex items-center gap-2"  
          initial={{ opacity: 0, y: 20 }}  
          animate={{ opacity: 1, y: 0 }}  
          onClick={() => setShowVideo(true)}  
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >  
          <Play className="w-5 h-5" />  
          Click on me  
        </motion.button>  
      )}  

      <AnimatePresence>  
        {showVideo && (  
          <motion.div  
            className="fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center z-50"  
            initial={{ opacity: 0 }}  
            animate={{ opacity: 1 }}  
            exit={{ opacity: 0 }}  
          >  
            <div className="relative w-11/12 max-w-lg bg-black rounded-lg overflow-hidden">  
              <motion.button  
                className="absolute top-2 right-2 text-white text-xl z-20 bg-red-500 rounded-full w-8 h-8 flex items-center justify-center shadow-lg"  
                onClick={() => setShowVideo(false)}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{ position: 'fixed' }}
              >  
                ✕  
              </motion.button>
              
              <div className="relative">
                {/* Confetti background for video */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  {[...Array(50)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute"
                      initial={{
                        x: Math.random() * 100 + "%",
                        y: Math.random() * 100 + "%",
                        opacity: 0.7,
                      }}
                      animate={{
                        x: Math.random() * 100 + "%",
                        y: Math.random() * 100 + "%",
                        opacity: [0.4, 0.8, 0.4],
                      }}
                      transition={{
                        duration: Math.random() * 5 + 5,
                        repeat: Infinity,
                        repeatType: "mirror",
                      }}
                    >
                      <div 
                        className="w-2 h-2 rounded-full"
                        style={{
                          backgroundColor: ['#FF69B4', '#FFD700', '#FF6347', '#8A2BE2', '#00CED1'][Math.floor(Math.random() * 5)]
                        }}
                      />
                    </motion.div>
                  ))}
                </div>
                
                <video  
                  src="/lv_7500596672121048373_20250507154449.mp4"  
                  controls  
                  autoPlay  
                  onEnded={handleVideoEnd}  
                  className="w-full h-auto relative z-10"  
                />
              </div>
            </div>  
            
            {videoEnded && (  
              <motion.button  
                className="mt-4 px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 shadow-lg"  
                onClick={handleRedirect}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >  
                Very Very Special Gift  
              </motion.button>  
            )}  
          </motion.div>  
        )}  
      </AnimatePresence>  
    </div>
  );
}