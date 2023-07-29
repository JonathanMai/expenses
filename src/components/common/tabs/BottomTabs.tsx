import React, {ReactNode, useState} from 'react';
import {StyleSheet, View} from 'react-native';

import SafeAreaView from '../SafeAreaView';
import {useColors} from '../../../themes/useColors';
import TabsPanel from './TabsPanel';

export interface IScreen {
  label: string;
  Screen: ReactNode;
}

export interface IBottomTabsProps {
  screens: IScreen[];
  fabAction: Function;
}

/**
 *
 * @param {IScreen} screens - holds a screen label and component
 * @param {Function} fabAction - holds floating action button function
 * @returns
 */
const BottomTabs = ({screens, fabAction}: IBottomTabsProps) => {
  const {BACKGROUND} = useColors();
  const background = {backgroundColor: BACKGROUND};

  const [selectedTab, setSelectedTab] = useState(0);
  const {Screen} = screens[selectedTab];
  return (
    <SafeAreaView>
      <View style={[styles.screen, background]}>{Screen}</View>
      <TabsPanel {...{screens, fabAction, selectedTab, setSelectedTab}} />
    </SafeAreaView>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({screen: {flex: 1}});
