import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Words = () => {
  const [words, setWords] = useState([
    "Hello",
    "World",
    "This",
    "Is",
    "A",
    "React",
    "App",
    "Using",
    "Tailwind",
  ]);

  useEffect(() => {
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      motion.div({
        initial: {
          opacity: 0,
          y: 100,
        },
        animate: {
          opacity: 1,
          y: 0,
          duration: 2000,
        },
        onAnimationEnd: () => {
          setWords(words.filter((w, j) => j !== i));
        },
      });
    }
  }, []);

  return (
    <div>
      {words.map((word, i) => (
        <motion.div key={i} className="word">
          {word}
        </motion.div>
      ))}
    </div>
  );
};

export default Words;