'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
    Droplets,
    DollarSign,
    AlertTriangle,
    TrendingUp,
    Home,
    ShieldX
} from 'lucide-react';

export default function DelayCalculator() {
    const [dripsPerMinute, setDripsPerMinute] = useState(20);
    const [daysDelayed, setDaysDelayed] = useState(7);

    // Calculations
    const gallonsLostPerDay = (dripsPerMinute * 60 * 24) / 15140; // Approx 15140 drips per gallon
    const totalGallonsLost = gallonsLostPerDay * daysDelayed;
    const financialLoss = totalGallonsLost * 0.015; // $0.015 per gallon average
    const moldRisk = Math.min(100, (daysDelayed * 5) + (dripsPerMinute / 10));
    const damageRisk = Math.min(100, (daysDelayed * 8));

    return (
        <section className="py-20 bg-slate-900 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-[100px] -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -ml-48 -mb-48" />

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side: Inputs */}
                    <div className="space-y-8 animate-reveal">
                        <div>
                            <span className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-2 block">
                                Logistical Impact
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                The Invisible Cost <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                                    of Delay
                                </span>
                            </h2>
                            <p className="text-lg text-slate-400 leading-relaxed">
                                Plumbing issues don't stay the same. They grow. Use this tool to see the actual impact of waiting another day.
                            </p>
                        </div>

                        <div className="space-y-10 group bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl">
                            {/* Slider 1 */}
                            <div className="space-y-4">
                                <div className="flex justify-between items-center text-white">
                                    <label className="font-bold flex items-center gap-2">
                                        <Droplets className="w-5 h-5 text-blue-400" />
                                        How fast is the leak?
                                    </label>
                                    <span className="text-2xl font-black text-orange-500 italic">{dripsPerMinute} drips/min</span>
                                </div>
                                <input
                                    type="range"
                                    min="1"
                                    max="120"
                                    value={dripsPerMinute}
                                    onChange={(e) => setDripsPerMinute(parseInt(e.target.value))}
                                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
                                />
                                <div className="flex justify-between text-xs text-slate-500 font-bold uppercase tracking-wider">
                                    <span>Slow Drip</span>
                                    <span>Fast Stream</span>
                                </div>
                            </div>

                            {/* Slider 2 */}
                            <div className="space-y-4">
                                <div className="flex justify-between items-center text-white">
                                    <label className="font-bold flex items-center gap-2">
                                        <TrendingUp className="w-5 h-5 text-orange-400" />
                                        How long has it been leaking?
                                    </label>
                                    <span className="text-2xl font-black text-orange-500 italic">{daysDelayed} days</span>
                                </div>
                                <input
                                    type="range"
                                    min="1"
                                    max="30"
                                    value={daysDelayed}
                                    onChange={(e) => setDaysDelayed(parseInt(e.target.value))}
                                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
                                />
                                <div className="flex justify-between text-xs text-slate-500 font-bold uppercase tracking-wider">
                                    <span>Detected Today</span>
                                    <span>1 Month</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Results */}
                    <div className="grid grid-cols-2 gap-4 animate-reveal delay-200">
                        {/* Financial Loss */}
                        <div className="bg-white rounded-3xl p-6 shadow-2xl hover:scale-105 transition-transform duration-300">
                            <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-green-600 mb-4">
                                <DollarSign className="w-6 h-6" />
                            </div>
                            <p className="text-slate-500 font-bold text-xs uppercase mb-1">Estimated Loss</p>
                            <h4 className="text-3xl font-black text-slate-900">${financialLoss.toFixed(2)}</h4>
                            <p className="text-slate-400 text-xs mt-2 italic">Pure water wastage cost</p>
                        </div>

                        {/* Gallons Lost */}
                        <div className="bg-white rounded-3xl p-6 shadow-2xl hover:scale-105 transition-transform duration-300">
                            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                                <Droplets className="w-6 h-6" />
                            </div>
                            <p className="text-slate-500 font-bold text-xs uppercase mb-1">Water Wasted</p>
                            <h4 className="text-3xl font-black text-slate-900">{totalGallonsLost.toFixed(0)} gal</h4>
                            <p className="text-slate-400 text-xs mt-2 italic">Enough to fill {Math.max(1, Math.round(totalGallonsLost / 40))} bathtubs</p>
                        </div>

                        {/* Mold Risk */}
                        <div className="bg-white rounded-3xl p-6 shadow-2xl hover:scale-105 transition-transform duration-300 col-span-2 relative overflow-hidden">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center text-red-600 mb-4">
                                        <AlertTriangle className="w-6 h-6" />
                                    </div>
                                    <p className="text-slate-500 font-bold text-xs uppercase mb-1">Secondary Damage Risk</p>
                                    <h4 className="text-2xl font-black text-slate-900">High Risk of Structural Damage</h4>
                                </div>
                                <div className="text-right">
                                    <span className="text-4xl font-black text-red-600">{moldRisk.toFixed(0)}%</span>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="h-4 bg-slate-100 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-orange-400 to-red-600 transition-all duration-1000"
                                        style={{ width: `${moldRisk}%` }}
                                    />
                                </div>

                                <div className="grid grid-cols-3 gap-2">
                                    {[
                                        { icon: Home, label: 'Mold Growth' },
                                        { icon: ShieldX, label: 'Drywall Rot' },
                                        { icon: AlertTriangle, label: 'Electrical Short' },
                                    ].map((risk, i) => (
                                        <div key={i} className="flex items-center gap-1.5 p-2 bg-slate-50 rounded-lg">
                                            <risk.icon className="w-4 h-4 text-orange-500" />
                                            <span className="text-[10px] font-bold text-slate-600 uppercase">{risk.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <Button
                            className="col-span-2 bg-orange-600 hover:bg-orange-700 text-white font-bold h-16 rounded-2xl text-xl shadow-xl hover:scale-105 transition-all mt-4"
                        >
                            Prevent Further Damage Now
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
