import type { Metadata } from 'next';
import Image from 'next/image';
import { Mail } from 'lucide-react';
import ContactCard from '@/components/ContactCard';

export const metadata: Metadata = {
  title: 'お問い合わせ',
  description: 'solooo.devへのお問い合わせ。お仕事のご依頼やご相談はこちらの連絡先まで。',
  openGraph: {
    title: 'お問い合わせ | solooo.dev',
    description: 'solooo.devへのお問い合わせ。お仕事のご依頼やご相談はこちらの連絡先まで。',
    url: '/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-2xl py-12 md:py-24">
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">お問い合わせ</h1>
      <p className="text-lg text-gray-700 leading-relaxed mb-8">
        お仕事のご依頼やご相談は、以下のメールアドレス、またはX (Twitter) のDMまでお願いいたします。
      </p>

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
    </div>
  );
}
