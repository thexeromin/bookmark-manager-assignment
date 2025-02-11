import type { Metadata } from "next";
import { poppins } from "@/config/fonts";
import "./globals.css";
import Navbar from "@/components/organisms/navbar";

export const metadata: Metadata = {
  title: "BManager",
  description: "A bookmark manager"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased font-poppins`}>
        <main>
          <Navbar />

          <section className="container mx-auto px-4 max-w-5xl">
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
