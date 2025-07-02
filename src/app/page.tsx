'use client';
import HeroDesktop from '@/components/features/sections/HeroDesktop';
import Hero from '@/components/features/sections/Hero';
import About from '@/components/features/sections/About';
import Skills from '@/components/features/sections/Skills';
import Background from '@/components/features/sections/Background';
import Projects from '@/components/features/sections/Projects';
import Contact from '@/components/features/sections/Contact';
import useMediaQuery from '@/lib/hooks/useMediaQuery';

export default function Home() {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  return (
    <>
      {isDesktop ? <HeroDesktop /> : <Hero />}
      <About />
      <Background />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
