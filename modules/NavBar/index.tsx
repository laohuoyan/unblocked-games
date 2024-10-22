
"use client";

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import LocaleSwitcher from '../../components/LocaleSwitcher';
import { usePathname } from 'next/navigation';
import LocaleLink from '@/components/LocaleLink';

export default function NavBar() {
  const t = useTranslations('nav');
  const pathname = usePathname();

  // 检查当前路径是否以 '/embed' 开头
  const isEmbedPage = pathname.startsWith('/embed');

  // 如果是 embed 页面，不显示 NavBar
  if (isEmbedPage) {
    return null;
  }

  return (
    <section>
      <nav className="font-inter mx-auto h-auto w-full max-w-screen-2xl lg:relative lg:top-0">
        <div className="flex flex-col px-6 py-6 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-4 xl:px-20">
          <LocaleLink href="/">
            <div className="flex items-center gap-4">
              <img src="/images/logo.svg" width={40} height={40} />
              <span className='font-bold text-lg'>{process.env.NEXT_PUBLIC_SITE_NAME || 'Default'}</span>
            </div>
          </LocaleLink>
          <div
            className={`mt-14 flex flex-col space-y-8 lg:mt-0 lg:flex lg:flex-row lg:space-x-1 lg:space-y-0`}
          >
            <a
              href="/hot-games"
              className="font-inter rounded-lg lg:px-6 lg:py-4 lg: lg:hover:text-gray-800"
            >
              {t('hotGames')}
            </a>
            <a
              href="/new-games"
              className="font-inter lg: rounded-lg pb-8 lg:px-6 lg:py-4 lg: lg:hover:text-gray-800"
            >
              {t('newGames')}
            </a>
          </div>
          <div
            className={`flex flex-col space-y-8 lg:flex lg:flex-row lg:space-x-3 lg:space-y-0`}
          >
            <LocaleSwitcher />
            {/* <a
              className="font-inter rounded-lg bg-black px-8 py-4 text-center text-white hover:bg-gray-800"
              href="#"
            >
              Login
            </a> */}
          </div>
        </div>
      </nav>
    </section>
  );
}