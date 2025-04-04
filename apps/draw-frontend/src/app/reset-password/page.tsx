"use client";

import { useState } from "react";
import { AuthCard, AuthLogo, Button } from "@repo/ui";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // In a real app, you would call your API here
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSuccess(true);
    } catch (err) {
      setError("Failed to send reset link. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthCard
      title="Reset your password"
      subtitle="Enter your email and we'll send you a reset link"
      logo={<AuthLogo />}
      footer={
        <div className="text-center text-sm">
          <a
            href="/signin"
            className="font-medium text-[hsl(var(--primary))] hover:text-[hsl(var(--primary))/90]"
          >
            Back to sign in
          </a>
        </div>
      }
    >
      {success ? (
        <div className="text-center">
          <div className="rounded-full bg-green-100 p-2 mx-auto w-12 h-12 flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-[hsl(var(--foreground))]">
            Check your email
          </h3>
          <p className="mt-2 text-sm text-[hsl(var(--muted-foreground))]">
            We've sent a password reset link to your email address.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="rounded-md bg-[hsl(var(--destructive))/10] p-4">
              <div className="text-sm text-[hsl(var(--destructive))]">
                {error}
              </div>
            </div>
          )}

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-[hsl(var(--foreground))]">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="rounded-md border border-[hsl(var(--border))] bg-[hsl(var(--background))] px-3 py-2 text-sm text-[hsl(var(--foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))] focus:border-[hsl(var(--ring))]"
            />
          </div>

          <Button
            type="submit"
            fullWidth
            isLoading={isLoading}
            loadingText="Sending reset link..."
          >
            Send reset link
          </Button>
        </form>
      )}
    </AuthCard>
  );
}
