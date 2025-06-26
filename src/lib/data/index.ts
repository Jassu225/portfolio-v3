import { Skill, Experience, Project } from './types';

export const skills: Skill[] = [
  { name: 'UI/UX Design' },
  { name: 'User Research' },
  { name: 'Interaction Design' },
  { name: 'Visual Design' },
  { name: 'Prototyping' },
  { name: 'Wireframing' },
];

export const experiences: Experience[] = [
  {
    role: 'Product Designer',
    company: 'Acme Co.',
    duration: '2020 - Present',
  },
  {
    role: 'UI/UX Designer',
    company: 'Beta Inc.',
    duration: '2018 - 2020',
  },
  {
    role: 'Freelance Designer',
    company: 'Self-Employed',
    duration: '2016 - 2018',
  },
];

export const projects: Project[] = [
  {
    title: 'Mobile App Design',
    description: 'A sleek and user-friendly mobile application for a fitness brand.',
    imageUrl: '/project1.png', // Placeholder image
  },
  {
    title: 'E-commerce Website',
    description: 'An online store with a focus on simplicity and ease of use.',
    imageUrl: '/project2.png', // Placeholder image
  },
];

export const personalInfo = {
  name: 'Ethan Carter',
  title: 'Product Designer',
  location: 'San Francisco, CA',
  about: "I'm a product designer with a passion for creating intuitive and engaging user experiences. I specialize in user research, interaction design, and visual design, and I'm always looking for new challenges to push my creative boundaries.",
  profilePicture: '/hero/profile.jpg', // Placeholder image
} 