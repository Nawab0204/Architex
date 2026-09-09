import React, { useState, useMemo } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ProjectsGrid } from '../components/ProjectsGrid';
import { CTASection } from '../components/CTASection';
import { PROJECTS } from '../data/projects';
import { Link } from '../context/NavigationContext';
import { LayoutGrid, TableProperties, Search, ArrowUpDown, ArrowUpRight, FileText, Box, ShieldCheck } from 'lucide-react';
import { ProjectCategory } from '../types';

type SortField = 'projectNumber' | 'title' | 'category' | 'location' | 'year' | 'status';

export function ProjectsPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'index'>('grid');

  // Index table states
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('All');
  const [sortField, setSortField] = useState<SortField>('projectNumber');
  const [sortAsc, setSortAsc] = useState(true);

  const categories: string[] = [
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

  const filteredAndSorted = useMemo(() => {
    let list = [...PROJECTS];

    if (categoryFilter !== 'All') {
      list = list.filter((p) => p.category === categoryFilter);
    }

    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.subtitle.toLowerCase().includes(q) ||
          p.location.toLowerCase().includes(q) ||
          p.projectNumber.includes(q)
      );
    }

    list.sort((a, b) => {
      const valA = (a[sortField] || '').toString().toLowerCase();
      const valB = (b[sortField] || '').toString().toLowerCase();
      if (valA < valB) return sortAsc ? -1 : 1;
      if (valA > valB) return sortAsc ? 1 : -1;
      return 0;
    });

    return list;
  }, [categoryFilter, searchTerm, sortField, sortAsc]);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f4f1ea]">
      <Header isTransparentInitially={false} />

      <main className="flex-1 pt-24 sm:pt-28">
        {/* Top Page Banner */}
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 py-10 sm:py-14 border-b border-[#dcd8cc]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2.5 mb-3.5">
                <span className="inline-block w-6 h-[1px] bg-[#C51B18]" />
                <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#736e65]">
                  PORTFOLIO • ARCHIVE
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-[-0.02em] text-[#1a1a1a] leading-[1.1]">
                Our Portfolio
              </h1>

              <p className="mt-4 text-base sm:text-xl text-[#5c5850] max-w-2xl font-light leading-relaxed">
                A selection of architectural work, residential extensions, bespoke new builds, and conservation projects delivered across Birmingham and the West Midlands.
              </p>
            </div>

            {/* View Mode Switcher: Grid vs Index */}
            <div className="flex items-center gap-1.5 p-1 bg-[#EAE7DF] border border-[#D5D1C6] rounded-none shrink-0">
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-2 px-4 py-2 text-xs font-mono tracking-wider uppercase transition-all cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-[#111111] text-white shadow-sm font-semibold'
                    : 'text-[#666660] hover:text-[#111111]'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Gallery View</span>
              </button>

              <button
                type="button"
                onClick={() => setViewMode('index')}
                className={`flex items-center gap-2 px-4 py-2 text-xs font-mono tracking-wider uppercase transition-all cursor-pointer ${
                  viewMode === 'index'
                    ? 'bg-[#111111] text-white shadow-sm font-semibold'
                    : 'text-[#666660] hover:text-[#111111]'
                }`}
              >
                <TableProperties className="w-3.5 h-3.5" />
                <span>Master Index ({PROJECTS.length})</span>
              </button>
            </div>
          </div>
        </div>

        {/* View Mode 1: Interactive Projects Grid */}
        {viewMode === 'grid' && (
          <ProjectsGrid
            title="All Architectural Projects"
            subtitle="Filter by category to explore specific residential typology, heritage works, or visualisation studies."
            eyebrow="FILTER PORTFOLIO"
            showFilters={true}
          />
        )}

        {/* View Mode 2: Integrated Master Index Table */}
        {viewMode === 'index' && (
          <section className="py-10 max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 animate-fade-in">
            {/* Filter and Search Bar for Master Index */}
            <div className="mb-8 flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-4 bg-[#EAE7DF] border border-[#D5D1C6]">
              {/* Category Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setCategoryFilter(cat)}
                    className={`px-3 py-1.5 text-[11px] font-mono tracking-wider uppercase whitespace-nowrap transition-all border cursor-pointer ${
                      categoryFilter === cat
                        ? 'bg-[#111111] text-white border-[#111111]'
                        : 'bg-white text-[#70706B] border-[#D5D1C6] hover:text-[#111111] hover:border-[#999990]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search Box */}
              <div className="relative w-full lg:w-72">
                <Search className="w-4 h-4 text-[#888880] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search project title, ref, location..."
                  className="w-full pl-9 pr-4 py-2 text-xs font-mono bg-white border border-[#D5D1C6] focus:border-[#111111] outline-none placeholder:text-[#999990]"
                />
              </div>
            </div>

            {/* Index Table */}
            <div className="bg-white border border-[#D5D1C6] overflow-x-auto shadow-sm">
              <table className="w-full text-left border-collapse min-w-[900px]">
                <thead>
                  <tr className="border-b border-[#D5D1C6] bg-[#F7F6F2] text-[11px] font-mono tracking-widest uppercase text-[#70706B]">
                    <th className="py-3.5 px-4 cursor-pointer hover:text-[#111111]" onClick={() => handleSort('projectNumber')}>
                      <div className="flex items-center gap-1.5">
                        <span>Ref</span>
                        <ArrowUpDown className="w-3 h-3" />
                      </div>
                    </th>
                    <th className="py-3.5 px-4 cursor-pointer hover:text-[#111111]" onClick={() => handleSort('title')}>
                      <div className="flex items-center gap-1.5">
                        <span>Project Title</span>
                        <ArrowUpDown className="w-3 h-3" />
                      </div>
                    </th>
                    <th className="py-3.5 px-4 cursor-pointer hover:text-[#111111]" onClick={() => handleSort('category')}>
                      <div className="flex items-center gap-1.5">
                        <span>Typology</span>
                        <ArrowUpDown className="w-3 h-3" />
                      </div>
                    </th>
                    <th className="py-3.5 px-4 cursor-pointer hover:text-[#111111]" onClick={() => handleSort('location')}>
                      <div className="flex items-center gap-1.5">
                        <span>Location</span>
                        <ArrowUpDown className="w-3 h-3" />
                      </div>
                    </th>
                    <th className="py-3.5 px-4 cursor-pointer hover:text-[#111111]" onClick={() => handleSort('year')}>
                      <div className="flex items-center gap-1.5">
                        <span>Year</span>
                        <ArrowUpDown className="w-3 h-3" />
                      </div>
                    </th>
                    <th className="py-3.5 px-4">Gross Area</th>
                    <th className="py-3.5 px-4 cursor-pointer hover:text-[#111111]" onClick={() => handleSort('status')}>
                      <div className="flex items-center gap-1.5">
                        <span>Status</span>
                        <ArrowUpDown className="w-3 h-3" />
                      </div>
                    </th>
                    <th className="py-3.5 px-4 text-right">Drawing Dossier</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EAE7DF] text-xs font-sans">
                  {filteredAndSorted.map((proj) => (
                    <tr
                      key={proj.id}
                      id={`index-row-${proj.slug}`}
                      className="hover:bg-[#FAF9F5] transition-colors group"
                    >
                      <td className="py-3.5 px-4 font-mono font-bold text-[#C51B18]">
                        [{proj.projectNumber}]
                      </td>
                      <td className="py-3.5 px-4">
                        <Link
                          href={`/projects/${proj.slug}`}
                          className="font-serif text-sm font-medium text-[#111111] group-hover:text-[#C51B18] transition-colors flex items-center gap-1.5"
                        >
                          <span>{proj.title}</span>
                          <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                        <span className="text-[11px] text-[#70706B] block line-clamp-1">{proj.subtitle}</span>
                      </td>
                      <td className="py-3.5 px-4 font-mono text-[11px] uppercase tracking-wider text-[#555550]">
                        {proj.category}
                      </td>
                      <td className="py-3.5 px-4 text-[#555550]">
                        {proj.location}
                      </td>
                      <td className="py-3.5 px-4 font-mono text-[#70706B]">
                        {proj.year}
                      </td>
                      <td className="py-3.5 px-4 font-mono text-[#555550]">
                        {proj.area || '—'}
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="inline-block px-2 py-0.5 text-[10px] font-mono tracking-wider uppercase bg-[#F4F4F0] border border-[#E5E5DF] text-[#444440]">
                          {proj.status}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-right font-mono text-[11px] text-[#70706B]">
                        <Link
                          href={`/projects/${proj.slug}`}
                          className="inline-flex items-center gap-1 text-[#111111] hover:text-[#C51B18] font-bold"
                        >
                          <FileText className="w-3.5 h-3.5" />
                          <span>{proj.drawings?.length || 1} Sheets</span>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Bottom CTA */}
        <CTASection
          id="projects-page-cta"
          title="Ready to discuss your architectural project?"
          subtitle="Whether you are planning a rear extension, a whole-house remodelling, or a new build development, we are here to help."
        />
      </main>

      <Footer />
    </div>
  );
}
