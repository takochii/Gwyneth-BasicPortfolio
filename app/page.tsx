import Image from "next/image";
import ContactSection from "@/components/ui/contact-section";
import ExperienceTimeline from "@/components/ui/experience-timeline";
import Navbar from "@/components/ui/navbar";
import ProjectGrid from "@/components/ui/project-grid";

export default function Home() {
  return (
    <div>
      <Navbar />
      
      <main>
        <section id="home" className="flex flex-col items-center justify-center py-2">
          <div className="flex flex-col items-center justify-center py-8 mt-8">
            <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-pink-500 shadow-lg">
              <Image
                src="/VIN01275.jpg"
                alt="Profile Picture"
                fill
                className="object-cover scale-150 mt-11 px-2 ml-3"
              />
            </div>
          </div>
          <p className="text-lg text-white mb-4">Hi, I&apos;m Gwyneth Aguinea!</p>
          <h1 className="text-4xl text-pink-500 font-semibold mb-4">Web Developer & UI/UX Designer</h1>
          <p className="whitespace-pre-line text-lg text-white px-4 text-center max-w-xl mb-50 ">
            I am interested in creating beautiful and functional websites that provide a great user experience. I am currently learning Next.js, React, and Tailwind CSS to improve my skills and build amazing web applications. I enjoy creating visually appealing and user-friendly websites that provide an exceptional user experience. 
            <br /><br />My goal is to continuously learn and grow in the field of web development and design by gaining experience through internships and projects.</p>
        </section>

        <section id="experience" className="flex flex-col items-center justify-center py-2">
          <h2 className="text-3xl text-pink-500 font-semibold mb-12">My Experiences</h2>
          <ExperienceTimeline />
        </section>

        <section id="projects" className="flex flex-col items-center justify-center py-2">
          <h2 className="text-3xl text-pink-500 font-semibold mb-12">Featured Projects</h2>
          <ProjectGrid />
        </section>

        <section id="contact" className="flex flex-col items-center justify-center py-2">
          <h2 className="text-3xl text-pink-500 font-semibold mb-12">Let&apos;s Connect</h2>
          <ContactSection />
        </section>
      </main>
    </div>
  );
} 