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
        value: '99.8%',
        label: 'First-Time Success',
        description: 'Jobs completed without callbacks'
    },
    {
        icon: TrendingUp,
        value: '2,400+',
        label: 'Systems Installed',
        description: 'Across residential & commercial'
    },
    {
        icon: Shield,
        value: '0',
        label: 'Leak Failures',
        description: 'In certified installations (2024)'
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
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-600/5 rounded-full blur-[150px]" />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center mb-20 animate-reveal">
                    <span className="text-orange-500 font-black tracking-[0.2em] uppercase text-xs mb-4 block">
                        Our Process
                    </span>
                    <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-[0.9]">
                        The Architecture <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
                            of Flow
                        </span>
                    </h2>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto font-medium">
                        A glimpse into how we engineer reliable plumbing systems—precision, testing, and zero compromise.
                    </p>
                </div>

                {/* Flow Steps */}
                <div className="grid md:grid-cols-4 gap-8 mb-20">
                    {flowSteps.map((step, index) => (
                        <div
                            key={index}
                            className={`relative group transition-all duration-700 ${activeStep === index ? 'scale-105' : 'scale-100 opacity-70'
                                }`}
                        >
                            {/* Connection Line */}
                            {index < flowSteps.length - 1 && (
                                <div className="hidden md:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-orange-500/50 to-transparent" />
                            )}

                            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500">
                                {/* Icon */}
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                                    <step.icon className="w-8 h-8 text-white" />
                                </div>

                                {/* Step Number */}
                                <div className="absolute top-4 right-4 text-6xl font-black text-white/5">
                                    {index + 1}
                                </div>

                                {/* Content */}
                                <h3 className="text-2xl font-black text-white mb-3">
                                    {step.label}
                                </h3>
                                <p className="text-slate-400 font-medium">
                                    {step.description}
                                </p>

                                {/* Active Indicator */}
                                {activeStep === index && (
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-b-3xl animate-pulse" />
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Trust Metrics */}
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-12 md:p-16">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                            Built on Trust & Precision
                        </h3>
                        <p className="text-lg text-slate-400 font-medium">
                            Our numbers speak to our commitment to excellence
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {metrics.map((metric, index) => (
                            <div
                                key={index}
                                className="text-center group hover:scale-105 transition-transform duration-500"
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-orange-500/10 border border-orange-500/20 mb-6 group-hover:bg-orange-500/20 transition-colors">
                                    <metric.icon className="w-8 h-8 text-orange-500" />
                                </div>
                                <div className="text-6xl md:text-7xl font-black text-white mb-4 tabular-nums">
                                    {metric.value}
                                </div>
                                <h4 className="text-xl font-bold text-white mb-2">
                                    {metric.label}
                                </h4>
                                <p className="text-slate-400 font-medium">
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
