/**
 * Renders the technical skills section as grouped icon cards.
 * The groups and skill names are placeholders based on the project
 * tech stacks and can be edited in the data array below.
 */
import { Code2, Layers, Wrench, type LucideIcon } from "lucide-react";

interface SkillGroup {
  title: string;
  skills: string[];
  icon: LucideIcon;
}

const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    skills: ["HTML", "CSS", "JavaScript", "Python", "Kotlin", "TypeScript", "Node.js"],
    icon: Code2,
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React", "Next.js", "Tailwind CSS", "shadcn/ui", "Framer Motion"],
    icon: Layers,
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Vercel", "Figma", "VSCode", "Netlify"],
    icon: Wrench,
  },
    {
    title: "IT Support",
    skills: ["Technical Support", "Troubleshooting"],
    icon: Wrench,
  },
];

/**
 * Renders one hover-lift card per skill group, each with a category icon
 * and its skills shown as chips.
 */
export default function SkillsSection() {
  return (
    <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
      {skillGroups.map((group) => {
        const Icon = group.icon;

        return (
          <div
            key={group.title}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-0.5 bg-pink-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
            <span className="mb-4 inline-flex rounded-xl bg-pink-500/10 p-2.5 text-pink-500">
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              {group.title}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-lg border border-border bg-muted/60 px-3 py-1.5 text-sm text-foreground transition-colors hover:border-pink-500/60 hover:text-pink-500"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
