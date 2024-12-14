'use client'

import { useState } from 'react'
import { LeagueTable } from '@/components/LeagueTable'
import { Player } from '@/types'

export default function Home() {
  const [players] = useState<Player[]>([
    { rank: 1, name: 'Tom', matches: 6, won: 5, lost: 1, points: 15 },
    { rank: 2, name: 'Jeremy', matches: 6, won: 4, lost: 2, points: 12 },
    { rank: 3, name: 'Paulo', matches: 6, won: 2, lost: 4, points: 6 },
    { rank: 4, name: 'Per', matches: 6, won: 1, lost: 5, points: 3 },
  ])

  return (
    <main className="flex min-h-screen flex-col items-center p-5">
      <div className="text-4xl font-bold text-white mb-5 uppercase text-center drop-shadow-lg">
        Battle Padel
      </div>
      <LeagueTable players={players} />
      <div className="text-white text-sm mt-6 text-center">
        Battle Padel League 2024
      </div>
    </main>
  )
}