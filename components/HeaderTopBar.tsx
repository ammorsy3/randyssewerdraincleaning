'use client';

import LiveStatus from './LiveStatus';
import { Phone, MapPin } from 'lucide-react';

export default function HeaderTopBar() {
    return (
        <div className="bg-slate-950 text-white py-2 border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-4">
                {/* Left Side: Regional Info */}
                <div className="hidden sm:flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400">
                    <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-orange-500" />
                        Serving Greater Metro Area & Suburbs
                    </div>
                    <div className="w-px h-3 bg-white/10" />
                    <div className="text-white">Emergency Response 24/7</div>
                </div>

                {/* Center: Live Status (Desktop Only) */}
                <div className="flex-grow flex justify-center scale-[0.85] origin-center">
                    <LiveStatus variant="dark" />
                </div>

                {/* Right Side: Quick Contact */}
                <div className="flex items-center gap-4">
                    <a
                        href="tel:+15550199"
                        className="flex items-center gap-2 text-white hover:text-orange-500 transition-colors"
                    >
                        <div className="w-6 h-6 rounded-full bg-orange-600 flex items-center justify-center">
                            <Phone className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-xs font-black tracking-tight">(555) 0199</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
