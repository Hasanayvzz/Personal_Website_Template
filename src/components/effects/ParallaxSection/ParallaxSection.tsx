"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, ReactNode, useEffect, useState } from "react";

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  direction?: "up" | "down" | "left" | "right";
  fadeOut?: boolean;
  scaleOnScroll?: boolean;
  rotateOnScroll?: boolean;
  overflow?: "visible" | "hidden";
}

export default function ParallaxSection({
  children,
  className = "",
  speed = 0.5,
  direction = "up",
  fadeOut = false,
  scaleOnScroll = false,
  rotateOnScroll = false,
  overflow = "visible",
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const movement = speed * 100;

  const yTransform = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "up"
      ? [movement, -movement]
      : direction === "down"
      ? [-movement, movement]
      : [0, 0]
  );

  const xTransform = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "left"
      ? [movement, -movement]
      : direction === "right"
      ? [-movement, movement]
      : [0, 0]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    fadeOut ? [0, 1, 1, 0] : [1, 1, 1, 1]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    scaleOnScroll ? [0.8, 1, 0.8] : [1, 1, 1]
  );

  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    rotateOnScroll ? [-5, 5] : [0, 0]
  );

  const smoothY = useSpring(yTransform, { stiffness: 100, damping: 30 });
  const smoothX = useSpring(xTransform, { stiffness: 100, damping: 30 });
  const smoothScale = useSpring(scale, { stiffness: 100, damping: 30 });
  const smoothRotate = useSpring(rotate, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      ref={ref}
      className={`parallax-section ${className}`}
      style={{
        y: smoothY,
        x: smoothX,
        opacity,
        scale: smoothScale,
        rotate: smoothRotate,
        overflow,
      }}>
      {children}
    </motion.div>
  );
}

interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  distance?: number;
  rotationRange?: number;
  style?: React.CSSProperties;
}

export function FloatingElement({
  children,
  className = "",
  duration = 6,
  delay = 0,
  distance = 20,
  style,
}: FloatingElementProps) {
  const cssVars = {
    "--float-duration": `${duration}s`,
    "--float-delay": `${delay}s`,
    "--float-distance": `${distance}px`,
    ...style,
  } as React.CSSProperties;

  return (
    <div className={`floating-element ${className}`} style={cssVars}>
      {children}
    </div>
  );
}

// Mouse-following parallax layer
interface MouseParallaxLayerProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
  reverse?: boolean;
}

export function MouseParallaxLayer({
  children,
  className = "",
  intensity = 20,
  reverse = false,
}: MouseParallaxLayerProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const multiplier = reverse ? -1 : 1;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const x =
        ((clientX - innerWidth / 2) / innerWidth) * intensity * multiplier;
      const y =
        ((clientY - innerHeight / 2) / innerHeight) * intensity * multiplier;

      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [intensity, multiplier]);

  const x = useSpring(mousePosition.x, { stiffness: 100, damping: 30 });
  const y = useSpring(mousePosition.y, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      className={`mouse-parallax-layer ${className}`}
      style={{ x, y }}>
      {children}
    </motion.div>
  );
}

// Scroll reveal component
interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "scale" | "none";
  delay?: number;
  duration?: number;
  threshold?: number;
}

export function ScrollReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 0.6,
  threshold = 0.2,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const getInitialTransform = () => {
    switch (direction) {
      case "up":
        return { y: 100, x: 0, scale: 1 };
      case "down":
        return { y: -100, x: 0, scale: 1 };
      case "left":
        return { y: 0, x: -100, scale: 1 };
      case "right":
        return { y: 0, x: 100, scale: 1 };
      case "scale":
        return { y: 0, x: 0, scale: 0.8 };
      default:
        return { y: 0, x: 0, scale: 1 };
    }
  };

  const initial = getInitialTransform();

  const opacity = useTransform(scrollYProgress, [0, threshold], [0, 1]);
  const y = useTransform(scrollYProgress, [0, threshold], [initial.y, 0]);
  const x = useTransform(scrollYProgress, [0, threshold], [initial.x, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, threshold],
    [initial.scale, 1]
  );

  const smoothOpacity = useSpring(opacity, { stiffness: 100, damping: 30 });
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });
  const smoothX = useSpring(x, { stiffness: 100, damping: 30 });
  const smoothScale = useSpring(scale, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      ref={ref}
      className={`scroll-reveal ${className}`}
      style={{
        opacity: smoothOpacity,
        y: smoothY,
        x: smoothX,
        scale: smoothScale,
      }}>
      {children}
    </motion.div>
  );
}

interface ParallaxLayerProps {
  children: ReactNode;
  className?: string;
  speed: number;
  zIndex?: number;
}

interface LayeredParallaxProps {
  layers: ParallaxLayerProps[];
  className?: string;
  height?: string;
}

export function LayeredParallax({
  layers,
  className = "",
  height = "100vh",
}: LayeredParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  return (
    <div
      ref={ref}
      className={`layered-parallax ${className}`}
      style={{ height }}>
      {layers.map((layer, index) => {
        const y = useTransform(scrollYProgress, [0, 1], [0, layer.speed * 100]);
        const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

        return (
          <motion.div
            key={index}
            className={`parallax-layer ${layer.className || ""}`}
            style={{
              y: smoothY,
              zIndex: layer.zIndex ?? index,
            }}>
            {layer.children}
          </motion.div>
        );
      })}
    </div>
  );
}

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
}

export function TextReveal({
  text,
  className = "",
  delay = 0,
  staggerDelay = 0.02,
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const words = text.split(" ");

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  return (
    <div ref={ref} className={`text-reveal ${className}`}>
      {words.map((word, wordIndex) => {
        const start = delay + wordIndex * staggerDelay * 5;
        const end = start + 0.2;

        const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
        const y = useTransform(scrollYProgress, [start, end], [40, 0]);

        return (
          <motion.span key={wordIndex} className="word" style={{ opacity, y }}>
            {word}
            {wordIndex < words.length - 1 && "\u00A0"}
          </motion.span>
        );
      })}
    </div>
  );
}
