import { theme } from '@ai/theme';

export const SkillsDesign = {
  layout: {
    padding: '1rem',
    scrollMarginTop: '4rem',
  },
  styles: {
    heading: {
      fontSize: '1.125rem',
      fontWeight: theme.typography.weights[2], // 700
      color: theme.themes.dark.colors.text,
      fontFamily: theme.typography.fontFamily,
      marginBottom: '1rem',
    },
  },
  components: {
    tagContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.75rem',
    },
  },
}; 