import type { MetadataRoute } from 'next';
import { personalInfo } from '@/lib/data';

export const dynamic = 'force-static';
export const revalidate = false;

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${personalInfo.name} - Portfolio`,
    short_name: personalInfo.name,
    description: personalInfo.shortDescription,
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: personalInfo.profilePictureSeo,
        sizes: '192x192',
        type: 'image/jpeg',
      },
      {
        src: personalInfo.profilePictureSeo,
        sizes: '512x512',
        type: 'image/jpeg',
      },
    ],
    categories: ['portfolio', 'developer', 'technology'],
    lang: 'en',
    orientation: 'portrait-primary',
  };
}
