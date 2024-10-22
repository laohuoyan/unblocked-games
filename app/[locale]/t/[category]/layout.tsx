export async function generateMetadata({params: { locale, category }}: any) {
  const canonical = process.env.NEXT_PUBLIC_SITE_URL + locale + '/t/' + category + '/'; 

  return {
    title: category,
    description: category,
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