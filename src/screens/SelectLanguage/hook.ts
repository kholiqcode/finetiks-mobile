import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export const useSelectLanguage = () => {
  const navigation = useNavigation<StackNavigationProp<ReactNavigation.RootStackParamList>>();

  const onPressLanguage = () => {
    navigation.navigate('RegisterScreen');
  };

  return { onPressLanguage };
};
