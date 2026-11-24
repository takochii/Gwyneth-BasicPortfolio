/**
 * Simple page footer with copyright, social icon links,
 * and a back-to-top anchor.
 */
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";

/**
 * Renders the footer bar with copyright text, social links, and a back-to-top button.
 */
export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
        <p className="text-sm text-muted-foreground">
          © 2026 Gwyneth Aguinea
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/takochii"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground transition-colors hover:text-pink-500 focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:outline-none"
          >
            <SiGithub className="size-5" aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/gwyneth-aguinea-61875b316"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground transition-colors hover:text-pink-500 focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:outline-none"
          >
            <FaLinkedin className="size-5" aria-hidden="true" />
          </a>
          <Link
            href="#home"
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground transition-colors hover:border-pink-500/60 hover:text-pink-500 focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:outline-none"
          >
            <ArrowUp className="size-4" aria-hidden="true" />
            Back to top
          </Link>
        </div>
      </div>
    </footer>
  );
}
