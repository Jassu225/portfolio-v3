import { theme } from '@ai/theme';

export const ProjectCardDesign = {
  layout: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    borderRadius: '0.5rem',
    overflow: 'hidden',
  },
  components: {
    imageContainer: {
      position: 'relative',
      height: '10rem',
      width: '100%',
      flexShrink: 0,
    },
    viewButton: {
      position: 'absolute',
      top: '0.5rem',
      right: '0.5rem',
      padding: '0.25rem 0.75rem',
      borderRadius: '9999px',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      fontSize: '0.75rem',
      color: theme.themes.dark.colors.onSurface,
    },
    contentContainer: {
      padding: '1rem',
      backgroundColor: theme.themes.dark.colors.surface,
      flexGrow: 1,
    },
  },
  styles: {
    title: {
      color: theme.themes.dark.colors.onSurface,
      fontWeight: theme.typography.weights[1], // 500
      fontSize: '1rem',
    },
    description: {
      color: theme.themes.dark.colors.onSurfaceVariant,
      fontSize: '0.875rem',
      marginTop: '0.5rem',
    },
  },
}; 