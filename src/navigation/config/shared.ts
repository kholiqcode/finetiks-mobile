import { Intro, OtpVerification, Register, SelectLanguage, Splash } from '@screens';

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
  {
    name: 'RegisterScreen',
    component: Register,
    options: {
      title: 'register',
      gestureEnabled: false,
    },
  },
  {
    name: 'OtpVerificationScreen',
    component: OtpVerification,
    options: {
      title: 'otp_verification',
      gestureEnabled: false,
    },
  },
];
export default ShareScreens;
