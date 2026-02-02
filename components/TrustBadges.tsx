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
              className="glass-effect rounded-2xl p-8 text-center flex flex-col items-center gap-4 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="text-orange-400 group-hover:scale-110 transition-transform duration-300 group-hover:text-orange-300">
                {badge.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{badge.title}</h3>
                <p className="text-gray-300 text-sm">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
