"use client";

import useGameConfig from '@/hooks/useGameConfig';

export default function GamePage() {
  const gameConfig = useGameConfig()

  return (
    <main>
       <iframe src={gameConfig.url} style={{ width: '100vw', height: '100vh' }} />
    </main>
  );
}
