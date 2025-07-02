type ThemeType = "dark" | "light";

export const theme = {
  defaultTheme: "dark" as ThemeType,
  themes: {
    dark: {
      colors: {
        // Primary Color Tones
        primary0: "#000000",
        primary100: "#051426", 
        primary200: "#0A284D",
        primary300: "#103D73",
        primary400: "#15519A",
        primary500: "#1A65C0",
        primary600: "#4884CD",
        primary700: "#76A3D9",
        primary800: "#A3C1E6",
        primary900: "#D1E0F2",
        primary950: "#E8F0F9",
        primary980: "#F6F9FC",
        primary990: "#FAFCFE",
        primary1000: "#FFFFFF",

        // Material 3 Color System
        primary: "#1A65C0",
        onPrimary: "#FFFFFF",
        primaryContainer: "#005CCB",
        onPrimaryContainer: "#D0E8FF",

        secondary: "#7C8DB5",
        onSecondary: "#1C2433",
        secondaryContainer: "#405072",
        onSecondaryContainer: "#DDE3F7",

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
        
        surfaceTint: "#1A65C0",
        shadow: "#000000",
        scrim: "#000000",
      },
    },
    light: {
      colors: {
        // Primary Color Tones  
        primary0: "#000000",
        primary100: "#051426",
        primary200: "#0A284D", 
        primary300: "#103D73",
        primary400: "#15519A",
        primary500: "#1A65C0",
        primary600: "#4884CD",
        primary700: "#76A3D9",
        primary800: "#A3C1E6",
        primary900: "#D1E0F2",
        primary950: "#E8F0F9",
        primary980: "#F6F9FC",
        primary990: "#FAFCFE",
        primary1000: "#FFFFFF",

        // Material 3 Light Theme (reverse mappings)
        primary: "#005CCB",
        onPrimary: "#FFFFFF",
        primaryContainer: "#D0E8FF",
        onPrimaryContainer: "#003263",

        secondary: "#405072",
        onSecondary: "#FFFFFF",
        secondaryContainer: "#DDE3F7",
        onSecondaryContainer: "#1C2433",

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
        inversePrimary: "#90C2FF",
        
        surfaceTint: "#005CCB",
        shadow: "#000000",
        scrim: "#000000",

      },
    }
  },
  typography: {
    fontFamily: "'Space Grotesk', sans-serif",
    weights: [400, 500, 700] // Corresponds to font-normal, font-medium, font-bold
  },
  breakpoints: ["640px", "768px", "1024px", "1280px"] // sm, md, lg, xl from Tailwind defaults
}; 