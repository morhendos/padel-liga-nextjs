'use client'

import React, { useState } from 'react';
import Image from 'next/image';

export default function PadelLeagueApp() {
  // ... rest of your state code remains the same ...

  return (
    <div className="min-h-screen bg-[#E8E6E3]">
      {/* Header */}
      <header className="pt-8 pb-6">
        <div className="max-w-4xl mx-auto px-4">
          <Image 
            src="/logo.png" 
            alt="Battle Padel" 
            width={400} 
            height={180}
            className="mx-auto"
            priority
          />
        </div>
      </header>

      {/* Rest of your code remains the same ... */}
    </div>
  );
}