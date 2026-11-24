/**
 * Full-screen typographic hero: availability pill, role label,
 * oversized name, one-line intro, call-to-action row, and a
 * scroll cue pointing to the About section.
 */
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";

/**
 * Renders the landing hero as a centered typographic composition.
 */
export default function Hero() {
  return (
    <section id="home" className="scroll-mt-24 border-b border-border">
      <div className="mx-auto flex min-h-[85vh] max-w-6xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-pink-500 sm:text-sm">
          Web Developer &amp; UI/UX Designer
        </p>

        <h1 className="mt-4 text-6xl font-semibold tracking-tight text-foreground sm:text-7xl lg:text-8xl">
          Gwyneth Aguinea
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          I build clean, functional, and user-friendly websites — currently
          sharpening my skills in Next.js, React, and Tailwind CSS while
          crafting experiences that feel effortless.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-pink-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-pink-600 focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
          >
            View Projects
          </Link>
          <a
            href="https://github.com/takochii"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-full border border-border bg-card p-3 text-foreground shadow-sm transition-colors hover:border-pink-500/60 hover:text-pink-500 focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:outline-none"
          >
            <SiGithub className="size-5" aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/gwyneth-aguinea-61875b316"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-full border border-border bg-card p-3 text-foreground shadow-sm transition-colors hover:border-pink-500/60 hover:text-pink-500 focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:outline-none"
          >
            <FaLinkedin className="size-5" aria-hidden="true" />
          </a>
        </div>

        <Link
          href="#about"
          className="mt-16 inline-flex flex-col items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-pink-500"
        >
          Scroll
          <ArrowDown className="size-4 animate-bounce" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
