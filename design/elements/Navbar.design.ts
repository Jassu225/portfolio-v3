import { theme } from '@ai/theme';

export const NavbarDesign = {
  layout: {
    position: 'sticky',
    top: 0,
    zIndex: 50,
    padding: '0.75rem 1rem',
  },
  styles: {
    backgroundColor: theme.themes.dark.colors.background,
    brand: {
      color: theme.themes.dark.colors.text,
      fontSize: '1.125rem', // text-lg
      fontWeight: theme.typography.weights[2], // 700
      fontFamily: theme.typography.fontFamily,
    },
    navLink: {
      color: theme.themes.dark.colors.text,
      hoverColor: theme.themes.dark.colors.textTertiary,
    },
    mobileMenu: {
      backgroundColor: theme.themes.dark.colors.background,
      marginTop: '1rem',
    },
  },
  breakpoints: {
    desktop: theme.breakpoints[1], // md: 768px
  },
}; 