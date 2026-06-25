import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

const siteUrl = "https://yashkansal.dev";
const siteName = "Yash Kansal Portfolio";
const title =
  "Yash Kansal | Software Engineer for Scalable Systems, WebRTC & MERN";
const description =
  "Yash Kansal is a software engineer and B.Tech CSE 2026 candidate building scalable MERN, WebRTC, real-time, cloud-native, and optimization-driven systems.";
const ogImage = "/images/og-preview.webp";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Yash Kansal",
  },
  description,
  applicationName: siteName,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "x-default": "/",
    },
  },
  keywords: [
    "Yash Kansal",
    "Yash Kansal software engineer",
    "software engineer portfolio",
    "B.Tech CSE 2026",
    "Graphic Era University",
    "MERN stack developer",
    "WebRTC developer",
    "real-time applications",
    "scalable systems",
    "distributed systems",
    "system design",
    "performance optimization",
    "cloud-native applications",
    "Node.js",
    "React",
    "Next.js",
    "MongoDB",
    "Express.js",
    "PostgreSQL",
    "AWS Amplify",
    "AWS Lambda",
    "Computer Networks",
    "CodeSync",
    "LifeLink",
    "SmartSched",
    "genetic algorithms",
  ],
  authors: [{ name: "Yash Kansal", url: siteUrl }],
  creator: "Yash Kansal",
  publisher: "Yash Kansal",
  category: "technology",
  classification: "Software Engineering Portfolio",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName,
    locale: "en_US",
    type: "profile",
    firstName: "Yash",
    lastName: "Kansal",
    username: "yashkansal-dev",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Yash Kansal software engineer portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description:
      "Systems-focused software engineer portfolio featuring WebRTC, MERN, optimization, and scalable architecture projects.",
    creator: "@yashkansal_dev",
    images: [ogImage],
  },
  icons: {
    icon: [
      { url: "/images/icon-192.webp", sizes: "192x192", type: "image/webp" },
      { url: "/images/icon-512.webp", sizes: "512x512", type: "image/webp" },
      { url: "/images/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/images/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/images/icon-192.png", sizes: "192x192", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#111827",
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-3986882594296568" />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
