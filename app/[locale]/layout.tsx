import { Inter } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import "./globals.css";
import NavBar from "@/modules/NavBar";
import Footer from "@/modules/Footer";
import { languages } from "@/i18n";
import GA from "@/modules/GA";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({params: { locale }}: any) {
  const canonical = ['', 'en'].includes(locale)
    ? process.env.NEXT_PUBLIC_SITE_URL 
    : process.env.NEXT_PUBLIC_SITE_URL + locale;
 
  return {
    title: 'Unblocked Games - Play Free Online Games Anytime, Anywhere',
    description: 'Unblocked Games offers a wide variety of free, unblocked online games. Enjoy action, puzzle, and sports games from anywhere without restrictions. Play now!',
    alternates: { canonical, },
  };
}

export default async function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  const lang = languages.find(item => item.lang === locale)?.code;

  return (
    <html lang={lang}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <NavBar />
          {children}
          <Footer />
          <GA />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
