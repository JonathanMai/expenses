import {useColorScheme} from 'react-native';

import {DARK_COLORS, LIGHT_COLORS} from './colors';

import {ITheme} from './types';

// custom hook which returns the colors of current theme
export const useColors = (): ITheme => {
  const isDarkMode = useColorScheme() === 'dark';

  return isDarkMode ? DARK_COLORS : LIGHT_COLORS;
};
