'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
}

const statusColors = {
  released: 'bg-green-100 text-green-800 border-green-200',
  beta: 'bg-blue-100 text-blue-800 border-blue-200',
  development: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  archived: 'bg-gray-100 text-gray-800 border-gray-200',
};

const statusLabels = {
  released: 'Released',
  beta: 'Beta',
  development: 'Development',
  archived: 'Archived',
};

export default function ProductCard({ product }: ProductCardProps) {
  const router = useRouter();
  const hasArticle = !!product.article;
  const detailHref = `/products/${product.id}`;
  const externalHref = product.url;

  const handleCardClick = () => {
    if (hasArticle) {
      router.push(detailHref);
    } else {
      window.open(externalHref, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div 
      onClick={handleCardClick}
      className="group relative border border-gray-200 rounded-2xl p-6 bg-white hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full overflow-hidden cursor-pointer"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-900 transition-colors line-clamp-1" title={product.title}>
          {product.title}
        </h3>
        <span
          className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded border ${statusColors[product.status]}`}
        >
          {statusLabels[product.status]}
        </span>
      </div>

      {product.releaseDate && (
        <div className="text-xs text-gray-400 mb-3 font-medium">
          Released: {product.releaseDate}
        </div>
      )}

      <p className="text-slate-600 mb-6 flex-grow text-sm leading-relaxed">
        {product.description}
      </p>

      <div className="mt-auto space-y-6">
        <div className="flex flex-wrap gap-1.5">
          {product.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="bg-slate-50 text-slate-500 text-[10px] font-bold px-2 py-0.5 rounded border border-slate-100"
            >
              {tag}
            </span>
          ))}
          {product.tags.length > 4 && (
            <span className="text-[10px] text-slate-400 self-center">+{product.tags.length - 4}</span>
          )}
        </div>

        {hasArticle && (
          <div className="relative z-20">
            <Link
              href={externalHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full px-4 py-2.5 text-xs font-bold text-white bg-blue-900 rounded-xl hover:bg-blue-800 transition-all shadow-md hover:shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              プロダクトページへ
              <svg
                className="w-3.5 h-3.5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </Link>
          </div>
        )}
        
        {!hasArticle && (
          <div className="pt-2 text-xs font-bold text-blue-600 flex items-center justify-end group-hover:translate-x-1 transition-transform">
            プロダクトページへ →
          </div>
        )}
      </div>
    </div>
  );
}
