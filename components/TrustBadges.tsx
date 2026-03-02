'use client';

import Image from 'next/image';
import { CheckCircle, Shield, FileCheck } from 'lucide-react';

export default function TrustBadges() {
  return (
    <section id="trust" className="py-12 md:py-16 bg-gradient-to-r from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 items-stretch">

          {/* Thumbtack Top Pro — real award badge */}
          <div className="relative group col-span-2 md:col-span-1 animate-reveal delay-100">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-amber-400 to-blue-500 rounded-2xl opacity-60 group-hover:opacity-100 blur-sm transition-all duration-500 animate-pulse" />
            <div className="relative rounded-2xl p-6 flex flex-col items-center justify-center gap-3 bg-slate-900/90 backdrop-blur-xl border border-amber-500/30 group-hover:border-amber-400/60 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-amber-500/20 h-full min-h-[160px]">
              <div className="relative w-32 h-24 bg-white rounded-xl p-2 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-inner">
                <div className="relative w-full h-full">
                  <Image
                    src="/randy-brand-logo.jpg"
                    alt="Thumbtack Top Pro"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <p className="text-amber-400 font-black text-xs uppercase tracking-widest text-center">Thumbtack Top Pro</p>
            </div>
          </div>

          {/* Free Estimates */}
          <div className="relative group animate-reveal delay-200">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-blue-400 to-amber-500 rounded-2xl opacity-30 group-hover:opacity-80 blur-sm transition-all duration-500" />
            <div className="relative rounded-2xl p-6 text-center flex flex-col items-center gap-3 bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 group-hover:border-blue-500/40 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-blue-500/20 h-full min-h-[160px] justify-center">
              <div className="text-blue-400 group-hover:scale-110 transition-transform duration-300" style={{ filter: 'drop-shadow(0 0 8px rgba(37,99,235,0.4))' }}>
                <FileCheck className="w-10 h-10" />
              </div>
              <div>
                <h3 className="text-lg font-black text-white group-hover:text-blue-300 transition-colors leading-tight">Free Estimates</h3>
                <p className="text-slate-400 text-xs mt-1">No obligation, every job</p>
              </div>
            </div>
          </div>

          {/* 25% Discount */}
          <div className="relative group animate-reveal delay-300">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-blue-400 to-amber-500 rounded-2xl opacity-30 group-hover:opacity-80 blur-sm transition-all duration-500" />
            <div className="relative rounded-2xl p-6 text-center flex flex-col items-center gap-3 bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 group-hover:border-blue-500/40 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-blue-500/20 h-full min-h-[160px] justify-center">
              <div className="text-blue-400 group-hover:scale-110 transition-transform duration-300" style={{ filter: 'drop-shadow(0 0 8px rgba(37,99,235,0.4))' }}>
                <Shield className="w-10 h-10" />
              </div>
              <div>
                <h3 className="text-lg font-black text-white group-hover:text-blue-300 transition-colors leading-tight">25% Off</h3>
                <p className="text-slate-400 text-xs mt-1">Seniors & veterans</p>
              </div>
            </div>
          </div>

          {/* Satisfaction Guaranteed */}
          <div className="relative group animate-reveal delay-400">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-blue-400 to-amber-500 rounded-2xl opacity-30 group-hover:opacity-80 blur-sm transition-all duration-500" />
            <div className="relative rounded-2xl p-6 text-center flex flex-col items-center gap-3 bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 group-hover:border-blue-500/40 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-blue-500/20 h-full min-h-[160px] justify-center">
              <div className="text-blue-400 group-hover:scale-110 transition-transform duration-300" style={{ filter: 'drop-shadow(0 0 8px rgba(37,99,235,0.4))' }}>
                <CheckCircle className="w-10 h-10" />
              </div>
              <div>
                <h3 className="text-lg font-black text-white group-hover:text-blue-300 transition-colors leading-tight">Satisfaction Guaranteed</h3>
                <p className="text-slate-400 text-xs mt-1">Done right, every time</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
