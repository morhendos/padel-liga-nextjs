"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Header } from "@/components/Header";

export default function PadelLeagueApp() {
  const [activeTab, setActiveTab] = useState("standings");
  const [players] = useState([
    {
      rank: 1,
      name: "Tom",
      matches: 6,
      won: 5,
      lost: 1,
      points: 15,
      winRate: 83,
      recentForm: ["W", "W", "L", "W", "W"],
    },
    {
      rank: 2,
      name: "Jeremy",
      matches: 6,
      won: 4,
      lost: 2,
      points: 12,
      winRate: 67,
      recentForm: ["W", "L", "W", "W", "L"],
    },
    {
      rank: 3,
      name: "Paulo",
      matches: 6,
      won: 2,
      lost: 4,
      points: 6,
      winRate: 33,
      recentForm: ["L", "W", "L", "L", "W"],
    },
    {
      rank: 4,
      name: "Per",
      matches: 6,
      won: 1,
      lost: 5,
      points: 3,
      winRate: 17,
      recentForm: ["L", "L", "W", "L", "L"],
    },
  ]);

  const renderStandings = () => (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Total Matches", value: "12" },
          { label: "Active Players", value: "4" },
          { label: "Avg Points", value: "9.0" },
          { label: "Season Progress", value: "45%" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-gray-50 rounded-lg p-3 text-center"
          >
            <div className="text-sm text-gray-600">{stat.label}</div>
            <div className="text-lg font-bold text-[#7A735B]">{stat.value}</div>
          </div>
        ))}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="bg-[#7A735B] text-white p-3 text-left rounded-tl-lg">
                #
              </th>
              <th className="bg-[#7A735B] text-white p-3 text-left">Player</th>
              <th className="bg-[#7A735B] text-white p-3 text-left hidden md:table-cell">
                Form
              </th>
              <th className="bg-[#7A735B] text-white p-3 text-left">P</th>
              <th className="bg-[#7A735B] text-white p-3 text-left">W</th>
              <th className="bg-[#7A735B] text-white p-3 text-left">L</th>
              <th className="bg-[#7A735B] text-white p-3 text-left rounded-tr-lg">
                Points
              </th>
            </tr>
          </thead>
          <tbody>
            {players.map((player) => (
              <tr
                key={player.rank}
                className={`
                  transition-colors
                  ${
                    player.rank === 1
                      ? "bg-[#7A735B]/10 font-bold"
                      : player.rank === 2
                      ? "bg-[#9A9283]/10"
                      : player.rank === 3
                      ? "bg-[#7A735B]/5"
                      : ""
                  }
                `}
              >
                <td className="p-3 border-b">{player.rank}</td>
                <td className="p-3 border-b">
                  <div className="flex items-center">
                    <span className="text-[#7A735B] font-medium">
                      {player.name}
                    </span>
                    <span className="ml-2 text-xs text-gray-500 hidden md:inline">
                      {player.winRate}% win rate
                    </span>
                  </div>
                </td>
                <td className="p-3 border-b hidden md:table-cell">
                  <div className="flex gap-1">
                    {player.recentForm.map((result, i) => (
                      <span
                        key={i}
                        className={`
                          w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium
                          ${
                            result === "W"
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                          }
                        `}
                      >
                        {result}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="p-3 border-b">{player.matches}</td>
                <td className="p-3 border-b">{player.won}</td>
                <td className="p-3 border-b">{player.lost}</td>
                <td className="p-3 border-b font-bold">{player.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );

  const renderMatches = () => {
    const matches = [
      {
        id: 1,
        date: "2024-12-15",
        player1: "Tom",
        player2: "Jeremy",
        score: "6-4, 7-5",
        status: "completed",
        court: "Court 1",
        time: "18:00",
      },
      {
        id: 2,
        date: "2024-12-16",
        player1: "Paulo",
        player2: "Per",
        status: "upcoming",
        court: "Court 2",
        time: "19:30",
      },
    ];

    return (
      <div className="space-y-4">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-[#7A735B]">
            Latest Matches
          </h3>
          <button className="px-4 py-2 bg-[#7A735B] text-white rounded-lg text-sm hover:bg-[#9A9283]">
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
                  {new Date(match.date).toLocaleDateString("en-GB", {
                    weekday: "short",
                    day: "numeric",
                    month: "short",
                  })}
                </span>
                <span
                  className={`
                  px-2 py-1 rounded-full text-xs font-medium
                  ${
                    match.status === "completed"
                      ? "bg-green-100 text-green-700"
                      : "bg-blue-100 text-blue-700"
                  }
                `}
                >
                  {match.status.charAt(0).toUpperCase() + match.status.slice(1)}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex-1">
                  <div className="font-medium text-[#7A735B]">
                    {match.player1}
                  </div>
                  <div className="font-medium text-[#7A735B]">
                    {match.player2}
                  </div>
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
  };

  const renderStats = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {players.map((player) => (
          <div key={player.name} className="bg-gray-50 rounded-lg p-4">
            <h4 className="text-[#7A735B] font-medium mb-3">{player.name}</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Win Rate</span>
                <span className="font-medium">{player.winRate}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Matches Played</span>
                <span className="font-medium">{player.matches}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Avg Points/Match</span>
                <span className="font-medium">
                  {(player.points / player.matches).toFixed(1)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Win/Loss</span>
                <span className="font-medium">
                  {player.won}/{player.lost}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "matches":
        return renderMatches();
      case "stats":
        return renderStats();
      default:
        return renderStandings();
    }
  };

  return (
    <div className="min-h-screen bg-[#E8E6E3]">
      <Header />

      <main className="max-w-4xl mx-auto px-4 pb-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex border-b border-gray-200">
            {["standings", "matches", "stats"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                  flex-1 px-4 py-3 text-sm md:text-base font-medium capitalize
                  ${
                    activeTab === tab
                      ? "text-[#7A735B] border-b-2 border-[#7A735B] bg-white"
                      : "text-gray-500 hover:text-[#7A735B] hover:bg-gray-50"
                  }
                `}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="p-4 md:p-6">{renderContent()}</div>
        </div>
      </main>
    </div>
  );
}
