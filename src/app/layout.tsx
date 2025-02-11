import type { Metadata } from "next";
import { montserrat } from "@/config/fonts";
import "./globals.css";


export const metadata: Metadata = {
  title: "BManager",
  description: "A bookmark manager",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased font-montserrat`}
      >
        {children}
      </body>
    </html>
  );
}
