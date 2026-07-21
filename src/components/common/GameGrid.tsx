'use client';

import React from 'react';
import GameCard from './GameCard';
import { Game } from '@/types';

interface GameGridProps {
  games: Game[];
  isLoading?: boolean;
}

const GameGrid: React.FC<GameGridProps> = ({ games, isLoading = false }) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="bg-gray-300 dark:bg-gray-700 rounded-lg h-64 animate-pulse"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {games.map((game) => (
        <GameCard key={game.id} game={game} featured={game.isPopular} />
      ))}
    </div>
  );
};

export default GameGrid;
