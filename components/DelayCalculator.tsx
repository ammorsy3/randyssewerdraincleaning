'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
    Droplets,
    DollarSign,
    AlertTriangle,
    TrendingUp,
    Home,
    Waves,
    ShieldX
} from 'lucide-react';

function AnimatedNumber({ value, prefix = '', suffix = '', decimals = 0 }: { value: number; prefix?: string; suffix?: string; decimals?: number }) {
    const [displayValue, setDisplayValue] = useState(value);

    useEffect(() => {
        let start = displayValue;
        const end = value;
        const duration = 500;
        const startTime = performance.now();

        const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const current = start + (end - start) * progress;
            setDisplayValue(current);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [value]);

    return (
        <span>{prefix}{displayValue.toFixed(decimals)}{suffix}</span>
    );
}

interface DelayCalculatorProps {
    onCtaClick?: () => void;
}

export default function DelayCalculator({ onCtaClick }: DelayCalculatorProps) {
    const [dripsPerMinute, setDripsPerMinute] = useState(20);
    const [daysDelayed, setDaysDelayed] = useState(7);

    // Calculations
    const gallonsLostPerDay = (dripsPerMinute * 60 * 24) / 15140; // Approx 15140 drips per gallon
    const totalGallonsLost = gallonsLostPerDay * daysDelayed;
    const financialLoss = totalGallonsLost * 0.015; // $0.015 per gallon average
    const moldRisk = Math.min(100, (daysDelayed * 5) + (dripsPerMinute / 10));

    return (
        <section className="py-20 md:py-32 bg-slate-950 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -mr-64 -mt-64" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -ml-64 -mb-64" />

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-10 md:gap-20 items-center">

                    {/* Left Side: Inputs */}
                    <div className="space-y-10 animate-reveal">
                        <div>
                            <span className="text-blue-500 font-black tracking-[0.2em] uppercase text-xs mb-4 block">
                                Educational Tool
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 leading-[0.9]">
                                The Cost of <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
                                    Waiting
                                </span>
                            </h2>
                            <p className="text-xl text-slate-400 leading-relaxed font-medium">
                                A slow leak or ignored drain backup can cost you far more than a free estimate. See for yourself — no pressure, just facts.
                            </p>
                        </div>

                        <div className="space-y-8 md:space-y-12 bg-white/5 backdrop-blur-xl border border-white/10 p-7 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl">
                            {/* Slider 1 */}
                            <div className="space-y-6">
                                <div className="flex justify-between items-center text-white">
                                    <label className="font-bold text-lg flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                                            <Droplets className="w-5 h-5 text-blue-400" />
                                        </div>
                                        Leak Intensity
                                    </label>
                                    <span className="text-3xl font-black text-blue-500 tabular-nums">{dripsPerMinute} <span className="text-sm uppercase tracking-widest text-slate-500">dpm</span></span>
                                </div>
                                <input
                                    type="range"
                                    min="1"
                                    max="120"
                                    value={dripsPerMinute}
                                    onChange={(e) => setDripsPerMinute(parseInt(e.target.value))}
                                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                                />
                            </div>

                            {/* Slider 2 */}
                            <div className="space-y-6">
                                <div className="flex justify-between items-center text-white">
                                    <label className="font-bold text-lg flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                                            <TrendingUp className="w-5 h-5 text-blue-400" />
                                        </div>
                                        Duration of Delay
                                    </label>
                                    <span className="text-3xl font-black text-blue-500 tabular-nums">{daysDelayed} <span className="text-sm uppercase tracking-widest text-slate-500">days</span></span>
                                </div>
                                <input
                                    type="range"
                                    min="1"
                                    max="30"
                                    value={daysDelayed}
                                    onChange={(e) => setDaysDelayed(parseInt(e.target.value))}
                                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Results */}
                    <div className="grid grid-cols-2 gap-4 md:gap-6 animate-reveal delay-200">
                        {/* Financial Loss */}
                        <div className="bg-white rounded-[2rem] p-8 shadow-2xl hover:scale-105 transition-all duration-500 group">
                            <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center text-green-600 mb-6 group-hover:rotate-12 transition-transform">
                                <DollarSign className="w-7 h-7" />
                            </div>
                            <p className="text-slate-500 font-black text-xs uppercase tracking-widest mb-2">Wasted Utility</p>
                            <h4 className="text-4xl font-black text-slate-900 tabular-nums">
                                <AnimatedNumber value={financialLoss} prefix="$" decimals={2} />
                            </h4>
                        </div>

                        {/* Gallons Lost */}
                        <div className="bg-white rounded-[2rem] p-8 shadow-2xl hover:scale-105 transition-all duration-500 group">
                            <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 mb-6 group-hover:rotate-12 transition-transform">
                                <Waves className="w-7 h-7" />
                            </div>
                            <p className="text-slate-500 font-black text-xs uppercase tracking-widest mb-2">Resource Loss</p>
                            <h4 className="text-4xl font-black text-slate-900 tabular-nums">
                                <AnimatedNumber value={totalGallonsLost} suffix=" Gal" />
                            </h4>
                        </div>

                        {/* Risk Gauge */}
                        <div className="bg-white rounded-[2rem] p-10 shadow-2xl hover:scale-[1.02] transition-all duration-500 col-span-2 relative overflow-hidden group">
                            <div className="flex justify-between items-start mb-8">
                                <div>
                                    <div className="w-12 h-12 rounded-2xl bg-red-100 flex items-center justify-center text-red-600 mb-6 group-hover:scale-110 transition-transform">
                                        <AlertTriangle className="w-7 h-7" />
                                    </div>
                                    <p className="text-slate-500 font-black text-xs uppercase tracking-widest mb-2">What to Watch For</p>
                                    <h4 className="text-3xl font-black text-slate-900">Potential Issues</h4>
                                </div>
                                <div className="text-right">
                                    <span className="text-6xl font-black text-red-600 tabular-nums">
                                        <AnimatedNumber value={moldRisk} suffix="%" />
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="h-6 bg-slate-100 rounded-full overflow-hidden p-1 shadow-inner">
                                    <div
                                        className="h-full bg-gradient-to-r from-blue-500 via-red-500 to-red-700 rounded-full transition-all duration-1000 flex items-center justify-end px-2"
                                        style={{ width: `${moldRisk}%` }}
                                    >
                                        <div className="w-2 h-2 bg-white rounded-full animate-pulse shadow-glow" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 gap-4">
                                    {[
                                        { icon: Home, label: 'Mold Risk', color: 'text-blue-600' },
                                        { icon: ShieldX, label: 'Drywall Decay', color: 'text-red-600' },
                                        { icon: AlertTriangle, label: 'Flooding', color: 'text-red-800' },
                                    ].map((risk, i) => (
                                        <div key={i} className="flex flex-col items-center gap-2 p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-md transition-all">
                                            <risk.icon className={`w-6 h-6 ${risk.color}`} />
                                            <span className="text-[10px] font-black text-slate-600 uppercase tracking-tight">{risk.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <Button
                            onClick={onCtaClick}
                            className="col-span-2 bg-blue-600 hover:bg-blue-700 text-white font-black h-20 rounded-[2rem] text-2xl shadow-2xl hover:shadow-blue-500/40 hover:scale-105 transition-all mt-6"
                        >
                            Get Expert Help
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
