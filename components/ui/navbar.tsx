/**
 * Sticky top navigation bar with a pink-dot brand mark, section anchors,
 * light/dark mode toggle, resume button, and a hamburger-driven
 * mobile menu. The bar gains a subtle shadow after scrolling.
 */
"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { SquigglyUnderline } from "@/components/ui/squiggly-underline";
import ThemeToggle from "@/components/theme-toggle";

const navLinks = [
  { href: "#home", name: "Home" },
  { href: "#about", name: "About" },
  { href: "#projects", name: "Projects" },
  { href: "#contact", name: "Contact" },
];

/**
 * Renders the sticky navbar, including the desktop squiggle nav and the mobile dropdown menu.
 */
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md transition-shadow ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6">
        <Link
          href="https://github.com/takochii"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-xl font-bold text-foreground"
        >
          <span className="size-2.5 rounded-full bg-pink-500" aria-hidden="true" />
          takochii
        </Link>

        <div className="hidden md:block">
          <SquigglyUnderline items={navLinks} />
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <Link
            href="/RESUME.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-lg bg-pink-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-pink-600 focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none sm:inline-flex"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="white"
              className="size-5"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M4.5 2A1.5 1.5 0 0 0 3 3.5v13A1.5 1.5 0 0 0 4.5 18h11a1.5 1.5 0 0 0 1.5-1.5V7.621a1.5 1.5 0 0 0-.44-1.06l-4.12-4.122A1.5 1.5 0 0 0 11.378 2H4.5Zm2.25 8.5a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Zm0 3a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Z"
                clipRule="evenodd"
              />
            </svg>
            Resume
          </Link>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="rounded-lg border border-border bg-background p-2 text-foreground transition-colors hover:border-pink-500/60 hover:text-pink-500 focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:outline-none md:hidden"
          >
            {menuOpen ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-border bg-background md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted hover:text-pink-500"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="/AGUINEA_RESUME.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="mt-2 rounded-lg bg-pink-500 px-4 py-3 text-center text-base font-medium text-white transition-colors hover:bg-pink-600"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
