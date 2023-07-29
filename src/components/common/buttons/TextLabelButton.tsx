import React from 'react';
import {TouchableOpacity} from 'react-native';

import TextLabel, {ITextLabelProps} from '../text/TextLabel';

type TProps = ITextLabelProps & TouchableOpacity['props'];

/**
 * Creates a [TEXT > LABEL] button which looks like underline input without placeholder and edit options
 * @param {string} label - the left side text
 * @param {string} value - the right side text
 * @returns
 */
const TextLabelButton = ({label, value, ...rest}: TProps) => {
  return (
    <TouchableOpacity {...rest}>
      <TextLabel {...{label, value}} />
    </TouchableOpacity>
  );
};

export default TextLabelButton;
