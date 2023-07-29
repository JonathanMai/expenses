import React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const FilterSVG = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.375}
      d="M11.563 10H3.124M16.875 10h-2.188M11.563 10a1.563 1.563 0 1 0 3.125 0 1.563 1.563 0 0 0-3.126 0ZM5.313 15.625H3.124M16.875 15.625H8.437M5.313 15.625a1.563 1.563 0 1 0 3.125 0 1.563 1.563 0 0 0-3.126 0ZM7.813 4.375H3.125M16.875 4.375h-5.938M7.813 4.375a1.563 1.563 0 1 0 3.125 0 1.563 1.563 0 0 0-3.126 0Z"
    />
  </Svg>
);
export default FilterSVG;
