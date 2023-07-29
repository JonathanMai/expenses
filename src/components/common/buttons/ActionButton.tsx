import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import Text from '../text/Text';
import {useColors} from '../../../themes/useColors';
import {normalizeText} from '../../../utils/sizes';
import {COLORS} from '../../../themes/colors';
import {textType} from '../text/types';

interface IProps extends TouchableOpacityProps {
  label: string;
}

/**
 * Creates an action button with default style
 * @param {string} label - the label shown inside the button.
 * @param {Function} onPress - holds the action clicking the button triggers.
 * @param {StyleProp<ViewStyle>} style - handling the container style but not the text style(if needed can add a textStyle prop for that).
 * @param {boolean} disabled - indicates if the button is clickable and change styling due to it.
 * @returns
 */
const ActionButton = ({label, onPress, style, disabled}: IProps) => {
  const {ACTION_BUTTON_BG} = useColors();
  return (
    <TouchableOpacity
      style={[
        styles.container,
        style,
        {backgroundColor: ACTION_BUTTON_BG},
        disabled && styles.disabled,
      ]}
      {...{onPress, disabled}}>
      <Text
        style={{fontSize: normalizeText(16), color: COLORS.WHITE}}
        type={textType.bold}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default ActionButton;

const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    width: 150,
    height: 49,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabled: {opacity: 0.5},
});
