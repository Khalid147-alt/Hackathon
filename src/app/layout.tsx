import type { Metadata } from "next";
import localFont from "next/font/local";
import { ClerkProvider } from '@clerk/nextjs'
import "./globals.css";

import Footer from "./components/footer";
import Navbar from "./components/navbar";
// import FeaturesSection from "./components/card";
import { CartProvider } from './context/CartContext'
import { AuthProvider } from '../app/components/AuthProvider'

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
    <ClerkProvider>
      <html lang="en">
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
         
          <CartProvider>
          <Navbar />
            <AuthProvider>
              
              
              <div className="container-responsive">
                {children}
              </div>
              
              
              <Footer />
            </AuthProvider>
          </CartProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}