'use client';

import {
  Star,
  Users,
  Clock,
  ShieldCheck,
  ThumbsUp,
  Zap,
  MapPin,
  Award,
  Phone,
  CheckCircle,
} from 'lucide-react';

const statItems = [
  { icon: ThumbsUp, value: '400+', label: 'Jobs Completed', color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100' },
  { icon: Star, value: '4.7 ★', label: 'Thumbtack Rating', color: 'text-amber-500', bg: 'bg-amber-50', border: 'border-amber-100' },
  { icon: Clock, value: '21 yrs', label: 'Experience', color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100' },
  { icon: Users, value: '300+', label: 'Verified Reviews', color: 'text-amber-500', bg: 'bg-amber-50', border: 'border-amber-100' },
  { icon: ShieldCheck, value: '100%', label: 'Free Estimates', color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100' },
  { icon: Award, value: 'Top Pro', label: 'Thumbtack 2017–2018', color: 'text-amber-500', bg: 'bg-amber-50', border: 'border-amber-100' },
  { icon: Zap, value: 'Same Day', label: 'Service Available', color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100' },
  { icon: MapPin, value: 'Gastonia', label: 'NC & Surrounding Areas', color: 'text-amber-500', bg: 'bg-amber-50', border: 'border-amber-100' },
  { icon: Phone, value: '24/7', label: 'Emergency Ready', color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100' },
  { icon: CheckCircle, value: '5★ ×338', label: 'Consistent Excellence', color: 'text-amber-500', bg: 'bg-amber-50', border: 'border-amber-100' },
];

function StatCard({ icon: Icon, value, label, color, bg, border }: typeof statItems[0]) {
  return (
    <div className={`flex items-center gap-3 px-5 py-3 rounded-2xl border ${bg} ${border} shadow-sm mx-3 shrink-0 select-none`}>
      <div className={`p-2 rounded-xl ${bg} border ${border}`}>
        <Icon className={`w-5 h-5 ${color}`} />
      </div>
      <div className="leading-tight">
        <p className={`text-lg font-black ${color} tabular-nums`}>{value}</p>
        <p className="text-xs text-slate-500 font-medium">{label}</p>
      </div>
    </div>
  );
}

export default function QuickStats() {
  // Duplicate items to ensure seamless infinite scroll
  const doubled = [...statItems, ...statItems];

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-8 border-t border-b border-slate-200 overflow-hidden">
      <style>{`
        @keyframes scroll-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: scroll-marquee 30s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="overflow-hidden w-full">
        <div className="marquee-track">
          {doubled.map((item, i) => (
            <StatCard key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
