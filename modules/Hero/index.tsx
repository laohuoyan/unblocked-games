import React from 'react';
import useTrans from '@/hooks/useTrans';
import useGameConfig from '@/hooks/useGameConfig';

interface HeroProps {
  data: IHeroData
}

export default function Hero(props: HeroProps) {
  const t = props.data
  const gameConfig = useGameConfig()

  return (
    <header>
      {/* Hero Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Component */}
        <div className="grid items-center justify-items-start gap-8 sm:gap-20 lg:grid-cols-2">
          {/* Hero Content */}
          <div className="flex flex-col">
            {/* Hero Title */}
            <h1 className="mb-4 text-4xl font-bold md:text-6xl">
              {t.title}
            </h1>
            <p className="mb-6 max-w-lg text-sm text-gray-500 sm:text-xl md:mb-10 lg:mb-12">
              {t.subTitle}
            </p>
            {/* Hero Button */}
            {/* <div className="flex items-center">
              <a
                href="https://www.crazygames.com/game/blumgi-rocket"
                className="mr-5 items-center rounded-md bg-black px-6 py-3 font-semibold text-white md:mr-6 lg:mr-8"
                target="_blank"
              >{t('startBtnText')}</a>
            </div> */}
          </div>
          {/* Hero Image */}
          <img
            src={gameConfig.logo}
            alt=""
            className="inline-block h-full w-full max-w-2xl"
          />
        </div>
      </div>
    </header>
  )
}