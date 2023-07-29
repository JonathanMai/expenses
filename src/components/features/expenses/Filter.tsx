import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

import Row from '../../common/Row';
import Text from '../../common/text/Text';

import {normalizeText} from '../../../utils/sizes';
import {useColors} from '../../../themes/useColors';
import FilterSVG from '../../../assets/svg/FilterSVG';

import {MainStackNavigationProp} from '../../../navigation/MainStack';
import {textType} from '../../common/text/types';

/**
 * Filters the list content using the filters reducer.
 */
const Filter = () => {
  const {ICON_BACKGROUND} = useColors();
  const background = {backgroundColor: ICON_BACKGROUND};
  const navigation = useNavigation<MainStackNavigationProp['navigation']>();

  const onPress = () => {
    navigation.navigate('FilterModal');
  };

  return (
    <TouchableOpacity style={[styles.container, background]} onPress={onPress}>
      <Row style={styles.wrapper}>
        <View>
          <FilterSVG />
        </View>
        <Text type={textType.bold} style={styles.text}>
          Filters
        </Text>
      </Row>
    </TouchableOpacity>
  );
};

export default Filter;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-end',
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 50,
    marginRight: 15,
    marginBottom: 10,
  },
  wrapper: {alignItems: 'center'},
  text: {marginLeft: 15, fontSize: normalizeText(13)},
});
