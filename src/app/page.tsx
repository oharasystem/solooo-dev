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
  const featuredProducts = products.filter((product) => product.isFeatured);

  return (
    <div className="container mx-auto max-w-6xl py-12 space-y-24">
      {/* Hero Section */}
      <section className="flex flex-col items-start justify-center py-12 md:py-24">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight mb-6">
          Building distinct <br className="hidden md:block" />
          web services.
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
          Indie developer & software engineer based in Tokyo.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/products"
            className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-blue-900 rounded-md hover:bg-blue-800 transition-colors shadow-sm"
          >
            View Shipyard
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
            Read Profile
          </Link>
        </div>
      </section>

      {/* Featured Products Section */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-slate-900">Featured Products</h2>
          <Link href="/products" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
            View All
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
        <h2 className="text-2xl font-bold text-slate-900 mb-8">Tech Stack</h2>
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
