'use client';

import { useState, useEffect } from 'react';
import {
    Activity,
    MapPin,
    CheckCircle2,
    Clock,
    ShieldCheck
} from 'lucide-react';

export default function LiveStatus() {
    const [activeTeams, setActiveTeams] = useState(12);
    const [lastUpdate, setLastUpdate] = useState(new Date());

    useEffect(() => {
        // Simulate real-time updates
        const interval = setInterval(() => {
            setActiveTeams(prev => {
                const delta = Math.floor(Math.random() * 3) - 1;
                return Math.max(8, Math.min(18, prev + delta));
            });
            setLastUpdate(new Date());
        }, 15000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="hidden lg:flex items-center gap-8 px-6 py-3 bg-slate-950/5 backdrop-blur-md rounded-2xl border border-slate-950/10 animate-reveal">
            {/* Live Indicator */}
            <div className="flex items-center gap-3 pr-8 border-r border-slate-200">
                <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </div>
                <div className="flex flex-col">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Network Status</span>
                    <span className="text-xs font-bold text-slate-900">Live & Operational</span>
                </div>
            </div>

            {/* Metric 1 */}
            <div className="flex items-center gap-3">
                <Activity className="w-5 h-5 text-orange-600" />
                <div className="flex flex-col">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Active Teams</span>
                    <span className="text-xs font-bold text-slate-900">{activeTeams} Crews on Site</span>
                </div>
            </div>

            {/* Metric 2 */}
            <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-orange-600" />
                <div className="flex flex-col">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Next Slot</span>
                    <span className="text-xs font-bold text-slate-900">&lt; 45 Mins</span>
                </div>
            </div>

            {/* Metric 3 */}
            <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-orange-600" />
                <div className="flex flex-col">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Safety Score</span>
                    <span className="text-xs font-bold text-slate-900">100% Guaranteed</span>
                </div>
            </div>
        </div>
    );
}
