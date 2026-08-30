import React from 'react';
import { Project } from '../types';
import { Link } from '../context/NavigationContext';
import { ArrowUpRight, MapPin, Calendar } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
  key?: React.Key;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <article
      id={`project-card-${project.slug}`}
      className={`group flex flex-col bg-[#ffffff] border border-[#dcd8cc] overflow-hidden transition-all duration-300 hover:border-[#1a1a1a] hover:shadow-[6px_6px_0px_0px_rgba(26,26,26,0.06)] ${
        featured ? 'md:col-span-2 lg:col-span-2' : ''
      }`}
    >
      {/* Project Image */}
      <Link
        href={`/projects/${project.slug}`}
        className={`block relative overflow-hidden bg-[#e8e4d8] ${
          featured ? 'aspect-[16/9]' : 'aspect-[16/11]'
        }`}
        aria-label={`View project details for ${project.title}`}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center transition-transform duration-600 ease-out group-hover:scale-[1.03]"
          loading="lazy"
        />

        {/* Category Badge */}
        <div className="absolute top-4 left-4 bg-[#f4f1ea]/95 backdrop-blur-sm px-3 py-1 text-[10px] font-mono font-semibold uppercase tracking-[0.2em] text-[#1a1a1a] border border-[#dcd8cc]">
          {project.category}
        </div>

        {/* Subtle arrow corner icon on hover */}
        <div className="absolute bottom-4 right-4 w-9 h-9 bg-[#f4f1ea]/95 backdrop-blur-sm text-[#1a1a1a] border border-[#dcd8cc] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ArrowUpRight className="w-4 h-4 text-[#1a1a1a]" />
        </div>
      </Link>

      {/* Project Metadata */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-[11px] font-mono text-[#736e65]">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#1a1a1a]" />
              {project.location}
            </span>
            <span>{project.year}</span>
          </div>

          <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#1a1a1a] tracking-tight group-hover:text-[#736e65] transition-colors">
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-[#5c5850] leading-relaxed line-clamp-2 font-light">
            {project.subtitle}
          </p>
        </div>

        <div className="pt-3.5 border-t border-[#dcd8cc] flex items-center justify-between">
          <Link
            id={`project-view-link-${project.slug}`}
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1a1a1a] group-hover:text-[#736e65] transition-colors"
          >
            <span>View Project</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          {project.drawings && project.drawings.length > 0 && (
            <span className="text-[10px] font-mono text-[#736e65] uppercase tracking-wider">
              {project.drawings.length} Plans
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
