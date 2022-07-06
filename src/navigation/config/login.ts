import { LoginPhone, LoginPin } from '@screens';

const LoginScreens = [
  {
    name: 'LoginPinScreen',
    component: LoginPin,
    options: {
      gestureEnabled: false,
    },
  },
  {
    name: 'LoginPhoneScreen',
    component: LoginPhone,
    options: {
      gestureEnabled: false,
    },
  },
];
export default LoginScreens;
