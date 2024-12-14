'use client'

import React, { useState } from 'react';

export default function PadelLeagueApp() {
  const [activeTab, setActiveTab] = useState('standings');
  const [players] = useState([
    { 
      rank: 1, 
      name: 'Tom', 
      matches: 6, 
      won: 5, 
      lost: 1, 
      points: 15,
      winRate: 83,
      recentForm: ['W', 'W', 'L', 'W', 'W']
    },
    { 
      rank: 2, 
      name: 'Jeremy', 
      matches: 6, 
      won: 4, 
      lost: 2, 
      points: 12,
      winRate: 67,
      recentForm: ['W', 'L', 'W', 'W', 'L']
    },
    { 
      rank: 3, 
      name: 'Paulo', 
      matches: 6, 
      won: 2, 
      lost: 4, 
      points: 6,
      winRate: 33,
      recentForm: ['L', 'W', 'L', 'L', 'W']
    },
    { 
      rank: 4, 
      name: 'Per', 
      matches: 6, 
      won: 1, 
      lost: 5, 
      points: 3,
      winRate: 17,
      recentForm: ['L', 'L', 'W', 'L', 'L']
    },
  ]);

  const renderContent = () => {
    switch(activeTab) {
      case 'matches':
        return renderMatches();
      case 'stats':
        return renderStats();
      default:
        return renderStandings();
    }
  };

  return (
    <div className="min-h-screen bg-[#E8E6E3]">
      {/* Header */}
      <header className="pt-8 pb-6">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-2 text-[#7A735B] tracking-wider">
            BATTLE PADEL
          </h1>
          <p className="text-center text-[#9A9283] font-serif italic">
            Create League with your friends
          </p>
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