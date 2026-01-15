import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bálint Göröcs - Senior Software Engineer",
  description: "Senior Software Engineer with 10+ years of experience building production software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

