import type { Metadata } from "next";
import { ClientLayout } from "./client-layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jatin Sharma | Full Stack Developer",
  description: "Full Stack Developer  with expertise in Next.js, React, .",
  metadataBase: new URL("https://Jatinkatiyar.com"),
  
  // Basic metadata
  applicationName: "Jatin Sharma Portfolio",
  authors: [{ name: "Jatin Sharma" }],
  keywords: ["Full Stack Developer", "Web3", "Blockchain", "Next.js", "React", "Machine Learning"],
  
  openGraph: {
    type: "website",
    url: "https://JatinSHARMA.COM",
    title: "Jatin Sharma | Full Stack Developer",
    description: "Full Stack Developer & Blockchain and Machine Learning Enthusiast with expertise in Next.js, React, and blockchain technologies.",
    siteName: "Jatin Sharma",
    locale: "en_US",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jatin Sharma - Portfolio",
      },
    ],
  },
  
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png" },
  },
  
  alternates: {
    canonical: "https://Jatinkatiyar.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClientLayout>{children}</ClientLayout>;
}