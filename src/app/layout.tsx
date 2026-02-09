import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { ThemeProvider } from "@/components/providers";
import Cursor from "@/components/ui/Cursor/Cursor";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <Cursor />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
