import { useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export const useRegister = () => {
  const navigation = useNavigation<StackNavigationProp<ReactNavigation.RootStackParamList>>();
  const [count, setCount] = useState(0);
  const [isEmailRegistered, setIsEmailRegistered] = useState(false);
  const [isPhoneRegistered, setIsPhoneRegistered] = useState(false);
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);

  const onPressRegister = () => {
    if (count > 4) {
      setCount(0);
    } else {
      setCount(count + 1);
    }

    switch (count) {
      case 1:
        setIsEmailRegistered(true);
        setIsPhoneRegistered(false);
        setIsInvalidEmail(false);
        break;
      case 2:
        setIsEmailRegistered(false);
        setIsPhoneRegistered(true);
        setIsInvalidEmail(false);
        break;
      case 3:
        setIsEmailRegistered(false);
        setIsPhoneRegistered(false);
        setIsInvalidEmail(true);
        break;
      case 4:
        navigation.navigate('OtpVerificationScreen');
        break;

      default:
        setIsEmailRegistered(false);
        setIsPhoneRegistered(false);
        setIsInvalidEmail(false);
        break;
    }
  };

  return { isEmailRegistered, isPhoneRegistered, isInvalidEmail, onPressRegister };
};
