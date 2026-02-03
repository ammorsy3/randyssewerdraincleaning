'use client';

import React from "react"

import { CheckCircle, Shield, FileCheck } from 'lucide-react';

interface Badge {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function TrustBadges() {
  const badges: Badge[] = [
    {
      icon: <FileCheck className="w-12 h-12" />,
      title: 'Licensed',
      description: 'License #PL-99281',
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Bonded',
      description: 'Full bonding coverage',
    },
    {
      icon: <CheckCircle className="w-12 h-12" />,
      title: 'Insured',
      description: 'Comprehensive coverage',
    },
  ];

  return (
    <section id="trust" className="py-12 md:py-16 bg-gradient-to-r from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {badges.map((badge, index) => (
            <div
              key={index}
              className={`relative group animate-reveal delay-${(index + 1) * 100}`}
            >
              {/* Animated Gradient Border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 via-orange-400 to-blue-500 rounded-2xl opacity-50 group-hover:opacity-100 blur-sm group-hover:blur transition-all duration-500 animate-pulse" />

              {/* Card Content */}
              <div className="relative rounded-2xl p-8 text-center flex flex-col items-center gap-4 bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 group-hover:border-orange-500/30 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-orange-500/20">
                {/* Icon with Pulse Glow */}
                <div
                  className="text-orange-400 transition-all duration-300 group-hover:scale-110"
                  style={{
                    filter: 'drop-shadow(0 0 8px rgba(251, 146, 60, 0.4))',
                    animation: 'icon-pulse 3s ease-in-out infinite'
                  }}
                >
                  {badge.icon}
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors duration-300">
                    {badge.title}
                  </h3>
                  <p className="text-slate-300 text-sm group-hover:text-slate-200 transition-colors duration-300">
                    {badge.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
