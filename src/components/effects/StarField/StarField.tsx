"use client";

import { useEffect, useState } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

interface ShootingStar {
  id: number;
  startX: number;
  startY: number;
  length: number;
  delay: number;
  duration: number;
}

export default function StarField() {
  const [stars, setStars] = useState<Star[]>([]);
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([]);

  useEffect(() => {
    const newStars: Star[] = [];
    for (let i = 0; i < 60; i++) {
      newStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 1.5 + 0.5,
        duration: Math.random() * 4 + 3,
        delay: Math.random() * 6,
        opacity: Math.random() * 0.4 + 0.2,
      });
    }
    setStars(newStars);

    const newShootingStars: ShootingStar[] = [];
    for (let i = 0; i < 15; i++) {
      newShootingStars.push({
        id: i,
        startX: Math.random() * 100,
        startY: Math.random() * 60,
        length: Math.random() * 80 + 60,
        delay: Math.random() * 20,
        duration: Math.random() * 1 + 1,
      });
    }
    setShootingStars(newShootingStars);
  }, []);

  return (
    <div className="star-field">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
            opacity: star.opacity,
          }}
        />
      ))}

      {shootingStars.map((star) => (
        <div
          key={`shooting-${star.id}`}
          className="shooting-star-wrapper"
          style={
            {
              left: `${star.startX}%`,
              top: `${star.startY}%`,
              "--shoot-delay": `${star.delay}s`,
              "--shoot-duration": `${star.duration}s`,
              "--star-length": `${star.length}px`,
            } as React.CSSProperties
          }>
          <div className="shooting-star" />
        </div>
      ))}
    </div>
  );
}
