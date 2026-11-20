
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

interface NavItem {
  name: string;
  href: string;
}

export function SquigglyUnderline({ items }: { items: NavItem[] }) {
  const [selectedLink, setSelectedLink] = useState("#home");

  useEffect(() => {
    const sections = items.map((item) =>
      document.querySelector(item.href)
    ).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setSelectedLink(`#${visibleSections[0].target.id}`);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section!));

    return () => observer.disconnect();
  }, [items]);

  return (
    <div className="flex items-center gap-12">
      {items.map((item) => {
        const isSelected = selectedLink === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setSelectedLink(item.href)}
            className={`relative py-2 text-white ${
              isSelected ? "font-semibold" : "hover:text-gray-300"
            }`}
          >
            {item.name}

            {isSelected && (
              <motion.div
                layoutId="squiggly"
                className="absolute -bottom-0.5 left-0 right-0 h-2"
              >
                <svg
                  viewBox="0 0 37 8"
                  fill="none"
                  className="h-full w-full"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M1 5.39971C7.48565 -1.08593 6.44837 -0.12827 8.33643 6.47992C8.34809 6.52075 11.6019 2.72875 12.3422 2.33912C13.8991 1.5197 16.6594 2.96924 18.3734 2.96924C21.665 2.96924 23.1972 1.69759 26.745 2.78921C29.7551 3.71539 32.6954 3.7794 35.8368 3.7794"
                    stroke="#EC4899"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{
                      strokeDasharray: 84.2059,
                      strokeDashoffset: 84.2059,
                    }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ duration: 0.6 }}
                  />
                </svg>
              </motion.div>
            )}
          </Link>
        );
      })}
    </div>
  );
}
