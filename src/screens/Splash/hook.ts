import { useEffect } from 'react';

import crashlytics from '@react-native-firebase/crashlytics';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export const useSplash = () => {
  const navigation = useNavigation<StackNavigationProp<ReactNavigation.RootStackParamList>>();

  // HOOKS
  useEffect(() => {
    crashlytics().log('Splash screen mounted.');
    const timer = setTimeout(() => {
      navigation.replace('IntroScreen');
    }, 2000);

    return () => {
      crashlytics().log('Splash screen unmounted.');
      clearTimeout(timer);
    };
  }, []);

  return {};
};
