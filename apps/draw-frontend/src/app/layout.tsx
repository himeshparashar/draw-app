"use client";

import "./globals.css";
import "@repo/ui/styles.css";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Always start with light mode regardless of system preference
  useEffect(() => {
    // Remove dark mode class to ensure light mode
    document.documentElement.classList.remove("dark");
  }, []);

  // Toggle function for future dark mode implementation if needed
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Apply dark mode class to html element when state changes
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <html
      lang="en"
      className={isDarkMode ? "dark" : ""}
      suppressHydrationWarning
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="DrawApp - Create beautiful hand-drawn style diagrams"
        />
        <title>DrawApp - Create beautiful diagrams with hand-drawn style</title>
      </head>
      <body className={inter.className}>
        <div className="bg-background text-foreground">{children}</div>
      </body>
    </html>
  );
}
