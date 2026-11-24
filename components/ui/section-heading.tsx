/**
 * Consistent section heading with a mono pink eyebrow label,
 * a large display title, and an optional muted subtitle.
 */

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

/**
 * Renders a centered eyebrow, title, and subtitle for a portfolio section.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="mb-12 px-4 text-center">
      <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.25em] text-pink-500">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  );
}
