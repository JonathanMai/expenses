/**
 * shared text types
 */

export enum textType {
  normal,
  light,
  bold,
}

export interface ITextProps {
  type?: textType;
}
