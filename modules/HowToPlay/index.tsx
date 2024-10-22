import React from 'react';

interface HowToPlayProps {
  data: IHowToPlayData
}

export default function HowToPlay(props: HowToPlayProps) {
  const t = props.data;

  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Title */}
        <h2 className="text-center text-3xl font-bold md:text-5xl">
          {t.title}
        </h2>
        <p className="mx-auto mb-8 mt-4 max-w-lg text-center text-sm text-gray-500 sm:text-base md:mb-12 lg:mb-16">
          {t.subTitle}
        </p>
        {/* Content */}
        <div className="mx-auto grid max-w-xl gap-6">
          {/* Item */}
          {
            t.items.map((item: any, index: number) => (
              <div key={index} className="flex items-center justify-center rounded-sm bg-gray-100 px-6 py-4">
                <div className="mr-6 flex h-14 w-14 flex-none items-center justify-center rounded-sm bg-white">
                  <p className="text-sm font-bold sm:text-xl">{index + 1}</p>
                </div>
                <p className="text-sm sm:text-base">
                  {item.text}
                </p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
}