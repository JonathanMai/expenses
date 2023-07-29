import {Dimensions, PixelRatio} from 'react-native';

// Screen size
export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

// Normalize text
export const normalizeText = (size: number) => {
  const scaleFactor = PixelRatio.getFontScale();
  const normalizedSize = size * scaleFactor;
  return Math.round(normalizedSize);
};
