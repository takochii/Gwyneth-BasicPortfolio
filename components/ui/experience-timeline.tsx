"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef, useState } from "react";

interface Experience {
  year: string;
  title: string;
  description: string;
  repoUrl: string;
  techStack: string[];
  gradient: string;
}

const experiences: Experience[] = [
  {
    year: "December 2025 - Present",
    title: "AWAS",
    description:
      "A web application for City Disaster Risk Reduction and Management Office (CDRRMO) and City Engineer's Office to monitor urban waterlogging and manage flood disaster risk reduction and management activities. I did the UI/UX design and helped develop the user interface using Tailwind CSS",
    repoUrl: "https://thesis-awas.vercel.app/drainage-analysis/",
    techStack: ["HTML", "Python", "PostgreSQL", "Leaflet", "Supabase", "QGIS", "Django", "Tailwind CSS"],
    gradient: "from-emerald-500/40 via-teal-900/60 to-zinc-900",
  },
  {
    year: "April 2026 - May 2026",
    title: "WestCon",
    description:
      "A mobile application for WVSU students to serve as platform for skill exchange and collaboration. I did the UI/UX design and helped develop the user interface using Kotlin and Jetpack Compose.",
    repoUrl: "https://github.com/ChapWVSU/WestCon",
    techStack: ["Kotlin", "Jetpack Compose", "Firebase"],
    gradient: "from-sky-500/40 via-indigo-900/60 to-zinc-900",
  },
  {
    year: "May 2026",
    title: "ALTS Inventory System",
    description:
      "An inventory management system for ALTS to manage their inventory and track their products. I did the UI/UX design and helped develop the user interface using HTML and CSS.",
    repoUrl: "https://github.com/MelloX0808/ALTS",
    techStack: ["HTML", "CSS", "Python", "Supabase", "Flask"],
    gradient: "from-amber-500/40 via-orange-900/60 to-zinc-900",
  },
  
];

export default function ExperienceTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const stripRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLButtonElement | null)[]>([]);

  function handleStripScroll() {
    const strip = stripRef.current;
    if (!strip) return;

    const center = strip.scrollLeft + strip.clientWidth / 2;
    let closestIndex = 0;
    let closestDistance = Infinity;

    nodeRefs.current.forEach((node, index) => {
      if (!node) return;
      const nodeCenter = node.offsetLeft + node.offsetWidth / 2;
      const distance = Math.abs(nodeCenter - center);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex((current) => (current === closestIndex ? current : closestIndex));
  }

  const active = experiences[activeIndex];

  return (
    <div className="w-full max-w-5xl px-4">
      <div
        ref={stripRef}
        onScroll={handleStripScroll}
        aria-label="Project timeline by year"
        className="mb-14 flex snap-x snap-mandatory overflow-x-auto pb-4 ml-20 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {experiences.map((item, index) => {
          const isActive = index === activeIndex;

          return (
            <div key={item.title} className="flex shrink-0 items-start">
              <button
                type="button"
                ref={(node) => {
                  nodeRefs.current[index] = node;
                }}
                aria-pressed={isActive}
                onClick={() => {
                  setActiveIndex(index);
                  nodeRefs.current[index]?.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                    inline: "center",
                  });
                }}
                className="group flex snap-center flex-col items-center gap-3 rounded-lg px-3 py-1 text-center outline-none focus-visible:ring-2 focus-visible:ring-pink-500"
              >
                <span
                  className={`size-3.5 rounded-full border-2 transition-all ${
                    isActive
                      ? "border-pink-500 bg-pink-500 shadow-[0_0_0_4px_rgba(236,72,153,0.2)]"
                      : "border-zinc-500 bg-zinc-700 group-hover:border-pink-300"
                  }`}
                />
                <span
                  className={`text-lg font-semibold transition-colors ${
                    isActive ? "text-pink-500" : "text-zinc-400"
                  }`}
                >
                  {item.year}
                </span>
                <span
                  className={`text-xs transition-colors ${
                    isActive ? "text-white" : "text-zinc-500"
                  }`}
                >
                  {item.title}
                </span>
              </button>
              {index < experiences.length - 1 && (
                <span
                  aria-hidden="true"
                  className="mt-[7px] h-px w-10 bg-white/20 sm:w-16"
                />
              )}
            </div>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active.title}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.3 }}
          className="grid gap-10 md:grid-cols-2 md:gap-14"
        >
          <div className="flex flex-col justify-center">
            <p className="mb-2 text-sm font-medium tracking-widest text-pink-400 uppercase">
              {active.year}
            </p>
            <h3 className="mb-5 text-2xl font-semibold text-white">
              {active.title}
            </h3>
            <p className="text-base leading-relaxed text-zinc-300">
              {active.description}
            </p>
            <a
              href={active.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-lg bg-pink-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-pink-300 focus-visible:ring-2 focus-visible:ring-pink-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
            >
              Open project
              <ArrowUpRight className="size-4" />
            </a>
          </div>

          <div>
            <div
              className={`relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br ${active.gradient} shadow-lg`}
            >
              <div className="absolute inset-x-0 top-0 flex items-center gap-1.5 border-b border-white/10 bg-black/20 px-3 py-2">
                <span className="size-2 rounded-full bg-pink-400/80" />
                <span className="size-2 rounded-full bg-white/30" />
                <span className="size-2 rounded-full bg-white/30" />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-6 pt-6 text-center">
                <span className="text-3xl font-bold tracking-tight text-white/90">
                  {active.title}
                </span>
                <span className="text-xs tracking-[0.3em] text-white/50 uppercase">
                  Project preview
                </span>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {active.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-white-500/30 bg-gray-300/10 px-3 py-1 text-xs font-medium text-zinc-50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
