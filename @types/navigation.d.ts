/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { ParamListBase, RouteConfig } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  StackNavigationEventMap,
  StackNavigationOptions,
  StackNavigationProp,
} from '@react-navigation/stack';

declare global {
  namespace ReactNavigation {
    type RootStackParamList = {
      SplashScreen: undefined | never;
      IntroScreen: undefined | never;
    };

    type Props = NativeStackScreenProps<RootStackParamList>;

    type RouteConfigProps = IntrinsicAttributes &
      RouteConfig<
        RootStackParamList,
        string,
        StackNavigationProp<ParamListBase>,
        StackNavigationOptions,
        StackNavigationEventMap
      >;
  }
}
