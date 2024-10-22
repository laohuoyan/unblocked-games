import { getTranslations } from 'next-intl/server';
import gameConfigs from '@/config'

export async function generateMetadata({params: { locale, gameName = 'blumgi-rocket' }}: any) {
  const gameConfig = gameConfigs.find(g => g.id === gameName)
  const canonical = process.env.NEXT_PUBLIC_SITE_URL + locale + '/' + gameName; 

  return {
    title: gameConfig?.title,
    description: gameConfig?.title,
    alternates: { canonical },
  };
}

export default async function Layout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return children
}