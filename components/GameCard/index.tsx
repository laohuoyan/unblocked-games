import { IGameConfig } from "@/types";
import Image from 'next/image';
import LocaleLink from "../LocaleLink";

interface GameCardProps {
  config: IGameConfig;
  size?: number;
}

export default function GameCard(props: GameCardProps) {
  const { config, size = 144 } = props;

  return (
    <LocaleLink href={`/g/${config.id}`}>
      <Image
        className="rounded-lg object-cover cursor-pointer"
        src={config.logo}
        alt={config.title}
        width={size}
        height={size}
      />
      {/* 游戏名称 */}
      <span
        className="absolute w-full p-3 text-center bottom-0 text-white font-bold rounded-lg"
        style={{ backgroundColor: "rgba(0,0,0,.5)" }}
      >
        {config.title}
      </span>
    </LocaleLink>
  );
}
