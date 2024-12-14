interface Match {
  id: number;
  date: string;
  player1: string;
  player2: string;
  score?: string;
  status: 'upcoming' | 'completed' | 'live';
  court?: string;
  time?: string;
}

export function MatchesView() {
  const matches: Match[] = [
    {
      id: 1,
      date: '2024-12-15',
      player1: 'Tom',
      player2: 'Jeremy',
      score: '6-4, 7-5',
      status: 'completed',
      court: 'Court 1',
      time: '18:00'
    },
    {
      id: 2,
      date: '2024-12-16',
      player1: 'Paulo',
      player2: 'Per',
      status: 'upcoming',
      court: 'Court 2',
      time: '19:30'
    },
    {
      id: 3,
      date: '2024-12-14',
      player1: 'Tom',
      player2: 'Paulo',
      score: '6-3, 6-2',
      status: 'completed',
      court: 'Court 1',
      time: '17:00'
    }
  ];

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Latest Matches</h3>
        <button className="px-4 py-2 bg-[#007D8C] text-white rounded-lg text-sm hover:bg-[#006577]">
          Schedule Match
        </button>
      </div>

      <div className="space-y-3">
        {matches.map((match) => (
          <div 
            key={match.id} 
            className="bg-gray-50 rounded-lg p-4 border border-gray-100"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">
                {new Date(match.date).toLocaleDateString('en-GB', { 
                  weekday: 'short',
                  day: 'numeric',
                  month: 'short' 
                })}
              </span>
              <span className={`
                px-2 py-1 rounded-full text-xs font-medium
                ${match.status === 'completed' ? 'bg-green-100 text-green-700' : 
                  match.status === 'upcoming' ? 'bg-blue-100 text-blue-700' :
                  'bg-yellow-100 text-yellow-700'}
              `}>
                {match.status.charAt(0).toUpperCase() + match.status.slice(1)}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex-1">
                <div className="font-medium text-[#007D8C]">{match.player1}</div>
                <div className="font-medium text-[#007D8C]">{match.player2}</div>
              </div>
              
              {match.score ? (
                <div className="text-lg font-bold text-gray-800">
                  {match.score}
                </div>
              ) : (
                <div className="text-sm text-gray-600">
                  {match.time} - {match.court}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}