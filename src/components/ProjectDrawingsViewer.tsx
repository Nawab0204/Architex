import React, { useState, useRef, useEffect } from 'react';
import { TechnicalDrawing } from '../types';
import {
  Maximize2,
  ZoomIn,
  ZoomOut,
  X,
  ArrowLeft,
  ArrowRight,
  FileText,
  RotateCcw,
  SlidersHorizontal,
  ExternalLink,
  Ruler,
  Info
} from 'lucide-react';

interface ProjectDrawingsViewerProps {
  drawings: TechnicalDrawing[];
  projectTitle: string;
}

export function ProjectDrawingsViewer({ drawings, projectTitle }: ProjectDrawingsViewerProps) {
  const [activeDrawingIndex, setActiveDrawingIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [showAnnotationsSidebar, setShowAnnotationsSidebar] = useState(true);

  // Pan / Drag State for Fullscreen Modal
  const [panPosition, setPanPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const panStartRef = useRef({ x: 0, y: 0 });

  if (!drawings || drawings.length === 0) return null;

  const currentDrawing = drawings[activeDrawingIndex];

  const handlePrev = () => {
    setActiveDrawingIndex((prev) => (prev - 1 + drawings.length) % drawings.length);
    setZoomLevel(1);
    setPanPosition({ x: 0, y: 0 });
  };

  const handleNext = () => {
    setActiveDrawingIndex((prev) => (prev + 1) % drawings.length);
    setZoomLevel(1);
    setPanPosition({ x: 0, y: 0 });
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
    setPanPosition({ x: 0, y: 0 });
  };

  // Keyboard navigation for inspector
  useEffect(() => {
    if (!isFullscreen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsFullscreen(false);
        handleResetZoom();
      } else if (e.key === '+' || e.key === '=') {
        setZoomLevel((z) => Math.min(z + 0.25, 4));
      } else if (e.key === '-') {
        setZoomLevel((z) => Math.max(z - 0.25, 0.75));
      } else if (e.key === '0') {
        handleResetZoom();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isFullscreen, drawings.length]);

  // Mouse pan handlers
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

  return (
    <div id="technical-drawings-viewer" className="space-y-6">
      {/* Drawings Tab Selectors */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-[#E5E5DF] no-scrollbar">
        {drawings.map((drawing, idx) => {
          const isActive = idx === activeDrawingIndex;
          return (
            <button
              key={drawing.id}
              id={`drawing-tab-${idx}`}
              type="button"
              onClick={() => {
                setActiveDrawingIndex(idx);
                handleResetZoom();
              }}
              className={`px-3.5 py-2.5 text-[11px] font-mono uppercase tracking-wider whitespace-nowrap transition-all border cursor-pointer ${
                isActive
                  ? 'bg-[#111111] text-[#FBFBF9] border-[#111111]'
                  : 'bg-[#FFFFFF] text-[#70706B] border-[#E5E5DF] hover:border-[#111111] hover:text-[#111111]'
              }`}
            >
              <span className="text-[#888888] mr-1.5">{drawing.drawingNumber || `DWG-${idx + 1}`}:</span>
              <span>{drawing.title}</span>
              {drawing.scale && (
                <span className="ml-2 px-1.5 py-0.5 text-[9px] bg-black/10 rounded">
                  {drawing.scale.split('@')[0].trim()}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Main Drawing Showcase Frame */}
      <div className="relative bg-[#FFFFFF] border border-[#E5E5DF] p-5 sm:p-8 shadow-[0_4px_16px_rgba(0,0,0,0.03)]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5 pb-4 border-b border-[#E5E5DF]">
          <div>
            <div className="flex items-center gap-2.5 text-[11px] font-mono text-[#70706B]">
              <span className="font-bold text-[#111111] uppercase tracking-wider">{currentDrawing.drawingNumber || 'DRAWING'}</span>
              <span>•</span>
              <span className="uppercase text-[#1C3B52] font-semibold">{currentDrawing.type}</span>
              {currentDrawing.scale && (
                <>
                  <span>•</span>
                  <span className="bg-[#F4F4F0] px-2 py-0.5 border border-[#E5E5DF] text-[#111111]">
                    SCALE {currentDrawing.scale}
                  </span>
                </>
              )}
            </div>
            <h4 className="font-serif text-xl sm:text-2xl font-normal text-[#111111] mt-1">
              {currentDrawing.title}
            </h4>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              id="expand-drawing-modal-btn"
              type="button"
              onClick={() => setIsFullscreen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#111111] hover:bg-[#262626] text-[#FBFBF9] text-[11px] font-mono uppercase tracking-[0.16em] transition-colors cursor-pointer"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Inspect High-Res (Pan / Zoom)</span>
            </button>

            <a
              href={currentDrawing.image}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-[#E5E5DF] hover:bg-[#F4F4F0] text-[#70706B] hover:text-[#111111] transition-colors"
              title="Open Raw Vector File in New Tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Interactive Drawing Stage Preview */}
        <div
          onClick={() => setIsFullscreen(true)}
          className="relative bg-[#FBFBF9] border border-[#E5E5DF] overflow-hidden cursor-zoom-in aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center group"
        >
          <img
            src={currentDrawing.image}
            alt={`${currentDrawing.type}: ${currentDrawing.title}`}
            className="w-full h-full object-contain object-center transition-transform duration-300 group-hover:scale-[1.01]"
            loading="lazy"
          />

          {/* Floating inspect pill */}
          <div className="absolute bottom-4 right-4 bg-[#111111]/90 backdrop-blur-sm text-[#FBFBF9] px-3.5 py-2 text-[10px] font-mono uppercase tracking-wider flex items-center gap-2 shadow-lg">
            <ZoomIn className="w-3.5 h-3.5 text-[#FBFBF9]" />
            <span>Click to Pan & Zoom Vector</span>
          </div>

          {/* Scale badge on stage */}
          {currentDrawing.scale && (
            <div className="absolute top-4 left-4 bg-white/95 border border-[#E5E5DF] px-2.5 py-1 text-[10px] font-mono text-[#111111]">
              Scale: {currentDrawing.scale}
            </div>
          )}
        </div>

        {/* Technical Caption Bar & Annotations */}
        <div className="mt-5 pt-4 border-t border-[#E5E5DF] space-y-3">
          <p className="text-xs sm:text-sm text-[#70706B] font-light leading-relaxed">
            {currentDrawing.description}
          </p>

          {currentDrawing.annotations && currentDrawing.annotations.length > 0 && (
            <div className="bg-[#F4F4F0] border border-[#E5E5DF] p-3.5">
              <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-[#111111] font-bold block mb-2">
                Drawing Technical Annotations & Callouts:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] font-mono text-[#70706B]">
                {currentDrawing.annotations.map((note, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-[#1C3B52] font-bold shrink-0">[{i + 1}]</span>
                    <span>{note}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* FULLSCREEN VECTOR DRAWING INSPECTOR MODAL */}
      {isFullscreen && (
        <div
          id="drawing-fullscreen-modal"
          className="fixed inset-0 z-50 bg-[#111111]/98 backdrop-blur-md flex flex-col animate-fade-in select-none"
          role="dialog"
          aria-modal="true"
        >
          {/* Top Modal Header */}
          <div className="flex items-center justify-between text-[#FBFBF9] px-6 py-4 border-b border-white/15 bg-black/40">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/10 border border-white/20">
                <FileText className="w-4 h-4 text-white" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-white/70 uppercase tracking-[0.2em] block">
                  {projectTitle} // {currentDrawing.drawingNumber || 'DWG'}
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-normal text-white">
                  {currentDrawing.title}
                </h3>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2">
              {/* Zoom Controls */}
              <div className="flex items-center border border-white/20 bg-white/5 rounded">
                <button
                  type="button"
                  id="inspector-zoom-out"
                  onClick={() => setZoomLevel((z) => Math.max(z - 0.25, 0.75))}
                  className="p-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                  title="Zoom Out (-)"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <span className="px-3 text-xs font-mono text-white/90">
                  {Math.round(zoomLevel * 100)}%
                </span>
                <button
                  type="button"
                  id="inspector-zoom-in"
                  onClick={() => setZoomLevel((z) => Math.min(z + 0.25, 4))}
                  className="p-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                  title="Zoom In (+)"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
              </div>

              {/* Reset Zoom */}
              <button
                type="button"
                id="inspector-reset-zoom"
                onClick={handleResetZoom}
                className="p-2 border border-white/20 bg-white/5 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                title="Reset Zoom & Pan (0)"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              {/* Toggle Annotations Sidebar */}
              <button
                type="button"
                id="inspector-toggle-sidebar"
                onClick={() => setShowAnnotationsSidebar(!showAnnotationsSidebar)}
                className={`p-2 border transition-colors ${
                  showAnnotationsSidebar
                    ? 'border-white bg-white text-black'
                    : 'border-white/20 bg-white/5 text-white/80 hover:text-white'
                }`}
                title="Toggle Drawing Notes & Spec Sidebar"
              >
                <SlidersHorizontal className="w-4 h-4" />
              </button>

              {/* Close Button */}
              <button
                type="button"
                id="inspector-close-btn"
                onClick={() => {
                  setIsFullscreen(false);
                  handleResetZoom();
                }}
                className="p-2 bg-white/10 hover:bg-red-600 text-white ml-2 transition-colors cursor-pointer"
                title="Close Inspector (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Central Workspace (Viewport + Sidebar) */}
          <div className="flex-1 flex overflow-hidden relative">
            {/* Viewport with Pan / Drag */}
            <div
              className={`flex-1 overflow-hidden relative flex items-center justify-center p-6 ${
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
                  src={currentDrawing.image}
                  alt={currentDrawing.title}
                  draggable={false}
                  className="max-h-[82vh] max-w-[85vw] object-contain shadow-2xl pointer-events-none"
                />
              </div>

              {/* Quick Scale Overlay on bottom left */}
              {currentDrawing.scale && (
                <div className="absolute bottom-5 left-5 bg-black/80 border border-white/20 px-3 py-1.5 text-xs font-mono text-white/90">
                  <span className="text-white/60 mr-1.5">SCALE:</span>
                  <span className="font-bold">{currentDrawing.scale}</span>
                </div>
              )}
            </div>

            {/* Collapsible Annotation Sidebar */}
            {showAnnotationsSidebar && (
              <aside className="w-80 sm:w-96 bg-[#161616] border-l border-white/15 p-6 overflow-y-auto space-y-5 text-[#FBFBF9] animate-fade-in">
                <div className="border-b border-white/15 pb-3">
                  <span className="text-[10px] font-mono text-white/60 uppercase tracking-[0.2em] block">
                    DRAWING SPECIFICATION
                  </span>
                  <h4 className="font-serif text-lg font-normal text-white mt-1">
                    {currentDrawing.drawingNumber || 'DRAWING'} • {currentDrawing.type}
                  </h4>
                </div>

                <div className="space-y-2 text-xs font-mono">
                  <div className="flex justify-between py-1 border-b border-white/10">
                    <span className="text-white/60">Scale:</span>
                    <span className="font-bold text-white">{currentDrawing.scale || 'N/A'}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/10">
                    <span className="text-white/60">Format:</span>
                    <span className="font-bold text-white">ISO A1 Drawing Sheet</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/10">
                    <span className="text-white/60">Source File:</span>
                    <span className="text-white/90 truncate max-w-[180px]">{currentDrawing.fileSource || 'Vector PDF/SVG'}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/60 block">
                    ARCHITECTURAL DESCRIPTION
                  </span>
                  <p className="text-xs text-white/80 leading-relaxed font-light">
                    {currentDrawing.description}
                  </p>
                </div>

                {currentDrawing.annotations && currentDrawing.annotations.length > 0 && (
                  <div className="space-y-2 pt-2 border-t border-white/15">
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/60 block">
                      SCHEDULED ANNOTATIONS ({currentDrawing.annotations.length})
                    </span>
                    <div className="space-y-2 text-xs font-mono">
                      {currentDrawing.annotations.map((ann, idx) => (
                        <div key={idx} className="p-2 bg-white/5 border border-white/10 flex items-start gap-2">
                          <span className="text-amber-400 font-bold shrink-0">{idx + 1}.</span>
                          <span className="text-white/90">{ann}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="pt-4 border-t border-white/15">
                  <a
                    href={currentDrawing.image}
                    download={currentDrawing.fileSource || 'architectural-drawing.svg'}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white text-black text-xs font-mono uppercase tracking-wider hover:bg-white/90 transition-colors"
                  >
                    <span>Download Vector File</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </aside>
            )}
          </div>

          {/* Bottom Control Bar */}
          <div className="px-6 py-3.5 border-t border-white/15 bg-black/50 flex items-center justify-between text-xs font-mono text-white/80">
            <div>
              DRAWING {activeDrawingIndex + 1} OF {drawings.length}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                id="modal-prev-drawing"
                onClick={handlePrev}
                className="px-4 py-1.5 bg-white/10 hover:bg-white/20 flex items-center gap-1.5 uppercase text-[11px] transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Prev Drawing
              </button>
              <button
                type="button"
                id="modal-next-drawing"
                onClick={handleNext}
                className="px-4 py-1.5 bg-white/10 hover:bg-white/20 flex items-center gap-1.5 uppercase text-[11px] transition-colors cursor-pointer"
              >
                Next Drawing <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
