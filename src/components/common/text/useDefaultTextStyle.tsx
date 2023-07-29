import {fontStyle} from './config';

import {useColors} from '../../../themes/useColors';
import {ITextProps, textType} from './types';

/**
 *
 * @param {textType} type - holds the fontFamily type.
 */
const useDefaultTextStyle = (type: ITextProps['type'] = textType.normal) => {
  const {FONT_COLOR} = useColors();
  const defaultStyle = {color: FONT_COLOR, fontFamily: fontStyle[type]};

  return defaultStyle;
};

export default useDefaultTextStyle;
