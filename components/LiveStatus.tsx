'use client';

import { useState, useEffect } from 'react';
import {
    Activity,
    MapPin,
    CheckCircle2,
    Clock,
    ShieldCheck
} from 'lucide-react';

interface LiveStatusProps {
    variant?: 'light' | 'dark';
}

export default function LiveStatus({ variant = 'light' }: LiveStatusProps) {
    const [activeTeams, setActiveTeams] = useState(12);
    const [responseTime, setResponseTime] = useState(45);
    const [currentArea, setCurrentArea] = useState('Central District');

    useEffect(() => {
        const areas = ['Central District', 'West End', 'Industrial Zone', 'North Heights', 'South Bay'];

        // Simulate real-time updates
        const interval = setInterval(() => {
            setActiveTeams(prev => {
                const delta = Math.floor(Math.random() * 3) - 1;
                return Math.max(8, Math.min(18, prev + delta));
            });

            setResponseTime(prev => {
                const delta = Math.floor(Math.random() * 11) - 5;
                return Math.max(15, Math.min(60, prev + delta));
            });

            if (Math.random() > 0.7) {
                setCurrentArea(areas[Math.floor(Math.random() * areas.length)]);
            }
        }, 8000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`hidden lg:flex items-center gap-6 px-4 py-1.5 rounded-xl ${variant === 'dark'
                ? 'bg-white/5 border border-white/10'
                : 'bg-slate-50/50 backdrop-blur-md border border-slate-200/50 shadow-sm'
            } animate-reveal transition-all duration-500`}>
            {/* Live Indicator */}
            <div className={`flex items-center gap-2 pr-6 border-r ${variant === 'dark' ? 'border-white/10' : 'border-slate-200'}`}>
                <div className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </div>
                <div className="flex flex-col">
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-0.5">Status</span>
                    <span className={`text-[11px] font-bold whitespace-nowrap ${variant === 'dark' ? 'text-white' : 'text-slate-900'}`}>Live</span>
                </div>
            </div>

            {/* Metric 1: Location */}
            <div className={`flex items-center gap-2 pr-6 border-r ${variant === 'dark' ? 'border-white/10' : 'border-slate-200'}`}>
                <MapPin className="w-4 h-4 text-orange-500" />
                <div className="flex flex-col">
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-0.5">Focus</span>
                    <span className={`text-[11px] font-bold whitespace-nowrap ${variant === 'dark' ? 'text-white' : 'text-slate-900'}`}>{currentArea}</span>
                </div>
            </div>

            {/* Metric 2: Teams */}
            <div className={`flex items-center gap-2 pr-6 border-r ${variant === 'dark' ? 'border-white/10' : 'border-slate-200'}`}>
                <Activity className="w-4 h-4 text-orange-500" />
                <div className="flex flex-col">
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-0.5">Crew</span>
                    <span className={`text-[11px] font-bold whitespace-nowrap ${variant === 'dark' ? 'text-white' : 'text-slate-900'}`}>{activeTeams} On-Site</span>
                </div>
            </div>

            {/* Metric 3: Response */}
            <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-orange-500" />
                <div className="flex flex-col">
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-0.5">ETA</span>
                    <span className={`text-[11px] font-bold whitespace-nowrap ${variant === 'dark' ? 'text-white' : 'text-slate-900'}`}>{responseTime} Mins</span>
                </div>
            </div>
        </div>
    );
}
