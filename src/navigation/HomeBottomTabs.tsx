import React from 'react';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import BottomTabs, {IScreen} from '../components/common/tabs/BottomTabs';
import {useNavigation} from '@react-navigation/native';
import {MainStackNavigationProp} from './MainStack';

const screens: IScreen[] = [
  {label: 'Home', Screen: <Home />},
  {label: 'Profile', Screen: <Profile />},
];

const HomeBottomTabs = () => {
  const navigation = useNavigation<MainStackNavigationProp['navigation']>();

  // floating action button handler - opens expenses modal to add a new expense
  const fabAction = () => {
    navigation.navigate('ExpenseModal', {
      isNew: true,
    });
  };

  return <BottomTabs {...{screens, fabAction}} />;
};

export default HomeBottomTabs;
