import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { poppins } from "@/config/fonts";
import "./globals.css";
import Navbar from "@/components/organisms/navbar";
import { Toaster } from "@/components/atoms/toaster";
import QueryProvider from "./providers/QueryProvider";

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
    <ClerkProvider>
      <html lang="en">
        <body className={`${poppins.variable} antialiased font-poppins`}>
          <QueryProvider>
            <main>
              <Navbar />

              <section className="container mx-auto px-4 max-w-5xl">
                {children}
              </section>
              <Toaster />
            </main>
          </QueryProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
