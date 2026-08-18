import type { Metadata } from "next";
import "./globals.css";

import { ThemeProvider } from "@/providers/theme-provider";
import { inter, poppins } from "@/lib/fonts";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingWhatsapp } from "@/components/floating-whatsapp";

export const metadata: Metadata = {
  metadataBase: new URL("https://firstchoicejapantours.com"),

  title: {
    default: "First Choice Japan Tours",
    template: "%s | First Choice Japan Tours",
  },

  description:
    "Premium private guided tours across Japan, including Tokyo, Kyoto, Osaka, Nara, and Mount Fuji.",

  keywords: [
    "Japan tours",
    "private tours Japan",
    "Tokyo tour",
    "Kyoto tour",
    "Osaka tour",
    "Nara tour",
    "Mount Fuji tour",
    "Japan private guide",
    "First Choice Japan Tours",
  ],

  authors: [
    {
      name: "First Choice Japan Tours",
    },
  ],

  creator: "First Choice Japan Tours",
  publisher: "First Choice Japan Tours",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://firstchoicejapantours.com",
    siteName: "First Choice Japan Tours",
    title: "First Choice Japan Tours",
    description:
      "Discover Japan through premium private tours led by experienced local guides.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "First Choice Japan Tours",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "First Choice Japan Tours",
    description:
      "Premium private guided tours across Japan.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/favicon-32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon-16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },

  manifest: "/manifest.webmanifest",

  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${inter.variable} ${poppins.variable}`}
    >
      <body className="font-sans antialiased">
        <ThemeProvider>
          <Navbar />

          <main>{children}</main>

          <Footer />

          <FloatingWhatsapp />
        </ThemeProvider>
      </body>
    </html>
  );
}