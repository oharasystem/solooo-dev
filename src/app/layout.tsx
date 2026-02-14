import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import Image from "next/image";
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
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
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
        <header className="p-4 border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
          <div className="container mx-auto max-w-6xl flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.svg"
                alt="solooo.dev"
                width={150}
                height={40}
                priority
              />
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium text-slate-600">
              <Link href="/products" className="hover:text-blue-900 transition-colors">
                プロダクト
              </Link>
              <Link href="/about" className="hover:text-blue-900 transition-colors">
                プロフィール
              </Link>
              <Link href="/contact" className="hover:text-blue-900 transition-colors">
                お問い合わせ
              </Link>
            </nav>
          </div>
        </header>
        <main className="flex-grow flex flex-col p-4">
          {children}
        </main>
        <footer className="py-8 border-t border-gray-200 bg-slate-50 text-sm text-gray-500">
          <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between px-4 gap-4">
            <p>© 2026 solooo.dev</p>
            <Link href="/privacy" className="text-xs hover:text-gray-800 transition-colors">
              プライバシーポリシー
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
