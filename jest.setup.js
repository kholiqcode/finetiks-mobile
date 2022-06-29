/* eslint-disable @typescript-eslint/no-var-requires */
import 'whatwg-fetch';
import 'react-native-gesture-handler/jestSetup';

import * as ReactNative from 'react-native';

import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

jest.mock('redux-persist', () => {
  const real = jest.requireActual('redux-persist');
  return {
    ...real,
    persistReducer: jest.fn().mockImplementation((config, reducers) => reducers),
  };
});

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('@react-native-firebase/app');

// jest.mock('react-native-notifications');

// jest.mock('@react-native-firebase/database');

jest.mock('@react-native-firebase/messaging', () => () => ({
  hasPermission: jest.fn(() => Promise.resolve(true)),
  subscribeToTopic: jest.fn(),
  unsubscribeFromTopic: jest.fn(),
  requestPermission: jest.fn(() => Promise.resolve(true)),
  getToken: jest.fn(() => Promise.resolve('myMockToken')),
  onMessage: jest.fn(),
  setBackgroundMessageHandler: jest.fn(),
  onNotificationOpenedApp: jest.fn(),
  getInitialNotification: jest.fn(() => Promise.resolve(false)),
}));
jest.mock('@react-native-firebase/remote-config', () => () => ({
  fetchAndActivate: jest.fn().mockReturnValue(Promise.resolve()),
  fetch: jest.fn().mockReturnValue(Promise.resolve()),
  getAll: jest.fn().mockReturnValue({
    eva: { value: true },
    eva_hmg: { value: false },
  }),
}));
jest.mock('@react-native-firebase/in-app-messaging', () => () => ({
  setMessagesDisplaySuppressed: jest.fn(),
}));
jest.mock('@react-native-firebase/crashlytics', () => () => ({
  recordError: jest.fn(),
  logEvent: jest.fn(),
  log: jest.fn(),
  setUserProperties: jest.fn(),
  setUserId: jest.fn(),
  setCurrentScreen: jest.fn(),
}));

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

require('jest-fetch-mock').enableMocks();

jest.doMock('react-native', () => {
  return Object.setPrototypeOf(
    {
      Platform: {
        OS: 'android',
        select: () => {},
      },
      NativeModules: {
        ...ReactNative.NativeModules,
        NotifeeApiModule: {
          addListener: jest.fn(),
          eventsAddListener: jest.fn(),
          eventsNotifyReady: jest.fn(),
        },
      },
    },
    ReactNative,
  );
});
