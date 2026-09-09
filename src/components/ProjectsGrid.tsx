import React, { useState, useMemo } from 'react';
import { Project, ProjectCategory } from '../types';
import { PROJECTS } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { SectionHeading } from './SectionHeading';
import { Link } from '../context/NavigationContext';
import { ArrowRight, Filter, TableProperties } from 'lucide-react';

const CATEGORIES: ProjectCategory[] = [
  'All',
  'Residential',
  'Extensions',
  'New Build',
  'Renovation',
  'Commercial',
  'Visualisation',
  'Infrastructure',
  'Civic & Landscape',
  'Institutional'
];

interface ProjectsGridProps {
  limit?: number;
  initialCategory?: ProjectCategory;
  showFilters?: boolean;
  title?: string;
  subtitle?: string;
  eyebrow?: string;
}

export function ProjectsGrid({
  limit,
  initialCategory = 'All',
  showFilters = true,
  title = 'Selected Works & Case Studies.',
  subtitle = 'Rigorous architectural planning, mission-critical infrastructure, and civic public realms documented to construction standards.',
  eyebrow = 'CATALOGUE'
}: ProjectsGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>(initialCategory);

  const filteredProjects = useMemo(() => {
    let list = PROJECTS;
    if (selectedCategory !== 'All') {
      list = list.filter((p) => p.category === selectedCategory);
    }
    if (limit) {
      return list.slice(0, limit);
    }
    return list;
  }, [selectedCategory, limit]);

  return (
    <section id="portfolio-section" className="py-20 sm:py-28 bg-[#FBFBF9] border-t border-[#E5E5DF]">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Header and Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <SectionHeading
            label={eyebrow}
            title={title}
            description={subtitle}
            className="mb-0"
          />

          <div className="flex items-center gap-3 shrink-0">
            <Link
              id="projects-grid-index-table-link"
              href="/index"
              className="inline-flex items-center gap-1.5 px-4 py-2 border border-[#E5E5DF] bg-[#FFFFFF] hover:bg-[#F4F4F0] text-[11px] font-mono uppercase tracking-[0.16em] text-[#111111] transition-colors"
            >
              <TableProperties className="w-3.5 h-3.5 text-[#1C3B52]" />
              <span>Index View</span>
            </Link>

            {limit && (
              <Link
                id="projects-grid-view-all-link"
                href="/projects"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-[0.16em] text-[#111111] hover:text-[#1C3B52] transition-colors group"
              >
                <span>All Works ({PROJECTS.length})</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            )}
          </div>
        </div>

        {/* Clean Filter Pill Bar */}
        {showFilters && (
          <div className="flex items-center gap-2 pb-6 mb-10 overflow-x-auto border-b border-[#E5E5DF] no-scrollbar">
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#70706B] flex items-center gap-1.5 mr-2 shrink-0">
              <Filter className="w-3 h-3 text-[#1C3B52]" /> FILTER:
            </span>
            {CATEGORIES.map((cat) => {
              const count = cat === 'All' ? PROJECTS.length : PROJECTS.filter((p) => p.category === cat).length;
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  id={`filter-cat-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-xs font-mono tracking-wider uppercase transition-all shrink-0 border cursor-pointer ${
                    isSelected
                      ? 'bg-[#111111] text-[#FBFBF9] border-[#111111]'
                      : 'bg-[#FFFFFF] text-[#70706B] border-[#E5E5DF] hover:border-[#111111] hover:text-[#111111]'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`ml-1.5 text-[11px] ${isSelected ? 'text-[#FBFBF9]/70' : 'text-[#70706B]'}`}>
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-[#FFFFFF] border border-[#E5E5DF] p-8">
            <p className="text-sm font-mono text-[#70706B]">No works found in this classification.</p>
            <button
              onClick={() => setSelectedCategory('All')}
              className="mt-4 px-5 py-2.5 bg-[#111111] text-[#FBFBF9] text-xs font-mono uppercase tracking-wider cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                featured={!limit && idx === 0 && selectedCategory === 'All'}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
