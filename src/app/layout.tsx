import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Footer from "./components/footer";
import Navbar from "./components/navbar";
import { FeaturesSection } from "./components/card";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Furniro-Khalid",
  description: "Hackthon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        
        <div className="container-responsive">
          {children}
        </div>
        
        <FeaturesSection />
        <Footer />
      </body>
    </html>
  );
}
