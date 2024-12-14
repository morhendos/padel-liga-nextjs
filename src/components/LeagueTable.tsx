import { Player } from '@/types'

interface LeagueTableProps {
  players: Player[]
}

export function LeagueTable({ players }: LeagueTableProps) {
  return (
    <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-3xl">
      <table className="w-full">
        <thead>
          <tr>
            <th className="bg-padel-header text-white p-4 uppercase">Rank</th>
            <th className="bg-padel-header text-white p-4 uppercase">Player</th>
            <th className="bg-padel-header text-white p-4 uppercase">Matches</th>
            <th className="bg-padel-header text-white p-4 uppercase">Won</th>
            <th className="bg-padel-header text-white p-4 uppercase">Lost</th>
            <th className="bg-padel-header text-white p-4 uppercase">Points</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr 
              key={player.rank}
              className={`hover:bg-gray-50 ${
                player.rank === 1 ? 'bg-padel-light/10 font-bold' :
                player.rank === 2 ? 'bg-padel-dark/10' :
                player.rank === 3 ? 'bg-padel-header/10' : ''
              }`}
            >
              <td className="p-4 border-b">{player.rank}</td>
              <td className="p-4 border-b text-padel-header font-medium">
                {player.name}
              </td>
              <td className="p-4 border-b">{player.matches}</td>
              <td className="p-4 border-b">{player.won}</td>
              <td className="p-4 border-b">{player.lost}</td>
              <td className="p-4 border-b">{player.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}