import React from 'react';
import { Project } from '../types';
import { Link } from '../context/NavigationContext';
import { ArrowUpRight, MapPin, Box, FileText, Ruler } from 'lucide-react';

interface ProjectCardProps {
  key?: React.Key;
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <article
      id={`project-card-${project.slug}`}
      className={`group flex flex-col bg-[#FFFFFF] border border-[#E5E5DF] transition-all duration-300 hover:border-[#111111] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] ${
        featured ? 'md:col-span-2 lg:col-span-2' : ''
      }`}
    >
      {/* Project Visual Stage */}
      <Link
        href={`/projects/${project.slug}`}
        className={`block relative overflow-hidden bg-[#F4F4F0] border-b border-[#E5E5DF] ${
          featured ? 'aspect-[16/9]' : 'aspect-[16/10]'
        }`}
        aria-label={`View dossier for ${project.title}`}
      >
        <img
          src={project.image || project.heroImage}
          alt={project.title}
          className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.015]"
          loading="lazy"
          decoding="async"
        />

        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-2 items-center">
          <span className="bg-[#111111] text-[#FBFBF9] px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-[0.16em]">
            REF {project.projectNumber}
          </span>
          <span className="bg-[#FFFFFF]/95 backdrop-blur-sm px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.16em] text-[#111111] border border-[#E5E5DF]">
            {project.category}
          </span>
          {project.heroType === 'vector-drawing' && (
            <span className="bg-[#1C3B52] text-white px-2 py-1 text-[9px] font-mono uppercase tracking-[0.16em] flex items-center gap-1">
              <FileText className="w-2.5 h-2.5" /> Vector Drawing
            </span>
          )}
        </div>

        {/* Hover Action Corner */}
        <div className="absolute bottom-3 right-3 w-8 h-8 bg-[#FFFFFF] border border-[#E5E5DF] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <ArrowUpRight className="w-4 h-4 text-[#111111]" />
        </div>
      </Link>

      {/* Metadata Section */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2.5">
          <div className="flex items-center justify-between text-[11px] font-mono text-[#70706B] border-b border-[#E5E5DF] pb-2">
            <span className="flex items-center gap-1.5 truncate max-w-[200px]">
              <MapPin className="w-3.5 h-3.5 text-[#111111] shrink-0" />
              {project.location}
            </span>
            <span className="font-semibold text-[#111111]">{project.year}</span>
          </div>

          <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#111111] tracking-tight group-hover:text-[#1C3B52] transition-colors">
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-[#70706B] leading-relaxed line-clamp-2 font-light">
            {project.subtitle}
          </p>

          {/* Key Architectural Metric Pill */}
          <div className="pt-1 flex flex-wrap items-center gap-2 text-[10px] font-mono text-[#70706B]">
            {project.area && (
              <span className="bg-[#F4F4F0] px-2 py-0.5 border border-[#E5E5DF]">
                {project.area}
              </span>
            )}
            {project.ffl && (
              <span className="bg-[#F4F4F0] px-2 py-0.5 border border-[#E5E5DF]">
                FFL {project.ffl}
              </span>
            )}
            {project.ridgeHeight && (
              <span className="bg-[#F4F4F0] px-2 py-0.5 border border-[#E5E5DF]">
                Ridge {project.ridgeHeight}
              </span>
            )}
          </div>
        </div>

        {/* Footer info link */}
        <div className="pt-3 border-t border-[#E5E5DF] flex items-center justify-between text-[10px] font-mono">
          <Link
            id={`project-view-link-${project.slug}`}
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#111111] group-hover:text-[#1C3B52] transition-colors"
          >
            <span>Examine Dossier</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          {project.drawings && project.drawings.length > 0 ? (
            <span className="flex items-center gap-1 text-[#1C3B52] uppercase tracking-wider font-semibold">
              <FileText className="w-3 h-3" />
              {project.drawings.length} {project.drawings.length === 1 ? 'Drawing' : 'Drawings'}
            </span>
          ) : (
            <span className="flex items-center gap-1 text-[#70706B] uppercase tracking-wider">
              <Box className="w-3 h-3 text-amber-600" />
              Visual Renders
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
