import React from "react";

const GradientText = ({
  children,
  className = "",
  colors = ["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"],
  animationSpeed = 8,
  showBorder = false,
}) => {
  const gradientStyle = {
    "--gradient-colors": colors.join(", "),
    "--animation-speed": `${animationSpeed}s`,
  };

  return (
    <div
      className={`animated-gradient-text ${className}`}
      style={gradientStyle}
    >
      {showBorder && <div className="gradient-overlay"></div>}
      <div className="text-content" style={gradientStyle}>
        {children}
      </div>
    </div>
  );
};

export default GradientText;
