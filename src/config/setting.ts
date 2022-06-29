/**
 * Basic Setting Variables Define
 */
export const BaseSetting = {
  name: 'finetiksapp',
  displayName: 'Finetiks',
  appVersion: '1.0.0',
  defaultLanguage: 'id',
  languageSupport: ['en', 'id'],
  resourcesLanguage: {
    en: {
      translation: require('../lang/en.json'),
    },
    id: {
      translation: require('../lang/id.json'),
    },
  },
};
