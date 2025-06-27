import React from 'react'
import { Navbar } from '../components/Navbar'
import { HeroSection } from '../components/HeroSection'

export function LMSPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
    </div>
  )
}