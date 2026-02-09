"use client";

import { memo } from "react";

interface ParallaxBackgroundProps {
  variant?: "hero" | "cosmic" | "gradient" | "section";
  intensity?: number;
  className?: string;
}

const ParallaxBackground = memo(function ParallaxBackground({
  variant = "section",
  className = "",
}: ParallaxBackgroundProps) {
  return <div className={`parallax-background ${variant} ${className}`} />;
});

export default ParallaxBackground;
