import Link from 'next/link';
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
  return (
    <div className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-slate-900 line-clamp-1" title={product.title}>
          {product.title}
        </h3>
        <span
          className={`text-xs font-medium px-2.5 py-0.5 rounded border ${
            statusColors[product.status]
          }`}
        >
          {statusLabels[product.status]}
        </span>
      </div>

      <p className="text-gray-600 mb-6 flex-grow text-sm leading-relaxed">
        {product.description}
      </p>

      <div className="mt-auto">
        <div className="flex flex-wrap gap-2 mb-6">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="bg-slate-50 text-slate-600 text-xs px-2 py-1 rounded border border-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link
          href={product.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-slate-900 rounded-md hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900"
        >
          Visit Website
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
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
