import { useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export const useLoginPhone = () => {
  const navigation = useNavigation<StackNavigationProp<ReactNavigation.RootStackParamList>>();
  const [isPhoneRegistered, setIsPhoneRegistered] = useState(false);

  const onPressUsePin = () => {
    // navigation.navigate('OtpVerificationScreen');
    navigation.navigate('LoginPinScreen');
  };

  const onPressLogin = () => {
    setIsPhoneRegistered(false);
  };

  return { onPressUsePin, isPhoneRegistered, onPressLogin };
};
