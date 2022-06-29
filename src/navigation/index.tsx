import React from 'react';

import { DdRumReactNavigationTracking } from '@datadog/mobile-react-navigation';
import analytics from '@react-native-firebase/analytics';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { ShareScreens } from './config';

const RootStack = createStackNavigator<ReactNavigation.RootStackParamList>();

function Router() {
  const routeNameRef = React.useRef<unknown>();
  const navigationRef = useNavigationContainerRef();

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef.getCurrentRoute().name;
      }}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.getCurrentRoute().name;

        if (previousRouteName !== currentRouteName) {
          await analytics().logScreenView({
            screen_name: currentRouteName,
            screen_class: currentRouteName,
          });
          DdRumReactNavigationTracking.startTrackingViews(navigationRef);
        }
        routeNameRef.current = currentRouteName;
      }}
    >
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <RootStack.Group screenOptions={{ headerShown: false }}>
          {ShareScreens.map((route: ReactNavigation.RouteConfigProps, index) => (
            <RootStack.Screen key={index} {...route} />
          ))}
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export * from '../utils/navigation';
export default Router;
