import React, { memo } from 'react';
import type { NextPage } from 'next';
import { Props } from './interfaces';
import { usePresenter } from './usePresenter';
import { useLocales } from 'src/hooks/useLocales';
import { ButtonVariant } from 'src/types/enums';
import { ViewStyled, ButtonStyled } from './styled';

export const ProductsPagination: NextPage<Props> = memo(() => {
  const { isPrevButtonDisabled, isNextButtonDisabled, goToNextPage, goToPrevPage } = usePresenter();
  const {
    components: { products },
  } = useLocales();

  return (
    <ViewStyled>
      <ButtonStyled
        onClick={goToPrevPage}
        disabled={isPrevButtonDisabled}
        variant={ButtonVariant.secondary}
      >
        {products.pagination.prevButton}
      </ButtonStyled>
      <ButtonStyled
        onClick={goToNextPage}
        disabled={isNextButtonDisabled}
        variant={ButtonVariant.secondary}
      >
        {products.pagination.nextButton}
      </ButtonStyled>
    </ViewStyled>
  );
});
