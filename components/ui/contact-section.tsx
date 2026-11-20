/**
 * Renders the contact card with an email address and brand-colored social links.
 */
import { Mail } from "lucide-react";
import type { IconType } from "react-icons";
import { FaLinkedin } from "react-icons/fa6";
import { SiFacebook, SiGithub, SiInstagram } from "react-icons/si";

interface SocialLink {
  name: string;
  href: string;
  icon: IconType;
  color: string;
  needsLightChip?: boolean;
}

const email = "mojit.gwy@gmail.com";

const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/takochii",
    icon: SiGithub,
    color: "#FFFFFF",
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
 * Renders a centered card containing a mailto email button and one button per social platform.
 */
export default function ContactSection() {
  return (
    <div className="w-full max-w-2xl px-4 pb-24">
      <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-8 text-center shadow-lg sm:p-12">
        <a
          href={`mailto:${email}`}
          className="inline-flex max-w-full items-center gap-3 break-all rounded-xl bg-pink-500 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-pink-300 focus-visible:ring-2 focus-visible:ring-pink-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
        >
          <Mail className="size-5 shrink-0" aria-hidden="true" />
          {email}
        </a>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {socialLinks.map(({ name, href, icon: Icon, color, needsLightChip }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-lg border border-white/50 bg-white/5 px-4 py-3 transition-colors hover:border-pink-500/60 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
            >
              <span
                className={
                  needsLightChip
                    ? "flex size-5 items-center justify-center rounded bg-white/15"
                    : "flex size-5 items-center justify-center"
                }
              >
                <Icon
                  className="size-5"
                  style={{ color }}
                  aria-hidden="true"
                />
              </span>
              <span className="text-sm font-medium text-zinc-200 transition-colors group-hover:text-white">
                {name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
