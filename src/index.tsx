import React, { useEffect } from 'react';

import Router from '@navigation';
import notifee from '@notifee/react-native';
import analytics from '@react-native-firebase/analytics';
import { utils } from '@react-native-firebase/app';
import messaging from '@react-native-firebase/messaging';
import { NativeBaseProvider } from 'native-base';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { useNotification } from '@hooks';
import { fetchConfig, setupLayoutAnimation } from '@utils';
import { persistor, store } from '@store';
import { themes } from '@theme';

setupLayoutAnimation();
fetchConfig();

function App() {
  const { displayNotification } = useNotification();

  async function bootstrap() {
    if (utils().isRunningInTestLab) {
      await analytics().setAnalyticsCollectionEnabled(false);
    }
  }

  async function requestUserPermission() {
    await messaging().requestPermission();
    // const authStatus = await messaging().requestPermission();
    // const enabled =
    //   authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    //   authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    // if (enabled) {
    //   // console.log('Authorization status:', authStatus);
    // } else {
    //   // console.log('User declined permissions');
    // }
  }

  useEffect(() => {
    requestUserPermission();
    bootstrap();

    // notifee.onBackgroundEvent(async ({ type }) => {
    notifee.onBackgroundEvent(async () => {
      // if (type === EventType.PRESS) {
      // console.log('User pressed the notification.', detail.pressAction.id);
      // }
    });

    messaging().setBackgroundMessageHandler(async (remoteMessage) => {
      // Get message image
      // const avatar = remoteMessage.notification.android.imageUrl;

      // Show an alert to the user
      displayNotification(remoteMessage.notification.title, remoteMessage.notification.body);
    });

    // return subscribe;
  }, []);
  return (
    <NativeBaseProvider theme={themes}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router />
        </PersistGate>
      </Provider>
    </NativeBaseProvider>
  );
}
export default App;
