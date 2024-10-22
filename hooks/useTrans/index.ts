import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

export default function useTrans(ns: string) {
  const { gameName = 'blumgi-rocket' } = useParams();
  return useTranslations(`${gameName}.${ns}`);
}