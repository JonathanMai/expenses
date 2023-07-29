import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';

const {Navigator, Screen} = createStackNavigator();

const LoginStack = () => {
  return (
    <Navigator>
      <Screen options={{headerShown: false}} name={'Login'} component={Login} />
    </Navigator>
  );
};

export default LoginStack;
