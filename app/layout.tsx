import type { Metadata } from "next";
import "./globals.css";

import NextTopLoader from "nextjs-toploader";
import { Background } from "./components/background";
import { Navbar } from "./components/navbar";

export const metadata: Metadata = {
  title: "Mohammad Valadi • Frontend Engineer",
  description:
    "Frontend Engineer focused on performant interfaces, cinematic interactions, and scalable web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="color-scheme" content="dark" />
      </head>
      <body className="bg-black text-white antialiased overflow-x-hidden">
        <NextTopLoader
          color="#9587fd"
          showSpinner={false}
          shadow="0 0 10px #9587fd,0 0 5px #9587fd"
          height={1}
        />
        <div className="absolute inset-0">
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
