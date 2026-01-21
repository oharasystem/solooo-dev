import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products | solooo.dev',
  description: 'All products developed by Ohara System.',
};

export default function ProductsPage() {
  return (
    <div className="container mx-auto max-w-6xl py-12">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">All Products</h1>
        <p className="text-gray-600">
          A collection of web services and tools I&apos;ve built.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
