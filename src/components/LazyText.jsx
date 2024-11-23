import React, { useState, useEffect, useRef } from "react";

// Typewriter Effect Hook
const useTypewriter = (text, speed = 50) => {
  const [displayedText, setDisplayedText] = useState("");
  const index = useRef(0);

  useEffect(() => {
    if (index.current < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index.current]);
        index.current += 1;
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [text, displayedText, speed]);

  return displayedText;
};

// LazyText Component with Typewriter
export const LazyText = ({ text, speed = 50 }) => {
  const displayedText = useTypewriter(text || "", speed); // Ensure `text` defaults to an empty string

  return <>{displayedText}</>; // Render only the text content
};
