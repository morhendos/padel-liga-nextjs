'use client'

import React, { useState } from 'react';
import Image from 'next/image';

export default function PadelLeagueApp() {
  const [activeTab, setActiveTab] = useState('standings');
  // Your existing state code...
  
  // Your existing render functions...

  return (
    <div className="min-h-screen bg-[#E8E6E3]">
      {/* Header with SVG logo */}
      <header className="pt-8 pb-6">
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative w-full h-[120px] mx-auto max-w-[600px]">
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

      {/* Main content */}
      <main className="max-w-4xl mx-auto px-4 pb-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Navigation Tabs */}
          <div className="flex border-b border-gray-200">
            {['standings', 'matches', 'stats'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                  flex-1 px-4 py-3 text-sm md:text-base font-medium capitalize
                  ${activeTab === tab 
                    ? 'text-[#7A735B] border-b-2 border-[#7A735B] bg-white' 
                    : 'text-gray-500 hover:text-[#7A735B] hover:bg-gray-50'}
                `}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Content Section */}
          <div className="p-4 md:p-6">
            {renderContent()}
          </div>
        </div>
      </main>
    </div>
  );
}