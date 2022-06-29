import { DdSdkReactNative, DdSdkReactNativeConfiguration } from '@datadog/mobile-react-native';

export async function initDatadogConfig() {
  const config = new DdSdkReactNativeConfiguration(
    'pubea3d2124cb76426c54f385992348ae1e',
    'development',
    '4cb0cce4-17a4-4312-95d6-812955f42fab',
    true, // track User interactions (e.g.: Tap on buttons. You can use 'accessibilityLabel' element property to give tap action the name, otherwise element type will be reported)
    true, // track XHR Resources
    true, // track Errors
  );
  // Optional: Select your Datadog website (one of "US", "EU" or "GOV")
  config.site = 'US';
  // Optional: enable or disable native crash reports
  config.nativeCrashReportEnabled = true;
  // Optional: sample RUM sessions (here, 80% of session will be sent to Datadog. Default = 100%)
  config.sampleRate = 80;

  // Once SDK is initialized you need to setup view tracking to be able to see data in the RUM Dashboard.
  await DdSdkReactNative.initialize(config);
}
