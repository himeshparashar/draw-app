"use client";

import { ReactNode } from "react";
import "./styles.css";

export interface AuthLogoProps {
  logoContent?: ReactNode;
}

export const AuthLogo = ({ logoContent }: AuthLogoProps) => {
  if (!logoContent) {
    return (
      <div className="flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <div className="h-10 w-10 rounded-full bg-[hsl(var(--primary))] flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[hsl(var(--primary-foreground))]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-[hsl(var(--foreground))]">
            Excalidraw
          </h2>
        </div>
      </div>
    );
  }

  return <div className="flex justify-center">{logoContent}</div>;
};
