import LocaleLink from '@/components/LocaleLink';
import catetoriesConfig from '@/config/categoryConfigs';
import React from 'react';

interface CategoriesModuleProps {
}

export default function CategoriesModule(props: CategoriesModuleProps) {
  return (
    <div className="flex flex-wrap gap-6 mx-auto w-full max-w-7xl px-5 md:px-10 lg:px-24">
      {
        catetoriesConfig.map(info => {
          return (
            <LocaleLink href={`/t/${info.category}`}>
              <div key={info.category} className="flex items-center rounded-2xl cursor-pointer shadow-md">
                <img className="w-24" src={`/images/categories/${info.category}.png`} />
                <div className="flex items-center justify-center p-6">
                  <span className="text-lg">{info.name}</span>
                </div>
              </div>
            </LocaleLink>
          )
        })
      }
    </div>
  )
}