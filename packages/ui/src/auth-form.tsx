"use client";

import { FormEvent, useState } from "react";
import { Button } from "./button";
import { Input } from "./input";
import { AuthSocial } from "./auth-social";
import { AuthPasswordReset } from "./auth-password-reset";
import "./styles.css";

export interface AuthFormProps {
  isSignIn: boolean;
  onSubmit: (email: string, password: string, name?: string) => void;
  onGoogleSignIn?: () => void;
  onGithubSignIn?: () => void;
  isLoading?: boolean;
  serverError?: string;
  passwordResetHref?: string;
}

export const AuthForm = ({
  isSignIn,
  onSubmit,
  onGoogleSignIn,
  onGithubSignIn,
  isLoading = false,
  serverError,
  passwordResetHref,
}: AuthFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid";

    if (!password) newErrors.password = "Password is required";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    if (!isSignIn && !name) newErrors.name = "Name is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      onSubmit(email, password, !isSignIn ? name : undefined);
    }
  };

  const showSocial = onGoogleSignIn || onGithubSignIn;

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-6">
        {serverError && (
          <div className="rounded-md bg-[hsl(var(--destructive))/10] p-4">
            <div className="text-sm text-[hsl(var(--destructive))]">
              {serverError}
            </div>
          </div>
        )}

        {!isSignIn && (
          <Input
            label="Full Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            error={errors.name}
            required
          />
        )}

        <Input
          label="Email Address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          error={errors.email}
          required
        />

        <div>
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={isSignIn ? "Enter your password" : "Create a password"}
            error={errors.password}
            required
          />

          {isSignIn && passwordResetHref && (
            <AuthPasswordReset resetHref={passwordResetHref} />
          )}
        </div>

        <Button
          type="submit"
          fullWidth
          isLoading={isLoading}
          loadingText={isSignIn ? "Signing in..." : "Creating account..."}
        >
          {isSignIn ? "Sign in" : "Sign up"}
        </Button>
      </form>

      {showSocial && (
        <AuthSocial
          onGoogleSignIn={onGoogleSignIn}
          onGithubSignIn={onGithubSignIn}
          isLoading={isLoading}
        />
      )}
    </div>
  );
};
