import React from 'react'
import Alert from './Alert'
import { useTranslation } from 'react-i18next'
export default function Header({alert}) {
  
  const {t} = useTranslation('en' , {useSuspense : false});
  return (
    <>
    <div>
        <h3>{t('appo page.header.title')}</h3>
        <p>{t('appo page.header.paragraph')}</p>
    </div>
      
    </>
  )
}
