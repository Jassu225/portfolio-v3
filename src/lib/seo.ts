import { experiences, personalInfo, projects, skills } from '@/lib/data';

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://jaswanth-codes.vercel.app';

export const generateSEOData = () => {
  return {
    title: `${personalInfo.name} | ${personalInfo.title}`,
    description: personalInfo.shortDescription,
    url: siteUrl,
    image: `${siteUrl}${personalInfo.profilePictureSeo}`,
  };
};

export const generateStructuredData = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: personalInfo.name,
    jobTitle: personalInfo.title,
    description: personalInfo.shortDescription,
    url: siteUrl,
    email: personalInfo.email,
    image: `${siteUrl}${personalInfo.profilePictureSeo}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bengaluru',
      addressRegion: 'Karnataka',
      addressCountry: 'India',
    },
    sameAs: [personalInfo.linkedin, personalInfo.github, personalInfo.twitter],
    knowsAbout: skills.map((skill) => skill.name),
    hasOccupation: experiences.map((exp) => ({
      '@type': 'Occupation',
      name: exp.role,
      occupationLocation: {
        '@type': 'Place',
        name: exp.company,
      },
      estimatedSalary: {
        '@type': 'MonetaryAmountDistribution',
        name: 'Senior Software Engineer',
      },
    })),
    owns: projects.map((project) => ({
      '@type': 'CreativeWork',
      name: project.title,
      description: project.description,
      url: project.link,
      image: project.imageUrl,
      creator: {
        '@type': 'Person',
        name: personalInfo.name,
      },
    })),
  };
};

export const generateBreadcrumbs = (currentPage?: string) => {
  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteUrl,
      },
    ],
  };

  if (currentPage) {
    breadcrumbs.itemListElement.push({
      '@type': 'ListItem',
      position: 2,
      name: currentPage,
      item: `${siteUrl}/#${currentPage.toLowerCase()}`,
    });
  }

  return breadcrumbs;
};

export const generateFAQStructuredData = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What technologies does Jaswanth Sai specialize in?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `I specialize in ${skills
            .map((skill) => skill.name)
            .join(', ')} with over 7 years of experience in web development.`,
        },
      },
      {
        '@type': 'Question',
        name: 'Where is Jaswanth Sai located?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `I'm based in ${personalInfo.location} and available for remote work opportunities.`,
        },
      },
      {
        '@type': 'Question',
        name: 'How can I contact Jaswanth Sai?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `You can reach me via email at ${personalInfo.email}, connect with me on LinkedIn, follow me on Twitter, or check out my projects on GitHub.`,
        },
      },
    ],
  };
};
