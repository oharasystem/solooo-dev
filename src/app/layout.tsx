import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://solooo.dev'),
  title: {
    template: '%s | solooo.dev',
    default: 'solooo.dev - The Shipyard of Ohara System',
  },
  description:
    'Personal development portfolio of Ohara System. Building distinct web services from scratch.',
  openGraph: {
    title: {
      template: '%s | solooo.dev',
      default: 'solooo.dev - The Shipyard of Ohara System',
    },
    description:
      'Personal development portfolio of Ohara System. Building distinct web services from scratch.',
    siteName: 'solooo.dev',
    locale: 'ja_JP',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${inter.variable} ${notoSansJP.variable} antialiased flex flex-col min-h-screen font-sans`}
      >
        <header className="p-4 border-b border-gray-200">
          <Link href="/" className="text-xl font-bold">
            solooo.dev
          </Link>
        </header>
        <main className="flex-grow flex flex-col p-4">
          {children}
        </main>
        <footer className="p-4 border-t border-gray-200 text-center text-sm text-gray-500">
          © 2026 Ohara System
        </footer>
      </body>
    </html>
  );
}
