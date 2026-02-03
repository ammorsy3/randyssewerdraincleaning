'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import {
    Info,
    ArrowLeftRight,
    ChevronRight,
    CheckCircle2,
    Wrench,
    Search
} from 'lucide-react';

export default function TrueProofSlider() {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [activeHotspot, setActiveHotspot] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = 'touches' in e
            ? e.touches[0].clientX - rect.left
            : (e as React.MouseEvent).clientX - rect.left;

        const position = (x / rect.width) * 100;
        setSliderPosition(Math.max(0, Math.min(100, position)));
    };

    const hotspots = [
        { x: 30, y: 40, title: "Precision Pipework", text: "We use laser-leveled PEX manifolds to ensure zero pressure drops across the house." },
        { x: 70, y: 60, title: "Anti-Corrosion Seals", text: "Double-walled copper fittings with commercial-grade flux to prevent lead leaching." },
        { x: 50, y: 20, title: "Smart Valve Control", text: "Digital shut-off valves integrated with flood sensors for 100% leak protection." }
    ];

    return (
        <section id="proof" className="py-20 md:py-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-5 gap-16 items-center">

                    {/* Left Side: Copy */}
                    <div className="lg:col-span-2 space-y-8 animate-reveal">
                        <div>
                            <span className="text-orange-600 font-bold tracking-widest uppercase text-sm mb-2 block">
                                The Standard of Excellence
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-950 leading-tight">
                                Our Work Is <br />
                                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">Artistically Functional</span>
                            </h2>
                        </div>

                        <p className="text-lg text-slate-600 leading-relaxed">
                            Don't just take our word for it. Explore the technical details of our typical installations. Use the slider to see the difference between "done" and "mastered."
                        </p>

                        <ul className="space-y-4">
                            {[
                                "Commercial Grade Materials only",
                                "Laser-Guided Installation",
                                "Double-Check Safety Protocol"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-950 font-bold">
                                    <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                                        <CheckCircle2 className="w-4 h-4" />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-orange-600 animate-bounce">
                                <Search className="w-6 h-6" />
                            </div>
                            <p className="text-sm font-medium text-slate-500">
                                <span className="text-slate-950 font-bold">Try it:</span> Move the slider and tap the hotspots to see technical specs.
                            </p>
                        </div>
                    </div>

                    {/* Right Side: Interactive Slider */}
                    <div className="lg:col-span-3 h-[500px] md:h-[600px] relative group animate-reveal delay-200">
                        <div
                            ref={containerRef}
                            onMouseMove={handleMouseMove}
                            onTouchMove={handleMouseMove}
                            className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] border border-slate-200 cursor-ew-resize"
                        >
                            {/* Before Image (Bottom) */}
                            <div className="absolute inset-0 grayscale contrast-125 brightness-75">
                                <Image
                                    src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200"
                                    alt="Old Plumbing"
                                    fill
                                    className="object-cover"
                                />
                                {/* Before Label */}
                                <div className="absolute top-8 left-8 bg-slate-950/80 backdrop-blur px-4 py-2 rounded-lg text-white font-bold text-xs uppercase tracking-widest z-10 border border-white/20">
                                    Legacy System
                                </div>
                            </div>

                            {/* After Image (Top / Clipped) */}
                            <div
                                className="absolute inset-0 z-10 overflow-hidden"
                                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                            >
                                <div className="absolute inset-0">
                                    <Image
                                        src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1200"
                                        alt="New Plumbing"
                                        fill
                                        className="object-cover"
                                    />
                                    {/* After Label */}
                                    <div className="absolute top-8 right-8 bg-orange-600 px-4 py-2 rounded-lg text-white font-bold text-xs uppercase tracking-widest z-10 shadow-lg">
                                        The Fix Standard
                                    </div>

                                    {/* Hotspots - Only visible when "After" side is revealed */}
                                    {hotspots.map((spot, i) => (
                                        <div
                                            key={i}
                                            className="absolute z-30 transition-all duration-300"
                                            style={{
                                                left: `${spot.x}%`,
                                                top: `${spot.y}%`,
                                                opacity: sliderPosition > spot.x ? 1 : 0,
                                                transform: `scale(${sliderPosition > spot.x ? 1 : 0})`
                                            }}
                                            onMouseEnter={() => setActiveHotspot(i)}
                                            onMouseLeave={() => setActiveHotspot(null)}
                                        >
                                            <button className="relative w-10 h-10 flex items-center justify-center group/btn">
                                                <span className="absolute inset-0 bg-orange-500 rounded-full animate-ping opacity-75" />
                                                <span className="relative w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center text-white border-2 border-white shadow-lg">
                                                    <Info className="w-3 h-3" />
                                                </span>
                                            </button>

                                            {/* Tooltip */}
                                            {activeHotspot === i && (
                                                <div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 w-64 bg-slate-900 text-white p-5 rounded-2xl shadow-2xl animate-reveal border border-white/10 z-50">
                                                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-slate-900 rotate-45 border-l border-t border-white/10" />
                                                    <h5 className="font-bold text-orange-400 mb-2">{spot.title}</h5>
                                                    <p className="text-xs text-slate-400 leading-relaxed font-medium">{spot.text}</p>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Slider Handle */}
                            <div
                                className="absolute top-0 bottom-0 z-20 w-1 bg-white shadow-[0_0_20px_rgba(255,255,255,0.5)] pointer-events-none"
                                style={{ left: `${sliderPosition}%` }}
                            >
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center text-slate-900 border-4 border-slate-100">
                                    <ArrowLeftRight className="w-5 h-5" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
