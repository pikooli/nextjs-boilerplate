export const fallbackLng = 'en';
export const languages = [fallbackLng, 'fr'];
export const defaultNS = 'common';
export const cookieName = 'i18next';

export function getOptions() {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng: fallbackLng,
    fallbackNS: defaultNS,
    defaultNS,
    ns: defaultNS,
  };
}
