import type { Metadata } from 'next';
import Image from 'next/image';
import { ExternalLink, Award, Code2, Rocket, Heart, Coffee } from 'lucide-react';

export const metadata: Metadata = {
  title: 'プロフィール',
  description: 'solooo.devの開発者プロフィールと事業情報。飲食業界からITエンジニアへ転身し、現在は40歳までの起業を目指し「資産としてのプロダクト開発」に挑戦しています。',
};

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

const businessInfo = [
  { label: '屋号', value: 'Ohara System (大原システム)' },
  { label: '事業形態', value: '個人事業主' },
  { label: '事業内容', value: 'Webサービス開発、GIS開発、技術コンサルティング' },
  { label: '所在地', value: '東京都' },
];

const certifications = [
  'ITパスポート',
  '基本情報技術者',
  '応用情報技術者',
  'データベーススペシャリスト',
  'ネットワークスペシャリスト',
  '情報処理安全確保支援士（合格）',
];

const experiencedTech = [
  'Next.js',
  'React',
  'Java',
  'C#',
  'PHP (Laravel / CodeIgniter / Zend)',
  'Python',
  'JavaScript (jQuery)',
  'AWS',
];

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-3xl py-12 space-y-20">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Go Solo. Make Waves.</h1>
        <p className="text-xl text-slate-600 font-medium">Ohara System / solooo.dev</p>
      </section>

      {/* Story Section */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-slate-900 border-b border-slate-100 pb-2">
          <Rocket className="w-6 h-6 text-blue-600" />
          <h2 className="text-2xl font-bold">40歳での起業を目指す、フルスタックの造船所</h2>
        </div>
        <div className="text-gray-700 leading-relaxed space-y-4">
          <p>
            26歳で飲食業界からITエンジニアへ転身。以来、SES、受託開発（GIS）を経て、現在は教育系B2Cサービスのフルスタックエンジニアとして、設計から開発、インフラ、リーダー業務まで幅広く担っています。
          </p>
          <p>
            私の目標は明確です。40歳までに自らの手で起業すること。
            家族を支える責任を果たしながら、その夢を現実にするための手段として、現在は副業と個人開発という形で「小さく、しかし確実に」歩みを進めています。
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-slate-900 border-b border-slate-100 pb-2">
          <Code2 className="w-6 h-6 text-indigo-600" />
          <h2 className="text-2xl font-bold">開発のこだわりと技術スタック</h2>
        </div>
        <div className="text-gray-700 leading-relaxed space-y-4">
          <p>
            個人開発においては、単にコードを書くのではなく<span className="font-bold">「ビジネス的な働き方」</span>と<span className="font-bold">「資産としてのモノづくり」</span>を重視しています。
            AI技術を最大限に活用し、圧倒的な低コストで最高のパフォーマンスを発揮すること。そして、シンプルで使いやすいプロダクトを最短距離で届けることにこだわっています。
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {techStack.map((tech) => (
              <span key={tech} className="px-3 py-1 bg-slate-50 text-slate-700 border border-slate-200 rounded-full text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Tech Backbone Section */}
      <section className="space-y-8">
        <div className="flex items-center gap-2 text-slate-900 border-b border-slate-100 pb-2">
          <Award className="w-6 h-6 text-amber-500" />
          <h2 className="text-2xl font-bold">技術的バックボーン</h2>
        </div>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">保有資格</h3>
            <div className="flex flex-wrap gap-3">
              {certifications.map((cert) => (
                <div key={cert} className="px-4 py-2 bg-amber-50 text-amber-800 border border-amber-200 rounded-full text-sm font-bold shadow-sm flex items-center gap-2">
                  <Award className="w-3.5 h-3.5" />
                  {cert}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">経験言語・フレームワーク</h3>
            <div className="flex flex-wrap gap-2">
              {experiencedTech.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-white text-slate-600 border border-slate-200 rounded-md text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* External Links Section */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-slate-900 border-b border-slate-100 pb-2">
          <ExternalLink className="w-6 h-6 text-slate-600" />
          <h2 className="text-2xl font-bold">外部リンク</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <a
            href="https://x.com/solooo_dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between px-6 py-4 bg-white border border-slate-200 rounded-lg hover:border-slate-900 hover:text-slate-900 transition-all group shadow-sm hover:shadow-md"
          >
            <div className="flex items-center gap-3">
              <Image src="/x_logo.svg" alt="X" width={20} height={20} />
              <span className="font-bold text-sm">X</span>
            </div>
            <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="https://github.com/oharasystem"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between px-6 py-4 bg-white border border-slate-200 rounded-lg hover:border-slate-900 hover:text-slate-900 transition-all group shadow-sm hover:shadow-md"
          >
            <div className="flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
                <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
              <span className="font-bold text-sm">GitHub</span>
            </div>
            <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="https://qiita.com/solooo_dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between px-6 py-4 bg-white border border-slate-200 rounded-lg hover:border-[#55C500] hover:text-[#55C500] transition-all group shadow-sm hover:shadow-md"
          >
            <div className="flex items-center gap-3">
              <Image src="/qiita.png" alt="Qiita" width={20} height={20} className="rounded-sm" />
              <span className="font-bold text-sm">Qiita</span>
            </div>
            <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </section>

      {/* Business Info Section */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-slate-900 border-b border-slate-100 pb-2">
          <Coffee className="w-6 h-6 text-slate-600" />
          <h2 className="text-2xl font-bold">事業情報 & ライフ</h2>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm">
          <dl className="divide-y divide-slate-200">
            {businessInfo.map((item) => (
              <div key={item.label} className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-6 py-4 hover:bg-slate-50 transition-colors">
                <dt className="text-sm font-semibold text-slate-900">{item.label}</dt>
                <dd className="text-sm text-slate-600 sm:col-span-2">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
          <Heart className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
          <p className="text-sm text-slate-600 leading-relaxed">
            プライベートでは、妻と二人の子供と過ごす時間を何よりも大切にしています。一人の時間はサウナでリフレッシュしたり、お酒を片手に映画やYouTubeを観て、次のプロダクトのインスピレーションを得ています。
          </p>
        </div>
      </section>
    </div>
  );
}
