import { createInstance } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next/initReactI18next';
import { getOptions } from './settings';

const initI18next = async () => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`./locales/${language}/${namespace}.json`)
      )
    )
    .init(getOptions());
  return i18nInstance;
};

export async function useTranslations() {
  const i18nextInstance = await initI18next();
  return {
    t: i18nextInstance.getFixedT(null, null),
    i18n: i18nextInstance,
  };
}
