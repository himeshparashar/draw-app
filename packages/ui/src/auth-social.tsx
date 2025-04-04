"use client";

import { ButtonHTMLAttributes } from "react";
import "./styles.css";

export interface SocialButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string;
  label: string;
}

const SocialButton = ({
  icon,
  label,
  className = "",
  ...props
}: SocialButtonProps) => {
  return (
    <button
      className={`flex w-full items-center justify-center gap-3 rounded-md border border-[hsl(var(--border))] bg-[hsl(var(--background))] px-4 py-2 text-sm font-medium text-[hsl(var(--foreground))] shadow-sm hover:bg-[hsl(var(--secondary))] ${className}`}
      {...props}
    >
      <span className="h-5 w-5" dangerouslySetInnerHTML={{ __html: icon }} />
      <span>{label}</span>
    </button>
  );
};

export interface AuthSocialProps {
  onGoogleSignIn?: () => void;
  onGithubSignIn?: () => void;
  isLoading?: boolean;
}

export const AuthSocial = ({
  onGoogleSignIn,
  onGithubSignIn,
  isLoading = false,
}: AuthSocialProps) => {
  const googleIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.36 14.36c-1.43 1.43-3.34 2.23-5.36 2.23s-3.93-.79-5.36-2.23C5.21 15.93 4.41 14.01 4.41 12s.79-3.93 2.23-5.36S9.99 4.41 12 4.41s3.93.79 5.36 2.23S19.59 9.99 19.59 12s-.79 3.93-2.23 5.36z"/><path d="M12 11.12h6v.78h-6v-.78z"/><path d="M12 9.91C12 8.91 11.88 7 9.92 7H8.22v.78H9.9c.8 0 1.17 0 1.49.28.23.2.39.55.39 1.34v.29h-.04c-.28-.59-1.04-.96-1.77-.96-1.7 0-3.21 1.35-3.21 3.23 0 1.88 1.51 3.22 3.21 3.22.73 0 1.48-.36 1.77-.95h.04v.75h1.12v-3.85H12zm-1.97 3.38c-.96 0-1.77-.81-1.77-1.84s.8-1.84 1.77-1.84c.92 0 1.67.74 1.67 1.84s-.75 1.84-1.67 1.84z"/></svg>`;

  const githubIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.338-3.369-1.338-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.89 1.53 2.341 1.088 2.91.832.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.841-2.337 4.687-4.565 4.934.359.31.678.92.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>`;

  return (
    <div className="space-y-3">
      <div className="relative mt-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-[hsl(var(--border))]" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-[hsl(var(--card))] px-2 text-[hsl(var(--muted-foreground))]">
            Or continue with
          </span>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-3">
        {onGoogleSignIn && (
          <SocialButton
            icon={googleIcon}
            label="Google"
            onClick={onGoogleSignIn}
            disabled={isLoading}
          />
        )}
        {onGithubSignIn && (
          <SocialButton
            icon={githubIcon}
            label="GitHub"
            onClick={onGithubSignIn}
            disabled={isLoading}
          />
        )}
      </div>
    </div>
  );
};
