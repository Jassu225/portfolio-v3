import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Background from '@/components/sections/Background';
import Projects from '@/components/sections/Projects';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Background />
      <Projects />
      {/* Other sections will be added here */}
    </>
  );
}
