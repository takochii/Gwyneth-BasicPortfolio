/**
 * About section with a framed portrait on the left and a short
 * biography plus GitHub and LinkedIn links on the right.
 */
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";

/**
 * Renders the About section content: portrait, bio paragraphs, and social links.
 */
export default function AboutSection() {
  return (
    <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
      <div className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-2xl border border-border shadow-lg sm:max-w-sm lg:mx-0 lg:max-w-none">
        <Image
          src="/VIN01275.jpg"
          alt="Portrait of Gwyneth Aguinea"
          fill
          sizes="(min-width: 1024px) 32vw, 80vw"
          className="object-cover object-[50%_8%] origin-top scale-[1.3]"
        />
      </div>

      <div>
        <h3 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Hi, I&apos;m Gwyneth.
        </h3>
        <p className="mt-4 text-base leading-relaxed text-foreground/80">
          I am interested in creating beautiful and functional websites that
          provide a great user experience. I am currently learning Next.js,
          React, and Tailwind CSS to improve my skills and build amazing web
          applications. I enjoy creating visually appealing and user-friendly
          websites that provide an exceptional user experience.
        </p>
        <p className="mt-4 text-base leading-relaxed text-foreground/80">
          My goal is to continuously learn and grow in the field of web
          development and design by gaining experience through internships and
          projects.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="https://github.com/takochii"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground shadow-sm transition-colors hover:border-pink-500/60 hover:text-pink-500 focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:outline-none"
          >
            <SiGithub className="size-4" aria-hidden="true" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/gwyneth-aguinea-61875b316"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground shadow-sm transition-colors hover:border-pink-500/60 hover:text-pink-500 focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:outline-none"
          >
            <FaLinkedin className="size-4" aria-hidden="true" />
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
