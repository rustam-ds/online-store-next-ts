import React, { memo } from 'react';
import { Props } from './interfaces';
import { ButtonStyled } from './styled';
import { NextPage } from 'next';
import { ButtonVariant } from 'src/types/enums';

export const Button: NextPage<Props> = memo(
  ({ children, className, variant = ButtonVariant.default, onClick, disabled = false }) => (
    <ButtonStyled onClick={onClick} className={className} variant={variant} disabled={disabled}>
      {children}
    </ButtonStyled>
  ),
);
