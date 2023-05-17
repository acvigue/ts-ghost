import "~/styles/globals.css";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { siteConfig } from "~/app/site-config";
import { cn } from "~/lib/cn";
import { SiteHeader } from "~/components/site-header";
import { ThemeProvider } from "~/components/theme-provider";

import { IBM_Plex_Mono, Inter } from "next/font/google";
import localFont from "next/font/local";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontCal = localFont({
  src: "../styles/calsans.ttf",
  variable: "--font-cal",
  display: "swap",
});

const fontMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    images: [{ url: "/opengraph-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [{ url: "https://acme-corp-lib.vercel.app/opengraph-image.png" }],
    creator: "@PhilDL",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning className="bg-background">
        <head />
        <body
          className={cn(
            "min-h-screen font-sans antialiased",
            fontSans.variable,
            fontCal.variable,
            fontMono.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <div className="flex-1">{children}</div>
            </div>
            {/* <TailwindIndicator /> */}
          </ThemeProvider>
          <Analytics />
        </body>
      </html>
    </>
  );
}
