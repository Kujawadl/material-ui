import * as React from 'react';
import { Omit } from '@material-ui/types';

type ResponsiveValue<Value = string | number> =
  | Value
  | [Value, Value]
  | [Value, Value, Value]
  | [Value, Value, Value, Value]
  | [Value, Value, Value, Value, Value]
  | {
      xs?: Value;
      sm?: Value;
      md?: Value;
      lg?: Value;
      xl?: Value;
    };

type ResponsiveCSSProperties<PropName extends keyof React.CSSProperties> = {
  [Name in PropName]?: ResponsiveValue<React.CSSProperties[Name]>
};

export interface BoxProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'color'>,
    ResponsiveCSSProperties<
      | 'alignContent'
      | 'alignItems'
      | 'alignSelf'
      | 'border'
      | 'borderBottom'
      | 'borderColor'
      | 'borderLeft'
      | 'borderRadius'
      | 'borderRight'
      | 'borderTop'
      | 'bottom'
      | 'boxShadow'
      | 'color'
      | 'cursor'
      | 'display'
      | 'flex'
      | 'flexDirection'
      | 'flexGrow'
      | 'flexShrink'
      | 'flexWrap'
      | 'fontFamily'
      | 'fontSize'
      | 'height'
      | 'justifyContent'
      | 'left'
      | 'maxHeight'
      | 'maxWidth'
      | 'minHeight'
      | 'minWidth'
      | 'overflowX'
      | 'overflowY'
      | 'position'
      | 'right'
      | 'textAlign'
      | 'top'
      | 'width'
      | 'zIndex'
    > {
  component?: React.ElementType;
  // styled API
  clone?: boolean;
  // Box specific props
  bgcolor?: ResponsiveValue<string>;
  displayPrint?: ResponsiveValue<string>;
  m?: ResponsiveValue;
  mb?: ResponsiveValue;
  ml?: ResponsiveValue;
  mr?: ResponsiveValue;
  mt?: ResponsiveValue;
  mx?: ResponsiveValue;
  my?: ResponsiveValue;
  order?: ResponsiveValue;
  p?: ResponsiveValue;
  pb?: ResponsiveValue;
  pl?: ResponsiveValue;
  pr?: ResponsiveValue;
  pt?: ResponsiveValue;
  px?: ResponsiveValue;
  py?: ResponsiveValue;
  // CSSProperty Overrides
  // Accept a string | number here instead of the union type in CSSProperties
  // so this prop can accept theme variable names, e.g. fontWeightBold.
  fontWeight?: ResponsiveValue;
}

declare const Box: React.ComponentType<BoxProps>;

export default Box;
