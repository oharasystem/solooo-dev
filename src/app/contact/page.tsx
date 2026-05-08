import type { Metadata } from 'next';
import Image from 'next/image';
import { Mail, MessageSquare, Code, Map, ShieldCheck, Clock } from 'lucide-react';
import ContactCard from '@/components/ContactCard';

export const metadata: Metadata = {
  title: 'お問い合わせ',
  description: 'solooo.devへのお問い合わせ。Webサービス開発、GIS開発のご依頼、技術的なご相談はこちらから。',
};

const inquiryTypes = [
  {
    icon: <Map className="w-5 h-5 text-blue-500" />,
    title: '受託開発（GIS）',
    description: '地理情報システム（GIS）の設計・開発、地図ライブラリの選定・実装などのご相談。',
  },
  {
    icon: <Code className="w-5 h-5 text-indigo-500" />,
    title: 'Webサービス・アプリ開発',
    description: 'Next.js や Cloudflare を活用したモダンな開発から、Java, C#, PHP, Python など多岐にわたる言語・フレームワークでのシステム構築まで幅広く対応します。',
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />,
    title: '技術コンサルティング',
    description: '設計レビュー、インフラ構築、小規模チームの技術支援・ユニットリードのご相談。',
  },
];

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-3xl py-12 md:py-24 space-y-16">
      {/* Header */}
      <section className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">お問い合わせ</h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          プロダクトに関するフィードバック、お仕事のご依頼、技術的なご相談など、お気軽にお問い合わせください。
        </p>
      </section>

      {/* Inquiry Types */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-slate-400" />
          ご相談いただける内容
        </h2>
        <div className="grid grid-cols-1 gap-4">
          {inquiryTypes.map((type) => (
            <div key={type.title} className="flex gap-4 p-5 bg-white border border-slate-100 rounded-xl shadow-sm">
              <div className="flex-shrink-0 mt-1">{type.icon}</div>
              <div>
                <h3 className="font-bold text-slate-900">{type.title}</h3>
                <p className="text-sm text-slate-600 mt-1 leading-relaxed">{type.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Methods */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <Mail className="w-5 h-5 text-slate-400" />
          連絡先
        </h2>
        <div className="grid grid-cols-1 gap-6">
          <ContactCard
            icon={<Mail size={24} />}
            label="Email"
            value="contact@solooo.dev"
            href="mailto:contact@solooo.dev"
            isEmail={true}
          />
          <ContactCard
            icon={<Image src="/x_logo.svg" alt="X" width={24} height={24} />}
            label="X (Twitter)"
            value="@solooo_dev"
            href="https://x.com/solooo_dev"
          />
        </div>
      </section>

      {/* Footer Info */}
      <section className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex gap-4">
        <Clock className="w-5 h-5 text-slate-400 mt-1 flex-shrink-0" />
        <div className="space-y-2">
          <h4 className="font-bold text-slate-900 text-sm">返信について</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            原則として2〜3営業日以内に返信させていただきます。もし1週間以上返信がない場合は、お手数ですが再度ご連絡いただくか、XのDMにてお知らせください。
          </p>
        </div>
      </section>
    </div>
  );
}
