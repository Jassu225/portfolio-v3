import { theme } from '@ai/theme';

export const AboutDesign = {
  layout: {
    padding: '1rem',
    scrollMarginTop: '4rem', // scroll-m-16
  },
  styles: {
    heading: {
      fontSize: '1.125rem', // text-lg
      fontWeight: theme.typography.weights[2], // 700
      color: theme.themes.dark.colors.text,
      fontFamily: theme.typography.fontFamily,
      marginBottom: '0.5rem',
    },
    paragraph: {
      fontSize: '1rem',
      fontWeight: theme.typography.weights[0], // 400
      color: theme.themes.dark.colors.textSecondary,
      fontFamily: theme.typography.fontFamily,
      lineHeight: '1.625', // leading-relaxed
    },
  },
}; 