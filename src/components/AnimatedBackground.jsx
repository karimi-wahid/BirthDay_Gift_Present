import { motion } from "framer-motion";
import { useMemo } from "react";

const AnimatedBackground = () => {
  const hearts = useMemo(() => 
  Arrary.from({ length: 30}, (_, i) => ({
    id: i,
    x: Math.random() * window.innerWidth,
    delay: Math.random() * 5,
    duration: Math.random() * 8 + 10,
  })),
  []
);

  const flowers = useMemo(() => 
  Arrary.from({ length: 25}, (_, i) => ({
    id: i,
    x: Math.random() * window.innerWidth,
    delay: Math.random() * 6,
    duration: Math.random() * 8 + 14,
  })),
  []
);

  const bubbles = useMemo(() => 
  Arrary.from({ length: 20}, (_, i) => ({
    id: i,
    x: Math.random() * window.innerWidth,
    scale: Math.random() * 0.5 + 0.5,
    delay: Math.random() * 4,
    duration: Math.random() * 10 + 12,
  })),
  []
);


  return <>
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {
        hearts.map((heart => {
          <motion.div 
          key={`heart-${heart.id}`}
          className="absolute text-2xl text-pink-400"
          initial={{
            x: heart.x,
            y: window.innerHeight + 50,
            opacity: 0.8,
          }}
          animate={{
            y: -120,
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            delay: heart.delay,
            ease: 'easeInOut',
          }}>
            ❤️
          </motion.div>
        }))
      }
      {
        flowers.map((flower => {
          <motion.div 
          key={`flower-${flower.id}`}
          className="absolute text-3xl text-pink-400"
          initial={{
            x: flower.x,
            y: window.innerHeight + 50,
            opacity: 0.8,
          }}
          animate={{
            y: window.innerHeight + 60,
            rotate: 360,
          }}
          transition={{
            duration: flower.duration,
            repeat: Infinity,
            delay: flower.delay,
            ease: 'linear',
          }}>
            🌸
          </motion.div>
        }))
      }
      {
        bubbles.map((bubble => {
          <motion.div 
          key={`bubble-${bubble.id}`}
          className="absolute w-6 h-6 rounded-full bg-gradient-to-r from-pink-200/40 to-pink-400/20 backdrop-blur-sm"
          initial={{
            x: bubble.x,
            y: window.innerHeight + 50,
            scale: bubble.scale,
            opacity: 0.8,
          }}
          animate={{
            y: -120,
            scale: [bubble.scale, bubble.scale + 0.3, bubble.scale],
            opacity: [0.6, 0.9, 0.6],
          }}
          transition={{
            duration: bubble.duration,
            repeat: Infinity,
            delay: bubble.delay,
            ease: 'easeInOut',
          }} />
        }))
      }
    </div>
  
  </>;
};

export default AnimatedBackground;
