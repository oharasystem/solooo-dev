'use client';

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import Image from 'next/image';
import { ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ScreenshotContextType {
  title: string;
  url?: string;
  screenshots: string[];
  openModal: (index: number) => void;
}

const ScreenshotContext = createContext<ScreenshotContextType | null>(null);

export function ScreenshotProvider({
  title,
  url,
  screenshots,
  children,
}: {
  title: string;
  url?: string;
  screenshots: string[];
  children: ReactNode;
}) {
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  const openModal = useCallback((index: number) => {
    setModalIndex(index);
  }, []);

  const closeModal = useCallback(() => {
    setModalIndex(null);
  }, []);

  const showNext = useCallback(() => {
    if (modalIndex !== null) {
      setModalIndex((modalIndex + 1) % screenshots.length);
    }
  }, [modalIndex, screenshots.length]);

  const showPrev = useCallback(() => {
    if (modalIndex !== null) {
      setModalIndex((modalIndex - 1 + screenshots.length) % screenshots.length);
    }
  }, [modalIndex, screenshots.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (modalIndex === null) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };

    if (modalIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalIndex, closeModal, showNext, showPrev]);

  return (
    <ScreenshotContext.Provider value={{ title, url, screenshots, openModal }}>
      {children}

      {/* Lightbox Modal */}
      {modalIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-between p-4 md:p-6 animate-in fade-in duration-200"
          onClick={closeModal}
        >
          {/* Top Bar (Title & Counter & Close Button) */}
          <div
            className="w-full max-w-6xl flex items-center justify-between text-white/80 py-2 px-2 select-none"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-sm font-medium text-slate-300">
              {title} <span className="text-slate-500 mx-1.5">|</span> ({modalIndex + 1} / {screenshots.length})
            </div>
            <button
              onClick={closeModal}
              className="p-2 rounded-full hover:bg-white/10 text-white transition-colors cursor-pointer"
              aria-label="閉じる"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Modal Main Viewport */}
          <div
            className="relative w-full max-w-6xl flex-1 flex items-center justify-center my-auto min-h-[300px]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prev Button */}
            {screenshots.length > 1 && (
              <button
                onClick={showPrev}
                className="absolute left-2 md:-left-12 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white transition-all backdrop-blur-sm z-10 cursor-pointer border border-white/10 shadow-xl"
                aria-label="前の画像"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {/* Enlarged Image */}
            <div className="relative w-full h-full flex items-center justify-center p-2">
              <Image
                src={screenshots[modalIndex]}
                alt={`${title} 拡大スクリーンショット ${modalIndex + 1}`}
                fill
                sizes="100vw"
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>

            {/* Next Button */}
            {screenshots.length > 1 && (
              <button
                onClick={showNext}
                className="absolute right-2 md:-right-12 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white transition-all backdrop-blur-sm z-10 cursor-pointer border border-white/10 shadow-xl"
                aria-label="次の画像"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}
          </div>

          {/* Bottom Thumbnails Navigation */}
          {screenshots.length > 1 && (
            <div
              className="mt-4 flex items-center gap-2 overflow-x-auto max-w-full py-2 px-4 bg-slate-900/80 rounded-2xl border border-white/10 backdrop-blur-sm select-none"
              onClick={(e) => e.stopPropagation()}
            >
              {screenshots.map((src, idx) => (
                <button
                  key={src}
                  onClick={() => setModalIndex(idx)}
                  className={`relative w-16 h-12 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 cursor-pointer ${
                    modalIndex === idx
                      ? 'border-blue-500 scale-105 shadow-md shadow-blue-500/30'
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={src}
                    alt={`サムネイル ${idx + 1}`}
                    fill
                    sizes="64px"
                    className="object-contain bg-slate-950"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </ScreenshotContext.Provider>
  );
}

/** 1. メインキャッチ用のブラウザ枠スクリーンショット */
export function MainScreenshot() {
  const ctx = useContext(ScreenshotContext);
  if (!ctx || ctx.screenshots.length === 0) return null;

  const mainSrc = ctx.screenshots[0];
  const displayUrl = ctx.url ? ctx.url.replace(/^https?:\/\//, '') : '';

  return (
    <div className="relative group">
      <div
        onClick={() => ctx.openModal(0)}
        className="cursor-pointer rounded-2xl md:rounded-3xl overflow-hidden bg-slate-900 shadow-2xl border border-slate-800 transition-all duration-300 hover:shadow-blue-950/20 hover:border-slate-700"
      >
        {/* Browser Header Bar */}
        <div className="px-4 py-3 bg-slate-800/95 border-b border-slate-700/80 flex items-center gap-3 select-none">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
          </div>
          {displayUrl && (
            <div className="flex-1 max-w-sm mx-auto">
              <div className="bg-slate-900/70 text-slate-400 text-xs px-3 py-1 rounded-full text-center truncate font-mono border border-slate-700/50">
                https://{displayUrl}
              </div>
            </div>
          )}
          <div className="text-slate-400 text-xs font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <ZoomIn className="w-3.5 h-3.5" />
            <span>クリックで拡大</span>
          </div>
        </div>

        {/* Image Container (object-contain, 16:9 edge-to-edge fit without extra padding) */}
        <div className="relative aspect-video w-full bg-slate-950 flex items-center justify-center">
          <div className="relative w-full h-full">
            <Image
              src={mainSrc}
              alt={`${ctx.title} メインスクリーンショット`}
              fill
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/** 2. ギャラリー用（2枚目以降の全スクショ） */
export function GalleryScreenshots() {
  const ctx = useContext(ScreenshotContext);
  if (!ctx || ctx.screenshots.length <= 1) return null;

  const galleryList = ctx.screenshots.slice(1);

  return (
    <section className="space-y-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center flex items-center justify-center gap-3 w-full max-w-md mx-auto px-4">
        <span className="flex-1 max-w-12 min-w-[12px] h-1 bg-slate-200 rounded-full"></span>
        <span className="shrink-0 whitespace-nowrap">スクリーンショット</span>
        <span className="flex-1 max-w-12 min-w-[12px] h-1 bg-slate-200 rounded-full"></span>
      </h2>

      <div
        className={`grid grid-cols-1 gap-8 md:gap-10 ${
          galleryList.length === 1
            ? 'max-w-3xl mx-auto w-full'
            : 'md:grid-cols-2'
        }`}
      >
        {galleryList.map((src, idx) => {
          const actualIndex = idx + 1;
          return (
            <div
              key={src}
              onClick={() => ctx.openModal(actualIndex)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-slate-900 shadow-md hover:shadow-2xl border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:-translate-y-1.5 flex flex-col"
            >
              {/* Browser Mini Header */}
              <div className="px-4 py-3 bg-slate-800/95 border-b border-slate-700/80 flex items-center select-none">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
                </div>
              </div>

              {/* Image Canvas (16:9 edge-to-edge fit) */}
              <div className="relative aspect-video w-full bg-slate-950 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image
                    src={src}
                    alt={`${ctx.title} スクリーンショット ${actualIndex + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
                {/* Hover Hint */}
                <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/20 transition-colors flex items-center justify-center pointer-events-none">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/80 text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5 backdrop-blur-sm shadow-lg">
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>拡大</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
