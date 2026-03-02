import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Randy's Sewer Drain Cleaning | Gastonia, NC — Free Estimates",
  description: 'Top quality sewer line cleaning, water jetting, and plumbing repairs in Gastonia, NC. Free estimates. 25% off for seniors & veterans. Call (704) 579-9558.',
  keywords: 'sewer drain cleaning, Gastonia NC, drain clog, water jetting, sewer line cleaning, plumber Gastonia, Randy sewer drain',
  generator: 'v0.app',
  openGraph: {
    title: "Randy's Sewer Drain Cleaning | Gastonia, NC",
    description: 'Residential & commercial sewer and drain services in Gastonia, NC. Free estimates. Senior & veteran discounts.',
    type: 'website',
    url: 'https://randyssewerdraincleaning.com',
    siteName: "Randy's Sewer Drain Cleaning",
  },
  icons: {
    icon: '/randy-sewer-drain-cleaning-logo.jpeg',
    apple: '/randy-sewer-drain-cleaning-logo.jpeg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
