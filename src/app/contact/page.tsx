import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Ohara System.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-2xl py-12 md:py-24">
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Contact</h1>
      <p className="text-lg text-gray-700 leading-relaxed mb-8">
        お仕事のご依頼やご相談は、以下のメールアドレス、またはX (Twitter) のDMまでお願いいたします。
      </p>

      <div className="space-y-6">
        <div>
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Email</h2>
          <a href="mailto:hello@solooo.dev" className="text-xl text-blue-900 hover:text-blue-700 font-medium hover:underline">
            hello@solooo.dev
          </a>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">X (Twitter)</h2>
          <a
            href="https://x.com/o_lab"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-blue-900 hover:text-blue-700 font-medium hover:underline"
          >
            @o_lab
          </a>
        </div>
      </div>
    </div>
  );
}
