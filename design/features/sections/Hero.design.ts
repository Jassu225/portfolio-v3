import { theme } from '@ai/theme';

export const HeroDesign = {
  layout: {
    padding: '1rem 0',
    alignment: 'center',
    gap: '1.5rem',
  },
  components: {
    profileImage: {
      width: '8rem',
      height: '8rem',
      borderRadius: '9999px',
    },
    textContainer: {
      alignment: 'center',
    },
  },
  styles: {
    heading: {
      color: theme.themes.dark.colors.text,
      fontSize: '22px',
      fontWeight: theme.typography.weights[2], // 700
      fontFamily: theme.typography.fontFamily,
    },
    paragraph: {
      color: theme.themes.dark.colors.textSecondary,
      fontSize: '1rem',
      fontWeight: theme.typography.weights[0], // 400
      fontFamily: theme.typography.fontFamily,
    },
  },
  assets: {
    profilePicture: '/assets/images/hero/profile.png',
  },
}; 