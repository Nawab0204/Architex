import React, { useEffect, useRef, useState } from 'react';
import { X, ArrowLeft, ArrowRight, ZoomIn, ZoomOut, RotateCcw, Maximize2 } from 'lucide-react';

interface LightboxItem {
  source: string;
  caption?: string;
  type?: string;
  aspectRatio?: string;
}

interface LightboxProps {
  images: Array<string | LightboxItem>;
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
  title?: string;
  scaleBadge?: string;
}

export function Lightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
  title = 'Architectural Render / Drawing',
  scaleBadge,
}: LightboxProps) {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [panPosition, setPanPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const panStartRef = useRef({ x: 0, y: 0 });
  const touchStartX = useRef<number | null>(null);

  // Normalize image data
  const currentItem = images[currentIndex];
  const currentSrc = typeof currentItem === 'string' ? currentItem : currentItem?.source;
  const currentCaption = typeof currentItem === 'object' ? currentItem?.caption : undefined;

  const handleReset = () => {
    setZoomLevel(1);
    setPanPosition({ x: 0, y: 0 });
  };

  useEffect(() => {
    handleReset();
  }, [currentIndex]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onNavigate((currentIndex - 1 + images.length) % images.length);
      } else if (e.key === 'ArrowRight') {
        onNavigate((currentIndex + 1) % images.length);
      } else if (e.key === '+' || e.key === '=') {
        setZoomLevel((z) => Math.min(z + 0.25, 4));
      } else if (e.key === '-') {
        setZoomLevel((z) => Math.max(z - 0.25, 0.75));
      } else if (e.key === '0') {
        handleReset();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, currentIndex, images.length, onClose, onNavigate]);

  if (!isOpen || images.length === 0) return null;

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel <= 1) return;
    setIsDragging(true);
    dragStartRef.current = { x: e.clientX, y: e.clientY };
    panStartRef.current = { ...panPosition };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;
    setPanPosition({
      x: panStartRef.current.x + dx,
      y: panStartRef.current.y + dy,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartX.current) return;
    const distance = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(distance) > 50 && zoomLevel <= 1) {
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
      className="fixed inset-0 z-50 bg-[#111111]/98 backdrop-blur-md flex flex-col p-4 sm:p-6 select-none animate-fade-in"
      role="dialog"
      aria-modal="true"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Header Controls */}
      <div className="flex items-center justify-between text-[#FBFBF9] pb-3.5 border-b border-white/15">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono text-white/60 uppercase tracking-[0.2em] block">
              {title}
            </span>
            {scaleBadge && (
              <span className="bg-white/10 text-white px-2 py-0.5 text-[9px] font-mono border border-white/20">
                {scaleBadge}
              </span>
            )}
          </div>
          <span className="text-xs text-white/80 font-mono">
            Plate {currentIndex + 1} of {images.length}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Zoom controls */}
          <div className="flex items-center border border-white/20 bg-white/5 rounded">
            <button
              type="button"
              onClick={() => setZoomLevel((z) => Math.max(z - 0.25, 0.75))}
              className="p-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              title="Zoom Out (-)"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="px-2 text-xs font-mono text-white/90">
              {Math.round(zoomLevel * 100)}%
            </span>
            <button
              type="button"
              onClick={() => setZoomLevel((z) => Math.min(z + 0.25, 4))}
              className="p-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              title="Zoom In (+)"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
          </div>

          <button
            type="button"
            onClick={handleReset}
            className="p-2 border border-white/20 bg-white/5 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            title="Reset Zoom (0)"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          <button
            id="close-lightbox-btn"
            type="button"
            onClick={onClose}
            className="p-2 bg-white/10 hover:bg-red-600 text-white ml-2 transition-colors cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Image Stage */}
      <div
        className={`flex-1 relative flex items-center justify-center py-4 overflow-hidden ${
          zoomLevel > 1 ? (isDragging ? 'cursor-grabbing' : 'cursor-grab') : 'cursor-default'
        }`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div
          className="relative transition-transform duration-75 select-none"
          style={{
            transform: `translate(${panPosition.x}px, ${panPosition.y}px) scale(${zoomLevel})`,
            transformOrigin: 'center center',
          }}
        >
          <img
            src={currentSrc}
            alt={currentCaption || `${title} view ${currentIndex + 1}`}
            draggable={false}
            className="max-h-[76vh] max-w-[90vw] object-contain shadow-2xl pointer-events-none"
          />
        </div>

        {/* Floating Arrows */}
        {images.length > 1 && (
          <>
            <button
              id="lightbox-prev-btn"
              type="button"
              onClick={() => onNavigate((currentIndex - 1 + images.length) % images.length)}
              className="absolute left-3 sm:left-6 p-3 bg-black/60 hover:bg-black text-white border border-white/20 transition-all cursor-pointer"
              aria-label="Previous Image"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              id="lightbox-next-btn"
              type="button"
              onClick={() => onNavigate((currentIndex + 1) % images.length)}
              className="absolute right-3 sm:right-6 p-3 bg-black/60 hover:bg-black text-white border border-white/20 transition-all cursor-pointer"
              aria-label="Next Image"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {/* Bottom Caption and Thumbnail Rail */}
      <div className="pt-3 border-t border-white/15 space-y-2">
        {currentCaption && (
          <p className="text-center text-xs font-mono text-white/80 max-w-2xl mx-auto truncate">
            {currentCaption}
          </p>
        )}

        {images.length > 1 && (
          <div className="flex items-center justify-center gap-2 overflow-x-auto no-scrollbar py-1">
            {images.map((item, idx) => {
              const src = typeof item === 'string' ? item : item.source;
              return (
                <button
                  key={idx}
                  onClick={() => onNavigate(idx)}
                  className={`w-14 h-10 shrink-0 overflow-hidden border transition-all cursor-pointer ${
                    idx === currentIndex
                      ? 'border-[#FBFBF9] scale-105 ring-1 ring-white'
                      : 'border-white/20 opacity-50 hover:opacity-100'
                  }`}
                >
                  <img src={src} alt="" className="w-full h-full object-cover" />
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
