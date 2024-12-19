"use client";

import React, { useState, useEffect } from "react";

interface TypewriterEffectProps {
  text: string;
  speed?: number; // speed is optional, default will be 150 ms
  className?: string; // pass tailwind styles
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  text,
  speed = 150,
}) => {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      setIndex((prevIndex) => prevIndex + 1);
    }, speed);

    if (index === text.length) {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [index, text, speed]);

    // changing colors
    const [currentColorIndex, setCurrentColorIndex] = useState(0);
    const colors = [
      "text-red-500",
      "text-blue-500",
      "text-green-500",
      "text-yellow-500",
      "text-purple-500",
      "text-pink-500",
    ];

    const handleHover = () => {
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    };


  return (
    <h1
      className={`text-4xl font-bold cursor-default transition-colors duration-300 ${colors[currentColorIndex]}`}
      onMouseEnter={handleHover}
    >
      {displayedText}
    </h1>
  );
};

export default TypewriterEffect;
