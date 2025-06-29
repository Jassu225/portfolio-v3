import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Background from '@/components/sections/Background';
import Projects from '@/components/sections/Projects';
// import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Background />
      <Skills />
      <Projects />
      {/* <Contact /> */}
      {/* Other sections will be added here */}
    </>
  );
}
