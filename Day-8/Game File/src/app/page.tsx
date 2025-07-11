"use client";
import GameCard from "../app/Components/GameCard";

export default function Home() {
  const games = [
    {
      title: "Rock Paper Scissors",
      link: "https://codepip.com/games/rock-paper-scissors/",
    },
    {
      title: "Tic Tac Toe (XO)",
      link: "https://playtictactoe.org/",
    },
    {
      title: "Puzzle Game",
      link: "https://poki.com/en/g/slide-puzzle",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-600 p-8">
      <h1 className="text-4xl font-bold text-center text-white mb-10">
        Welcome to the Game Zone 🎮
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {games.map((game, index) => (
          <GameCard key={index} title={game.title} link={game.link} />
        ))}
      </div>
    </div>
  );
}
