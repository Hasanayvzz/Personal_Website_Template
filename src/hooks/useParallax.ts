"use client";

import { useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import { useRef, RefObject } from "react";

interface ParallaxOptions {
  offset?: [string, string];
  inputRange?: [number, number];
  outputRange?: [string | number, string | number];
}

interface UseParallaxReturn {
  ref: RefObject<HTMLElement | null>;
  scrollYProgress: MotionValue<number>;
  y: MotionValue<string | number>;
  opacity: MotionValue<number>;
  scale: MotionValue<number>;
  rotate: MotionValue<number>;
  smoothY: MotionValue<number>;
}

export function useParallax({
  offset = ["start end", "end start"],
  inputRange = [0, 1],
  outputRange = [0, -100],
}: ParallaxOptions = {}): UseParallaxReturn {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset as ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, inputRange, outputRange);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const rotate = useTransform(scrollYProgress, inputRange, [0, 360]);

  const smoothY = useSpring(
    useTransform(scrollYProgress, inputRange, outputRange as [number, number]),
    {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
    }
  );

  return {
    ref: ref as RefObject<HTMLElement | null>,
    scrollYProgress,
    y,
    opacity,
    scale,
    rotate,
    smoothY,
  };
}

// Floating animation hook
export function useFloatingAnimation(delay: number = 0) {
  return {
    animate: {
      y: [0, -20, 0],
      rotate: [-2, 2, -2],
    },
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    },
  };
}

export function useMouseParallax(intensity: number = 20) {
  const mouseX = useSpring(0, { stiffness: 100, damping: 30 });
  const mouseY = useSpring(0, { stiffness: 100, damping: 30 });

  const handleMouseMove = (e: MouseEvent | React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    const x = ((clientX - innerWidth / 2) / innerWidth) * intensity;
    const y = ((clientY - innerHeight / 2) / innerHeight) * intensity;

    mouseX.set(x);
    mouseY.set(y);
  };

  return { mouseX, mouseY, handleMouseMove };
}

export function useScrollReveal(threshold: number = 0.2) {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, threshold], [0, 1]);

  const y = useTransform(scrollYProgress, [0, threshold], [100, 0]);

  const clipPath = useTransform(
    scrollYProgress,
    [0, threshold],
    ["inset(100% 0% 0% 0%)", "inset(0% 0% 0% 0%)"]
  );

  return { ref: ref as RefObject<HTMLElement | null>, opacity, y, clipPath };
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
