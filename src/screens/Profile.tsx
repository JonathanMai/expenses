import {StyleSheet, View} from 'react-native';
import React from 'react';
import {useColors} from '../themes/useColors';
import {getExpensesCount} from '../features/expenses/slice';
import TextLabel from '../components/common/text/TextLabel';
import TextLabelButton from '../components/common/buttons/TextLabelButton';
import {useAppDispatch, useAppSelector} from '../features/hooks';
import {logoutAction} from '../features/actions/actions';

/**
 * Profile Screen - holds the profile screen in which shows the number of expenses added and the option to logout
 */
const Profile = () => {
  const {BACKGROUND} = useColors();
  const dispatch = useAppDispatch();
  const sum = useAppSelector(getExpensesCount);
  const onPress = () => dispatch(logoutAction);
  return (
    <View style={[styles.container, {backgroundColor: BACKGROUND}]}>
      <TextLabel label="Total Expenses Items" value={sum} />
      <TextLabelButton value="" label="Sign Out" onPress={onPress} />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 50,
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
