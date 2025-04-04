"use client";

import { forwardRef, InputHTMLAttributes } from "react";
import "./styles.css";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  containerClassName?: string;
  labelClassName?: string;
  errorClassName?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className = "",
      label,
      error,
      containerClassName = "",
      labelClassName = "",
      errorClassName = "",
      ...props
    },
    ref
  ) => {
    return (
      <div className={`flex flex-col gap-1 ${containerClassName}`}>
        {label && (
          <label
            className={`text-sm font-medium text-[hsl(var(--foreground))] ${labelClassName}`}
          >
            {label}
          </label>
        )}
        <input
          className={`rounded-md border border-[hsl(var(--border))] bg-[hsl(var(--background))] px-3 py-2 text-sm text-[hsl(var(--foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))] focus:border-[hsl(var(--ring))] ${
            error ? "border-[hsl(var(--destructive))]" : ""
          } ${className}`}
          ref={ref}
          {...props}
        />
        {error && (
          <span
            className={`text-xs text-[hsl(var(--destructive))] ${errorClassName}`}
          >
            {error}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
