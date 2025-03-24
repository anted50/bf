import React from "react";

const leaderboardData = [
  { name: "Alex Drift", time: "1:23.45" },
  { name: "Speedy Sam", time: "1:24.10" },
  { name: "Turbo Tom", time: "1:24.55" },
  { name: "Nitro Nick", time: "1:25.30" },
  { name: "Slide Steve", time: "1:26.00" },
  { name: "Corner King", time: "1:27.15" },
];

const Leaderboard = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6">Drift Race Leaderboard</h1>
      <div className="flex gap-6 items-end">
        <div className="bg-gray-700 p-4 rounded-lg w-24 h-32 flex flex-col items-center justify-end">
          <span className="text-lg font-bold">2</span>
          <span>{leaderboardData[1].name}</span>
          <span className="text-sm">{leaderboardData[1].time}</span>
        </div>
        <div className="bg-yellow-500 p-4 rounded-lg w-24 h-40 flex flex-col items-center justify-end">
          <span className="text-lg font-bold">1</span>
          <span>{leaderboardData[0].name}</span>
          <span className="text-sm">{leaderboardData[0].time}</span>
        </div>
        <div className="bg-gray-600 p-4 rounded-lg w-24 h-28 flex flex-col items-center justify-end">
          <span className="text-lg font-bold">3</span>
          <span>{leaderboardData[2].name}</span>
          <span className="text-sm">{leaderboardData[2].time}</span>
        </div>
      </div>
      <ul className="mt-6 w-64 text-center">
        {leaderboardData.slice(3).map((driver, index) => (
          <li key={index} className="border-b border-gray-700 py-2">
            <span className="font-bold">{index + 4}.</span> {driver.name} - {driver.time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
