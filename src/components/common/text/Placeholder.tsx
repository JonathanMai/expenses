import React from 'react';

import Text, {TTextProps} from './Text';

import {useColors} from '../../../themes/useColors';

/**
 * Text with placeholder looks
 *
 * @param {TTextProps} props
 * @returns
 */
const Placeholder = ({style, ...rest}: TTextProps) => {
  const {PLACEHOLDER} = useColors();

  return <Text {...rest} style={[{color: PLACEHOLDER}, style]} />;
};

export default Placeholder;
