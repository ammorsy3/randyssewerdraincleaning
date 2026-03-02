'use client';

import React from "react"

import Image from 'next/image';
import { Droplet, Wrench, Wind, Thermometer, Camera, Waves } from 'lucide-react';
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
      title: 'Sewer Line Cleaning',
      description: 'Residential and commercial sewer line cleaning to restore full flow and prevent dangerous backups.',
      image: '/randy-site-img1.jpg',
    },
    {
      icon: <Waves className="w-8 h-8" />,
      title: 'Hydro Jetting',
      description: 'High-pressure hydro jetting blasts through grease, tree roots, and the toughest obstructions.',
      image: '/service-hydro-jetting.png',
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: 'Sewer Line Camera',
      description: 'Professional camera inspection to pinpoint exactly what\'s happening inside your sewer line.',
      image: '/service-sewer-camera.png',
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: 'Drain Clog & Repair',
      description: 'All types of drain clogs cleared fast — single drains, multiple backups, and full line repairs.',
      image: '/randy-img5.jpg',
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Plumbing Repairs',
      description: 'Toilet repairs & installs, faucet repairs & installs — kitchen and bath, done right.',
      image: '/randy-img3.jpg',
    },
    {
      icon: <Thermometer className="w-8 h-8" />,
      title: 'Water Heater Services',
      description: 'Water heater repairs and installations for your home or business — tankless and traditional.',
      image: '/service-pipe.png',
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
            Residential & commercial sewer and drain services in Gastonia, NC — we don't stop until the job is done right
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-5 md:p-6 group cursor-pointer transition-all duration-500 overflow-hidden flex flex-col h-full animate-reveal delay-${(index + 1) * 100} bg-white border border-slate-100 hover:border-blue-200 hover:shadow-lg`}
            >
              {/* Gradient Border on Hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-300 rounded-2xl opacity-0 group-hover:opacity-50 blur-sm transition-all duration-500" />

              {/* Card Content */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Service Icon */}
                <div className="mb-4 text-blue-600 group-hover:scale-110 group-hover:animate-bounce transition-all duration-300">
                  {service.icon}
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-slate-950 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-slate-600 text-sm mb-4 flex-grow">
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
                  className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg transition-all duration-300 font-semibold bg-transparent hover:scale-105"
                >
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
