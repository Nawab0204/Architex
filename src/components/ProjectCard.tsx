import React from 'react';
import { Project } from '../types';
import { Link } from '../context/NavigationContext';
import { ArrowUpRight, MapPin } from 'lucide-react';

interface ProjectCardProps {
  key?: React.Key;
  project: Project;
  featured?: boolean;
  index?: number;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      id={`project-card-${project.slug}`}
      className="group relative overflow-hidden bg-[#111111] rounded-sm border border-[#e5e2d9] transition-all duration-500 hover:border-[#111111] hover:shadow-[0_16px_36px_rgba(0,0,0,0.12)] w-full"
    >
      {/* Sleek, wide rectangular format without wording below */}
      <Link
        href={`/projects/${project.slug}`}
        className="block relative overflow-hidden w-full aspect-[16/9] sm:aspect-[16/9] md:aspect-[21/10]"
        aria-label={`View project details for ${project.title}`}
      >
        <img
          src={project.image || project.heroImage}
          alt={project.title}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />

        {/* Subtle Gradient Veil for Perfect Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

        {/* Top Badges: Category & Reference */}
        <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 flex items-center gap-2">
          <span className="bg-white/95 backdrop-blur-sm text-[#111111] px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-[0.16em] rounded-sm shadow-sm">
            {project.category}
          </span>
          <span className="bg-black/70 backdrop-blur-sm text-white/90 px-2 py-1 text-[10px] font-mono uppercase tracking-[0.16em] rounded-sm border border-white/20">
            {project.year}
          </span>
        </div>

        {/* Top Right Action Arrow */}
        <div className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 w-8 h-8 rounded-full bg-white/95 backdrop-blur-sm text-[#111111] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#D01020] group-hover:text-white shadow-sm">
          <ArrowUpRight className="w-4 h-4" />
        </div>

        {/* Clean, minimalist overlay at the bottom of the image - No wording down below! */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <div className="flex items-center gap-1.5 text-xs text-white/80 font-mono mb-1">
              <MapPin className="w-3.5 h-3.5 text-[#D01020] shrink-0" />
              <span>{project.location}</span>
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-sans font-bold tracking-tight text-white group-hover:text-white/95 transition-colors">
              {project.title}
            </h3>
          </div>

          {project.area && (
            <span className="self-start sm:self-auto text-[11px] font-mono text-white/90 bg-white/15 backdrop-blur-sm px-2.5 py-1 rounded-sm border border-white/20">
              {project.area}
            </span>
          )}
        </div>
      </Link>
    </article>
  );
}
