import { extendTheme } from 'native-base';

import baseStyle from './baseStyle';
import components from './components';
import { fontSizes, letterSpacings } from './fonts';

const themes = extendTheme({ fontSizes, letterSpacings, components });

export { baseStyle, fontSizes, letterSpacings, themes };
