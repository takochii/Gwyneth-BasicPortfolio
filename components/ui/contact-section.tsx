/**
 * Contact section rendered as a bordered two-column card: a short
 * pitch and email link on the left, and a list of social links on the right.
 */
import { ArrowUpRight, Mail } from "lucide-react";
import type { IconType } from "react-icons";
import { FaLinkedin } from "react-icons/fa6";
import { SiFacebook, SiGithub, SiInstagram } from "react-icons/si";

interface SocialLink {
  name: string;
  href: string;
  icon: IconType;
  color: string;
}

const email = "mojit.gwy@gmail.com";

const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/takochii",
    icon: SiGithub,
    color: "currentColor",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/gwyneth-aguinea-61875b316",
    icon: FaLinkedin,
    color: "#0A66C2",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/seiyeeen/?hl=en",
    icon: SiInstagram,
    color: "#E4405F",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/Gwenzy.DeYuman",
    icon: SiFacebook,
    color: "#1877F2",
  },
];

/**
 * Renders the contact card with a pitch, mailto link, and social link rows.
 */
export default function ContactSection() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
      <div className="grid gap-10 rounded-2xl border border-border bg-card p-8 shadow-sm sm:p-10 lg:grid-cols-2 lg:items-center lg:gap-16 lg:p-12">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-pink-500">
            Get in touch
          </p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Let&apos;s build something together.
          </h3>
          <p className="mt-3 text-muted-foreground">
            Available for internships and freelance work. I usually reply within
            a day.
          </p>
          <a
            href={`mailto:${email}`}
            className="mt-6 inline-flex items-center gap-2 text-lg font-medium break-all text-pink-500 underline decoration-pink-500/40 underline-offset-4 transition-colors hover:text-pink-600 hover:decoration-pink-500 focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:outline-none"
          >
            <Mail className="size-5 shrink-0" aria-hidden="true" />
            {email}
          </a>
        </div>

        <div className="flex flex-col divide-y divide-border">
          {socialLinks.map(({ name, href, icon: Icon, color }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 py-4 text-foreground transition-colors hover:text-pink-500 focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:outline-none first:pt-0 last:pb-0"
            >
              <span className="flex items-center gap-3 text-base font-medium">
                <Icon
                  className="size-5"
                  style={{ color }}
                  aria-hidden="true"
                />
                {name}
              </span>
              <ArrowUpRight
                className="size-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-pink-500"
                aria-hidden="true"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
