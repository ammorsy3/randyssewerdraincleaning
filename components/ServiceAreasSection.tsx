'use client';

import { MapPin } from 'lucide-react';

const areas = [
  'Gastonia',
  'Belmont',
  'Mount Holly',
  'Cramerton',
  'Dallas',
  'Cherryville',
  'McAdenville',
  'Iron Station',
];

export default function ServiceAreasSection() {
  return (
    <div className="bg-slate-100 border-y border-slate-200 py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <div className="flex items-center gap-1.5 text-blue-600 font-bold text-xs uppercase tracking-widest shrink-0">
            <MapPin className="w-3.5 h-3.5" />
            <span>We Serve</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-slate-300" />
          {areas.map((area, i) => (
            <span key={i} className="flex items-center gap-1.5 text-sm text-slate-600 font-medium">
              <span className="w-1 h-1 rounded-full bg-blue-400 inline-block" />
              {area}, NC
            </span>
          ))}
          <div className="hidden sm:block w-px h-4 bg-slate-300" />
          <span className="text-xs text-slate-500 italic shrink-0">& surrounding Gaston County areas</span>
        </div>
      </div>
    </div>
  );
}
