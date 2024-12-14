'use client'

import React, { useState } from 'react';
import Image from 'next/image';

export default function PadelLeagueApp() {
  // ... previous state code ...

  return (
    <div className="min-h-screen bg-[#E8E6E3]">
      {/* Header */}
      <header className="pt-8 pb-6">
        <div className="max-w-4xl mx-auto px-4">
          <Image 
            src="/logo.svg" 
            alt="Battle Padel" 
            width={400} 
            height={100}
            className="mx-auto"
            priority
          />
        </div>
      </header>

      {/* Rest of your code remains the same ... */}
    </div>
  );
}