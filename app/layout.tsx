import type { Metadata } from "next";
import "./globals.css";

import { Background } from "./components/background";
import { Navbar } from "./components/navbar";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Minimal space portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased overflow-x-hidden">
        <div className="absolute w-full h-full">
          <Background />
        </div>

        <div className="relative z-10 min-h-screen">
          <Navbar />

          <main className="px-6 sm:px-10 lg:px-20 pb-24">{children}</main>
        </div>
      </body>
    </html>
  );
}
