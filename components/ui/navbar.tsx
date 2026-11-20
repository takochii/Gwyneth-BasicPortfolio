
"use client";

import Link from "next/link";
import {SquigglyUnderline} from "@/components/ui/squiggly-underline";

export default function Navbar() {
  const navLinks = [
    { href: "#home", name: "Home" },
    { href: "#experience", name: "Experience" },
    { href: "#projects", name: "Projects" },
    { href: "#contact", name: "Contact" },
  ];

  return (
    <nav className="sticky top-0 flex z-50 items-center justify-between bg-zinc-900 px-30 py-8 shadow-md">

      <Link
        href="https://github.com/takochii"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl font-bold text-pink-500"
      >
        takochii
      </Link>

      
      <SquigglyUnderline items={navLinks} />

      
      <Link
        href="/AGUINEA_RESUME.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-lg bg-pink-500 px-4 py-2 text-white hover:bg-pink-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="white"
          className="size-5"
        >
          <path
            fillRule="evenodd"
            d="M4.5 2A1.5 1.5 0 0 0 3 3.5v13A1.5 1.5 0 0 0 4.5 18h11a1.5 1.5 0 0 0 1.5-1.5V7.621a1.5 1.5 0 0 0-.44-1.06l-4.12-4.122A1.5 1.5 0 0 0 11.378 2H4.5Zm2.25 8.5a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Zm0 3a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Z"
            clipRule="evenodd"
          />
        </svg>

        Resume
      </Link>

    </nav>
  );
}
