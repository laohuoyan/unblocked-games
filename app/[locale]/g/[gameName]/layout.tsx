import gameConfigs from '@/config'

export async function generateMetadata({params: { locale, gameName = 'blumgi-rocket' }}: any) {
  const gameDetail = gameConfigs.find(g => g.id === gameName)
  const canonical = process.env.NEXT_PUBLIC_SITE_URL + locale + '/' + gameName; 

  return {
    title: gameDetail?.title,
    description: gameDetail?.title + ' - Free online game, unblocked game',
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