import React, { useEffect, useRef } from 'react';
import { X, ArrowLeft, ArrowRight } from 'lucide-react';

interface LightboxProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
  title?: string;
}

export function Lightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
  title = 'Gallery Image',
}: LightboxProps) {
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + images.length) % images.length);
      if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % images.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, currentIndex, images.length, onClose, onNavigate]);

  if (!isOpen || images.length === 0) return null;

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartX.current) return;
    const distance = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(distance) > 50) {
      if (distance > 0) {
        onNavigate((currentIndex + 1) % images.length);
      } else {
        onNavigate((currentIndex - 1 + images.length) % images.length);
      }
    }
    touchStartX.current = null;
  };

  return (
    <div
      id="gallery-lightbox-modal"
      className="fixed inset-0 z-50 bg-[#1a1a1a]/95 backdrop-blur-md flex flex-col p-4 sm:p-6 select-none animate-fade-in"
      role="dialog"
      aria-modal="true"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Header */}
      <div className="flex items-center justify-between text-[#f4f1ea] pb-4 border-b border-white/15">
        <div>
          <span className="text-[11px] font-mono text-[#c5beb3] uppercase tracking-[0.2em] block">
            {title}
          </span>
          <span className="text-xs text-[#a8a29e] font-mono">
            {currentIndex + 1} of {images.length}
          </span>
        </div>

        <button
          id="close-lightbox-btn"
          type="button"
          onClick={onClose}
          className="p-2.5 bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Close Lightbox"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Large Image Stage */}
      <div className="flex-1 relative flex items-center justify-center py-4 overflow-hidden">
        <img
          src={images[currentIndex]}
          alt={`${title} - view ${currentIndex + 1}`}
          className="max-h-[82vh] max-w-[92vw] object-contain shadow-2xl transition-all duration-300"
        />

        {/* Floating Arrows */}
        {images.length > 1 && (
          <>
            <button
              id="lightbox-prev-btn"
              type="button"
              onClick={() => onNavigate((currentIndex - 1 + images.length) % images.length)}
              className="absolute left-2 sm:left-6 p-3 bg-black/60 hover:bg-black text-white border border-white/20 transition-all"
              aria-label="Previous Image"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              id="lightbox-next-btn"
              type="button"
              onClick={() => onNavigate((currentIndex + 1) % images.length)}
              className="absolute right-2 sm:right-6 p-3 bg-black/60 hover:bg-black text-white border border-white/20 transition-all"
              aria-label="Next Image"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {/* Bottom Thumbnail Rail */}
      {images.length > 1 && (
        <div className="pt-3 border-t border-white/15 flex items-center justify-center gap-2 overflow-x-auto no-scrollbar">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => onNavigate(idx)}
              className={`w-14 h-10 shrink-0 overflow-hidden border transition-all ${
                idx === currentIndex ? 'border-[#f4f1ea] scale-105' : 'border-white/20 opacity-50 hover:opacity-100'
              }`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
