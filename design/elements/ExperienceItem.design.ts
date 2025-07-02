import { theme } from '@ai/theme';

export const ExperienceItemDesign = {
  layout: {
    display: 'flex',
    gap: '1rem',
    paddingBottom: '1.5rem',
  },
  components: {
    timeline: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    icon: {
      width: '1.5rem',
      height: '1.5rem',
      flexShrink: 0,
    },
    line: {
      flexGrow: 1,
      width: '1px',
      backgroundColor: '#3B4754', // Needs to be added to theme
    },
  },
  styles: {
    role: {
      color: theme.themes.dark.colors.onSurface,
      fontWeight: theme.typography.weights[1], // 500
      fontSize: '1rem',
    },
    meta: {
      color: theme.themes.dark.colors.onSurfaceVariant,
      fontSize: '1rem',
    },
    description: {
      color: theme.themes.dark.colors.onSurfaceVariant,
      fontSize: '0.875rem',
      marginTop: '0.5rem',
      paddingLeft: '1rem',
    },
    toggleButton: {
      color: '#60A5FA', // text-blue-400
      hoverColor: '#93C5FD', // text-blue-300
      fontSize: '0.875rem',
      marginTop: '0.5rem',
    },
  },
  assets: {
    icon: '/assets/icons/office-bag.svg',
  },
}; 