"use client";

import { ReactNode } from "react";
import "./styles.css";

export interface AuthCardProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  logo?: ReactNode;
  footer?: ReactNode;
  className?: string;
}

export const AuthCard = ({
  children,
  title,
  subtitle,
  logo,
  footer,
  className = "",
}: AuthCardProps) => {
  return (
    <div className="auth-layout flex min-h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className={`w-full max-w-md space-y-8 ${className}`}>
        {logo && <div className="flex justify-center">{logo}</div>}
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            {title}
          </h1>
          {subtitle && <p className="mt-2 text-sm text-gray-600">{subtitle}</p>}
        </div>
        <div className="auth-card mt-8 py-8 px-4 sm:px-10">{children}</div>
        {footer && <div className="mt-4 text-center text-sm">{footer}</div>}
      </div>
    </div>
  );
};
