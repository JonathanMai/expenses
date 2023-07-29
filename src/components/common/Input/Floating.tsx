import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import {normalizeText} from '../../../utils/sizes';
import Placeholder from '../text/Placeholder';
import TextInput, {TTextInputProps} from '../text/TextInput';

import {useColors} from '../../../themes/useColors';

type IProps = TTextInputProps & {paddingLeft?: number};

/**
 * Floating text input
 * @param {string} value - the input content
 * @param {string} placeholder - floating label/placeholder string
 * @param {string} style - the input content
 * @param {number} paddingLeft - the input content
 * @returns
 */
const Floating = ({
  value,
  placeholder,
  style,
  paddingLeft = 0,
  ...rest
}: IProps) => {
  // Hooks
  const {BACKGROUND, TEXT_BORDER_BOTTOM} = useColors();
  const [textHeight, setTextHeight] = useState<number>(0);

  // Animations
  const position = useSharedValue(0);
  const fontSize = useSharedValue(normalizeText(16));

  // Vars
  const containerStyle = {
    borderColor: TEXT_BORDER_BOTTOM,
    backgroundColor: BACKGROUND,
  };

  // Effects
  useEffect(() => {
    if (value.length) {
      position.value = -textHeight;
      fontSize.value = normalizeText(14);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [textHeight, value]);

  // Local functions
  const onFocus = () => {
    if (value?.length > 0) {
      return;
    }
    position.value = -textHeight;
    fontSize.value = normalizeText(14);
  };

  const onBlur = () => {
    if (value?.length > 0) {
      return;
    }

    position.value = 0;
    fontSize.value = normalizeText(16);
  };

  const onLayout = ({
    nativeEvent: {
      layout: {height},
    },
  }) => {
    !textHeight && setTextHeight(height);
  };

  // Animations styles
  const positionStyle = useAnimatedStyle(() => {
    return {
      position: 'absolute',
      bottom: 0,
      transform: [
        {
          translateY: withTiming(position.value, {
            duration: 200,
            easing: Easing.linear,
          }),
        },
        {
          translateX: withTiming(position.value ? 0 : paddingLeft, {
            duration: 200,
            easing: Easing.linear,
          }),
        },
      ],
    };
  });

  const textStyle = useAnimatedStyle(() => {
    return {
      fontSize: withTiming(fontSize.value, {
        duration: 200,
        easing: Easing.linear,
      }),
    };
  });

  return (
    <View style={containerStyle}>
      <TextInput
        style={[styles.container, style, {paddingLeft}]}
        {...rest}
        {...{value, onFocus, onBlur}}
      />
      <Animated.View
        onLayout={onLayout}
        style={positionStyle}
        pointerEvents="none">
        <Animated.Text style={textStyle}>
          <Placeholder>{placeholder}</Placeholder>
        </Animated.Text>
      </Animated.View>
    </View>
  );
};

export default Floating;

const styles = StyleSheet.create({
  container: {
    paddingTop: normalizeText(20),
  },
});
