import React, { useEffect, useRef } from "react";
import eyesImage from "../assets/images/eyes.png";

export const Eyes = () => {
  const eyesRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const eyes = eyesRef.current;
      if (eyes) {
        const rect = eyes.getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;

        // Calculate the relative position of the mouse to the eye center
        const deltaX = event.clientX - eyeCenterX;
        const deltaY = event.clientY - eyeCenterY;

        // Normalize the rotation angles
        const rotationX = Math.max(Math.min(deltaY / 10, 30), -30); // Limit rotation to [-30, 30] degrees
        const rotationY = Math.max(Math.min(deltaX / 10, 30), -30); // Limit rotation to [-30, 30] degrees

        eyes.style.transform = `rotateY(${rotationX}deg) rotateX(${rotationY}deg)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <img
      ref={eyesRef}
      className="eyes"
      src={eyesImage}
      alt="Eyes"
      style={{
        transition: "transform 0.2s ease",
      }}
    />
  );
};
