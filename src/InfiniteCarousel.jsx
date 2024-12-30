import React, { useState, useEffect } from 'react';
import './InfiniteCarousel.css';

export const InfiniteCarousel = () => {
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const slideWidth = 300; // Width of each slide (adjust as needed)
  const autoplayInterval = 3000; // Autoplay interval in milliseconds

  // Duplicate the item list for seamless looping
  const duplicatedItems = [...items, ...items];

  const handleTransitionEnd = () => {
    if (currentIndex === 0) {
      setIsTransitioning(false); // Temporarily disable transition
      setCurrentIndex(items.length); // Jump to the first duplicate
    } else if (currentIndex === duplicatedItems.length - 1) {
      setIsTransitioning(false); // Temporarily disable transition
      setCurrentIndex(items.length - 1); // Jump to the last duplicate
    } else {
      setIsTransitioning(true); // Re-enable transition
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, autoplayInterval);
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  useEffect(() => {
    if (!isTransitioning) {
      // Re-enable transition after jump
      setTimeout(() => setIsTransitioning(true), 50);
    }
  }, [isTransitioning]);

  return (
    <div className="carousel-container">
      <div
        className="carousel-wrapper"
        style={{
          transform: `translateX(-${currentIndex * slideWidth}px)`,
          transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {duplicatedItems.map((item, index) => (
          <div className="carousel-item" key={index}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
