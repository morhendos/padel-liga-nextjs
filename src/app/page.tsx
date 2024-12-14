'use client'

import React, { useState } from 'react';
import Image from 'next/image';

export default function PadelLeagueApp() {
  // ... rest of your existing code ...

  return (
    <div className="min-h-screen bg-[#E8E6E3]">
      <header className="pt-8 pb-6">
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative w-full h-[150px] mx-auto max-w-[600px]">
            <Image 
              src="/logo.svg"
              alt="Battle Padel"
              priority
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      </header>

      {/* Rest of your component */}
    </div>
  );
}