import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CivicConnect - Report. Track. Resolve.",
  description: "Empower your voice. Report civic issues in your city and track their resolution in real-time.",
  keywords: ["civic issues", "report problems", "city governance", "public issues", "pothole", "garbage"],
  authors: [{ name: "CivicConnect" }],
  openGraph: {
    title: "CivicConnect - Your City, Your Voice",
    description: "Report civic issues and track their resolution",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
