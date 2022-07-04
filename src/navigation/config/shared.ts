import {
  Intro,
  OtpVerification,
  Register,
  RegisterSuccess,
  SelectLanguage,
  Splash,
} from '@screens';
import { Transition } from '@theme';

const ShareScreens = [
  {
    name: 'SplashScreen',
    component: Splash,
    options: {
      title: 'splash',
      gestureEnabled: false,
      cardStyleInterpolator: Transition.forFade,
    },
  },
  {
    name: 'IntroScreen',
    component: Intro,
    options: {
      title: 'intro',
      gestureEnabled: false,
      cardStyleInterpolator: Transition.forFade,
    },
  },
  {
    name: 'SelectLanguageScreen',
    component: SelectLanguage,
    options: {
      title: 'select_language',
      gestureEnabled: false,
      cardStyleInterpolator: Transition.bottomToUp,
    },
  },
  {
    name: 'RegisterScreen',
    component: Register,
    options: {
      title: 'register',
      gestureEnabled: false,
      cardStyleInterpolator: Transition.bottomToUp,
    },
  },
  {
    name: 'RegisterSuccessScreen',
    component: RegisterSuccess,
    options: {
      title: 'register_success',
      gestureEnabled: false,
    },
  },
  {
    name: 'OtpVerificationScreen',
    component: OtpVerification,
    options: {
      title: 'otp_verification',
      gestureEnabled: false,
      cardStyleInterpolator: Transition.bottomToUp,
    },
  },
];
export { ShareScreens };
