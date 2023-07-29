import React from 'react';
import {Pressable, TouchableOpacity, StyleSheet} from 'react-native';

import Row from '../Row';
import Text from '../text/Text';
import {COLORS} from '../../../themes/colors';
import {SCREEN_WIDTH} from '../../../utils/sizes';
import PlusIcon, {SIZE} from '../../../assets/svg/PlusIcon';
import {IBottomTabsProps} from './BottomTabs';

type IProps = IBottomTabsProps & {
  setSelectedTab: Function;
  selectedTab: number;
};

/**
 *
 * @param {IScreen} screens - holds the label to show inside the tab and a screen to render when clicked.
 * @param {Function} fabAction Action for the floating action button.
 * @param {Function} setSelectedTab controls the parent picked tab
 * @param {number} selectedTab indicates which tab is selected in order to apply selected tab styles.
 * @returns
 */
const TabsPanel = ({
  screens,
  fabAction,
  setSelectedTab,
  selectedTab,
}: IProps) => {
  const onPress = (index: number) => () => setSelectedTab(index);
  return (
    <Row style={styles.container}>
      <Fab onPress={fabAction} />
      {screens.map(({label}, index) => (
        <Pressable
          key={index + label}
          onPress={onPress(index)}
          style={styles.textWrapper}>
          <Text
            style={[styles.text, selectedTab === index && styles.selectedText]}>
            {label}
          </Text>
        </Pressable>
      ))}
    </Row>
  );
};

const Fab = ({onPress}) => (
  <TouchableOpacity style={styles.fab} onPress={onPress}>
    <PlusIcon onPress={onPress} />
  </TouchableOpacity>
);

export default TabsPanel;

const BUTTON_SIZE = SIZE * 2;
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: COLORS.GREY_2,
    zIndex: 1,
  },
  textWrapper: {flex: 1, paddingVertical: 30},
  text: {textAlign: 'center', color: COLORS.GREY_TAB_LABEL},
  selectedText: {color: COLORS.BLUE},
  fab: {
    position: 'absolute',
    backgroundColor: COLORS.BLUE,
    borderRadius: BUTTON_SIZE / 2,
    zIndex: 1,
    height: BUTTON_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
    width: BUTTON_SIZE,
    left: SCREEN_WIDTH / 2 - BUTTON_SIZE / 2,
    top: -(BUTTON_SIZE / 2),
  },
});
