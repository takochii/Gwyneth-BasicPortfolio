/**
 * Renders the featured projects as a wide card for the first project
 * followed by a responsive grid for the rest. Each preview shows a
 * project image when one is set, otherwise falls back to a flat
 * solid-color monogram panel.
 */
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { IconType } from "react-icons";
import {
  SiCss,
  SiDjango,
  SiFirebase,
  SiFlask,
  SiHtml5,
  SiJavascript,
  SiJetpackcompose,
  SiKotlin,
  SiLeaflet,
  SiMysql,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiQgis,
  SiSupabase,
  SiTailwindcss,
} from "react-icons/si";

interface Project {
  title: string;
  year: string;
  shortDescription: string;
  link: string;
  panel: string;
  /**
   * Preview image in public/projects/. To add or swap an image, replace
   * the matching file there, or point this at a new file path.
   */
  image?: string;
  /**
   * How the preview image fills its panel. Use "contain" for tall or
   * portrait screenshots so they are not cropped; defaults to "cover".
   */
  imageFit?: "cover" | "contain";
  techStack: string[];
}

const projects: Project[] = [
  {
    title: "AWAS",
    year: "December 2025 - Present",
    shortDescription:
      "A monitoring dashboard for urban waterlogging and flood risk management activities.",
    link: "https://thesis-awas.vercel.app/drainage-analysis/",
    panel: "bg-emerald-700",
    image: "/projects/awas.png",
    techStack: [
      "HTML",
      "Python",
      "PostgreSQL",
      "Leaflet",
      "Supabase",
      "QGIS",
      "Django",
      "Tailwind CSS",
    ],
  },
  {
    title: "WestCon",
    year: "April 2026 - May 2026",
    shortDescription:
      "A skill-exchange and collaboration platform for WVSU students.",
    link: "https://github.com/ChapWVSU/WestCon",
    panel: "bg-sky-700",
    image: "/projects/westcon.png",
    imageFit: "contain",
    techStack: ["Kotlin", "Jetpack Compose", "Firebase"],
  },
  {
    title: "ALTS Inventory System",
    year: "May 2026",
    shortDescription:
      "An inventory management system for tracking products and stock levels.",
    link: "https://github.com/MelloX0808/ALTS",
    panel: "bg-amber-700",
    image: "/projects/alts.png",
    techStack: ["HTML", "CSS", "Python", "Supabase", "Flask"],
  },
  {
    title: "Pet Haven",
    year: "January 2025 - May 2025",
    shortDescription:
      "A website for a local Iloilo rescue organization that streamlines donations and adoptions to help the group grow and reach more people.",
    link: "https://github.com/chuuOWO/shelter_proj",
    panel: "bg-pink-700",
    techStack: ["HTML", "CSS", "PHP", "MySQL"],
  },
  {
    title: "Cafe Nahum",
    year: "November 2026",
    shortDescription:
      "A personal, unofficial website built to promote Cafe Nahum and sharpen front-end skills.",
    link: "https://github.com/takochii/Cafe-Nahum-Unofficial",
    panel: "bg-stone-700",
    image: "/projects/cafe.png",
    techStack: ["JavaScript", "Tailwind CSS", "HTML"],
  },
];

const techIcons: Record<string, IconType> = {
  HTML: SiHtml5,
  CSS: SiCss,
  Python: SiPython,
  PostgreSQL: SiPostgresql,
  Leaflet: SiLeaflet,
  Supabase: SiSupabase,
  QGIS: SiQgis,
  Django: SiDjango,
  "Tailwind CSS": SiTailwindcss,
  Kotlin: SiKotlin,
  "Jetpack Compose": SiJetpackcompose,
  Firebase: SiFirebase,
  Flask: SiFlask,
  JavaScript: SiJavascript,
  PHP: SiPhp,
  MySQL: SiMysql,
};

