import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: 'nengo',
    title: '年号マスター (Nengo-Master)',
    description: '和暦と西暦を瞬時に変換・検索できるユーティリティツール。',
    url: 'https://nengo.solooo.dev',
    status: 'released',
    tags: ['Tool', 'Hono'],
    isFeatured: true,
  },
  {
    id: 'solooo',
    title: 'solooo.dev',
    description: 'Ohara Systemの個人開発プロダクト一覧兼ポートフォリオサイト。',
    url: 'https://solooo.dev',
    status: 'development',
    tags: ['Portfolio', 'Next.js'],
    isFeatured: false,
  },
];
