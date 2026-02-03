'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
    Droplets,
    Flame,
    Waves,
    Wind,
    AlertTriangle,
    Clock,
    CheckCircle2,
    ArrowRight,
    ChevronLeft,
    Wrench
} from 'lucide-react';

interface Step {
    id: string;
    title: string;
    question: string;
    options: Option[];
}

interface Option {
    label: string;
    value: string;
    icon: any;
    nextStep?: string;
    assessment?: string;
    urgency?: 'low' | 'medium' | 'high';
}

export default function DiagnosticWizard() {
    const [currentStepId, setCurrentStepId] = useState('problem-type');
    const [history, setHistory] = useState<string[]>([]);
    const [selections, setSelections] = useState<Record<string, string>>({});
    const [finalAssessment, setFinalAssessment] = useState<{
        text: string;
        urgency: 'low' | 'medium' | 'high';
    } | null>(null);

    const steps: Record<string, Step> = {
        'problem-type': {
            id: 'problem-type',
            title: 'Type of Issue',
            question: 'What seems to be the main problem?',
            options: [
                { label: 'Leaking/Burst Pipe', value: 'leak', icon: Droplets, nextStep: 'leak-location' },
                { label: 'No Hot Water', value: 'hot-water', icon: Flame, nextStep: 'water-heater' },
                { label: 'Blocked Drain', value: 'blocked', icon: Waves, nextStep: 'blockage-type' },
                { label: 'Other Issue', value: 'other', icon: Wrench, nextStep: 'urgency' },
            ]
        },
        'leak-location': {
            id: 'leak-location',
            title: 'Leak Location',
            question: 'Where is the leak located?',
            options: [
                { label: 'Visible Pipe', value: 'visible', icon: Droplets, assessment: 'Visible leaks can quickly cause structural damage. Shut off your main water valve immediately.', urgency: 'high' },
                { label: 'Inside Wall/Ceiling', value: 'hidden', icon: AlertTriangle, assessment: 'Hidden leaks are dangerous as they weaken the building structure and encourage mold.', urgency: 'high' },
                { label: 'Under Sink/Toilet', value: 'fixture', icon: Wrench, assessment: 'Usually a failed seal or valve. Easy to fix but needs professional attention to prevent flooding.', urgency: 'medium' },
            ]
        },
        'water-heater': {
            id: 'water-heater',
            title: 'Water Heater',
            question: 'Any specific signs on the heater?',
            options: [
                { label: 'Leaking Tank', value: 'tank-leak', icon: Droplets, assessment: 'A leaking tank often means a replacement is needed. Risk of minor explosion if pressure builds.', urgency: 'high' },
                { label: 'Cold Water Only', value: 'no-heat', icon: Flame, assessment: 'Likely a pilot light or heating element failure. Safe but highly inconvenient.', urgency: 'medium' },
                { label: 'Strange Noises', value: 'noise', icon: AlertTriangle, assessment: 'Sediment buildup can cause overheating and internal damage. Should be flushed soon.', urgency: 'low' },
            ]
        },
        'blockage-type': {
            id: 'blockage-type',
            title: 'Blockage Type',
            question: 'What is blocked?',
            options: [
                { label: 'Single Sink/Toilet', value: 'single', icon: Waves, assessment: 'Likely a local blockage. Can usually be cleared with professional snaking.', urgency: 'low' },
                { label: 'Multiple Drains', value: 'multiple', icon: AlertTriangle, assessment: 'Signs of a main sewer line blockage. Serious health risk if backup occurs.', urgency: 'high' },
                { label: 'Slow Draining', value: 'slow', icon: Clock, assessment: 'Early warning sign of pipe narrowing. Best to clear now before it fully blocks.', urgency: 'low' },
            ]
        },
        'urgency': {
            id: 'urgency',
            title: 'Urgency',
            question: 'How urgent is this for you?',
            options: [
                { label: 'Emergency (Now)', value: 'now', icon: AlertTriangle, assessment: 'Our nearest team will be notified immediately for rapid dispatch.', urgency: 'high' },
                { label: 'Next 24 Hours', value: 'soon', icon: Clock, assessment: 'We can fit you into tomorrow morning\'s schedule.', urgency: 'medium' },
                { label: 'Request Quote', value: 'later', icon: CheckCircle2, assessment: 'We\'ll provide a detailed quote within 4 business hours.', urgency: 'low' },
            ]
        }
    };

    const handleOptionSelect = (option: Option) => {
        setSelections(prev => ({ ...prev, [currentStepId]: option.value }));

        if (option.assessment) {
            setFinalAssessment({
                text: option.assessment,
                urgency: option.urgency || 'medium'
            });
        } else if (option.nextStep) {
            setHistory(prev => [...prev, currentStepId]);
            setCurrentStepId(option.nextStep);
        }
    };

    const handleBack = () => {
        const prevStep = history[history.length - 1];
        if (prevStep) {
            setCurrentStepId(prevStep);
            setHistory(prev => prev.slice(0, -1));
            setFinalAssessment(null);
        }
    };

    const reset = () => {
        setCurrentStepId('problem-type');
        setHistory([]);
        setSelections({});
        setFinalAssessment(null);
    };

    const currentStep = steps[currentStepId];

    return (
        <section id="diagnostic" className="py-20 bg-slate-50 overflow-hidden">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                        Interactive Diagnostic Tool
                    </h2>
                    <p className="text-lg text-slate-600">
                        Not sure if it's an emergency? Let our expert logic guide you.
                    </p>
                </div>

                <div className="relative group">
                    {/* Animated Background Glow */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/10 via-blue-500/10 to-orange-500/10 rounded-[2rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    <div className="relative bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden min-h-[500px] flex flex-col">
                        {/* Progress Top Bar */}
                        {!finalAssessment && (
                            <div className="h-1.5 bg-slate-100 flex">
                                {Object.keys(steps).map((stepId, index) => {
                                    const stepIndex = Object.keys(steps).indexOf(currentStepId);
                                    const isActive = index <= stepIndex;
                                    return (
                                        <div
                                            key={stepId}
                                            className={`flex-1 transition-all duration-500 ${isActive ? 'bg-orange-500' : 'bg-transparent'}`}
                                        />
                                    );
                                })}
                            </div>
                        )}

                        <div className="p-8 md:p-12 flex-grow flex flex-col justify-center">
                            {!finalAssessment ? (
                                <div key={currentStepId} className="animate-reveal">
                                    {history.length > 0 && (
                                        <button
                                            onClick={handleBack}
                                            className="flex items-center gap-1 text-slate-400 hover:text-orange-600 transition-colors mb-6 font-medium"
                                        >
                                            <ChevronLeft className="w-4 h-4" />
                                            Back
                                        </button>
                                    )}

                                    <div className="mb-8">
                                        <span className="text-orange-600 font-bold tracking-widest text-sm uppercase mb-2 block">
                                            Step {history.length + 1}
                                        </span>
                                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                                            {currentStep.question}
                                        </h3>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {currentStep.options.map((option) => (
                                            <button
                                                key={option.value}
                                                onClick={() => handleOptionSelect(option)}
                                                className="flex items-center gap-4 p-5 rounded-2xl border-2 border-slate-100 bg-slate-50/50 hover:border-orange-500 hover:bg-white hover:shadow-xl hover:scale-[1.02] transition-all duration-300 text-left group"
                                            >
                                                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-orange-600 group-hover:bg-orange-50 transition-colors">
                                                    <option.icon className="w-6 h-6" />
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                                                        {option.label}
                                                    </p>
                                                </div>
                                                <ArrowRight className="w-5 h-5 ml-auto text-slate-200 group-hover:text-orange-500 translate-x-[-10px] group-hover:translate-x-0 transition-all opacity-0 group-hover:opacity-100" />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <div className="animate-reveal text-center max-w-2xl mx-auto py-8">
                                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-8 ${finalAssessment.urgency === 'high' ? 'bg-red-100 text-red-600' :
                                            finalAssessment.urgency === 'medium' ? 'bg-orange-100 text-orange-600' :
                                                'bg-green-100 text-green-600'
                                        }`}>
                                        <AlertTriangle className="w-10 h-10" />
                                    </div>

                                    <h3 className="text-3xl font-bold text-slate-900 mb-4">
                                        Expert Assessment
                                    </h3>

                                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-8 text-left relative overflow-hidden">
                                        <div className={`absolute left-0 top-0 bottom-0 w-2 ${finalAssessment.urgency === 'high' ? 'bg-red-500' :
                                                finalAssessment.urgency === 'medium' ? 'bg-orange-500' :
                                                    'bg-green-500'
                                            }`} />
                                        <p className="text-lg text-slate-700 leading-relaxed font-medium">
                                            "{finalAssessment.text}"
                                        </p>
                                        <div className="mt-4 flex items-center gap-2">
                                            <span className="text-slate-400 text-sm font-bold uppercase tracking-wider">Urgency Level:</span>
                                            <span className={`text-sm font-bold uppercase tracking-wider ${finalAssessment.urgency === 'high' ? 'text-red-600' :
                                                    finalAssessment.urgency === 'medium' ? 'text-orange-600' :
                                                        'text-green-600'
                                                }`}>
                                                {finalAssessment.urgency}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <Button
                                            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg rounded-xl font-bold shadow-xl hover:scale-105 transition-all"
                                        >
                                            Fix This Now
                                        </Button>
                                        <Button
                                            variant="outline"
                                            onClick={reset}
                                            className="px-8 py-6 text-lg rounded-xl font-bold border-slate-200 hover:bg-slate-100 transition-all"
                                        >
                                            Start Over
                                        </Button>
                                    </div>

                                    <p className="mt-6 text-slate-400 text-sm">
                                        No obligation. Professional help is ready 24/7.
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Footer Trust Signal */}
                        {!finalAssessment && (
                            <div className="px-8 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-center gap-6 text-slate-400 text-sm">
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                                    Free Preliminary Check
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                                    No Data Required
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
