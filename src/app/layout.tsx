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
  description: "I'm a senior full-stack engineer, passionate about building scalable products from the ground up. With hands-on expertise in Next.js, Go, and Flutter, I take full ownership of projects—architecting entire systems to solve complex, real-world problems.",
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
