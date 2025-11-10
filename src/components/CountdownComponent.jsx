import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CountdownComponent = ({ onComplete }) => {
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    if (timeLeft === 0) {
      onComplete();
      return;
    }

    const timer = setTimeLeft(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  },[timeLeft, onComplete]);

  const formalTimer = (seconds) => {
    return `00:00:${seconds.toString().padStart(2, '0')}`
  }

  return <>
    <div className="flex flex-col items-center justify-center min-h-screen text-center relative">
      {/* Spinning flower in buttom right */}
      <motion.div className="fixed bottom-8 right-8 text-6xl" animate={{rotate: 360}} transition={{duration: 20, repeat: Infinity, ease: "linear"}}>🌸</motion.div>

      {/* Main countdown box */}
      <motion.div className="relative p-12 rounded-3xl w-full sm:w-auto bg-gradient-romantic shadow-glow backdrop-blur-sm border border-romantic-light/30"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, type: 'spring', stiffness: 100, damping: 10}}>

        {/* Glowing Effect */}
        <motion.div className="absolute inset-0 rounded-3xl bg-gradient-glow"
        animate={{ scale: [1,1.1,1], opacity: [0.3, 0.6, 0.3] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut'
        }}>

          {/* Countdown text */}
          <motion.div className="relative z-10"
          animate={{ scale: timeLeft <= 3 ? [1,1.2,1] : 1}}
          transition={{
            duration: 0.5,
            repeat: timeLeft <= 3 ? Infinity : 0
          }}>

            <motion.h1 className="text-4xl sm:text-8xl md:text-9xl font-bold text-white mb-4 font-mono tracking-wider"
            animate={{textShadow:[
              '0 0 20px rgba(255,255,255, 0.5)',
              '0 0 40px rgba(255,255,255, 0.8)',
              '0 0 20px rgba(255,255,255, 0.8)',
            ]}} transition={{ duration: 2, repeat: Infinity, ease:'easeInOut'}}>
              {formalTimer(timeLeft)}
            </motion.h1>
            <motion.p className="text-2xl md:text-3xl text-white/90 font-light"
            initial={{ opacity: 0, y: 20}}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}>Get ready for something Special ⭐</motion.p>

          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  </>;
};

export default CountdownComponent;
