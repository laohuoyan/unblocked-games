"use client";

import Hero from '@/modules/Hero';
import HowToPlay from '@/modules/HowToPlay';
import FAQ from '@/modules/FAQ';
import Features from '@/modules/Features';
import GA from '@/modules/GA';
import PlayView from '@/modules/PlayView';
import RecommandGames from '@/modules/RecommandGames';

import gameConfigs from '@/config'
import useGameConfig from '@/hooks/useGameConfig';

export interface GamePageProps {
  params: {
    gameName: string
    locale: string
  }
}

export default function GamePage({ params }: GamePageProps) {
  const gameConfig = useGameConfig()
  // const gameDetail = require(`../../../../data/${locale}/${gameName}.json`) as IGameDetail
  return (
    <main>

      {/* 游戏介绍 */}
      <section>
        <div className="mx-auto w-full max-w-7xl px-5 py-4 md:px-10 md:py-5 text-center">
          {/* Title */}
          <h1 className="mb-4 text-4xl font-bold md:text-6xl">{gameConfig.title}</h1>
        </div>
        <PlayView />
      </section>

      {/* 游戏推荐 */}
      <section>
        <div className="mx-auto w-full max-w-7xl px-5 py-2 md:px-10 md:py-3">
          {/* Title */}
          <h2 className="text-2xl font-bold md:text-3xl">Similar Games</h2>
        </div>
        <RecommandGames />
      </section>
      {/* {
        gameDetail &&
        <>
          <Hero data={gameDetail.hero} />
          <HowToPlay data={gameDetail.howToPlay} />
          <Features data={gameDetail.features} />
          <FAQ data={gameDetail.faq} />
        </>
      } */}


    </main>
  );
}
