
import gameConfigs from '@/config';
import React from 'react';
import LocaleLink from '@/components/LocaleLink';
import GameCard from '@/components/GameCard';

interface RecommandGamesProps {
  start?: number
  end?: number
} 

export default function RecommandGames(props: RecommandGamesProps) {
  const { start = 0, end = 20 } = props;
  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-2 md:px-10">
        {/* Recommand */}
        <div className="flex gap-5 mt-3 flex-wrap">
          {
            gameConfigs.slice(start, end).map((config) => (
              <div key={config.id} className="relative w-36">
                <GameCard config={config} />
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
}