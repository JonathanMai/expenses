import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import X from '../../assets/svg/X';

type TProps = View['props'] & {
  paddingTop?: number;
};

/**
 * Component that wraps modals and adding the close and X button on top.
 *
 * @param {number} paddingTop - indicates in how low the X button supposed to be placed from the top.
 * @param {View['props']['style']} style - styles the inner wrapper of the content
 */
const Modal = ({paddingTop = 0, style, children}: TProps) => {
  const {bottom} = useSafeAreaInsets();
  const navigation = useNavigation();
  const onCloseModal = () => navigation.goBack();

  return (
    <View style={[styles.container]}>
      <View
        style={[styles.wrapper, {paddingBottom: bottom}, style, {paddingTop}]}>
        <Pressable
          style={[styles.closeButton, {top: paddingTop || 15}]}
          onPress={onCloseModal}>
          <X />
        </Pressable>
        {children}
      </View>
    </View>
  );
};

export default Modal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  wrapper: {
    padding: 10,
  },
  closeButton: {
    position: 'absolute',
    right: 15,
    zIndex: 1,
  },
});
