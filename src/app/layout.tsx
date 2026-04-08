import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const aspekta = localFont({
  src: [
    {
      path: "../../public/fonts/Aspekta-400.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Aspekta-500.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Aspekta-500.otf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-aspekta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400","600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Lucas Marohn - Design & Code",
    template: "%s | Lucas Marohn",
  },
  description:
    "Lucas Marohn is a self-taught designer and full stack developer from California. Brand identity, websites, and apps.",
  keywords: ["designer", "developer", "brand identity", "websites", "apps", "portfolio"],
  authors: [{ name: "Lucas Marohn" }],
  creator: "Lucas Marohn",
  icons: {
    icon: [
      { url: "/images/signature-black.png", media: "(prefers-color-scheme: light)" },
      { url: "/images/signature-white.png", media: "(prefers-color-scheme: dark)" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lucasmarohn.com",
    siteName: "Lucas Marohn",
    title: "Lucas Marohn - Design & Code",
    description:
      "Lucas Marohn is a self-taught designer and full stack developer from California.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucas Marohn - Design & Code",
    description:
      "Lucas Marohn is a self-taught designer and full stack developer from California.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${aspekta.variable} ${inter.variable} font-sans`} style={{ letterSpacing: "-0.04em" }}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-S03KT3TFTG" />
    </html>
  );
}

