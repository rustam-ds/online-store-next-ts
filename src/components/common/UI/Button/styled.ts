import styled, { css } from 'src/theme';
import { ButtonVariant } from 'src/types/enums';

export const ButtonStyled = styled.button<{ variant: ButtonVariant; disabled: boolean }>`
  ${(props) => css`
    width: max-content;
    padding: ${props.theme.uiPoint * 2}px ${props.theme.uiPoint * 4}px;

    ${props.variant === ButtonVariant.default &&
    css`
      background: ${props.theme.colors.blue};
      border: none;
      color: ${props.theme.colors.inverted};

      &:hover {
        background: ${props.theme.colors.hoverBlue};
      }
    `}

    ${props.variant === ButtonVariant.secondary &&
    css`
      background: ${props.theme.colors.inverted};
      border: 1px solid ${props.theme.colors.blue};
      color: ${props.theme.colors.default};

      &:hover {
        border: 1px solid ${props.theme.colors.hoverBlue};
      }
    `}
    
    ${props.disabled &&
    css`
      cursor: text;
      color: ${props.theme.colors.secondary};
    `}
  `}
`;
