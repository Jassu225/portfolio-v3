type ThemeType = "dark" | "light";

export const theme = {
  defaultTheme: "dark" as ThemeType,
  themes: {
    dark: {
      colors: {
        // Material 3 Color System - Updated Comprehensive Scheme
        primary: "#3E91FF",
        onPrimary: "#003263",
        primaryContainer: "#005CCB",
        onPrimaryContainer: "#D0E8FF",

        secondary: "#5A7FBA",
        onSecondary: "#1B2A4A",
        secondaryContainer: "#2C4A80",
        onSecondaryContainer: "#D3E0F9",

        tertiary: "#82B1FF",
        onTertiary: "#14304A",
        tertiaryContainer: "#3B5F8A",
        onTertiaryContainer: "#DCEEFF",

        error: "#FF5C5C",
        onError: "#410001",
        errorContainer: "#93000A",
        onErrorContainer: "#FFDAD6",

        background: "#121212",
        onBackground: "#E0E0E0",
        surface: "#121212",
        onSurface: "#E0E0E0",
        surfaceVariant: "#292929",
        onSurfaceVariant: "#CCCCCC",

        outline: "#8A8A8A",
        inverseSurface: "#E0E0E0",
        inverseOnSurface: "#121212",
        inversePrimary: "#90C2FF",
        
        surfaceTint: "#3E91FF",
        shadow: "#000000",
        scrim: "#000000",

        // Legacy/Special Colors
        special: "#FDC435", // Yellow special accent for hero section
      },
    },
    light: {
      colors: {
        // Material 3 Light Theme - Proper inverse mappings
        primary: "#005CCB",
        onPrimary: "#FFFFFF",
        primaryContainer: "#D0E8FF",
        onPrimaryContainer: "#003263",

        secondary: "#2C4A80",
        onSecondary: "#FFFFFF",
        secondaryContainer: "#D3E0F9",
        onSecondaryContainer: "#1B2A4A",

        tertiary: "#3B5F8A",
        onTertiary: "#FFFFFF",
        tertiaryContainer: "#DCEEFF",
        onTertiaryContainer: "#14304A",

        error: "#93000A",
        onError: "#FFFFFF",
        errorContainer: "#FFDAD6",
        onErrorContainer: "#410001",

        background: "#FFFFFF",
        onBackground: "#1C1B1F",
        surface: "#FFFFFF",
        onSurface: "#1C1B1F",
        surfaceVariant: "#F3F3F3",
        onSurfaceVariant: "#49454F",

        outline: "#79747E",
        inverseSurface: "#313033",
        inverseOnSurface: "#F4EFF4",
        inversePrimary: "#3E91FF",
        
        surfaceTint: "#005CCB",
        shadow: "#000000",
        scrim: "#000000",

        // Legacy/Special Colors
        special: "#FDC435", // Yellow special accent
      },
    }
  },
  typography: {
    fontFamily: "'Space Grotesk', sans-serif",
    weights: [400, 500, 700] // Corresponds to font-normal, font-medium, font-bold
  },
  breakpoints: ["640px", "768px", "1024px", "1280px"] // sm, md, lg, xl from Tailwind defaults
}; 