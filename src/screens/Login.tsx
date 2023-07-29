import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import SafeAreaView from '../components/common/SafeAreaView';
import Box from '../components/common/Input/Box';
import ActionButton from '../components/common/buttons/ActionButton';

import {setUser} from '../features/userInfo/slice';

import {useAppDispatch} from '../features/hooks';

/**
 * Login Screen - user needs to insert a name to "login"
 */
const Login = () => {
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();
  const setUserName = () => dispatch(setUser(value));

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Box value={value} onChangeText={setValue} placeholder="Enter Name" />
      </View>
      <ActionButton
        style={styles.actionButton}
        label="Login"
        onPress={setUserName}
        disabled={!value?.length}
      />
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    justifyContent: 'center',
  },
  content: {flex: 1, justifyContent: 'center', paddingHorizontal: 40},
  actionButton: {marginBottom: 40},
});
