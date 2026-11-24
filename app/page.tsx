/**
 * Single-page portfolio composition: hero, about, technical skills,
 * featured projects, contact, and footer — stacked under the sticky
 * navbar, with scroll-reveal animation on each content section.
 */
import AboutSection from "@/components/ui/about-section";
import ContactSection from "@/components/ui/contact-section";
import Footer from "@/components/ui/footer";
import Hero from "@/components/ui/hero";
import Navbar from "@/components/ui/navbar";
import ProjectGrid from "@/components/ui/project-grid";
import Reveal from "@/components/ui/reveal";
import SectionHeading from "@/components/ui/section-heading";
import SkillsSection from "@/components/ui/skills-section";

/**
 * Renders all portfolio sections in order with consistent spacing and scroll reveal.
 */
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <Hero />

        <section id="about" className="scroll-mt-24 py-24">
          <Reveal>
            <SectionHeading
              eyebrow="01 — About"
              title="About Me"
              subtitle="A little background on who I am and what I do."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <AboutSection />
          </Reveal>
        </section>

        <section id="skills" className="scroll-mt-24 py-24">
          <Reveal>
            <SectionHeading
              eyebrow="02 — Skills"
              title="Technical Skills"
              subtitle="Tools and technologies I work with."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <SkillsSection />
          </Reveal>
        </section>

        <section id="projects" className="scroll-mt-24 py-24">
          <Reveal>
            <SectionHeading
              eyebrow="03 — Projects"
              title="Projects"
              subtitle="A selection of things I've built."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <ProjectGrid />
          </Reveal>
        </section>

        <section id="contact" className="scroll-mt-24 pt-24 pb-24">
          <Reveal>
            <SectionHeading
              eyebrow="04 — Contact"
              title="Let's Connect"
              subtitle="My inbox is always open."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <ContactSection />
          </Reveal>
        </section>
      </main>

      <Footer />
    </div>
  );
}
