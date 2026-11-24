/**
 * Navbar button that toggles between light and dark mode via next-themes.
 * Hydration safety is handled with useSyncExternalStore so the server render
 * and the first client render both show a neutral placeholder, and the icon
 * only appears once the persisted theme is known. The icon scales and spins
 * into place when it swaps.
 */
"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

/**
 * No-op subscribe function for useSyncExternalStore, since the mounted
 * flag never changes after the initial hydration pass.
 */
const subscribeNoop = () => () => {};

/**
 * Returns false during server rendering and hydration, and true afterwards.
 */
const getMounted = () => true;

/**
 * Returns the server snapshot for useSyncExternalStore, which is always false.
 */
const getServerMounted = () => false;

/**
 * Renders a sun/moon icon button that switches the site theme and persists the choice.
 */
export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(subscribeNoop, getMounted, getServerMounted);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={mounted && isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="rounded-lg border border-border bg-background p-2 text-foreground transition-colors hover:border-pink-500/60 hover:text-pink-500 focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:outline-none"
    >
      {mounted ? (
        <motion.span
          key={isDark ? "sun" : "moon"}
          initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="block"
        >
          {isDark ? (
            <Sun className="size-5" aria-hidden="true" />
          ) : (
            <Moon className="size-5" aria-hidden="true" />
          )}
        </motion.span>
      ) : (
        <span className="block size-5" aria-hidden="true" />
      )}
    </button>
  );
}
