'use client'

import React, { useState } from 'react';
import Image from 'next/image';

[... rest of your imports ...]

export default function PadelLeagueApp() {
  // ... rest of your state code ...

  return (
    <div className="min-h-screen bg-[#E8E6E3]">
      {/* Header */}
      <header className="pt-8 pb-6">
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative w-full h-[100px]">
            <Image 
              src="/logo.png"
              alt="Battle Padel"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
        </div>
      </header>

      {/* Main content - your existing code */}
      <main className="max-w-4xl mx-auto px-4 pb-8">
        [...rest of your code...]
      </main>
    </div>
  );
}