import { theme } from '@ai/theme';

export const BackgroundDesign = {
  layout: {
    padding: '1rem',
    scrollMarginTop: '4rem',
  },
  styles: {
    heading: {
      fontSize: '1.125rem',
      fontWeight: theme.typography.weights[2], // 700
      color: theme.themes.dark.colors.onSurface,
      fontFamily: theme.typography.fontFamily,
      marginBottom: '1rem',
    },
  },
  components: {
    list: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.25rem',
    },
  },
}; 