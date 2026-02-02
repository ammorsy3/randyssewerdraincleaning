'use client';

import { useState } from 'react';
import { MapPin, ChevronDown } from 'lucide-react';

export default function ServiceAreasSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const serviceAreas = [
    'Downtown',
    'Riverside',
    'Hillside',
    'Lakeside',
    'Parkview',
    'Westend',
    'Eastside',
    'Northgate',
  ];

  const visibleAreas = isExpanded ? serviceAreas : serviceAreas.slice(0, 4);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-950 mb-4 text-balance">
            Service Areas
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto text-balance">
            We serve the entire metropolitan area with rapid response times
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Service Areas Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {visibleAreas.map((area, index) => (
              <div
                key={index}
                className="glass-effect rounded-xl p-4 flex items-center gap-3 group hover:shadow-lg transition-all duration-300"
              >
                <MapPin className="w-5 h-5 text-orange-600 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="font-medium text-text-primary">{area}</span>
              </div>
            ))}
          </div>

          {/* Expand/Collapse Button */}
          {serviceAreas.length > 4 && (
            <div className="flex justify-center">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold transition-colors"
              >
                {isExpanded ? 'Show Less' : 'Show All Areas'}
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    isExpanded ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
