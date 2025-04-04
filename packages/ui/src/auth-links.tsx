"use client";

import "./styles.css";

export interface AuthLinksProps {
  isSignIn: boolean;
  signInHref: string;
  signUpHref: string;
  className?: string;
}

export const AuthLinks = ({
  isSignIn,
  signInHref,
  signUpHref,
  className = "",
}: AuthLinksProps) => {
  return (
    <div
      className={`mt-4 text-center text-sm text-[hsl(var(--foreground))] ${className}`}
    >
      {isSignIn ? (
        <p>
          Don't have an account?{" "}
          <a
            href={signUpHref}
            className="font-medium text-[hsl(var(--primary))] hover:text-[hsl(var(--primary))/90]"
          >
            Sign up
          </a>
        </p>
      ) : (
        <p>
          Already have an account?{" "}
          <a
            href={signInHref}
            className="font-medium text-[hsl(var(--primary))] hover:text-[hsl(var(--primary))/90]"
          >
            Sign in
          </a>
        </p>
      )}
    </div>
  );
};