const techColors: Record<string, string> = {
  HTML: "#E34F26",
  CSS: "#1572B6",
  Python: "#3776AB",
  PostgreSQL: "#4169E1",
  Leaflet: "#199900",
  Supabase: "#3FCF8E",
  QGIS: "#589D22",
  Django: "#44B78B",
  "Tailwind CSS": "#06B6D4",
  Kotlin: "#A97BFF",
  "Jetpack Compose": "#4285F4",
  Firebase: "#FFCA28",
  Flask: "#6B7280",
  JavaScript: "#F7DF1E",
  PHP: "#777BB4",
  MySQL: "#4479A1",
};

/**
 * Renders the tech stack chips for a project, with brand icons where known.
 */
function TechChips({ techStack }: { techStack: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {techStack.map((tech) => {
        const Icon = techIcons[tech];

        return (
          <span
            key={tech}
            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-muted/60 px-2.5 py-1 text-xs text-foreground"
          >
            {Icon ? (
              <Icon
                className="size-3.5"
                style={{ color: techColors[tech] }}
                aria-hidden="true"
              />
            ) : (
              <span className="w-3.5 text-center text-[10px] leading-3.5 text-pink-500">
                {tech.charAt(0)}
              </span>
            )}
            {tech}
          </span>
        );
      })}
    </div>
  );
}

/**
 * Renders a project preview: the project image when one is set,
 * otherwise a flat monogram panel using the project's accent color.
 */
function ProjectPanel({
  title,
  panel,
  image,
  imageFit,
  sizes,
  className,
}: {
  title: string;
  panel: string;
  image?: string;
  imageFit?: "cover" | "contain";
  sizes: string;
  className?: string;
}) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${panel} ${className ?? ""}`}
    >
      {image ? (
        <Image
          src={image}
          alt={`${title} project preview`}
          fill
          sizes={sizes}
          className={imageFit === "contain" ? "object-contain" : "object-cover"}
        />
      ) : (
        <>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-6 select-none text-[9rem] font-bold leading-none text-white/10"
          >
            {title.charAt(0)}
          </span>
          <span className="relative px-6 text-center text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {title}
          </span>
        </>
      )}
    </div>
  );
}

/**
 * Renders the first project as a wide horizontal featured card.
 */
function FeaturedProject({ project }: { project: Project }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex w-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/60 hover:shadow-md focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none sm:flex-row"
    >
      <ProjectPanel
        title={project.title}
        panel={project.panel}
        image={project.image}
        imageFit={project.imageFit}
        sizes="(min-width: 640px) 50vw, 100vw"
        className="aspect-video min-h-56 sm:aspect-auto sm:w-1/2"
      />
      <div className="flex flex-1 flex-col justify-center gap-3 p-6 sm:p-8">
        <span className="font-mono text-xs uppercase tracking-widest text-pink-500">
          Featured · {project.year}
        </span>
        <h3 className="text-2xl font-semibold tracking-tight text-foreground">
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed text-foreground/80">
          {project.shortDescription}
        </p>
        <TechChips techStack={project.techStack} />
        <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-pink-500">
          View project
          <ArrowRight
            className="size-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </span>
      </div>
    </a>
  );
}

/**
 * Renders the featured project card followed by the remaining projects in a grid.
 */
export default function ProjectGrid() {
  const [featured, ...rest] = projects;

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 sm:px-6">
      <FeaturedProject project={featured} />
      <div className="grid w-full gap-6 sm:grid-cols-2">
        {rest.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/60 hover:shadow-md focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
          >
            <ProjectPanel
              title={project.title}
              panel={project.panel}
              image={project.image}
              imageFit={project.imageFit}
              sizes="(min-width: 640px) 50vw, 100vw"
              className="aspect-video"
            />
            <div className="flex flex-1 flex-col p-5">
              <div className="mb-2 flex items-start justify-between gap-3">
                <h3 className="text-xl font-semibold text-pink-500">
                  {project.title}
                </h3>
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-border bg-muted/60 text-foreground transition-colors group-hover:border-pink-500/60 group-hover:text-pink-500">
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </span>
              </div>
              <p className="mb-2 text-sm font-medium text-muted-foreground">
                {project.year}
              </p>
              <p className="mb-5 flex-1 text-sm leading-relaxed text-foreground/80">
                {project.shortDescription}
              </p>
              <TechChips techStack={project.techStack} />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
