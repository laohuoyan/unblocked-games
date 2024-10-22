import RecommandGames from "@/modules/RecommandGames";
import React from "react";


export async function generateMetadata({params: { locale }}: any) {
  const canonical = process.env.NEXT_PUBLIC_SITE_URL + locale + '/' + 'hot-games'; 

  return {
    title: 'Hot Games to Play Now | Explore the Best Online Hot Games',
    description: 'Looking for the hottest online games? Check out our collection of trending hot games across various genres. Play free and discover new favorites that are taking the gaming world by storm!',
    alternates: { canonical },
  };
}


export default function HotGames() {
  return (
    <div className="mx-auto w-full max-w-7xl px-5 md:px-10 lg:px-24">
      <div className="flex flex-col py-16 md:py-12 lg:py-16">
        <h1 className="mb-10 text-3xl font-bold md:text-5xl">Hot Games</h1>
        <RecommandGames start={10} end={50} />
      </div>
    </div>
  );
}
