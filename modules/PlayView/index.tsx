
import { useParams } from "next/navigation";
import React, { useRef } from 'react';
import { PageParams } from "@/types";

export default function PlayView() {
  const { gameName = 'blumgi-rocket' } = useParams<PageParams>();
  const gameFrame = useRef<any>()

  const handleFullscreen = () => {
    gameFrame.current.requestFullscreen();
  };

  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-2 md:px-10">
        {/* Component */}
        <div className="flex flex-col items-center justify-center gap-14 lg:gap-20">
          <div className="relative w-4/5">
            {/* Fullscreen */}
            <div className="bg-slate-300 rounded-full p-2 absolute right-0 cursor-pointer" onClick={handleFullscreen}>
              <img className="w-5" src="/icons/fullscreen.svg" />
            </div>
            {/* 嵌入游戏 */}
            <iframe
              ref={gameFrame}
              src={`/embed/${gameName}`}
              // src={gameConfig.url}
              className="w-full"
              style={{ height: '600px' }}
              // 页面加载后，聚焦在 iframe 上
              tabIndex={0}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}