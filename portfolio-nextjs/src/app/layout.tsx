// portfolio-nextjs/src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // Tailwind CSS is imported here

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andrés R. Bucheli - Portfolio",
  description: "Software Engineer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
      </head>
      <body className={`${inter.className} bg-gray-100 text-gray-900`}>
        {/* The custom Layout component will wrap content in individual page files */}
        {children}
      </body>
    </html>
  );
}
