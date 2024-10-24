import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ReactNode } from "react";
import { Footer } from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "LYNQ ME",
  description: "Providing easy connectivity throughout the globe",
};

interface RootLayoutProps {
  children: ReactNode; // Type for children prop
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased dark`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
