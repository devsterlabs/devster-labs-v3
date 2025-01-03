import React, { useEffect, useState } from "react";
import topLeftBlack from "../assets/images/topLeftButtonBlack.svg";
import bottomRightBlack from "../assets/images/bottomRightButtonBlack.svg";

export const HireUsSide = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check scroll position
      if (window.scrollY === 0) {
        setIsVisible(false); // Hide component when at the top
      } else {
        setIsVisible(true); // Show component when scrolled
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial check for mobile when the component mounts
    handleScroll();

    // Remove scroll event listener on cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Conditionally render the component
  if (!isVisible) {
    return null;
  }

  return (
    <div className="sideHire">
      <button
        onClick={() =>
          window.open("https://calendly.com/abdul-raheem-devsterlabs/30min")
        }
        className="sideButton"
      >
        <img className="btn-tlb" src={topLeftBlack} alt="TLB" />
        <img className="btn-brb" src={bottomRightBlack} alt="BRB" />
        Hire Us
      </button>
    </div>
  );
};
