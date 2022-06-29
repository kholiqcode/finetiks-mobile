import { Intro, Splash } from '@screens';

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
];
export default ShareScreens;
