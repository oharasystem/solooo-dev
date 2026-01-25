import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy of solooo.dev',
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto max-w-2xl py-12 md:py-24">
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p>
          当サイトでは、アクセス解析のためにCookieを使用する場合があります。
        </p>
        <p>
          個人情報は適切に管理し、第三者への提供は行いません。
        </p>
        <p className="text-sm text-gray-500 pt-4 border-t border-gray-100">
          制定日: 2026年X月X日
        </p>
      </div>
    </div>
  );
}
