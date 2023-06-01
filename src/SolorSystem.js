import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
// import tw from 'tailwind.macro';

const planets = [
  { name: 'Mercury', radius: 30, speed: 1.5, orbitRadius: 200 },
  { name: 'Venus', radius: 40, speed: 1, orbitRadius: 250 },
  { name: 'Earth', radius: 50, speed: 0.8, orbitRadius: 300 },
  { name: 'Mars', radius: 35, speed: 0.6, orbitRadius: 350 },
  { name: 'Jupiter', radius: 70, speed: 0.4, orbitRadius: 400 },
];

const SolarSystem = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const animationFrame = requestAnimationFrame(() => setTime((prevTime) => prevTime + 1));

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative">
        <div className="w-4 h-4 bg-yellow-300 rounded-full absolute top-0 left-0" />
        {planets.map((planet, index) => {
          const { name, radius, speed, orbitRadius } = planet;

          const planetStyle = {
            width: `${radius}px`,
            height: `${radius}px`,
            borderRadius: '50%',
            position: 'absolute',
            top: `${orbitRadius * Math.sin((speed * time) / 100)}px`,
            left: `${orbitRadius * Math.cos((speed * time) / 100)}px`,
          };

          return (
            <motion.div
              key={name}
              style={planetStyle}
              className={`bg-${index + 1}-500`}
              animate={{
                rotate: (360 * time) / 100,
              }}
              transition={{
                loop: Infinity,
                duration: 2 / speed,
                ease: 'linear',
              }}
            >
              <div className="absolute w-full h-full flex items-center justify-center">
                <span className={`text-white font-bold`}>{name}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default SolarSystem;
