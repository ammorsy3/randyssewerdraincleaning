'use client';

import { Button } from '@/components/ui/button';
import { Phone, ArrowRight, ShieldCheck, Clock, Award } from 'lucide-react';

interface CTASectionProps {
  onCtaClick: () => void;
}

export default function CTASection({ onCtaClick }: CTASectionProps) {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Animated Mesh Gradient Background */}
      <div className="absolute inset-0 bg-[#020617]">
        <div className="absolute inset-0 bg-[linear-gradient(-45deg,#020617_0%,#0f172a_35%,#1e293b_50%,#0f172a_65%,#020617_100%)] animate-gradient-shift opacity-80" />

        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-40 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/40 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 z-10">
        {/* Main Content Card */}
        <div className="relative group">
          {/* Outer Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-blue-400 to-slate-500 rounded-3xl opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500" />

          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-16 overflow-hidden">
            {/* Pattern Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full pointer-events-none" />

            <div className="max-w-3xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold tracking-wider uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Immediate Support Available
              </div>

              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-balance leading-tight">
                  Ready to Clear Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Drain or Sewer?</span>
                </h2>
                <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto text-balance">
                  Serving Gastonia, NC and surrounding areas. Free estimates — we finish every job to your complete satisfaction.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
                <Button
                  onClick={onCtaClick}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-8 text-xl rounded-2xl font-bold shadow-2xl shadow-blue-600/20 hover:scale-105 transition-all duration-300 flex items-center gap-3"
                >
                  <Phone className="w-6 h-6 animate-pulse" />
                  Call Now: (704) 579-9558
                </Button>
                <Button
                  variant="outline"
                  className="px-10 py-8 text-xl rounded-2xl font-bold border-white/20 text-white hover:bg-white/10 hover:border-white transition-all duration-300 bg-transparent flex items-center gap-3 group"
                >
                  View Services
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 border-t border-white/10 mt-12">
                {[
                  { icon: ShieldCheck, label: "Free Estimates", sub: "No obligation" },
                  { icon: Award, label: "25% Senior & Veteran Discount", sub: "Just mention it when you call" },
                  { icon: Clock, label: "Mon–Fri, 9AM–5PM", sub: "Gastonia, NC & surrounding areas" }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 group/item">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-blue-400 group-hover/item:text-white group-hover/item:bg-blue-600 transition-all duration-300">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-white font-bold">{item.label}</p>
                      <p className="text-slate-400 text-sm">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
}
