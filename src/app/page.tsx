export default function Home() {
  const players = [
    { rank: 1, name: 'Tom', matches: 6, won: 5, lost: 1, points: 15 },
    { rank: 2, name: 'Jeremy', matches: 6, won: 4, lost: 2, points: 12 },
    { rank: 3, name: 'Paulo', matches: 6, won: 2, lost: 4, points: 6 },
    { rank: 4, name: 'Per', matches: 6, won: 1, lost: 5, points: 3 },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center p-5">
      <div className="text-4xl font-bold text-white mb-5 uppercase text-center drop-shadow-lg">
        Battle Padel
      </div>
      
      <div className="text-2xl text-white mb-8 text-center drop-shadow">
        League Standings
      </div>

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

      <div className="text-white text-sm mt-6 text-center">
        Battle Padel League 2024
      </div>
    </main>
  );
}