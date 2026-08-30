import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { PROJECTS } from '../data/projects';
import { Link, useNavigation } from '../context/NavigationContext';
import { ProjectDrawingsViewer } from '../components/ProjectDrawingsViewer';
import { Lightbox } from '../components/Lightbox';
import { CTASection } from '../components/CTASection';
import { ProjectCard } from '../components/ProjectCard';
import { ArrowLeft, ArrowRight, MapPin, Calendar, Building, Layers, CheckCircle2, Maximize2 } from 'lucide-react';

export function ProjectDetailPage({ slug }: { slug: string }) {
  const { navigate } = useNavigation();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col bg-[#f4f1ea]">
        <Header />
        <main className="flex-1 pt-32 pb-20 flex items-center justify-center">
          <div className="text-center p-8 bg-white border border-[#dcd8cc] max-w-md mx-auto shadow-[6px_6px_0px_0px_rgba(26,26,26,0.06)]">
            <h2 className="font-serif text-2xl font-normal text-[#1a1a1a] mb-2">Project Not Found</h2>
            <p className="text-sm text-[#5c5850] mb-6 font-light">The requested architectural project could not be located in our archives.</p>
            <Link href="/projects" className="px-7 py-3.5 bg-[#1a1a1a] text-[#f4f1ea] text-[11px] font-semibold uppercase tracking-[0.2em]">
              Return to All Projects
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedProjects = PROJECTS.filter((p) => p.id !== project.id && p.category === project.category).slice(0, 2);
  const allGalleryImages = [project.heroImage, ...(project.gallery || [])];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f4f1ea]">
      <Header isTransparentInitially={true} />

      <main className="flex-1">
        {/* Large Project Hero */}
        <div className="relative w-full h-[70vh] min-h-[500px] max-h-[750px] bg-[#1a1a1a] text-[#f4f1ea] overflow-hidden select-none">
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover object-center brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/95 via-[#1a1a1a]/40 to-black/30" />

          {/* Hero Content Overlay */}
          <div className="absolute inset-0 max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 flex flex-col justify-between pt-28 pb-12">
            <div>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-[#f4f1ea] hover:text-white bg-black/50 backdrop-blur-sm px-4 py-2 border border-white/20 transition-colors font-medium"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Back to Projects Archive
              </Link>
            </div>

            <div className="max-w-3xl">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="inline-block w-6 h-[1px] bg-[#f4f1ea]" />
                <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#e8e4d8]">
                  {project.category}
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-[-0.02em] text-[#f4f1ea] mb-3 leading-[1.1]">
                {project.title}
              </h1>

              <p className="text-base sm:text-xl text-[#d9d4c7] font-light leading-relaxed max-w-2xl">
                {project.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Project Meta Details Bar */}
        <div className="bg-[#ffffff] border-b border-[#dcd8cc] py-6 shadow-sm">
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs sm:text-sm">
              <div>
                <span className="text-[#736e65] block text-[10px] font-mono uppercase tracking-[0.2em] mb-1">Location</span>
                <span className="font-medium text-[#1a1a1a] flex items-center gap-1.5 font-serif text-base">
                  <MapPin className="w-3.5 h-3.5 text-[#1a1a1a]" /> {project.location}
                </span>
              </div>

              <div>
                <span className="text-[#736e65] block text-[10px] font-mono uppercase tracking-[0.2em] mb-1">Year / Status</span>
                <span className="font-medium text-[#1a1a1a] flex items-center gap-1.5 font-serif text-base">
                  <Calendar className="w-3.5 h-3.5 text-[#1a1a1a]" /> {project.year}
                </span>
              </div>

              <div>
                <span className="text-[#736e65] block text-[10px] font-mono uppercase tracking-[0.2em] mb-1">Authority</span>
                <span className="font-medium text-[#1a1a1a] flex items-center gap-1.5 font-serif text-base">
                  <Building className="w-3.5 h-3.5 text-[#1a1a1a]" /> {project.specifications.localAuthority || 'Birmingham'}
                </span>
              </div>

              <div>
                <span className="text-[#736e65] block text-[10px] font-mono uppercase tracking-[0.2em] mb-1">Floor Area</span>
                <span className="font-medium text-[#1a1a1a] flex items-center gap-1.5 font-serif text-base">
                  <Layers className="w-3.5 h-3.5 text-[#1a1a1a]" /> {project.specifications.area || 'Bespoke footprint'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Narrative: Brief & Design Approach */}
        <div className="py-16 sm:py-24 max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Narrative */}
            <div className="lg:col-span-8 space-y-10">
              <div className="space-y-4">
                <div className="flex items-center gap-2.5">
                  <span className="inline-block w-6 h-[1px] bg-[#1a1a1a]" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#736e65]">
                    PROJECT OVERVIEW
                  </span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#1a1a1a] tracking-tight leading-snug">
                  {project.description}
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 border-t border-[#dcd8cc]">
                <div className="space-y-2.5">
                  <h3 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#1a1a1a]">
                    01 / The Brief
                  </h3>
                  <p className="text-sm text-[#5c5850] leading-relaxed font-light">
                    {project.brief}
                  </p>
                </div>

                <div className="space-y-2.5">
                  <h3 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#1a1a1a]">
                    02 / The Architectural Approach
                  </h3>
                  <p className="text-sm text-[#5c5850] leading-relaxed font-light">
                    {project.approach}
                  </p>
                </div>
              </div>

              {/* Technical Drawings & Plans Section */}
              {project.drawings && project.drawings.length > 0 && (
                <div className="pt-10 border-t border-[#dcd8cc] space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#736e65] block mb-1">
                        TECHNICAL DOCUMENTATION
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1a1a1a]">
                        Plans, Elevations & Sections
                      </h3>
                    </div>
                  </div>

                  <ProjectDrawingsViewer
                    drawings={project.drawings}
                    projectTitle={project.title}
                  />
                </div>
              )}
            </div>

            {/* Right Sidebar: Specifications & Scope */}
            <div className="lg:col-span-4 space-y-8">
              <div className="bg-[#ffffff] border border-[#dcd8cc] p-6 sm:p-8 space-y-6 shadow-[6px_6px_0px_0px_rgba(26,26,26,0.04)]">
                <h3 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#1a1a1a] pb-3 border-b border-[#dcd8cc]">
                  Project Specifications
                </h3>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div>
                    <span className="text-[#736e65] block text-[10px] font-mono uppercase tracking-[0.2em] mb-1">Client Typology</span>
                    <span className="font-medium text-[#1a1a1a]">{project.clientType || 'Private Homeowner'}</span>
                  </div>

                  <div>
                    <span className="text-[#736e65] block text-[10px] font-mono uppercase tracking-[0.2em] mb-1">Programme Duration</span>
                    <span className="font-medium text-[#1a1a1a]">{project.specifications.duration || '6-9 months design & statutory approvals'}</span>
                  </div>

                  <div>
                    <span className="text-[#736e65] block text-[10px] font-mono uppercase tracking-[0.2em] mb-2">Scope of Services</span>
                    <ul className="space-y-2">
                      {project.specifications.servicesProvided.map((s, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-[#4a4740] text-xs">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#1a1a1a] shrink-0" />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#dcd8cc]">
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-[#1a1a1a] text-[#f4f1ea] text-[11px] font-semibold uppercase tracking-[0.2em] hover:bg-[#333333] transition-colors"
                  >
                    <span>Inquire About Similar Work</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        {allGalleryImages.length > 0 && (
          <div className="py-16 sm:py-24 bg-[#ffffff] border-y border-[#dcd8cc]">
            <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#736e65] block mb-1">
                    PHOTOGRAPHY
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1a1a1a]">
                    Project Gallery
                  </h3>
                </div>
                <span className="text-xs text-[#736e65] font-mono">
                  {allGalleryImages.length} Photographs
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {allGalleryImages.map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => openLightbox(idx)}
                    className="relative overflow-hidden bg-[#e8e4d8] aspect-[4/3] border border-[#dcd8cc] cursor-pointer group shadow-sm"
                  >
                    <img
                      src={img}
                      alt={`${project.title} photo ${idx + 1}`}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                      <div className="p-2.5 bg-[#1a1a1a]/80 backdrop-blur-sm">
                        <Maximize2 className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <div className="py-20 sm:py-28 max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="flex items-center justify-between mb-10">
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1a1a1a]">
                Related Architectural Projects
              </h3>
              <Link href="/projects" className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1a1a1a] hover:text-[#736e65]">
                View Portfolio Archive →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedProjects.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <CTASection
          id="project-detail-cta"
          title={`Start your ${project.category.toLowerCase()} project with Architex.`}
          subtitle="Speak with our architectural design studio to discuss your brief and site opportunities."
        />
      </main>

      <Footer />

      {/* Lightbox Modal */}
      <Lightbox
        images={allGalleryImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(idx) => setLightboxIndex(idx)}
        title={project.title}
      />
    </div>
  );
}
