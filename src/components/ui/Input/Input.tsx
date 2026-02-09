"use client";

import React, { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  className?: string;
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  className?: string;
}

export function Input({
  label,
  error,
  className = "",
  id,
  ...props
}: InputProps) {
  const inputId = id || props.name;

  return (
    <div className={`form-group ${className}`}>
      {label && (
        <label htmlFor={inputId} className="form-label">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`input ${error ? "has-error" : ""}`}
        {...props}
      />
      {error && <span className="form-error">{error}</span>}
    </div>
  );
}

export function Textarea({
  label,
  error,
  className = "",
  id,
  ...props
}: TextareaProps) {
  const textareaId = id || props.name;

  return (
    <div className={`form-group ${className}`}>
      {label && (
        <label htmlFor={textareaId} className="form-label">
          {label}
        </label>
      )}
      <textarea
        id={textareaId}
        className={`textarea ${error ? "has-error" : ""}`}
        {...props}
      />
      {error && <span className="form-error">{error}</span>}
    </div>
  );
}
