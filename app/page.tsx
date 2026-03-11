import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full relative">
      <Navbar />
      <Hero />
      <Stats />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
