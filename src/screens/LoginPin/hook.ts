import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export default function useLoginPin() {
  const navigation = useNavigation<StackNavigationProp<ReactNavigation.RootStackParamList>>();
  const [isWrong, setIsWrong] = React.useState(false);

  const onPressRegister = () => {
    navigation.navigate('RegisterScreen');
  };
  return { onPressRegister, isWrong, setIsWrong };
}
