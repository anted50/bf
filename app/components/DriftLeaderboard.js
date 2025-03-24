// components/DriftLeaderboard.jsx
import React from 'react';

const DriftLeaderboard = ({ competitors }) => {
  // Ensure we have at least 3 competitors for the podium
  const podiumCompetitors = competitors.slice(0, 3);
  const otherCompetitors = competitors.slice(3);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-red-600">NMIT DRIFT RACE LEADERBOARD</h1>
      
      {/* 3D Podium */}
      <div className="flex justify-center items-end h-64 mb-12 relative">
        {/* 2nd Place (Left) */}
        <div className="w-48 mx-2 relative">
          <div className="bg-gray-300 h-40 rounded-t-lg shadow-lg transform -skew-x-3 relative z-10 border-2 border-gray-400">
            <div className="transform skew-x-3 p-4 flex flex-col items-center justify-end h-full">
              <span className="text-5xl font-bold text-gray-700">2</span>
              {podiumCompetitors[1] && (
                <>
                  <span className="text-xl font-semibold mt-2">{podiumCompetitors[1].name}</span>
                  <span className="text-lg text-gray-600">{podiumCompetitors[1].score} pts</span>
                </>
              )}
            </div>
          </div>
          <div className="bg-gray-400 h-6 w-full rounded-b-lg shadow-inner"></div>
        </div>
        
        {/* 1st Place (Center) */}
        <div className="w-56 mx-2 relative">
          <div className="bg-yellow-400 h-52 rounded-t-lg shadow-lg transform -skew-x-1 relative z-20 border-2 border-yellow-500">
            <div className="transform skew-x-1 p-4 flex flex-col items-center justify-end h-full">
              <span className="text-5xl font-bold text-yellow-700">1</span>
              {podiumCompetitors[0] && (
                <>
                  <span className="text-xl font-semibold mt-2">{podiumCompetitors[0].name}</span>
                  <span className="text-lg text-yellow-700">{podiumCompetitors[0].score} pts</span>
                </>
              )}
            </div>
          </div>
          <div className="bg-yellow-500 h-8 w-full rounded-b-lg shadow-inner"></div>
        </div>
        
        {/* 3rd Place (Right) */}
        <div className="w-40 mx-2 relative">
          <div className="bg-amber-600 h-32 rounded-t-lg shadow-lg transform skew-x-3 relative z-5 border-2 border-amber-700">
            <div className="transform -skew-x-3 p-4 flex flex-col items-center justify-end h-full">
              <span className="text-5xl font-bold text-amber-800">3</span>
              {podiumCompetitors[2] && (
                <>
                  <span className="text-xl font-semibold mt-2">{podiumCompetitors[2].name}</span>
                  <span className="text-lg text-amber-800">{podiumCompetitors[2].score} pts</span>
                </>
              )}
            </div>
          </div>
          <div className="bg-amber-700 h-4 w-full rounded-b-lg shadow-inner"></div>
        </div>
      </div>
      
      {/* Other Competitors List */}
      <div className="bg-gray-800 rounded-lg p-4 shadow-lg">
        <h2 className="text-xl font-semibold text-white mb-4">Other Competitors</h2>
        <ul className="divide-y divide-gray-700">
          {otherCompetitors.map((competitor, index) => (
            <li key={competitor.id} className="py-3 flex justify-between items-center">
              <div className="flex items-center">
                <span className="text-gray-400 w-8 text-right mr-4">{index + 4}</span>
                <span className="text-white">{competitor.name}</span>
              </div>
              <span className="text-gray-300">{competitor.score} pts</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DriftLeaderboard;