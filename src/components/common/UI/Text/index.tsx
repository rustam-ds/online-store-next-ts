import { memo } from 'react';
import type { NextPage } from 'next';
import { TextStyled } from './styled';
import { TextVariantTagName, Color, FontWeight } from 'src/types/enums';
import { Props } from './interfaces';

export const Text: NextPage<Props> = memo(
  ({
    className,
    variant = TextVariantTagName.p,
    color = Color.default,
    fontWeight = FontWeight.normal,
    children,
  }) => (
    <TextStyled
      className={className}
      variant={variant}
      color={color}
      fontWeight={fontWeight}
      as={variant}
    >
      {children}
    </TextStyled>
  ),
);
