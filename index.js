/**
 * @format
 */

import { AppRegistry } from 'react-native';

import { name as appName } from './app.json';
import App from './src';
import { initDatadogConfig } from './src/utils';

initDatadogConfig();

AppRegistry.registerComponent(appName, () => App);
