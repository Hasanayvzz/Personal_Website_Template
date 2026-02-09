"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  children?: ReactNode;
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  align = "center",
  className = "",
  children,
}: SectionHeaderProps) {
  return (
    <motion.div
      className={`section-header ${align} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 0.6 }}>
      <span className="section-label">{label}</span>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
      {children}
    </motion.div>
  );
}
