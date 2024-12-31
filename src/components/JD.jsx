import React, { useState } from "react";

export const JD = ({desc}) => {
  const fullDescription = desc;

  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div style={{ color: isExpanded ? "#fff" : "#333", fontFamily: "Arial, sans-serif", lineHeight: "1.6", padding: "20px" }}>
      <div
        dangerouslySetInnerHTML={{
          __html: isExpanded
            ? fullDescription
            : fullDescription.substring(0, 120) + "...",
        }}
      />
      <button
        onClick={handleToggle}
        style={{
          marginTop: "10px",
          padding: "10px 15px",
          backgroundColor: "#4CAFC8",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {isExpanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
};
