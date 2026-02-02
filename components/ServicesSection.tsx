'use client';

import React from "react"

import Image from 'next/image';
import { Droplet, Wrench, Wind, Thermometer } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ServicesSectionProps {
  onCtaClick: () => void;
}

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
}

export default function ServicesSection({ onCtaClick }: ServicesSectionProps) {
  const services: Service[] = [
    {
      icon: <Droplet className="w-8 h-8" />,
      title: 'Emergency Leak Repair',
      description: 'Fast response to water leaks, burst pipes, and water damage with expert solutions.',
      image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=400&fit=crop',
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Pipe Installation & Maintenance',
      description: 'Complete pipe repair, replacement, and preventive maintenance services.',
      image: 'https://images.unsplash.com/photo-1517420879433-b0f46e3fdef1?w=400&h=400&fit=crop',
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: 'Drain Cleaning & Clearing',
      description: 'Professional drain cleaning using advanced techniques to clear blockages.',
      image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=400&fit=crop',
    },
    {
      icon: <Thermometer className="w-8 h-8" />,
      title: 'Water Heater Services',
      description: 'Installation, repair, and maintenance of water heaters and tankless systems.',
      image: 'https://images.unsplash.com/photo-1517420879433-b0f46e3fdef1?w=400&h=400&fit=crop',
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-950 mb-4 text-balance">
            Our Services
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto text-balance">
            Comprehensive plumbing solutions for all your needs, available 24/7
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-effect rounded-2xl p-6 group cursor-pointer hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col h-full"
            >
              {/* Service Icon */}
              <div className="mb-4 text-orange-600 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Service Title */}
              <h3 className="text-xl font-bold text-slate-950 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-text-secondary text-sm mb-4 flex-grow">
                {service.description}
              </p>

              {/* Service Image */}
              <div className="relative w-full h-32 rounded-lg overflow-hidden mb-4">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* CTA Button */}
              <Button
                onClick={onCtaClick}
                variant="outline"
                className="w-full border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-lg transition-all duration-300 font-semibold bg-transparent"
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
