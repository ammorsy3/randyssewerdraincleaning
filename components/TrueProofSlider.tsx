'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import {
    ArrowLeftRight,
    CheckCircle2
} from 'lucide-react';

export default function TrueProofSlider() {
    const [sliderPosition, setSliderPosition] = useState(50);
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


    return (
        <section id="proof" className="py-20 md:py-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-5 gap-16 items-center">

                    {/* Left Side: Copy */}
                    <div className="lg:col-span-2 space-y-8 animate-reveal">
                        <div>
                            <span className="text-orange-600 font-bold tracking-widest uppercase text-sm mb-2 block">
                                Service Standard
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-950 leading-tight">
                                See the <br />
                                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">Transformation</span>
                            </h2>
                        </div>

                        <p className="text-lg text-slate-600 leading-relaxed font-medium">
                            We don't just patch leaks; we replace outdated, failing infrastructure with modern, high-efficiency systems that last for decades.
                        </p>

                        <div className="space-y-4">
                            {[
                                { label: "Dirty & Corroded", color: "text-slate-400" },
                                { label: "Professional & Organized", color: "text-orange-600" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className={`w-3 h-3 rounded-full ${i === 0 ? 'bg-slate-300' : 'bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.4)]'}`} />
                                    <span className={`text-xs font-black uppercase tracking-widest ${item.color}`}>{item.label}</span>
                                </div>
                            ))}
                        </div>

                        <div className="p-6 bg-slate-950 rounded-2xl flex items-center gap-4 border border-white/5">
                            <div className="w-12 h-12 rounded-full bg-orange-600 shadow-lg flex items-center justify-center text-white">
                                <ArrowLeftRight className="w-6 h-6" />
                            </div>
                            <p className="text-sm font-bold text-white leading-snug">
                                <span className="text-orange-500 block text-[10px] uppercase tracking-wider mb-1">Interactive Guide</span>
                                Slide the circle left and right to compare.
                            </p>
                        </div>
                    </div>

                    {/* Right Side: Interactive Slider */}
                    <div className="lg:col-span-3 h-[450px] md:h-[550px] relative group animate-reveal delay-200">
                        <div
                            ref={containerRef}
                            onMouseMove={handleMouseMove}
                            onTouchMove={handleMouseMove}
                            className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200 cursor-ew-resize"
                        >
                            {/* Before Image (Bottom Layer) */}
                            <div className="absolute inset-0">
                                <Image
                                    src="/before.png"
                                    alt="Old rusted pipes with leaks"
                                    fill
                                    className="object-cover"
                                />
                                {/* Before Label */}
                                <div className="absolute top-8 left-8 bg-slate-950/90 backdrop-blur-md px-5 py-2 rounded-full text-white font-black text-[10px] uppercase tracking-[0.2em] z-10 border border-white/10 shadow-xl">
                                    OLD SYSTEM
                                </div>
                            </div>

                            {/* After Image (Top Layer / Clipped) */}
                            <div
                                className="absolute inset-0 z-10 overflow-hidden"
                                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                            >
                                <div className="absolute inset-0">
                                    <Image
                                        src="/after.png"
                                        alt="Modern organized plumbing installation"
                                        fill
                                        className="object-cover"
                                    />
                                    {/* After Label */}
                                    <div className="absolute top-8 right-8 bg-orange-600 px-5 py-2 rounded-full text-white font-black text-[10px] uppercase tracking-[0.2em] z-20 shadow-xl border border-white/20">
                                        OUR WORK
                                    </div>
                                </div>
                            </div>

                            {/* Slider Handle */}
                            <div
                                className="absolute top-0 bottom-0 z-30 w-1 bg-white/50 backdrop-blur-sm shadow-[0_0_40px_rgba(255,255,255,0.8)] pointer-events-none"
                                style={{ left: `${sliderPosition}%` }}
                            >
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-[0_0_50px_rgba(0,0,0,0.4)] flex items-center justify-center text-orange-600 border-4 border-white transition-transform group-hover:scale-110">
                                    <ArrowLeftRight className="w-6 h-6" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
