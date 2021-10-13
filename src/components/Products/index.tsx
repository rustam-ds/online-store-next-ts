import React from 'react';
import { NextPage } from 'next';
import { Props } from './interfaces';
import { ProductsPagination } from 'src/components/Products/Pagination';
import { ProductCard } from 'src/components/Products/Card';
import { TextVariantTagName } from 'src/types/enums';
import { usePresenter } from 'src/components/Products/usePresenter';
import { useLocales } from 'src/hooks/useLocales';
import { ViewStyled, TitleStyled, DescriptionStyled, ItemStyled, ListStyled } from './styled';

export const Products: NextPage<Props> = () => {
  const { cards } = usePresenter();
  const {
    components: { products },
  } = useLocales();

  return (
    <ViewStyled>
      <DescriptionStyled>
        <TitleStyled variant={TextVariantTagName.h1}>{products.title}</TitleStyled>
      </DescriptionStyled>
      <ListStyled>
        {cards.map((card) => (
          <ItemStyled key={card.id}>
            <ProductCard id={card.id} name={card.name} price={card.price} image={card.image} />
          </ItemStyled>
        ))}
      </ListStyled>
      <ProductsPagination />
    </ViewStyled>
  );
};
