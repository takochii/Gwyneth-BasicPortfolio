/**
 * Renders the featured projects as a responsive grid of clickable cards.
 */
import { ArrowUpRight } from "lucide-react";
import type { IconType } from "react-icons";
import {
  SiCss,
  SiDjango,
  SiFirebase,
  SiFlask,
  SiHtml5,
  SiJetpackcompose,
  SiKotlin,
  SiLeaflet,
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
  gradient: string;
  techStack: string[];
}

const projects: Project[] = [
  {
    title: "AWAS",
    year: "December 2025 - Present",
    shortDescription:
      "A monitoring dashboard for urban waterlogging and flood risk management activities.",
    link: "https://thesis-awas.vercel.app/drainage-analysis/",
    gradient: "from-emerald-500/40 via-teal-900/60 to-zinc-900",
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
    gradient: "from-sky-500/40 via-indigo-900/60 to-zinc-900",
    techStack: ["Kotlin", "Jetpack Compose", "Firebase"],
  },
  {
    title: "ALTS Inventory System",
    year: "May 2026",
    shortDescription:
      "An inventory management system for tracking products and stock levels.",
    link: "https://github.com/MelloX0808/ALTS",
    gradient: "from-amber-500/40 via-orange-900/60 to-zinc-900",
    techStack: ["HTML", "CSS", "Python", "Supabase", "Flask"],
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
};

const techColors: Record<string, string> = {
  HTML: "#E34F26",
  CSS: "#1572B6",
  Python: "#3776AB",
  PostgreSQL: "#4169E1",
  Leaflet: "#199900",
  Supabase: "#3FCF8E",
  QGIS: "#589D22",
  Django: "#FFFFFF",
  "Tailwind CSS": "#06B6D4",
  Kotlin: "#A97BFF",
  "Jetpack Compose": "#4285F4",
  Firebase: "#FFCA28",
  Flask: "#FFFFFF",
};



/**
 * Renders one clickable card per project with a preview, short description, and tech stack icons.
 */
export default function ProjectGrid() {
  return (
    <div className="grid w-full max-w-6xl gap-6 px-4 sm:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <a
          key={project.title}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-zinc-900/60 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/60 focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
        >
          <div
            className={`relative flex aspect-video items-center justify-center overflow-hidden bg-gradient-to-br ${project.gradient}`}
          >
            <span className="px-6 text-center text-2xl font-bold tracking-tight text-white/90">
              {project.title}
            </span>
            <span className="absolute top-3 right-3 flex size-8 items-center justify-center rounded-full bg-black/30 text-white/80 transition-colors group-hover:bg-pink-500 group-hover:text-white">
              <ArrowUpRight className="size-4" />
            </span>
          </div>
          <div className="flex flex-1 flex-col p-5">
            <h3 className="mb-2 text-xl font-semibold text-pink-500">
              {project.title}
            </h3>
            <p className="mb-2 text-sm font-medium text-zinc-400">
              {project.year}
            </p>
            <p className="mb-5 flex-1 text-sm leading-relaxed text-zinc-300">
              {project.shortDescription}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => {
                const Icon = techIcons[tech];

                return (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-zinc-200"
                  >
                    {Icon ? (
                      <span>
                        <Icon
                          className="size-3.5"
                          style={{ color: techColors[tech] }}
                          aria-hidden="true"
                        />
                      </span>
                    ) : (
                      <span className="w-3.5 text-center text-[10px] leading-3.5 text-pink-400">
                        {tech.charAt(0)}
                      </span>
                    )}
                    {tech}
                  </span>
                );
              })}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
