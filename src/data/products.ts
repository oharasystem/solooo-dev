import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: 'chousei-master',
    title: '調整マスター',
    description: 'ログイン不要、30秒でイベント作成。日程調整だけでなく、場所や内容のアンケートも同時に集計できる次世代スケジューリングツール。',
    url: 'https://chousei-master.solooo.dev',
    status: 'released',
    tags: ['HonoX', 'D1', 'Radix UI'],
    isFeatured: true,
    releaseDate: '2026-02-11',
  },
  {
    id: 'soku-p',
    title: 'Soku-p',
    description: 'WebAssemblyを使用したクライアントサイド画像変換ツール。画像をサーバーに送信せず、ブラウザ上で高速にPNG/JPEG/WebP/AVIF等の相互変換が可能。',
    url: 'https://soku-p.solooo.dev',
    status: 'released',
    tags: ['Photon', 'Hono', 'WebAssembly'],
    isFeatured: false,
    releaseDate: '2026-02-01',
  },
  {
    id: 'id-photo',
    title: '証明写真マスター',
    description: 'スマホで撮影した写真を、履歴書やパスポートなどの規格サイズに自動調整。コンビニでL判印刷するだけで証明写真が作れる、プライバシー重視の作成ツール。',
    url: 'https://id-photo.solooo.dev',
    status: 'released',
    tags: ['React Easy Crop', 'Radix UI', 'Privacy'],
    isFeatured: true,
    releaseDate: '2026-01-29',
  },
  {
    id: 'nengo',
    title: '年号マスター',
    description: '和暦と西暦を瞬時に変換・検索できるユーティリティツール。計算ロジックや早見表も搭載。',
    url: 'https://nengo.solooo.dev',
    status: 'released',
    tags: ['Hono', 'Cloudflare Workers', 'Minimal'],
    isFeatured: true,
    releaseDate: '2026-01-19',
  },

];
