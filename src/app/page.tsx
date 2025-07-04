import Hero from '@/components/features/sections/Hero';
import About from '@/components/features/sections/About';
import Skills from '@/components/features/sections/Skills';
import Background from '@/components/features/sections/Background';
import Projects from '@/components/features/sections/Projects';
import Contact from '@/components/features/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Background />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
