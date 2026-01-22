import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
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
      path: "../../public/fonts/Aspekta-600.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Aspekta-600.otf",
      weight: "600",
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
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
