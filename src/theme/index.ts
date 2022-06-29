import { extendTheme } from 'native-base';

import components from './components';
import { fontSizes, letterSpacings } from './fonts';

const themes = extendTheme({ fontSizes, letterSpacings, components });

export { components, letterSpacings, themes };
