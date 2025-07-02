import { theme } from '@ai/theme';

export const ProjectsDesign = {
  layout: {
    padding: '1rem 0',
    scrollMarginTop: '4rem',
  },
  styles: {
    heading: {
      fontSize: '1.125rem',
      fontWeight: theme.typography.weights[2], // 700
      color: theme.themes.dark.colors.onSurface,
      fontFamily: theme.typography.fontFamily,
      marginBottom: '2rem',
      padding: '0 1rem',
    },
  },
  components: {
    container: {
      overflowX: 'visible',
    },
  },
}; 