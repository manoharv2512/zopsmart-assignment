import React, { useEffect, useState } from "react";

const TrafficLight = () => {
  const [color, setColor] = useState("green");

  useEffect(() => {
    const colorSequence = [
      { color: "green", duration: 2000 },
      { color: "yellow", duration: 3000 },
      { color: "red", duration: 2000 },
      { color: "yellow", duration: 5000 }
    ];

    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % colorSequence.length;
      setColor(colorSequence[currentIndex].color);
    }, colorSequence[currentIndex].duration);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        width: "300px",
        height: "300px",
        margin: "50px auto",
        backgroundColor: color,
    
        boxShadow: "0 0 10px rgba(0,0,0,0.5)"
      }}
    ></div>
  );
};

export default TrafficLight;
