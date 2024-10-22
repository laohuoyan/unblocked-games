import { useParams } from "next/navigation";
import gameConfigs from "@/config";
import { IGameConfig, PageParams } from "@/types";

export default function useGameConfig() {
  const { gameName = 'blumgi-rocket' } = useParams<PageParams>();
  return gameConfigs.find(item => item.id === gameName) || {} as IGameConfig
}