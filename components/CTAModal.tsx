'use client';

import React from "react"

import { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface CTAModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CTAModal({ isOpen, onClose }: CTAModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setFormData({ name: '', phone: '', email: '', service: '', message: '' });
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full animate-in fade-in slide-in-from-bottom-4 duration-300 max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 flex items-center justify-between p-6 border-b border-border bg-white rounded-t-2xl">
            <h2 className="text-2xl font-bold text-slate-950">Contact Us</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6 text-text-primary" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            {submitted ? (
              <div className="text-center space-y-4 py-8">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                  <span className="text-3xl">✓</span>
                </div>
                <h3 className="text-xl font-bold text-slate-950">
                  Thank You!
                </h3>
                <p className="text-text-secondary">
                  We've received your request. Our team will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-text-primary font-semibold">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    required
                    className="rounded-lg border-border focus:border-accent focus:ring-1 focus:ring-accent"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-text-primary font-semibold">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(555) 123-4567"
                    required
                    className="rounded-lg border-border focus:border-accent focus:ring-1 focus:ring-accent"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-text-primary font-semibold">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    required
                    className="rounded-lg border-border focus:border-accent focus:ring-1 focus:ring-accent"
                  />
                </div>

                {/* Service Type */}
                <div className="space-y-2">
                  <Label htmlFor="service" className="text-text-primary font-semibold">
                    Service Type
                  </Label>
                  <Select
                    value={formData.service}
                    onValueChange={handleSelectChange}
                  >
                    <SelectTrigger className="rounded-lg border-border focus:border-accent focus:ring-1 focus:ring-accent">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sewer-cleaning">Sewer Line Cleaning</SelectItem>
                      <SelectItem value="hydro-jetting">Hydro Jetting</SelectItem>
                      <SelectItem value="sewer-camera">Sewer Line Camera</SelectItem>
                      <SelectItem value="drain-clog">Drain Clog & Repair</SelectItem>
                      <SelectItem value="toilet">Toilet Repair / Install</SelectItem>
                      <SelectItem value="faucet">Faucet Repair / Install</SelectItem>
                      <SelectItem value="water-heater">Water Heater Repair / Install</SelectItem>
                      <SelectItem value="other">Other Plumbing Repair</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-text-primary font-semibold">
                    Message
                  </Label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your plumbing issue..."
                    rows={4}
                    className="w-full px-3 py-2 border border-border rounded-lg focus:border-accent focus:ring-1 focus:ring-accent resize-none font-sans"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="cta-button w-full py-3 rounded-lg font-semibold text-lg mt-6"
                >
                  Send Request
                </Button>

                <p className="text-xs text-text-secondary text-center">
                  We respond as soon as possible — Mon–Fri, 9AM–5PM. Free estimates always.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
