import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Courses } from "@/components/sections/Courses";
import { InternationalExperience } from "@/components/sections/InternationalExperience";
import { Projects } from "@/components/sections/Projects";
import { Stack } from "@/components/sections/Stack";
import { Languages } from "@/components/sections/Languages";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Courses />
        <InternationalExperience />
        <Projects />
        <Stack />
        <Languages />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
