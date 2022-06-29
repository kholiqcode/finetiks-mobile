import { useEffect } from 'react';
import { Animated, Easing } from 'react-native';

import crashlytics from '@react-native-firebase/crashlytics';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export const useSplash = () => {
  const navigation = useNavigation<StackNavigationProp<ReactNavigation.RootStackParamList>>();
  const rotateValueHolder = new Animated.Value(0);

  // HANDLER
  const startImageRotateFunction = () => {
    crashlytics().log('call startImageRotateFunction.');
    rotateValueHolder.setValue(0);
    Animated.timing(rotateValueHolder, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  };

  const rotateData = rotateValueHolder.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  // HOOKS
  useEffect(() => {
    crashlytics().log('Splash screen mounted.');
    startImageRotateFunction();
    const timer = setTimeout(() => {
      navigation.replace('IntroScreen');
    }, 2000);

    return () => {
      crashlytics().log('Splash screen unmounted.');
      clearTimeout(timer);
    };
  }, []);

  return {
    rotateData,
    // startImageRotateFunction,
  };
};
