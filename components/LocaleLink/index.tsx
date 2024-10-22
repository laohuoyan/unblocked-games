'use client';

import Link, { LinkProps } from 'next/link';
import { FC } from 'react';
import { useParams } from 'next/navigation';

interface LocalizedLinkProps extends LinkProps {
  children: React.ReactNode;
}

const LocaleLink: FC<LocalizedLinkProps> = ({ href, children, ...props }) => {
  const params = useParams();
  const locale = params.locale; // 从路由参数中获取 locale

  // 如果 href 是字符串形式，确保在路径中包含当前语言
  const localizedHref =
    typeof href === 'string' ? `/${locale}${href}` : { ...href, locale };

  return (
    <Link href={localizedHref} {...props}>
      {children}
    </Link>
  );
};

export default LocaleLink;
