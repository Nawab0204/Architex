import React, { useState } from 'react';
import { TechnicalDrawing } from '../types';
import { Maximize2, ZoomIn, ZoomOut, X, ArrowLeft, ArrowRight, FileText } from 'lucide-react';

interface ProjectDrawingsViewerProps {
  drawings: TechnicalDrawing[];
  projectTitle: string;
}

export function ProjectDrawingsViewer({ drawings, projectTitle }: ProjectDrawingsViewerProps) {
  const [activeDrawingIndex, setActiveDrawingIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  if (!drawings || drawings.length === 0) return null;

  const currentDrawing = drawings[activeDrawingIndex];

  const handlePrev = () => {
    setActiveDrawingIndex((prev) => (prev - 1 + drawings.length) % drawings.length);
    setZoomLevel(1);
  };

  const handleNext = () => {
    setActiveDrawingIndex((prev) => (prev + 1) % drawings.length);
    setZoomLevel(1);
  };

  return (
    <div id="technical-drawings-viewer" className="space-y-6">
      {/* Drawings Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-[#dcd8cc] no-scrollbar">
        {drawings.map((drawing, idx) => {
          const isActive = idx === activeDrawingIndex;
          return (
            <button
              key={drawing.id}
              id={`drawing-tab-${idx}`}
              type="button"
              onClick={() => {
                setActiveDrawingIndex(idx);
                setZoomLevel(1);
              }}
              className={`px-4 py-2.5 text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all border ${
                isActive
                  ? 'bg-[#1a1a1a] text-[#f4f1ea] border-[#1a1a1a]'
                  : 'bg-white text-[#5c5850] border-[#dcd8cc] hover:border-[#1a1a1a]'
              }`}
            >
              <span className="font-bold">{drawing.type}:</span> {drawing.title}
            </button>
          );
        })}
      </div>

      {/* Main Drawing Showcase Frame */}
      <div className="relative bg-[#ffffff] border border-[#dcd8cc] p-4 sm:p-8 overflow-hidden group shadow-[6px_6px_0px_0px_rgba(26,26,26,0.04)]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-[#dcd8cc]/50">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#736e65]">
              <span className="uppercase tracking-wider font-semibold">{currentDrawing.type}</span>
              {currentDrawing.scale && <span>• Scale {currentDrawing.scale}</span>}
            </div>
            <h4 className="font-serif text-xl font-normal text-[#1a1a1a] mt-0.5">{currentDrawing.title}</h4>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="expand-drawing-modal-btn"
              type="button"
              onClick={() => setIsFullscreen(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#f4f1ea] hover:bg-[#e8e4d8] border border-[#dcd8cc] text-[11px] font-mono uppercase tracking-wider text-[#1a1a1a] transition-colors"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Full Screen View</span>
            </button>
          </div>
        </div>

        {/* Drawing Image Stage */}
        <div
          onClick={() => setIsFullscreen(true)}
          className="relative bg-[#f8f6f0] border border-[#dcd8cc] overflow-hidden cursor-zoom-in aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center"
        >
          <img
            src={currentDrawing.image}
            alt={`${currentDrawing.type}: ${currentDrawing.title}`}
            className="w-full h-full object-contain object-center transition-transform duration-300"
            loading="lazy"
          />
          <div className="absolute bottom-3 right-3 bg-[#1a1a1a]/90 backdrop-blur-sm text-[#f4f1ea] px-3 py-1.5 text-[10px] font-mono uppercase tracking-wider flex items-center gap-1.5">
            <ZoomIn className="w-3.5 h-3.5" />
            <span>Click to inspect</span>
          </div>
        </div>

        {/* Technical Caption Description */}
        <p className="mt-4 text-xs sm:text-sm text-[#5c5850] font-light leading-relaxed">
          {currentDrawing.description}
        </p>
      </div>

      {/* Fullscreen Lightbox / Drawing Inspection Modal */}
      {isFullscreen && (
        <div
          id="drawing-fullscreen-modal"
          className="fixed inset-0 z-50 bg-[#1a1a1a]/95 backdrop-blur-md flex flex-col p-4 sm:p-8 animate-fade-in"
          role="dialog"
          aria-modal="true"
        >
          {/* Top Modal Controls */}
          <div className="flex items-center justify-between text-[#f4f1ea] pb-4 border-b border-white/20">
            <div>
              <span className="text-[11px] font-mono text-[#c5beb3] uppercase tracking-[0.2em] block">
                {projectTitle} • {currentDrawing.type} {currentDrawing.scale && `(${currentDrawing.scale})`}
              </span>
              <h3 className="font-serif text-xl font-normal text-[#f4f1ea] mt-0.5">{currentDrawing.title}</h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                id="zoom-out-drawing-btn"
                type="button"
                onClick={() => setZoomLevel((z) => Math.max(z - 0.25, 0.75))}
                className="p-2.5 bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="font-mono text-xs text-[#c5beb3] px-2">{Math.round(zoomLevel * 100)}%</span>
              <button
                id="zoom-in-drawing-btn"
                type="button"
                onClick={() => setZoomLevel((z) => Math.min(z + 0.5, 3))}
                className="p-2.5 bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                id="close-drawing-modal-btn"
                type="button"
                onClick={() => {
                  setIsFullscreen(false);
                  setZoomLevel(1);
                }}
                className="p-2.5 bg-white/10 hover:bg-white/20 text-white ml-3 transition-colors"
                aria-label="Close Fullscreen"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Image Viewport */}
          <div className="flex-1 overflow-auto flex items-center justify-center p-4">
            <img
              src={currentDrawing.image}
              alt={currentDrawing.title}
              className="max-h-full max-w-full object-contain transition-transform duration-200 select-none shadow-2xl"
              style={{ transform: `scale(${zoomLevel})` }}
            />
          </div>

          {/* Bottom Controls */}
          <div className="pt-4 border-t border-white/20 flex items-center justify-between text-[#f4f1ea] text-xs font-mono">
            <span className="text-[#a8a29e]">
              DRAWING {activeDrawingIndex + 1} OF {drawings.length}
            </span>
            <div className="flex items-center gap-2">
              <button
                id="modal-prev-drawing"
                type="button"
                onClick={handlePrev}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 flex items-center gap-1 text-[#f4f1ea] uppercase tracking-wider text-[11px] transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Previous
              </button>
              <button
                id="modal-next-drawing"
                type="button"
                onClick={handleNext}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 flex items-center gap-1 text-[#f4f1ea] uppercase tracking-wider text-[11px] transition-colors"
              >
                Next <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
