'use client';

import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resourcesToBackend from 'i18next-resources-to-backend';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import {
  initReactI18next,
  useTranslation as useTranslationOrg,
} from 'react-i18next';
import { getOptions, languages, cookieName } from './settings';

const runsOnServerSide = typeof window === 'undefined';

// eslint-disable-next-line import/no-named-as-default-member
i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    resourcesToBackend((language: string, namespace: string) => {
      console.log(language, namespace);
      return import(`./locales/${language}/${namespace}.json`);
    })
  )
  .init({
    ...getOptions(),
    lng: 'fr', // let detect the language on client side
    detection: {
      order: ['cookie', 'navigator', 'htmlTag', 'path'],
      caches: ['cookie'],
    },
    preload: runsOnServerSide ? languages : [],
  });

export function useTranslations(
  lng?: string,
  ns = 'translation',
  options = {}
) {
  const [cookies, setCookie] = useCookies([cookieName]);

  const ret = useTranslationOrg(ns, options);
  const { i18n } = ret;
  if (runsOnServerSide && lng && i18n.resolvedLanguage !== lng) {
    i18n.changeLanguage(lng);
    console.log('i18n.changeLanguage(lng);');
  } else {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [activeLng, setActiveLng] = useState(i18n.resolvedLanguage);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (activeLng === i18n.resolvedLanguage) return;
      setActiveLng(i18n.resolvedLanguage);
    }, [activeLng, i18n.resolvedLanguage]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (!lng || i18n.resolvedLanguage === lng) return;
      i18n.changeLanguage(lng);
    }, [lng, i18n]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (!lng || cookies.i18next === lng) return;
      setCookie(cookieName, lng, { path: '/' });
    }, [lng, cookies.i18next]);
  }

  return ret;
}
