import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import Text from '../text/Text';
import Floating from './Floating';
import {TTextInputProps} from '../text/TextInput';

import {createDate, dateToString} from '../../../utils/dates';

import {useColors} from '../../../themes/useColors';

/**
 * Floating input with underline looks
 *
 * @param {TTextInputProps} props
 */
const UnderLine = (props: TTextInputProps) => {
  const {FONT_COLOR} = useColors();
  const borderColor = {borderBottomColor: FONT_COLOR};
  return (
    <View style={[styles.container, borderColor]}>
      <View style={styles.borderPadding}>
        <Floating {...props} />
      </View>
    </View>
  );
};

/**
 * Floating input with underline looks to insert dollars amount
 *
 * @param {TTextInputProps} props
 */
export const MoneyInputUnderLine = (props: TTextInputProps) => (
  <>
    <Text style={styles.dollarSign}>$</Text>
    <UnderLine {...props} keyboardType="numeric" paddingLeft={10} />
  </>
);

/**
 * Floating input with underline looks for date picker
 *
 * @param {TTextInputProps} props
 */
export const DateInputUnderLine = (
  props: TTextInputProps & {setValue: Function},
) => {
  const [visible, setVisible] = useState(false);
  const handlePress = () => setVisible(true);
  const handleConfirm = (date: Date) => {
    props.setValue(dateToString(date));
    hideDatePicker();
  };
  const hideDatePicker = () => {
    setVisible(false);
  };
  return (
    <>
      <TouchableOpacity onPress={handlePress}>
        <UnderLine {...props} editable={false} />
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={visible}
        mode="date"
        date={!props.value?.length ? new Date() : createDate(props.value)}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </>
  );
};

export default UnderLine;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  borderPadding: {paddingBottom: 5},
  dollarSign: {position: 'absolute', left: 0, bottom: 5, zIndex: 1},
});
