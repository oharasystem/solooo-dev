import { products } from '@/data/products';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return products
    .filter((p) => p.article)
    .map((product) => ({
      id: product.id,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product || !product.article) {
    return {
      title: 'プロダクトが見つかりません',
    };
  }

  return {
    title: `${product.title} - プロダクト詳細`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product || !product.article) {
    notFound();
  }

  const { article } = product;

  return (
    <div className="container mx-auto max-w-4xl py-12 space-y-12">
      <Link href="/products" className="text-sm text-slate-500 hover:text-blue-600 transition-colors flex items-center gap-1 w-fit">
        ← プロダクト一覧へ戻る
      </Link>

      <div className="space-y-32">
        {/* 1. Hero Section (Title & Overview & First CTA) */}
        <section className="relative space-y-12 p-8 md:p-20 bg-white border border-slate-100 rounded-3xl shadow-sm overflow-hidden">
          {/* Floating Status Badge */}
          <div className="absolute top-0 right-0">
            <div className="bg-green-100 text-green-800 px-8 py-1.5 rounded-bl-3xl font-bold text-xs uppercase tracking-widest border-l border-b border-green-200">
              {product.status}
            </div>
          </div>

          <div className="space-y-8 text-center flex flex-col items-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
              {product.title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              {product.description}
            </p>
            <div className="pt-8 flex justify-center w-full">
              <Link
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-16 py-4 text-lg font-bold text-white bg-blue-900 rounded-2xl hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto min-w-[300px]"
              >
                プロダクトページへ
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* 2. Main Catch & Main Screenshot */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              {article.tagline}
            </h2>
          </div>
          <div className="relative aspect-video bg-slate-100 rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
            <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-bold text-xl bg-slate-50">
              Main Screenshot: {article.screenshots[0]?.split('/').pop() || 'Placeholder'}
            </div>
          </div>
        </section>

        {/* 3. What it can do (Features) */}
        <section className="space-y-8 max-w-3xl mx-auto w-full">
          <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
            <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
            何ができるか
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {article.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-4 p-5 bg-white border border-slate-100 rounded-2xl shadow-sm">
                <svg className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-slate-700 font-medium leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Target */}
        <section className="space-y-8 max-w-3xl mx-auto w-full">
          <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
            <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
            ターゲット
          </h2>
          <div className="bg-blue-50/50 p-8 rounded-3xl border border-blue-100/50">
            <p className="text-lg text-slate-700 leading-relaxed font-medium">
              {article.targetUsers}
            </p>
          </div>
        </section>

        {/* 5. How to Use */}
        <section className="space-y-8 max-w-3xl mx-auto w-full">
          <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
            <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
            使い方
          </h2>
          <div className="space-y-12 relative before:absolute before:left-6 before:top-4 before:bottom-4 before:w-0.5 before:bg-slate-100">
            {article.howToUse.map((step, idx) => (
              <div key={idx} className="relative flex gap-8 pl-2">
                <div className="flex-shrink-0 w-12 h-12 bg-white border-2 border-blue-600 text-blue-600 rounded-full flex items-center justify-center font-bold text-xl z-0 shadow-sm relative">
                  {idx + 1}
                </div>
                <div className="space-y-2 pt-2">
                  <h3 className="text-xl font-bold text-slate-800">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Screenshots (Gallery) */}
        {article.screenshots.length > 1 && (
          <section className="space-y-12">
            <h2 className="text-3xl font-bold text-slate-900 text-center flex items-center justify-center gap-3">
              <span className="w-12 h-1 bg-slate-200 rounded-full"></span>
              スクリーンショット
              <span className="w-12 h-1 bg-slate-200 rounded-full"></span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {article.screenshots.slice(1).map((src, idx) => (
                <div key={idx} className="relative aspect-video bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 shadow-xl group hover:shadow-2xl transition-all duration-500">
                  <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium bg-slate-50">
                    {src.split('/').pop()}
                  </div>
                  {/* <Image src={src} alt={`${product.title} screenshot ${idx + 2}`} fill className="object-cover group-hover:scale-105 transition-transform duration-700" /> */}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 7. Tech Stack & Development Background & Bottom CTA */}
        <section className="space-y-24 py-12">
          <div className="space-y-10 max-w-3xl mx-auto">
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
                使用技術
              </h2>
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-xl text-sm font-bold shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
                開発背景
              </h2>
              <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 italic text-slate-600 leading-relaxed shadow-inner">
                &ldquo;{article.background}&rdquo;
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-8 pt-12 border-t border-slate-100">
            <Link
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-12 py-5 text-xl font-bold text-white bg-blue-900 rounded-2xl hover:bg-blue-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              プロダクトページへ
              <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
