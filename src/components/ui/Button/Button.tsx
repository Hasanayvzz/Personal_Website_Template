"use client";

import React, { ButtonHTMLAttributes, ReactNode } from "react";

import { Loader2 } from "lucide-react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  leftIcon,
  rightIcon,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`btn ${variant} ${size} ${className}`}
      disabled={disabled || isLoading}
      {...props}>
      {isLoading && <Loader2 className="spinner" size={18} />}
      {!isLoading && leftIcon && <span className="icon-left">{leftIcon}</span>}
      {children}
      {!isLoading && rightIcon && (
        <span className="icon-right">{rightIcon}</span>
      )}
    </button>
  );
}
