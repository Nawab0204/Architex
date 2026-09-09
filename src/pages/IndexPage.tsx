import React, { useState, useMemo } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { PROJECTS } from '../data/projects';
import { Link } from '../context/NavigationContext';
import { ArrowUpRight, Search, ArrowUpDown, FileText, Box, ShieldCheck } from 'lucide-react';
import { ProjectCategory } from '../types';

type SortField = 'projectNumber' | 'title' | 'category' | 'location' | 'year' | 'status';

export function IndexPage() {
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
    <div className="min-h-screen flex flex-col bg-[#FBFBF9]">
      <Header isTransparentInitially={false} />

      <main className="flex-1 pt-24 sm:pt-28 pb-20">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12">
          {/* Header */}
          <div className="py-8 sm:py-12 border-b border-[#E5E5DF]">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 bg-[#1C3B52]" />
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#70706B]">
                ARCHITECTURAL ARCHIVE DOSSIER
              </span>
            </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#111111]">
                  Project Master Index
                </h1>
                <p className="mt-3 text-sm sm:text-base text-[#70706B] max-w-2xl font-light">
                  A structured chronological and technical register of infrastructure facilities, public landscapes, cultural institutions, and residential adaptations designed by Real Life Architecture.
                </p>
              </div>

              <div className="text-right font-mono text-xs text-[#70706B] shrink-0">
                <span>TOTAL WORKS: </span>
                <strong className="text-[#111111]">{PROJECTS.length} CATALOGUED</strong>
              </div>
            </div>
          </div>

          {/* Search & Filter Bar */}
          <div className="py-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-b border-[#E5E5DF]">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-[#70706B] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by title, location, reference..."
                className="w-full pl-10 pr-4 py-2.5 bg-[#FFFFFF] border border-[#E5E5DF] text-xs font-mono text-[#111111] placeholder:text-[#999999] focus:outline-none focus:border-[#111111]"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategoryFilter(cat)}
                  className={`px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider transition-all border cursor-pointer shrink-0 ${
                    categoryFilter === cat
                      ? 'bg-[#111111] text-[#FBFBF9] border-[#111111]'
                      : 'bg-[#FFFFFF] text-[#70706B] border-[#E5E5DF] hover:border-[#111111]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Catalogue Table */}
          <div className="overflow-x-auto mt-6 bg-[#FFFFFF] border border-[#E5E5DF]">
            <table className="w-full text-left border-collapse text-xs font-mono">
              <thead>
                <tr className="bg-[#F4F4F0] border-b border-[#E5E5DF] text-[#70706B] uppercase tracking-wider text-[10px]">
                  <th
                    className="p-4 cursor-pointer hover:text-[#111111]"
                    onClick={() => handleSort('projectNumber')}
                  >
                    <div className="flex items-center gap-1">
                      <span>Ref</span>
                      <ArrowUpDown className="w-3 h-3" />
                    </div>
                  </th>
                  <th
                    className="p-4 cursor-pointer hover:text-[#111111]"
                    onClick={() => handleSort('title')}
                  >
                    <div className="flex items-center gap-1">
                      <span>Project Title & Scope</span>
                      <ArrowUpDown className="w-3 h-3" />
                    </div>
                  </th>
                  <th
                    className="p-4 cursor-pointer hover:text-[#111111]"
                    onClick={() => handleSort('category')}
                  >
                    <div className="flex items-center gap-1">
                      <span>Typology</span>
                      <ArrowUpDown className="w-3 h-3" />
                    </div>
                  </th>
                  <th
                    className="p-4 cursor-pointer hover:text-[#111111]"
                    onClick={() => handleSort('location')}
                  >
                    <div className="flex items-center gap-1">
                      <span>Location</span>
                      <ArrowUpDown className="w-3 h-3" />
                    </div>
                  </th>
                  <th className="p-4">Dimensions / Scale</th>
                  <th
                    className="p-4 cursor-pointer hover:text-[#111111]"
                    onClick={() => handleSort('status')}
                  >
                    <div className="flex items-center gap-1">
                      <span>Statutory Status</span>
                      <ArrowUpDown className="w-3 h-3" />
                    </div>
                  </th>
                  <th className="p-4 text-right">Dossier</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E5DF]">
                {filteredAndSorted.map((project) => (
                  <tr
                    key={project.id}
                    className="hover:bg-[#FBFBF9] transition-colors group"
                  >
                    <td className="p-4 font-bold text-[#111111]">
                      {project.projectNumber}
                    </td>

                    <td className="p-4">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="block font-serif text-sm text-[#111111] group-hover:text-[#1C3B52] transition-colors"
                      >
                        {project.title}
                      </Link>
                      <span className="text-[11px] text-[#70706B] font-light block mt-0.5 line-clamp-1">
                        {project.subtitle}
                      </span>
                    </td>

                    <td className="p-4">
                      <span className="bg-[#F4F4F0] border border-[#E5E5DF] px-2 py-0.5 text-[10px] uppercase text-[#111111]">
                        {project.category}
                      </span>
                    </td>

                    <td className="p-4 text-[#70706B]">
                      {project.location}
                    </td>

                    <td className="p-4 text-[#70706B]">
                      {project.drawings && project.drawings.length > 0 ? (
                        <div className="flex items-center gap-1 text-[#1C3B52]">
                          <FileText className="w-3 h-3" />
                          <span>{project.drawings[0].scale || '1:100 / 1:50'}</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1 text-[#70706B]">
                          <Box className="w-3 h-3 text-amber-600" />
                          <span>3D Model</span>
                        </div>
                      )}
                    </td>

                    <td className="p-4 text-[#70706B]">
                      <span className="inline-flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3 text-emerald-600" />
                        <span className="truncate max-w-[170px]">{project.status}</span>
                      </span>
                    </td>

                    <td className="p-4 text-right">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#111111] text-[#FBFBF9] hover:bg-[#1C3B52] transition-colors text-[10px] uppercase font-bold"
                      >
                        <span>Open</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
