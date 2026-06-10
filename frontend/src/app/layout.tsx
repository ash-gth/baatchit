import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Baatchit",
  description: "Modern Real-Time Chat Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#0B0F19] text-white antialiased">
        {children}
      </body>
    </html>
  );
}