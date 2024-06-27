import React from 'react'
import { useTranslation } from 'react-i18next';

export default function Header() {
  const {t} = useTranslation('en' , {useSuspense : false});
  return (
    <div>
        <h4> {t('login page.titre')} </h4>
        <p> {t('login page.paragraph')} </p>
    </div>
  )
}
