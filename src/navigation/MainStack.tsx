import React from 'react';
import {getUserName} from '../features/userInfo/slice';
import {useAppSelector} from '../features/hooks';
import HomeBottomTabs from './HomeBottomTabs';
import ExpenseModal from '../modals/ExpenseModal';
import FilterModal from '../modals/FilterModal';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {IExpense} from '../features/types';
import {useColors} from '../themes/useColors';

export type IMainStackParams = {
  HomeTabs: undefined;
  ExpenseModal: {expense?: IExpense; isNew?: boolean};
  FilterModal: undefined;
};

export type MainStackNavigationProp = NativeStackScreenProps<
  IMainStackParams,
  'ExpenseModal',
  'FilterModal'
>;

const stack = createNativeStackNavigator<IMainStackParams>();
const {Navigator, Group, Screen} = stack;

const MainStack = () => {
  const userName = useAppSelector(getUserName);
  const {BACKGROUND, FONT_COLOR} = useColors();
  return (
    <Navigator>
      <Screen
        options={{
          title: userName,
          headerStyle: {backgroundColor: BACKGROUND},
          headerTitleStyle: {color: FONT_COLOR},
        }}
        name={'HomeTabs'}
        component={HomeBottomTabs}
      />
      {/* Modals group */}
      <Group
        screenOptions={{
          headerShown: false,
        }}>
        <Screen
          options={{presentation: 'modal'}}
          name="ExpenseModal"
          component={ExpenseModal}
          initialParams={{
            expense: {Title: '', Amount: '0', Date: ''},
            isNew: false,
          }}
        />
        <Screen
          options={{presentation: 'transparentModal'}}
          name="FilterModal"
          component={FilterModal}
        />
      </Group>
    </Navigator>
  );
};

export default MainStack;
