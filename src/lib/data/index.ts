import { Skill, Experience, Project } from './types';

export const skills: Skill[] = [
  { name: 'React' },
  // { name: 'Next.js' },
  { name: 'TypeScript' },
  { name: 'JavaScript' },
  { name: 'Go' },
  { name: 'Dart' },
  { name: 'Flutter' },
  { name: 'Node.js' },
  
];

export const experiences: Experience[] = [
  {
    role: 'Senior Software Engineer',
    company: 'Even Healthcare',
    duration: 'Nov 2021 – Apr 2025',
    description: [
      'Led the relaunch of the web on-boarding flow, resolving a major UX issue where users would unintentionally exit the flow via the browser back button or mobile gesture. This was addressed by implementing a route handling mechanism.',
      'Set up a new web application and back-end server (Pulse), including designing and implementing access control wrappers (read/write) for endpoint handlers.',
      'Developed a context-based server-side routing system, enabling dynamic URL behavior tailored to different teams and user contexts.',
      'Developed and launched the first version of the mobile app using Dart and Flutter.',
      'Gained hands-on experience across web, back-end, and mobile app teams, contributing to full-stack feature development.',
    ],
  },
  {
    role: 'Senior Software Engineer',
    company: 'Unacademy',
    duration: 'Apr 2020 – Nov 2021',
    description: [
      'Developed and maintained the Web Planner feature, using IndexedDb and Web Workers for initialization and to ensure real-time data updates.',
      'Took the initiative to cleanup and standardize the website\'s color theme, collaborating with design and product teams across multiple pods.',
      'Integrated Strapi, a CMS, which powers static content delivery and dynamic marketing page templates across the web platform.',
    ],
  },
  {
    role: 'Software Development Engineer',
    company: 'Rentomojo',
    duration: 'Dec 2019 – Mar 2020',
    description: [
      'An online rental platform that provides furniture, appliances and electronics on a monthly rental basis.',
      'Technologies used: Vue.js, Nuxt.js for front-end, Node.js and loopback for server-side and Postgres for back-end.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Analytics Quotient (AQ)',
    duration: 'Jul 2018 - Dec 2019',
    description: [
      'Conceptualized and developed a reusable left-panel.js plugin to streamline the rendering of multi-level dashboard filters (internally known as the left-panel), used to visualize client survey data across countries and markets.',
      'The plugin dynamically builds HTML elements on-demand based on input parameters, drastically improving page load performance and reducing front-end development time.',
    ],
  },
];

export const projects: Project[] = [
  {
    title: 'Photo Sphere',
    description: 'Turn your memories into a mesmerizing 3D globe, right in your browser.',
    imageUrl: '/assets/images/projects/photo-sphere-home.png',
    link: 'https://photo-sphere.web.app/',
  },
  {
    title: 'Kanban Board',
    description: 'A project management tool to track tasks using local storage.',
    imageUrl: '/assets/images/projects/kanban-board-home.jpeg',
    link: 'https://kanban-slate.web.app/',
  },
  {
    title: 'Cloud Work',
    description: 'A dummy tool to create tasks with complexity.',
    imageUrl: '/assets/images/projects/cloud-work-home.png',
    link: 'https://cloud-work.web.app/',
  },
  {
    title: 'React Virtual Scroll List',
    description: 'A virtual scroll list implementation for efficiently rendering large datasets in React.',
    imageUrl: '/assets/images/projects/react-virtual-scroll-list.jpeg',
    link: 'https://virtual-scroll-list.web.app/',
  },
];

export const personalInfo = {
  name: 'Jaswanth Sai Sattenapalli',
  title: 'Front-end oriented full-stack developer',
  location: 'Bengaluru, Karnataka, India',
  about: `I'm an experienced Software Engineer with 7+ years in web development using modern frameworks—Next.js, React, Redux, Vue.js, and jQuery. Skilled in mobile app development (Flutter) and backend API design with Go (Golang) as well. I've led end‑to‑end projects across the full tech stack, delivering seamless user experiences. I'm passionate about continuous learning and innovation. Outside work, I enjoy gaming, Netflix, and solving web challenges.`,
  profilePicture: '/assets/images/hero/profile.jpg', // Placeholder image
} 