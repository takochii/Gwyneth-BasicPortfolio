/**
 * Client-side wrapper that provides the next-themes theme context to the whole app.
 * The class-based attribute matches the shadcn `.dark` token block in globals.css,
 * and light is the default so the portfolio opens in light mode on first visit.
 */
"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

/**
 * Wraps application children in the next-themes provider configured for class-based light/dark theming.
 */
export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
    >
      {children}
    </NextThemesProvider>
  );
}
