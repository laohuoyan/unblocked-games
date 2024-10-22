import RecommandGames from "@/modules/RecommandGames";
import React from "react";

export async function generateMetadata({params: { locale }}: any) {
  const canonical = process.env.NEXT_PUBLIC_SITE_URL + locale + '/' + 'new-games'; 

  return {
    title: 'New Games to Play Online | Discover the Latest Hot Games',
    description: 'Stay ahead with the latest new games online! Explore our curated collection of new and trending games across genres. Play now and enjoy fresh gaming experiences that everyone is talking about.',
    alternates: { canonical },
  };
}


export default function NewGames() {
  return (
    <div className="mx-auto w-full max-w-7xl px-5 md:px-10 lg:px-24">
      <div className="flex flex-col py-16 md:py-12 lg:py-16">
        <h1 className="mb-10 text-3xl font-bold md:text-5xl">New Games</h1>
        <RecommandGames start={51} end={100} />
      </div>
    </div>
  );
}
