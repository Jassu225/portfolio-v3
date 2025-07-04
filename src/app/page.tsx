import Hero from '@/components/features/sections/Hero';
import About from '@/components/features/sections/About';
import Skills from '@/components/features/sections/Skills';
import Background from '@/components/features/sections/Background';
import Projects from '@/components/features/sections/Projects';
import Contact from '@/components/features/sections/Contact';
import { generateStructuredData, generateFAQStructuredData } from '@/lib/seo';

export default function Home() {
  const structuredData = generateStructuredData();
  const faqData = generateFAQStructuredData();

  return (
    <>
      {/* Additional Structured Data for Homepage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
      
      <main>
        <Hero />
        <About />
        <Background />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
