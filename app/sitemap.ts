import { type MetadataRoute } from 'next';
import { locales } from '@/i18n';
import gameConfigs from '@/config';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL;

export default function sitemap(): MetadataRoute.Sitemap {
  const defaultSitemapData: MetadataRoute.Sitemap = locales.map(locale => {
    const lang = locale === 'en' ? '' : `${locale}`;
    return {
      url: `${BASE_URL}${lang}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    }
})

  const sitemapData = gameConfigs.flatMap(({ id: gameName }) => {
    return locales.map(locale => {
      const lang = locale === 'en' ? '' : `${locale}`;
      const path = lang ? `/g/${gameName}` : `g/${gameName}`;
      return {
        url: `${BASE_URL}${lang}${path}`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1,
      } as  MetadataRoute.Sitemap[number] 
    })
  });


  return [
    ...defaultSitemapData,
    ...sitemapData,
  ];
}
