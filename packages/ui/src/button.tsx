"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import "./styles.css";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  loadingText?: string;
  fullWidth?: boolean;
}

export const Button = ({
  children,
  className = "",
  variant = "primary",
  size = "md",
  isLoading = false,
  loadingText,
  fullWidth = false,
  disabled,
  ...props
}: ButtonProps) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--primary))/90]",
    secondary:
      "bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] hover:bg-[hsl(var(--secondary))/80]",
    outline:
      "border border-[hsl(var(--border))] bg-transparent hover:bg-[hsl(var(--secondary))]",
    ghost: "bg-transparent hover:bg-[hsl(var(--secondary))]",
  };

  const sizes = {
    sm: "text-xs px-2.5 py-1.5",
    md: "text-sm px-4 py-2",
    lg: "text-base px-6 py-3",
  };

  const classes = [
    baseClasses,
    variants[variant],
    sizes[size],
    fullWidth ? "w-full" : "",
    disabled || isLoading ? "opacity-70 cursor-not-allowed" : "cursor-pointer",
    className,
  ].join(" ");

  return (
    <button className={classes} disabled={disabled || isLoading} {...props}>
      {isLoading ? (
        <>
          <svg className="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
          {loadingText || children}
        </>
      ) : (
        children
      )}
    </button>
  );
};
