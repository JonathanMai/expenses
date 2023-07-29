import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {useColors} from '../../themes/useColors';

/**
 * Adds padding to secure phones status bar and footer
 * Should be used with each new screen.
 *
 * @param {View['props']} props - used to style wrapper and add children
 * @returns
 */
const SafeAreaView = ({children, style, ...rest}: View['props']) => {
  const {BACKGROUND} = useColors();
  const {bottom, top} = useSafeAreaInsets();
  return (
    <View style={[styles.flex, {backgroundColor: BACKGROUND}]}>
      <View style={[styles.flex, {paddingTop: top, paddingBottom: bottom}]}>
        <View {...rest} style={[styles.flex, style]}>
          {children}
        </View>
      </View>
    </View>
  );
};

export default SafeAreaView;

const styles = StyleSheet.create({flex: {flex: 1}});
