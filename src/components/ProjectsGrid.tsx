import React, { useState, useMemo } from 'react';
import { Project, ProjectCategory } from '../types';
import { PROJECTS } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { SectionHeading } from './SectionHeading';
import { Link } from '../context/NavigationContext';
import { ArrowRight, Filter } from 'lucide-react';

const CATEGORIES: ProjectCategory[] = [
  'All',
  'Residential',
  'Extensions',
  'New Build',
  'Renovation',
  'Commercial',
  'Visualisation'
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
  title = 'A few selected projects.',
  subtitle = 'Explore our portfolio of contemporary residential transformations, heritage extensions, and bespoke new builds in Birmingham and beyond.',
  eyebrow = 'OUR WORK'
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
    <section id="portfolio-section" className="py-20 sm:py-28 lg:py-32 bg-[#FFFFFF]">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header and Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
          <SectionHeading
            label={eyebrow}
            title={title}
            description={subtitle}
            className="mb-0"
          />

          {limit && (
            <Link
              id="projects-grid-view-all-link"
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#171717] hover:text-[#B08D57] transition-colors group shrink-0"
            >
              <span>View All Projects ({PROJECTS.length})</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </div>

        {/* Filter Pills */}
        {showFilters && (
          <div className="flex items-center gap-2 pb-6 mb-8 overflow-x-auto border-b border-[#E5E2DC] no-scrollbar">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#999999] flex items-center gap-1.5 mr-2 shrink-0">
              <Filter className="w-3 h-3" /> Filter:
            </span>
            {CATEGORIES.map((cat) => {
              const count = cat === 'All' ? PROJECTS.length : PROJECTS.filter((p) => p.category === cat).length;
              if (count === 0 && cat !== 'All') return null;
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  id={`filter-cat-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-xs sm:text-[13px] font-medium tracking-tight whitespace-nowrap transition-all shrink-0 border ${
                    isSelected
                      ? 'bg-[#171717] text-white border-[#171717]'
                      : 'bg-[#F7F5F0] text-[#555555] border-[#E5E2DC] hover:border-[#CCCCCC] hover:text-[#171717]'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`ml-1.5 text-[11px] font-mono ${isSelected ? 'text-white/70' : 'text-[#888888]'}`}>
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-[#F7F5F0] border border-[#E5E2DC] p-8">
            <p className="text-base text-[#6A6A6A]">No projects currently listed in this category.</p>
            <button
              onClick={() => setSelectedCategory('All')}
              className="mt-4 px-5 py-2.5 bg-[#171717] text-white text-xs font-semibold"
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
