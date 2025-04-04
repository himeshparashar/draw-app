"use client";

import "./styles.css";

export interface AuthPasswordResetProps {
  resetHref: string;
}

export const AuthPasswordReset = ({ resetHref }: AuthPasswordResetProps) => {
  return (
    <div className="mt-2 text-right">
      <a
        href={resetHref}
        className="text-xs font-medium text-[hsl(var(--primary))] hover:text-[hsl(var(--primary))/90]"
      >
        Forgot your password?
      </a>
    </div>
  );
};
