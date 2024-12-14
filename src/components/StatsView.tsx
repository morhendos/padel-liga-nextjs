import { LineChart, XAxis, YAxis, Tooltip, CartesianGrid, Line, ResponsiveContainer } from 'recharts';

interface PlayerStats {
  name: string;
  totalMatches: number;
  winRate: number;
  avgPointsPerMatch: number;
  longestWinStreak: number;
  performance: { date: string; rating: number }[];
}

export function StatsView() {
  const playerStats: PlayerStats[] = [
    {
      name: 'Tom',
      totalMatches: 6,
      winRate: 83,
      avgPointsPerMatch: 2.5,
      longestWinStreak: 3,
      performance: [
        { date: '2024-01', rating: 1200 },
        { date: '2024-02', rating: 1250 },
        { date: '2024-03', rating: 1280 },
      ]
    },
    // ... other players
  ];

  const performanceData = [
    { name: 'Jan', Tom: 1200, Jeremy: 1180, Paulo: 1150, Per: 1100 },
    { name: 'Feb', Tom: 1250, Jeremy: 1220, Paulo: 1180, Per: 1120 },
    { name: 'Mar', Tom: 1280, Jeremy: 1240, Paulo: 1160, Per: 1140 },
  ];

  return (
    <div className="space-y-6">
      {/* Performance Chart */}
      <div className="bg-white p-4 rounded-lg border">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Performance Trends</h3>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="Tom" stroke="#00B5CC" />
              <Line type="monotone" dataKey="Jeremy" stroke="#006577" />
              <Line type="monotone" dataKey="Paulo" stroke="#007D8C" />
              <Line type="monotone" dataKey="Per" stroke="#004957" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Player Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {playerStats.map((player) => (
          <div key={player.name} className="bg-gray-50 rounded-lg p-4">
            <h4 className="text-[#007D8C] font-medium mb-3">{player.name}</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Win Rate</span>
                <span className="font-medium">{player.winRate}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Matches Played</span>
                <span className="font-medium">{player.totalMatches}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Avg Points/Match</span>
                <span className="font-medium">{player.avgPointsPerMatch}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Longest Win Streak</span>
                <span className="font-medium">{player.longestWinStreak}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}