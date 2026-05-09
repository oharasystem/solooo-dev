import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
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
    default: 'solooo.dev - Go Solo. Make Waves.',
  },
  description:
    'Go Solo. Make Waves. solooo.devは、個人の機動力でユニークな価値を次々と送り出す、Webサービス開発・運用拠点（Shipyard）です。',
  keywords: ['Webサービス', '個人開発', 'Next.js', 'Cloudflare', 'solooo'],
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title: {
      template: '%s | solooo.dev',
      default: 'solooo.dev - Go Solo. Make Waves.',
    },
    description:
      'Go Solo. Make Waves. solooo.devは、個人の機動力でユニークな価値を次々と送り出す、Webサービス開発・運用拠点（Shipyard）です。',
    siteName: 'solooo.dev',
    locale: 'ja_JP',
    type: 'website',
    images: [
      {
        url: '/ogp.png',
        width: 1200,
        height: 630,
        alt: 'solooo.dev',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      template: '%s | solooo.dev',
      default: 'solooo.dev - Go Solo. Make Waves.',
    },
    description:
      'Go Solo. Make Waves. solooo.devは、個人の機動力でユニークな価値を次々と送り出す、Webサービス開発・運用拠点（Shipyard）です。',
    creator: '@solooo_dev',
    site: '@solooo_dev',
    images: ['/ogp.png'],
  },
  other: {
    'google-adsense-account': 'ca-pub-3860710971355910',
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
        {process.env.NODE_ENV === 'production' && (
          <>
            {/* Google AdSense */}
            <script
              async
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3860710971355910"
              crossOrigin="anonymous"
            ></script>
            {/* Google tag (gtag.js) */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-6BWW91SHD7"></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-6BWW91SHD7');
                `,
              }}
            />
          </>
        )}
        <Header />
        <main className="flex-grow flex flex-col p-4">
          {children}
        </main>
        <footer className="pt-20 pb-10 border-t border-slate-200/60 bg-slate-50">
          <div className="container mx-auto max-w-6xl px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
              {/* Brand Section */}
              <div className="col-span-1 md:col-span-2 space-y-6">
                <div className="inline-block">
                  <Image
                    src="/logo.svg"
                    alt="solooo.dev"
                    width={140}
                    height={36}
                    className="opacity-90"
                  />
                </div>
                <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                  Go Solo. Make Waves.<br />
                  個人の機動力でユニークな価値を次々と送り出す。
                </p>
                <div className="flex items-center gap-4 text-slate-400">
                  <a href="https://x.com/solooo_dev" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </a>
                  <a href="https://github.com/oharasystem" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.382 1.235-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.839 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </a>
                </div>
              </div>

              {/* Links Sections */}
              <div className="space-y-6">
                <h3 className="text-slate-900 font-bold text-sm">Pages</h3>
                <nav className="flex flex-col space-y-4 text-slate-500 text-sm">
                  <Link href="/" className="hover:text-blue-600 transition-colors">ホーム</Link>
                  <Link href="/products" className="hover:text-blue-600 transition-colors">プロダクト</Link>
                  <Link href="/about" className="hover:text-blue-600 transition-colors">プロフィール</Link>
                  <Link href="/contact" className="hover:text-blue-600 transition-colors">お問い合わせ</Link>
                </nav>
              </div>

              <div className="space-y-6">
                <h3 className="text-slate-900 font-bold text-sm">Policies</h3>
                <nav className="flex flex-col space-y-4 text-slate-500 text-sm">
                  <Link href="/privacy" className="hover:text-blue-600 transition-colors">プライバシーポリシー</Link>
                </nav>
              </div>
            </div>

            <div className="pt-10 border-t border-slate-50 text-center">
              <p className="text-slate-400 text-xs">© 2026 solooo.dev.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
