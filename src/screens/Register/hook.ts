import { useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export const useRegister = () => {
  const navigation = useNavigation<StackNavigationProp<ReactNavigation.RootStackParamList>>();
  const [isEmailRegistered, setIsEmailRegistered] = useState(false);
  const [isPhoneRegistered, setIsPhoneRegistered] = useState(false);
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);

  const onPressRegister = () => {
    navigation.navigate('OtpVerificationScreen');
    setIsEmailRegistered(false);
    setIsPhoneRegistered(false);
    setIsInvalidEmail(false);
  };

  const onPressLogin = () => {
    navigation.navigate('LoginPinScreen');
  };

  return { isEmailRegistered, isPhoneRegistered, isInvalidEmail, onPressRegister, onPressLogin };
};
