import Link from 'next/link';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';

const techStack = [
  'Next.js',
  'Cloudflare',
  'Hono',
  'TypeScript',
  'TailwindCSS',
];

export default function Home() {
  const featuredProducts = products
    .filter((product) => product.isFeatured)
    .slice(0, 3);

  return (
    <div className="container mx-auto max-w-6xl py-12 space-y-24">
      {/* Hero Section */}
      <section className="flex flex-col items-start justify-center py-12 md:py-24">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
          Go Solo. Make Waves.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed">
          個人の機動力で、ユニークな価値を、次々と送り出す。
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/products"
            className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-blue-900 rounded-md hover:bg-blue-800 transition-colors shadow-sm"
          >
            プロダクトを見る
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center px-6 py-3 text-base font-medium text-slate-700 bg-transparent border border-slate-300 rounded-md hover:bg-slate-50 transition-colors"
          >
            プロフィール
          </Link>
        </div>
      </section>

      {/* Brand Concept Section */}
      <section className="mx-auto">
        <div className="text-center md:text-left mb-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            solooo.devとは？
          </h2>
        </div>

        <div className="bg-slate-50 rounded-2xl p-6 md:p-8 lg:p-10 text-slate-600 space-y-4 leading-relaxed">
          <p className="text-2xl md:text-3xl font-bold text-slate-900">
            Solo + &ldquo;ooo&rdquo; = Infinite Creation<span className="text-base md:text-lg font-normal text-slate-500 ml-2">（無限の創造）</span>
          </p>
          <p>
            solooo（ソロ）は、個人（Solo）と開発者のイニシャルの掛け合わせ。
            後に続く「ooo」は、アイデアを単発で終わらせず、次々と形にして送り出し続ける意思の表れです。
          </p>
          <p>
            組織の論理に縛られない機動力と、個人の遊び心。<br />
            solooo.dev は、ユニークなプロダクトが絶えず出航していく、Web上の造船所（Shipyard）です。
          </p>
        </div>
      </section>

      {/* Featured Products Section */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-slate-900">注目のプロダクト</h2>
          <Link href="/products" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
            すべて見る
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-8">使用技術</h2>
        <div className="flex flex-wrap gap-4">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="inline-block px-4 py-2 bg-slate-50 border border-slate-200 rounded-md text-slate-700 font-medium text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
