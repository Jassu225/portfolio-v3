type ThemeType = "dark" | "light";

export const theme = {
  defaultTheme: "dark" as ThemeType,
  themes: {
    dark: {
      colors: {
        primary: "#06B6D4", // Cyan-500 - Modern primary brand color for CTAs and main actions
        accent: "#3B82F6", // Blue-500 - Sophisticated accent for secondary highlights
        background: "#121417",
        surface: "#1A1E23", // For cards and other surfaces
        text: "#FFFFFF",
        textSecondary: "#9CABBA",
        textTertiary: "#D1D5DB", // Tailwind's gray-300
        special: "#FDC435", // Yellow special accent for hero section
      },
    },
    light: {
      colors: {
        primary: "#06B6D4", // Cyan-500 - Consistent primary across themes
        accent: "#3B82F6", // Blue-500 - Consistent accent across themes
        background: "#FFFFFF",
        surface: "#F3F4F6", // Tailwind's gray-100
        text: "#171717",
        textSecondary: "#6B7280", // Tailwind's gray-500
        textTertiary: "#9CA3AF", // Tailwind's gray-400
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