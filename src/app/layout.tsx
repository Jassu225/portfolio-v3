import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Jaswanth Sai Sattenapalli | Front-end oriented full-stack developer",
  description: "Portfolio of Jaswanth Sai Sattenapalli, a full-stack developer based in Bengaluru, India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} antialiased`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
