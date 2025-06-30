import { theme } from '@ai/theme';

export const CarouselDesign = {
  layout: {
    position: 'relative',
  },
  components: {
    viewport: {
      overflow: 'hidden',
    },
    container: {
      display: 'flex',
      alignItems: 'stretch',
    },
    slide: {
      position: 'relative',
      padding: '0 1rem',
      flex: '0 0 80%',
    },
    dotsContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '0.5rem',
      marginTop: '1rem',
    },
    dot: {
      width: '0.5rem',
      height: '0.5rem',
      borderRadius: '9999px',
      border: '1px solid #9CA3AF', // gray-400
      backgroundColor: '#E5E7EB', // gray-200
      selected: {
        backgroundColor: '#3B82F6', // blue-500
        borderColor: '#3B82F6', // blue-500
      },
    },
  },
}; 