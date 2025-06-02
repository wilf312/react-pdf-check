import { type TextProps as _TextProps } from '@react-pdf/renderer';

import { StyleSheet, Text as _Text } from '@react-pdf/renderer';

export type TextProps = { h: '1' | '2' | '3' | 'p'; align?: 'left' | 'center' | 'right'; bold?: boolean } & _TextProps;

export const Text: React.FC<React.PropsWithChildren<TextProps>> = (props) => {
  const { align, bold, h, ...rest } = props;

  const _align = align || 'left';
  const _fontWeight = bold ? 'bold' : 'normal';

  const styles = StyleSheet.create({
    ['1']: {
      fontSize: 20,
      textAlign: _align,
      fontWeight: _fontWeight,
    },
    ['2']: {
      fontSize: 16,
      textAlign: _align,
      fontWeight: _fontWeight,
    },
    ['3']: {
      fontSize: 10,
      textAlign: _align,
      fontWeight: _fontWeight,
    },
    ['p']: {
      fontSize: 8,
      textAlign: _align,
      fontWeight: _fontWeight,
    },
  });

  const _style = rest?.style ? [rest.style] : [];

  return (
    <_Text {...rest} style={[styles[h], ..._style]}>
      {props.children}
    </_Text>
  );
};
