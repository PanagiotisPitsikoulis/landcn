"use client";
import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "./theme-provider";

/**
 * The root provider for the application.
 * It wraps the NextUIProvider and ThemeProvider components.
 * It also includes the Toaster component for displaying toast messages.
 * @param children - The children of the provider.
 * @returns JSX.Element
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <React.StrictMode>
        <ThemeProvider>
          <NextUIProvider>
            <div
              className={
                "dark:border-content2 border-content4 text-foreground bg-background"
              }
            >
              {children}
            </div>
          </NextUIProvider>
        </ThemeProvider>
      </React.StrictMode>
    </>
  );
}
