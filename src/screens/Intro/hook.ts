import React, { useCallback } from 'react';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export default function useIntro() {
  const navigation = useNavigation<StackNavigationProp<ReactNavigation.RootStackParamList>>();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: 'first',
      title: 'Scene 1',
    },
    {
      key: 'second',
      title: 'Scene 2',
    },
    {
      key: 'third',
      title: 'Scene 3',
    },
    {
      key: 'fourth',
      title: 'Scene 4',
    },
  ]);

  // HANDLER
  const onNextPress = useCallback(() => setIndex(index < routes.length && index + 1), [index]);
  const onBackPress = useCallback(() => setIndex(index > 0 && index - 1), [index]);
  const onGettingStartedPress = () => navigation.navigate('RegisterScreen');

  return {
    index,
    setIndex,
    routes,
    onNextPress,
    onBackPress,
    onGettingStartedPress,
  };
}
