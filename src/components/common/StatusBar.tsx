import {StatusBar as RNStatusBar, useColorScheme} from 'react-native';
import React from 'react';
import {useColors} from '../../themes/useColors';

/**
 * Handles Status bar theme and colors
 */
const StatusBar = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const {BACKGROUND} = useColors();
  return (
    <RNStatusBar
      barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      backgroundColor={BACKGROUND}
    />
  );
};

export default StatusBar;
