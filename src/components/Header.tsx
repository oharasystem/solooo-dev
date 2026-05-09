'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, LayoutGrid, User, Mail } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // ページ遷移時にメニューを閉じる
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // 外側をクリックした時に閉じる
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isOpen && !(e.target as Element).closest('.mobile-menu-container')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <header className="p-4 border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto max-w-6xl flex items-center justify-between relative mobile-menu-container">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="solooo.dev"
            width={150}
            height={40}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-bold text-slate-600">
          <Link href="/products" className="hover:text-blue-900 transition-colors">
            プロダクト
          </Link>
          <Link href="/about" className="hover:text-blue-900 transition-colors">
            プロフィール
          </Link>
          <Link href="/contact" className="hover:text-blue-900 transition-colors">
            お問い合わせ
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-slate-600 hover:text-blue-900 transition-colors bg-slate-50 rounded-xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Floating Compact Dropdown */}
        <div
          className={`absolute top-16 right-0 w-64 bg-white border border-slate-100 rounded-[2rem] shadow-2xl z-50 transition-all duration-300 origin-top-right transform ${
            isOpen 
              ? 'scale-100 opacity-100 translate-y-0' 
              : 'scale-95 opacity-0 -translate-y-2 pointer-events-none'
          } md:hidden`}
        >
          <div className="p-2">
            <nav className="flex flex-col">
              <Link
                href="/products"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-4 p-4 hover:bg-slate-50 rounded-2xl transition-colors text-slate-700 font-bold group border-b border-slate-50/50 last:border-0"
              >
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <LayoutGrid size={20} />
                </div>
                プロダクト
              </Link>
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-4 p-4 hover:bg-slate-50 rounded-2xl transition-colors text-slate-700 font-bold group border-b border-slate-50/50 last:border-0"
              >
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <User size={20} />
                </div>
                プロフィール
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-4 p-4 hover:bg-slate-50 rounded-2xl transition-colors text-slate-700 font-bold group border-b border-slate-50/50 last:border-0"
              >
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Mail size={20} />
                </div>
                お問い合わせ
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
