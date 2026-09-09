import React, { useState, Suspense, lazy } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { PROJECTS } from '../data/projects';
import { Link, useNavigation } from '../context/NavigationContext';
import { ProjectDrawingsViewer } from '../components/ProjectDrawingsViewer';
import { Lightbox } from '../components/Lightbox';
import { CTASection } from '../components/CTASection';
import { ProjectCard } from '../components/ProjectCard';
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Calendar,
  Building,
  Layers,
  CheckCircle2,
  Maximize2,
  Ruler,
  Box,
  FileText,
  ShieldCheck,
  Compass,
  Download,
  ExternalLink,
} from 'lucide-react';

// Code-splitting performance optimization: Lazy load the Three.js 3D spatial viewer
const Project3DViewer = lazy(() =>
  import('../components/Project3DViewer').then((mod) => ({ default: mod.Project3DViewer }))
);

export function ProjectDetailPage({ slug }: { slug: string }) {
  const { navigate } = useNavigation();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const projectIndex = PROJECTS.findIndex((p) => p.slug === slug);
  const project = PROJECTS[projectIndex];

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col bg-[#FBFBF9]">
        <Header />
        <main className="flex-1 pt-32 pb-20 flex items-center justify-center">
          <div className="text-center p-8 bg-white border border-[#E5E5DF] max-w-md mx-auto shadow-sm">
            <h2 className="font-serif text-2xl font-normal text-[#111111] mb-2">Dossier Not Found</h2>
            <p className="text-sm text-[#70706B] mb-6 font-light">
              The requested architectural project could not be located in our archive register.
            </p>
            <Link
              href="/projects"
              className="px-7 py-3 bg-[#111111] text-[#FBFBF9] text-[11px] font-mono uppercase tracking-wider"
            >
              Return to All Works
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Next and Previous projects for pagination
  const prevProject = PROJECTS[(projectIndex - 1 + PROJECTS.length) % PROJECTS.length];
  const nextProject = PROJECTS[(projectIndex + 1) % PROJECTS.length];

  const relatedProjects = PROJECTS.filter((p) => p.id !== project.id).slice(0, 2);

  // Gallery items normalization
  const galleryItems = (project.gallery || []).map((item) =>
    typeof item === 'string'
      ? { source: item, caption: project.title, type: 'photo' as const }
      : item
  );

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBF9] w-full">
      <Header isTransparentInitially={false} />

      <main className="flex-1 pt-20 sm:pt-24">
        {/* Project Header Bar */}
        <div className="border-b border-[#E5E5DF] bg-[#FFFFFF]">
          <div className="max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12 py-8 sm:py-12">
            {/* Top breadcrumb & reference tag */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4 text-[11px] font-mono">
              <div className="flex items-center gap-2 text-[#70706B]">
                <Link href="/projects" className="hover:text-[#111111] uppercase tracking-wider">
                  ARCHIVE
                </Link>
                <span>/</span>
                <span className="text-[#1C3B52] font-semibold uppercase">{project.category}</span>
                <span>/</span>
                <span className="text-[#111111] font-bold">REF {project.projectNumber}</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#F4F4F0] border border-[#E5E5DF] text-[#111111] text-[10px] uppercase">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  {project.status}
                </span>
              </div>
            </div>

            {/* Main Title & Subtitle */}
            <div className="max-w-4xl space-y-3">
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#111111] tracking-tight leading-[1.1]">
                {project.title}
              </h1>
              <p className="text-base sm:text-xl text-[#70706B] font-light leading-relaxed">
                {project.subtitle}
              </p>
            </div>

            {/* High-level Technical Data Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 pt-8 mt-8 border-t border-[#E5E5DF] text-xs font-mono">
              <div>
                <span className="text-[10px] text-[#70706B] uppercase tracking-wider block mb-0.5">Location</span>
                <span className="font-semibold text-[#111111] flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#1C3B52] shrink-0" />
                  <span className="truncate">{project.location}</span>
                </span>
              </div>

              <div>
                <span className="text-[10px] text-[#70706B] uppercase tracking-wider block mb-0.5">Year</span>
                <span className="font-semibold text-[#111111] flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-[#1C3B52] shrink-0" />
                  <span>{project.year}</span>
                </span>
              </div>

              <div>
                <span className="text-[10px] text-[#70706B] uppercase tracking-wider block mb-0.5">Client Typology</span>
                <span className="font-semibold text-[#111111] truncate block">
                  {project.clientType || 'Specialist Client'}
                </span>
              </div>

              <div>
                <span className="text-[10px] text-[#70706B] uppercase tracking-wider block mb-0.5">Floor Area / Site</span>
                <span className="font-semibold text-[#111111] truncate block">
                  {project.area || project.specifications.area || 'Bespoke Footprint'}
                </span>
              </div>

              {project.ffl && (
                <div>
                  <span className="text-[10px] text-[#70706B] uppercase tracking-wider block mb-0.5">Finished Floor (FFL)</span>
                  <span className="font-semibold text-[#111111]">{project.ffl}</span>
                </div>
              )}

              {project.ridgeHeight && (
                <div>
                  <span className="text-[10px] text-[#70706B] uppercase tracking-wider block mb-0.5">Ridge / Parapet Height</span>
                  <span className="font-semibold text-[#111111]">{project.ridgeHeight}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Primary Hero Visualization Section */}
        <div className="w-full bg-[#111111] text-white overflow-hidden border-b border-[#E5E5DF]">
          <div className="max-w-[1500px] mx-auto relative">
            <div
              className="relative aspect-[16/9] max-h-[720px] w-full flex items-center justify-center bg-[#1a1a1a] cursor-pointer group"
              onClick={() => openLightbox(0)}
            >
              <img
                src={project.heroImage}
                alt={project.title}
                className="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-[1.01]"
              />

              <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm border border-white/20 px-3.5 py-2 text-[11px] font-mono text-white flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Expand Fullscreen Preview</span>
              </div>

              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="bg-black/70 border border-white/20 px-2.5 py-1 text-[10px] font-mono uppercase text-white/90">
                  {project.heroType === 'vector-drawing' ? 'TECHNICAL VECTOR DRAWING' : 'ARCHITECTURAL VISUALISATION'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Body */}
        <div className="py-12 sm:py-20 max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Narrative, 3D Interactive Model, Technical Drawings */}
            <div className="lg:col-span-8 space-y-14">
              {/* Narrative Section: Brief & Architectural Approach */}
              <section className="space-y-6">
                <div className="space-y-3">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#70706B] block">
                    ARCHITECTURAL NARRATIVE
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#111111] leading-snug">
                    {project.description}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-[#E5E5DF]">
                  <div className="space-y-2.5">
                    <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#111111] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#1C3B52]" />
                      01 / The Project Brief
                    </h3>
                    <p className="text-xs sm:text-sm text-[#70706B] leading-relaxed font-light">
                      {project.brief}
                    </p>
                  </div>

                  <div className="space-y-2.5">
                    <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#111111] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#1C3B52]" />
                      02 / Architectural & Engineering Approach
                    </h3>
                    <p className="text-xs sm:text-sm text-[#70706B] leading-relaxed font-light">
                      {project.approach}
                    </p>
                  </div>
                </div>
              </section>

              {/* TECHNICAL DRAWINGS VIEWER (If project has drawings) */}
              {project.drawings && project.drawings.length > 0 && (
                <section className="pt-10 border-t border-[#E5E5DF] space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#70706B] block mb-1">
                        PLANNING DRAWINGS & HIGH-RES ASSETS
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#111111]">
                        Architectural & Civil Drawing Packages
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-[#70706B]">
                      {project.drawings.length} DRAWINGS SCHEDULED
                    </span>
                  </div>

                  <ProjectDrawingsViewer
                    drawings={project.drawings}
                    projectTitle={project.title}
                  />
                </section>
              )}

              {/* INTERACTIVE 3D SPATIAL & DAYLIGHT SIMULATION (Code-split with Suspense) */}
              <section className="pt-10 border-t border-[#E5E5DF] space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Box className="w-3.5 h-3.5 text-[#1C3B52]" />
                      <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#70706B]">
                        INTERACTIVE 3D BIM & MASSING STUDY
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#111111]">
                      3D Spatial Geometry & Daylight Path
                    </h3>
                  </div>
                  <p className="text-xs font-mono text-[#70706B]">
                    Drag to orbit • Scroll to zoom • Exploded axonometric
                  </p>
                </div>

                <Suspense
                  fallback={
                    <div className="h-[500px] w-full bg-[#F4F4F0] border border-[#E5E5DF] flex flex-col items-center justify-center text-[#70706B] font-mono text-xs space-y-2 animate-pulse">
                      <Box className="w-6 h-6 animate-spin" />
                      <span>Initializing 3D Spatial Canvas...</span>
                    </div>
                  }
                >
                  <Project3DViewer
                    projectTitle={project.title}
                    projectCategory={project.category}
                    dimensions={project.specifications.dimensions}
                  />
                </Suspense>
              </section>

              {/* MATERIAL & TECHNICAL SPECIFICATION SCHEDULE */}
              <section className="pt-10 border-t border-[#E5E5DF] space-y-6">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#70706B] block">
                    MATERIAL SCHEDULE & TECHNICAL PROTOCOLS
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#111111]">
                    Materials & Compliance Specifications
                  </h3>
                </div>

                {/* Materials list */}
                {project.specifications.materials && project.specifications.materials.length > 0 && (
                  <div className="bg-[#FFFFFF] border border-[#E5E5DF] p-6 space-y-4">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#111111] block border-b border-[#E5E5DF] pb-2">
                      Specified Architectural Materials
                    </span>
                    <ul className="space-y-2.5 text-xs font-mono">
                      {project.specifications.materials.map((mat, i) => (
                        <li key={i} className="flex items-start gap-3 text-[#70706B]">
                          <span className="text-[#1C3B52] font-bold shrink-0">[{String(i + 1).padStart(2, '0')}]</span>
                          <span className="text-[#111111]">{mat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Codes & Regulations Compliance */}
                {project.specifications.codesCompliance && project.specifications.codesCompliance.length > 0 && (
                  <div className="bg-[#F4F4F0] border border-[#E5E5DF] p-6 space-y-4">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#111111] block border-b border-[#E5E5DF] pb-2">
                      Codes & Statutory Regulatory Compliance
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                      {project.specifications.codesCompliance.map((code, i) => (
                        <div key={i} className="flex items-center gap-2 text-[#111111]">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{code}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </section>
            </div>

            {/* Right Sidebar: Key Metrics & Technical Summary */}
            <div className="lg:col-span-4 space-y-8">
              {/* Dimensions Card */}
              {project.specifications.dimensions && (
                <div className="bg-[#FFFFFF] border border-[#E5E5DF] p-6 sm:p-7 space-y-4 shadow-sm">
                  <div className="flex items-center justify-between pb-3 border-b border-[#E5E5DF]">
                    <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#111111] flex items-center gap-2">
                      <Ruler className="w-3.5 h-3.5 text-[#1C3B52]" />
                      Spatial Dimensions
                    </h3>
                    <span className="text-[10px] font-mono text-[#70706B] bg-[#F4F4F0] px-2 py-0.5 border border-[#E5E5DF]">
                      CAD Datum
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                    <div className="p-3 bg-[#F4F4F0] border border-[#E5E5DF]">
                      <span className="text-[10px] text-[#70706B] uppercase block">Building Width</span>
                      <strong className="text-sm font-semibold text-[#111111]">{project.specifications.dimensions.width || 'N/A'}</strong>
                    </div>
                    <div className="p-3 bg-[#F4F4F0] border border-[#E5E5DF]">
                      <span className="text-[10px] text-[#70706B] uppercase block">Building Depth</span>
                      <strong className="text-sm font-semibold text-[#111111]">{project.specifications.dimensions.depth || 'N/A'}</strong>
                    </div>
                    <div className="p-3 bg-[#F4F4F0] border border-[#E5E5DF]">
                      <span className="text-[10px] text-[#70706B] uppercase block">Total Height</span>
                      <strong className="text-sm font-semibold text-[#111111]">{project.specifications.dimensions.height || 'N/A'}</strong>
                    </div>
                    <div className="p-3 bg-[#F4F4F0] border border-[#E5E5DF]">
                      <span className="text-[10px] text-[#70706B] uppercase block">Internal Headroom</span>
                      <strong className="text-sm font-semibold text-[#111111]">{project.specifications.dimensions.ceiling || 'N/A'}</strong>
                    </div>
                  </div>

                  {project.specifications.dimensions.cantilever && (
                    <div className="p-3 bg-[#F4F4F0] border border-[#E5E5DF] text-xs font-mono flex items-center justify-between">
                      <span className="text-[10px] text-[#70706B] uppercase">Articulation / Cantilever:</span>
                      <strong className="text-xs font-bold text-[#1C3B52]">{project.specifications.dimensions.cantilever}</strong>
                    </div>
                  )}
                </div>
              )}

              {/* Specifications Card */}
              <div className="bg-[#FFFFFF] border border-[#E5E5DF] p-6 sm:p-7 space-y-5 shadow-sm">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#111111] pb-3 border-b border-[#E5E5DF]">
                  Project Specifications
                </h3>

                <div className="space-y-4 text-xs font-mono">
                  <div>
                    <span className="text-[10px] text-[#70706B] uppercase block mb-1">Local Authority / Jurisdiction</span>
                    <span className="font-semibold text-[#111111]">{project.specifications.localAuthority || 'Warwickshire / UK Planning'}</span>
                  </div>

                  <div>
                    <span className="text-[10px] text-[#70706B] uppercase block mb-1">Programme Timeline</span>
                    <span className="font-semibold text-[#111111]">{project.specifications.duration || 'Comprehensive statutory delivery'}</span>
                  </div>

                  <div>
                    <span className="text-[10px] text-[#70706B] uppercase block mb-2">Architectural Services Provided</span>
                    <ul className="space-y-1.5">
                      {project.specifications.servicesProvided.map((s, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-[#70706B]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#1C3B52] shrink-0" />
                          <span className="text-[#111111]">{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E5E5DF]">
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-[#111111] text-[#FBFBF9] text-[11px] font-mono uppercase tracking-wider hover:bg-[#262626] transition-colors"
                  >
                    <span>Consult on Similar Brief</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Visual Grid */}
        {galleryItems.length > 0 && (
          <section className="py-16 sm:py-20 bg-[#FFFFFF] border-y border-[#E5E5DF] w-full">
            <div className="max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#70706B] block mb-1">
                    PROJECT PLATES & RENDERS
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#111111]">
                    Visual Documentation
                  </h3>
                </div>
                <span className="text-xs font-mono text-[#70706B]">
                  {galleryItems.length} PLATES
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryItems.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => openLightbox(idx)}
                    className="relative overflow-hidden bg-[#F4F4F0] aspect-[16/10] border border-[#E5E5DF] cursor-pointer group shadow-sm"
                  >
                    <img
                      src={item.source}
                      alt={item.caption}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                      <div className="p-3 bg-black/80 backdrop-blur-sm">
                        <Maximize2 className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    {item.caption && (
                      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent text-white text-[10px] font-mono truncate">
                        {item.caption}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* PROJECT PAGINATION: Previous & Next Project Navigation Footer */}
        <section className="bg-[#FBFBF9] border-b border-[#E5E5DF] py-12">
          <div className="max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Previous Project */}
              <Link
                href={`/projects/${prevProject.slug}`}
                className="p-6 bg-[#FFFFFF] border border-[#E5E5DF] hover:border-[#111111] transition-all group flex flex-col justify-between"
              >
                <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-[#70706B] mb-2">
                  <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                  <span>Previous Project // REF {prevProject.projectNumber}</span>
                </div>
                <h4 className="font-serif text-lg sm:text-xl font-normal text-[#111111] group-hover:text-[#1C3B52] transition-colors">
                  {prevProject.title}
                </h4>
                <span className="text-xs text-[#70706B] font-mono mt-1">
                  {prevProject.category} • {prevProject.location}
                </span>
              </Link>

              {/* Next Project */}
              <Link
                href={`/projects/${nextProject.slug}`}
                className="p-6 bg-[#FFFFFF] border border-[#E5E5DF] hover:border-[#111111] transition-all group flex flex-col justify-between text-right"
              >
                <div className="flex items-center justify-end gap-2 text-[10px] font-mono uppercase tracking-wider text-[#70706B] mb-2">
                  <span>Next Project // REF {nextProject.projectNumber}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
                <h4 className="font-serif text-lg sm:text-xl font-normal text-[#111111] group-hover:text-[#1C3B52] transition-colors">
                  {nextProject.title}
                </h4>
                <span className="text-xs text-[#70706B] font-mono mt-1">
                  {nextProject.category} • {nextProject.location}
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <CTASection
          id="project-detail-cta"
          title={`Commence your ${project.category.toLowerCase()} commission.`}
          subtitle="Speak with our architectural and engineering teams regarding project feasibility, planning approvals, and technical drawing packages."
        />
      </main>

      <Footer />

      {/* Lightbox Modal */}
      <Lightbox
        images={galleryItems}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(idx) => setLightboxIndex(idx)}
        title={project.title}
      />
    </div>
  );
}
