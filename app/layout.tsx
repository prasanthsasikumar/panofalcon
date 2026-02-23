import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PanoFalcon - Share 360° Panoramas",
  description: "Upload, share, and view stunning 360-degree panoramic images with PanoFalcon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
