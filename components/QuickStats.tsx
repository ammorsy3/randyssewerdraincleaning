'use client';

import React from "react"

import { useEffect, useState } from 'react';
import { Clock, Star, Users } from 'lucide-react';

interface Stat {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
  target: number;
}

export default function QuickStats() {
  const [stats, setStats] = useState<Stat[]>([
    {
      icon: <Clock className="w-8 h-8" />,
      value: 0,
      suffix: '/7',
      label: '24 Hours Service',
      target: 24,
    },
    {
      icon: <Star className="w-8 h-8" />,
      value: 0,
      suffix: '+',
      label: 'Customer Reviews',
      target: 500,
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: 0,
      suffix: 'hrs',
      label: 'Response Time',
      target: 2,
    },
  ]);

  const [progress, setProgress] = useState<number[]>([0, 0, 0]);

  useEffect(() => {
    const targets = [24, 500, 2];
    const durations = [800, 800, 600];

    targets.forEach((target, index) => {
      let current = 0;
      const increment = target / (durations[index] / 16);
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setStats((prevStats) => {
          const newStats = [...prevStats];
          newStats[index].value = Math.floor(current);
          return newStats;
        });

        // Update progress percentage
        setProgress((prevProgress) => {
          const newProgress = [...prevProgress];
          newProgress[index] = Math.min((current / target) * 100, 100);
          return newProgress;
        });
      }, 16);

      return () => clearInterval(timer);
    });
  }, []);

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-12 md:py-16 border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`relative flex flex-col items-center text-center gap-4 p-8 rounded-2xl group cursor-pointer transition-all duration-500 animate-reveal delay-${(index + 1) * 100} hover:scale-105`}
            >
              {/* Animated Gradient Border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-400 via-orange-500 to-blue-400 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500" />

              {/* Card Background */}
              <div className="absolute inset-0 bg-white rounded-2xl border border-slate-200 group-hover:border-orange-200 transition-all duration-300 group-hover:shadow-xl" />

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center gap-4">
                {/* Circular Progress Ring with Icon */}
                <div className="relative w-24 h-24">
                  {/* Background Circle */}
                  <svg className="w-24 h-24 transform -rotate-90">
                    <circle
                      cx="48"
                      cy="48"
                      r="44"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                      className="text-slate-200"
                    />
                    {/* Progress Circle */}
                    <circle
                      cx="48"
                      cy="48"
                      r="44"
                      stroke="url(#gradient-${index})"
                      strokeWidth="4"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 44}`}
                      strokeDashoffset={`${2 * Math.PI * 44 * (1 - progress[index] / 100)}`}
                      className="transition-all duration-1000 ease-out"
                    />
                    <defs>
                      <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#f97316" />
                        <stop offset="100%" stopColor="#3b82f6" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Icon in Center */}
                  <div
                    className="absolute inset-0 flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform duration-300"
                    style={{
                      filter: 'drop-shadow(0 0 8px rgba(249, 115, 22, 0.4))',
                      animation: 'icon-pulse 3s ease-in-out infinite'
                    }}
                  >
                    {stat.icon}
                  </div>
                </div>

                {/* Stats */}
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-slate-950 group-hover:text-orange-600 transition-colors duration-300">
                    {stat.value}
                    <span className="text-orange-600 text-3xl">{stat.suffix}</span>
                  </div>
                  <p className="text-slate-600 font-medium mt-2 group-hover:text-slate-900 transition-colors duration-300">
                    {stat.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
