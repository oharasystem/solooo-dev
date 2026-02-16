import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  description: 'solooo.devのプライバシーポリシー',
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto max-w-2xl py-12 md:py-24">
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">プライバシーポリシー</h1>
      <div className="space-y-10 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-gray-100">1. 個人情報の利用目的</h2>
          <p>
            当サイトでは、お問い合わせの際にお名前やメールアドレス等の個人情報をご入力いただく場合がございます。
            <br />
            取得した個人情報は、お問い合わせに対する回答や必要な情報を電子メール等でご連絡する場合にのみ利用し、これらの目的以外では利用いたしません。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-gray-100">2. アクセス解析ツールについて</h2>
          <p>
            当サイトでは、サイトの利用状況を把握するためにGoogle Analytics等のアクセス解析ツールを利用しています。
            <br />
            これらはデータの収集のためにCookie（クッキー）を使用しますが、このデータは匿名で収集されており、個人を特定するものではありません。
            <br />
            この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-gray-100">3. 免責事項</h2>
          <p>
            当サイトからリンクやバナーなどによって他のサイトに移動された場合、移動先サイトで提供される情報、サービス等について一切の責任を負いません。
            <br />
            また、当サイトのコンテンツ・情報について、可能な限り正確な情報を掲載するよう努めておりますが、正確性や安全性を保証するものではありません。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-gray-100">4. 著作権について</h2>
          <p>
            当サイトに掲載されている文章・画像・プログラム等のコンテンツの著作権は、当サイト運営者または各権利所有者に帰属します。
            <br />
            法的に認められる引用の範囲を超えて、無断で転載・複製することを禁止します。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-gray-100">5. お問い合わせ</h2>
          <p className="mb-4">
            当サイトの個人情報の取扱に関するお問い合わせは、下記までご連絡ください。
          </p>
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
            <dl className="grid grid-cols-1 gap-y-2 sm:grid-cols-[auto_1fr] sm:gap-x-4">
              <dt className="font-bold text-slate-900">運営者：</dt>
              <dd>solooo.dev 管理人</dd>
              <dt className="font-bold text-slate-900">お問い合わせ：</dt>
              <dd>
                <Link href="/contact" className="text-blue-600 hover:text-blue-800 hover:underline break-all">
                  https://solooo.dev/contact
                </Link>
              </dd>
            </dl>
          </div>
        </section>

        <p className="text-sm text-gray-500 pt-8 mt-12 border-t border-gray-200 text-right">
          制定日：2025年1月26日
        </p>
      </div>
    </div>
  );
}
