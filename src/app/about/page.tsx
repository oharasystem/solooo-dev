import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Information about Ohara System and the developer.',
};

const techStack = [
  'Next.js',
  'Cloudflare',
  'Hono',
  'TypeScript',
  'TailwindCSS',
];

const businessInfo = [
  { label: '屋号', value: 'Ohara System (大原システム)' },
  { label: '事業形態', value: '個人事業主' },
  { label: '事業内容', value: 'Webサービス開発、モバイルアプリケーション開発' },
  { label: '所在地', value: '東京都' },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-3xl py-12 space-y-16">
      {/* Profile Section */}
      <section>
        <h1 className="text-3xl font-bold text-slate-900 mb-8">開発者プロフィール</h1>
        <div className="bg-white p-0">
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            東京を拠点に活動するソフトウェアエンジニア・個人開発者。
          </p>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="inline-block px-4 py-2 bg-slate-50 border border-slate-200 rounded-md text-slate-700 font-medium text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Business Info Section */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">事業情報</h2>
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <dl className="divide-y divide-gray-200">
            {businessInfo.map((item) => (
              <div key={item.label} className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-6 py-4 hover:bg-slate-50 transition-colors">
                <dt className="text-sm font-medium text-slate-900">{item.label}</dt>
                <dd className="text-sm text-gray-600 sm:col-span-2">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </div>
  );
}
