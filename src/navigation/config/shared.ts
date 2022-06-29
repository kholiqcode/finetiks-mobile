import { Intro, SelectLanguage, Splash } from '@screens';

const ShareScreens = [
  {
    name: 'SplashScreen',
    component: Splash,
    options: {
      title: 'splash',
      gestureEnabled: false,
    },
  },
  {
    name: 'IntroScreen',
    component: Intro,
    options: {
      title: 'intro',
      gestureEnabled: false,
    },
  },
  {
    name: 'SelectLanguageScreen',
    component: SelectLanguage,
    options: {
      title: 'select_language',
      gestureEnabled: false,
    },
  },
];
export default ShareScreens;
