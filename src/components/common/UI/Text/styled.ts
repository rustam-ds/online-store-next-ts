import styled, { css } from 'src/theme';
import { Color, FontWeight, TextVariantTagName } from 'src/types/enums';

export const TextStyled = styled.div<{
  variant: TextVariantTagName;
  color: Color;
  fontWeight: FontWeight;
}>`
  ${(props) => css`
    line-height: 1.3em;

    ${props.variant === TextVariantTagName.h1 &&
    css`
      font-size: ${props.theme.fonts.h1_size}px;
    `}

    ${props.variant === TextVariantTagName.h2 &&
    css`
      font-size: ${props.theme.fonts.h2_size}px;
    `}

    ${props.variant === TextVariantTagName.h3 &&
    css`
      font-size: ${props.theme.fonts.h3_size}px;
    `}

    ${props.variant === TextVariantTagName.p &&
    css`
      font-size: ${props.theme.fonts.p_size}px;
    `}

    ${props.color === Color.default &&
    css`
      color: ${props.theme.colors.default};
    `}

    ${props.color === Color.secondary &&
    css`
      color: ${props.theme.colors.secondary};
    `}

    ${props.color === Color.inverted &&
    css`
      color: ${props.theme.colors.inverted};
    `}

    ${props.fontWeight === FontWeight.bold &&
    css`
      font-weight: bold;
    `}

    ${props.fontWeight === FontWeight.normal &&
    css`
      font-weight: normal;
    `}
  `}
`;
