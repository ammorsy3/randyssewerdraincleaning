'use client';

import React from "react"

import { useEffect, useState } from 'react';
import { Clock, Star, Users } from 'lucide-react';

interface Stat {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
}

export default function QuickStats() {
  const [stats, setStats] = useState<Stat[]>([
    {
      icon: <Clock className="w-8 h-8" />,
      value: 0,
      suffix: '/7',
      label: '24 Hours Service',
    },
    {
      icon: <Star className="w-8 h-8" />,
      value: 0,
      suffix: '+',
      label: 'Customer Reviews',
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: 0,
      suffix: 'hrs',
      label: 'Response Time',
    },
  ]);

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
      }, 16);

      return () => clearInterval(timer);
    });
  }, []);

  return (
    <section className="bg-white py-12 md:py-16 border-t border-b border-border">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-3 p-6 rounded-xl hover:bg-gray-50 transition-colors duration-300"
            >
              <div className="text-orange-600">{stat.icon}</div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-slate-950">
                  {stat.value}
                  <span className="text-orange-600 text-3xl">{stat.suffix}</span>
                </div>
                <p className="text-text-secondary font-medium mt-2">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
