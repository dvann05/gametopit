'use client';

import React from 'react';
import { Game } from '@/types';
import Card from './Card';
import Badge from './Badge';
import { FiStar } from 'react-icons/fi';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface GameCardProps {
  game: Game;
  featured?: boolean;
}

const GameCard: React.FC<GameCardProps> = ({ game, featured = false }) => {
  return (
    <Link href={`/games/${game.id}`}>
      <Card
        className={cn(
          'overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105',
          featured && 'ring-2 ring-yellow-400'
        )}
      >
        {/* Image */}
        <div className="relative w-full h-48 bg-gray-300 dark:bg-gray-700 mb-4 overflow-hidden rounded">
          <img
            src={game.image}
            alt={game.name}
            className="w-full h-full object-cover"
          />
          {featured && (
            <Badge variant="warning" className="absolute top-2 right-2">
              Featured
            </Badge>
          )}
          {game.isNew && (
            <Badge variant="success" className="absolute top-2 left-2">
              New
            </Badge>
          )}
        </div>

        {/* Content */}
        <div>
          <h3 className="font-bold text-lg mb-2 line-clamp-1">{game.name}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
            {game.description}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <FiStar className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold">{game.rating.toFixed(1)}</span>
            </div>
            <span className="text-xs text-gray-500">{game.totalReviews} reviews</span>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default GameCard;
