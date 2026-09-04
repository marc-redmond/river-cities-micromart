import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rivercitiesmarkets.com"),
  title: {
    default: "River City MicroMarkets | Smart coolers in Richmond & Fredericksburg",
    template: "%s | River City MicroMarkets",
  },
  description:
    "Fully managed smart coolers and micro markets for offices, gyms, warehouses, and apartments in Richmond and Fredericksburg, Virginia. Fresh food 24/7. No cost to host.",
  keywords: [
    "micro market",
    "smart cooler",
    "smart fridge",
    "Richmond Virginia",
    "Fredericksburg",
    "River City MicroMarkets",
  ],
  openGraph: {
    title: "River City MicroMarkets",
    description:
      "Smart coolers and micro markets at your fingertips. Serving Richmond and Fredericksburg.",
    url: "https://www.rivercitiesmarkets.com",
    siteName: "River City MicroMarkets",
    locale: "en_US",
    type: "website",
    images: [{ url: "/photos/gym.webp", width: 1152, height: 648 }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-paper font-sans text-ink">{children}</body>
    </html>
  );
}
