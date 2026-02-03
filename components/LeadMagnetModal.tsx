'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
    Download,
    Mail,
    CheckCircle2,
    ShieldCheck,
    FileText,
    ArrowRight,
    X
} from 'lucide-react';

interface LeadMagnetModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function LeadMagnetModal({ isOpen, onClose }: LeadMagnetModalProps) {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setIsSubmitted(true);
        }
    };

    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-slate-950/60 backdrop-blur-md z-[100] transition-opacity animate-in fade-in duration-300"
                onClick={onClose}
            />

            {/* Modal Container */}
            <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
                <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100 flex flex-col lg:flex-row items-stretch max-w-5xl w-full max-h-[90vh] pointer-events-auto animate-in zoom-in-95 slide-in-from-bottom-8 duration-500">

                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-orange-100 hover:text-orange-600 transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    {/* Left Side: Offer (Hidden on mobile some space) */}
                    <div className="lg:w-1/2 p-8 md:p-12 hidden lg:flex flex-col justify-center bg-slate-50">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white text-orange-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-orange-100 shadow-sm self-start">
                            <ShieldCheck className="w-3.5 h-3.5" />
                            Expert Resource
                        </div>

                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 leading-tight">
                            The "No-Panic" <br />
                            <span className="text-orange-600">Plumbing Guide</span>
                        </h2>

                        <p className="text-base text-slate-600 mb-8 leading-relaxed font-medium">
                            Learn what to do in the first 5 minutes of a leak to avoid thousands in damage.
                        </p>

                        <div className="space-y-3">
                            {[
                                "Emergency shutoff guide",
                                "Invisible leak signs",
                                "Maintenance schedule",
                                "Winter-proofing guide"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                        <CheckCircle2 className="w-3.5 h-3.5" />
                                    </div>
                                    <span className="text-slate-700 font-bold text-sm">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Action Card */}
                    <div className="lg:w-1/2 bg-slate-950 p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
                        {/* Abstract Pattern */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
                            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                            backgroundSize: '24px 24px'
                        }} />

                        {!isSubmitted ? (
                            <div className="relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-orange-600 flex items-center justify-center text-white mb-6 shadow-xl shadow-orange-600/20 rotate-3">
                                    <FileText className="w-8 h-8" />
                                </div>

                                <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
                                    Free PDF Download
                                </h3>
                                <p className="text-slate-400 mb-8 font-medium text-sm">
                                    Enter your email and we'll send it locally, instantly.
                                </p>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="relative">
                                        <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                        <input
                                            type="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Your Email Address"
                                            className="w-full h-14 bg-white/5 border border-white/10 rounded-xl pl-16 pr-6 text-white font-bold focus:border-orange-500 focus:bg-white/10 outline-none transition-all placeholder:text-slate-600"
                                        />
                                    </div>
                                    <Button
                                        type="submit"
                                        className="w-full h-14 bg-orange-600 hover:bg-orange-700 text-white text-base font-black rounded-xl shadow-xl hover:scale-[1.02] transition-all group"
                                    >
                                        Get The Guide
                                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </form>
                                <p className="text-[9px] text-slate-500 text-center mt-6 uppercase tracking-widest font-bold">
                                    Trusted by 500+ Local Homeowners
                                </p>
                            </div>
                        ) : (
                            <div className="relative z-10 text-center py-8">
                                <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center text-white mb-6 mx-auto shadow-2xl shadow-green-500/20">
                                    <CheckCircle2 className="w-10 h-10" />
                                </div>
                                <h3 className="text-2xl font-black text-white mb-3 italic">Sent!</h3>
                                <p className="text-slate-300 mb-8 font-medium text-sm">
                                    Check your inbox. The guide is on its way.
                                </p>
                                <Button
                                    onClick={() => window.open('/assets/plumbing-guide-preview.pdf', '_blank')}
                                    variant="outline"
                                    className="border-white/20 text-white hover:bg-white/10 px-8 py-3 h-auto rounded-xl font-bold"
                                >
                                    <Download className="w-4 h-4 mr-2" />
                                    Open Preview
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
