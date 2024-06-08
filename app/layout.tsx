import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Panagiotis Englezos",
  description: "Panagiotis Englezos also known as penglezos is a Software and Web Developer",
  keywords: ['penglezos', 'panagiotisenglezos', 'panagiotis englezos'],
  authors: [{ name: 'penglezos' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="{inter.className} antialiased flex items-stretch">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          {children}
        </main>
      </body>
    </html>
  );
}
