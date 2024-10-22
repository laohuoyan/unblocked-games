"use client";
import gameConfigs from '@/config'
import GameCard from '@/components/GameCard';
import { getCategoryInfo } from '@/lib/utils';

export interface CategoryPageProps {
  params: {
    category: string
    locale: string
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { category } = params;
  const categoryInfo = getCategoryInfo(category) 
  return (
    <main>
      <section>
        <div className="mx-auto w-full max-w-7xl px-5 py-4 md:px-10 md:py-5">
          {/* Title */}
          <h1 className="mb-4 text-4xl font-bold md:text-6xl">{categoryInfo.title}</h1>
          <p className="mb-6 text-sm text-gray-500 sm:text-xl lg:mb-8">
            {categoryInfo.description}
          </p>
        </div>
      </section>

      <section>
        {/* Container */}
        <div className="mx-auto w-full max-w-7xl px-5 py-2 md:px-10">
          {/* Recommand */}
          <div className="flex gap-5 mt-3 flex-wrap">
            {
              gameConfigs.filter(config => config.category === category).map((config) => (
                <div key={config.id} className="relative w-36">
                  <GameCard config={config} />
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </main>
  );
}
