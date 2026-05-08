import Link from 'next/link';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import ParticleBackground from '@/components/ParticleBackground';

const techStack = [
  'Next.js',
  'Hono',
  'Cloudflare Pages',
  'Cloudflare Workers',
  'Cloudflare D1',
  'Cloudflare R2',
  'Cloudflare AI',
  'Cloudflare Queues',
  'Drizzle ORM',
  'Zod',
  'TypeScript',
  'TailwindCSS',
  'React 19',
];

export default function Home() {
  const featuredProducts = products
    .filter((product) => product.isFeatured)
    .slice(0, 3);

  return (
    <div className="container mx-auto max-w-6xl py-12 space-y-24">
      {/* Hero Section */}
      <section className="relative flex flex-col items-start justify-center py-16 md:py-28 overflow-hidden rounded-3xl px-8 min-h-[500px]">
        <ParticleBackground />
        <div className="relative z-10 pointer-events-none">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
            Go Solo.<br />Make Waves.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed">
            個人の機動力で、ユニークな価値を、次々と送り出す。
          </p>
          <div className="flex flex-wrap gap-4 pointer-events-auto">
            <Link
              href="/products"
              className="inline-flex items-center px-6 py-3 text-base font-bold text-white bg-blue-900 rounded-lg hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
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
              className="inline-flex items-center px-6 py-3 text-base font-bold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              プロフィール
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Concept Section */}
      <section className="mx-auto">
        <div className="text-center md:text-left mb-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            solooo.devとは？
          </h2>
        </div>

        <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 md:p-12 text-slate-600 space-y-6 leading-relaxed">
          <p className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Solo + &ldquo;ooo&rdquo; = <span className="text-blue-600">Infinite Creation</span>
          </p>
          <div className="space-y-4 text-lg">
            <p>
              solooo（ソロ）は、個人（Solo）と開発者のイニシャルの掛け合わせ。
              後に続く「ooo」は、アイデアを単発で終わらせず、次々と形にして送り出し続ける意思の表れです。
            </p>
            <p>
              組織の論理に縛られない機動力と、プロフェッショナルとしての品質。<br />
              単なる副業ではなく、10年、20年先まで残る「資産」としてのプロダクトを創るための、Web上の造船所（Shipyard）です。
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-slate-900">注目のプロダクト</h2>
          <Link href="/products" className="text-blue-600 hover:text-blue-800 font-bold flex items-center group">
            すべて見る
            <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              className="inline-block px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-slate-700 font-bold text-sm shadow-sm hover:shadow-md transition-shadow"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
