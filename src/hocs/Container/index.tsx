import React, { memo } from 'react';
import { NextPage } from 'next';
import { Props } from './interfaces';
import { ContainerStyled } from './styled';

export const Container: NextPage<Props> = memo(({ children }) => (
  <ContainerStyled>{children}</ContainerStyled>
));
