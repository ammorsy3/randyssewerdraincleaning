'use client';

import { useState, useEffect } from 'react';
import {
    Droplets,
    Wrench,
    Shield,
    Zap,
    CheckCircle2,
    TrendingUp
} from 'lucide-react';

const flowSteps = [
    {
        icon: Droplets,
        label: 'Water Analysis',
        description: 'Pressure testing & flow mapping',
        color: 'from-blue-500 to-blue-600'
    },
    {
        icon: Wrench,
        label: 'Precision Install',
        description: 'Laser-leveled pipe routing',
        color: 'from-orange-500 to-orange-600'
    },
    {
        icon: Shield,
        label: 'Quality Seal',
        description: 'Triple-check leak prevention',
        color: 'from-green-500 to-green-600'
    },
    {
        icon: Zap,
        label: 'Final Testing',
        description: 'Full system validation',
        color: 'from-purple-500 to-purple-600'
    }
];

const metrics = [
    {
        icon: CheckCircle2,
        value: '4.7★',
        label: 'Average Rating',
        description: 'Based on 339 verified Thumbtack reviews'
    },
    {
        icon: TrendingUp,
        value: '406+',
        label: 'Jobs Completed',
        description: 'Hired & completed on Thumbtack alone'
    },
    {
        icon: Shield,
        value: '21+',
        label: 'Years in Business',
        description: 'Serving Gastonia & surrounding areas'
    }
];

export default function ArchitectureOfFlow() {
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % flowSteps.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-20 md:py-32 bg-slate-950 relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                     linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }} />
            </div>

            {/* Animated Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[150px]" />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center mb-12 md:mb-20 animate-reveal">
                    <span className="text-blue-500 font-black tracking-[0.2em] uppercase text-xs mb-4 block">
                        Our Process
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 leading-[0.9]">
                        The Architecture <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
                            of Flow
                        </span>
                    </h2>
                    <p className="text-base md:text-xl text-slate-400 max-w-3xl mx-auto font-medium">
                        A glimpse into how we engineer reliable plumbing systems—precision, testing, and zero compromise.
                    </p>
                </div>

                {/* Flow Steps */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12 md:mb-20">
                    {flowSteps.map((step, index) => (
                        <div
                            key={index}
                            className={`relative group transition-all duration-700 ${activeStep === index ? 'scale-105' : 'scale-100 opacity-70'
                                }`}
                        >
                            {/* Connection Line - desktop only */}
                            {index < flowSteps.length - 1 && (
                                <div className="hidden md:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent" />
                            )}

                            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl p-5 md:p-8 hover:bg-white/10 transition-all duration-500">
                                {/* Icon */}
                                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-500`}>
                                    <step.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                                </div>

                                {/* Step Number */}
                                <div className="absolute top-3 right-3 text-4xl md:text-6xl font-black text-white/5">
                                    {index + 1}
                                </div>

                                {/* Content */}
                                <h3 className="text-lg md:text-2xl font-black text-white mb-2 md:mb-3">
                                    {step.label}
                                </h3>
                                <p className="text-slate-400 text-sm md:text-base font-medium">
                                    {step.description}
                                </p>

                                {/* Active Indicator */}
                                {activeStep === index && (
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-b-3xl animate-pulse" />
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Trust Metrics */}
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-16">
                    <div className="text-center mb-10 md:mb-12">
                        <h3 className="text-2xl md:text-4xl font-black text-white mb-3 md:mb-4">
                            Built on Trust &amp; Precision
                        </h3>
                        <p className="text-base md:text-lg text-slate-400 font-medium">
                            Our numbers speak to our commitment to excellence
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-4 md:gap-8">
                        {metrics.map((metric, index) => (
                            <div
                                key={index}
                                className="text-center group hover:scale-105 transition-transform duration-500"
                            >
                                <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-blue-500/10 border border-blue-500/20 mb-3 md:mb-6 group-hover:bg-blue-500/20 transition-colors">
                                    <metric.icon className="w-6 h-6 md:w-8 md:h-8 text-blue-500" />
                                </div>
                                <div className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-2 md:mb-4 tabular-nums">
                                    {metric.value}
                                </div>
                                <h4 className="text-sm md:text-xl font-bold text-white mb-1 md:mb-2">
                                    {metric.label}
                                </h4>
                                <p className="text-slate-400 text-xs md:text-base font-medium hidden md:block">
                                    {metric.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
