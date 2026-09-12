import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Project, ProjectCategory } from '../types';
import { PROJECTS } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { ChevronDown, Check } from 'lucide-react';

export const ARCHITECTURAL_CATEGORIES: { id: ProjectCategory; label: string }[] = [
  { id: 'All', label: 'All Projects' },
  { id: 'Extensions', label: 'Extensions' },
  { id: 'Loft Conversions', label: 'Loft Conversions' },
  { id: 'New Builds', label: 'New Builds' },
  { id: 'Renovations', label: 'Renovations' }
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
  title = 'A selection of our residential projects.',
  subtitle = 'Bespoke home extensions, loft transformations, and new build houses delivered across the UK.',
  eyebrow = 'OUR WORK'
}: ProjectsGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>(initialCategory);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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

  const selectedCategoryLabel =
    ARCHITECTURAL_CATEGORIES.find((c) => c.id === selectedCategory)?.label || 'All Projects';

  return (
    <section id="portfolio-section" className="py-14 sm:py-20 bg-[#ffffff] border-b border-[#e5e7eb] w-full">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header with clean dropdown filter button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-2xl">
            {eyebrow && (
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-[2px] bg-[#D01020]" />
                <span className="text-xs font-mono font-bold uppercase tracking-[0.22em] text-[#D01020]">
                  {eyebrow}
                </span>
              </div>
            )}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-bold text-[#111827] tracking-tight">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-2 text-sm sm:text-base text-[#4b5563] font-light leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>

          {/* Clean Dropdown Button Filter */}
          {showFilters && (
            <div className="relative shrink-0 self-start md:self-auto" ref={dropdownRef}>
              <button
                id="portfolio-category-dropdown-btn"
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center justify-between gap-3 px-5 py-3 bg-[#f9fafb] hover:bg-[#f3f4f6] text-[#111827] border border-[#d1d5db] hover:border-[#111827] rounded-sm transition-all text-xs font-mono font-bold uppercase tracking-wider shadow-sm min-w-[210px] cursor-pointer"
                aria-expanded={dropdownOpen}
                aria-haspopup="listbox"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-[#6b7280]">FILTER:</span>
                  <span className="text-[#D01020]">{selectedCategoryLabel}</span>
                </div>
                <ChevronDown className={`w-4 h-4 text-[#111827] transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {dropdownOpen && (
                <div
                  id="portfolio-category-dropdown-menu"
                  className="absolute right-0 mt-1.5 w-60 bg-white border border-[#e5e7eb] rounded-sm shadow-xl z-30 py-1.5 animate-fade-in"
                  role="listbox"
                >
                  {ARCHITECTURAL_CATEGORIES.map((cat) => {
                    const count =
                      cat.id === 'All'
                        ? PROJECTS.length
                        : PROJECTS.filter((p) => p.category === cat.id).length;
                    const isSelected = selectedCategory === cat.id;

                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => {
                          setSelectedCategory(cat.id);
                          setDropdownOpen(false);
                        }}
                        className={`w-full px-4 py-2.5 text-xs font-mono text-left flex items-center justify-between transition-colors cursor-pointer ${
                          isSelected
                            ? 'bg-[#111827] text-white font-bold'
                            : 'text-[#374151] hover:bg-[#f3f4f6]'
                        }`}
                        role="option"
                        aria-selected={isSelected}
                      >
                        <span className="tracking-wide">{cat.label}</span>
                        <span className="flex items-center gap-2">
                          <span className={`text-[10px] px-1.5 py-0.5 rounded ${isSelected ? 'bg-white/20 text-white' : 'bg-gray-100 text-[#6b7280]'}`}>
                            {count}
                          </span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-[#D01020]" />}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Clean, well-mannered rectangular projects from left to right - no wording down below */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project, idx) => (
            <div key={project.id} className="w-full">
              <ProjectCard project={project} index={idx} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
