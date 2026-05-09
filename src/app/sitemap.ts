import { MetadataRoute } from 'next';
import { products } from '@/data/products';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://solooo.dev';

  // 基本ページ
  const routes = [
    '',
    '/products',
    '/about',
    '/contact',
    '/privacy',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // プロダクト詳細ページ
  const productRoutes = products
    .filter((p) => p.article)
    .map((p) => ({
      url: `${baseUrl}/products/${p.id}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }));

  return [...routes, ...productRoutes];
}
