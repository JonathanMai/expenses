import React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

import {useColors} from '../../themes/useColors';

const X = (props: SvgProps) => {
  const {FONT_COLOR} = useColors();
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        stroke={FONT_COLOR}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.7}
        d="m18.75 5.25-13.5 13.5M18.75 18.75 5.25 5.25"
      />
    </Svg>
  );
};
export default X;
