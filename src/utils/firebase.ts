import remoteConfig from '@react-native-firebase/remote-config';

export const fetchConfig = async () => {
  await remoteConfig().setConfigSettings({
    minimumFetchIntervalMillis: 300,
  });
  await remoteConfig().fetchAndActivate();
};

export const refreshConfig = async () => remoteConfig().fetchAndActivate();

export const getRemoteValue = (key) => remoteConfig().getValue(key).asString();
