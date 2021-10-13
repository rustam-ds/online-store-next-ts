import React, { memo } from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import { Props } from './interfaces';
import { Text } from 'src/components/common/UI/Text';
import { FontWeight, TextVariantTagName } from 'src/types/enums';
import { ViewStyled, ImgViewStyled, ImgStyled, DescriptionStyled, PriceStyled } from './styled';

export const ProductCard: NextPage<Props> = memo(({ id, name, price, image }) => {
  return (
    <Link href={`/product/${id}`}>
      <ViewStyled>
        <ImgViewStyled>
          <ImgStyled src={image} alt={name} />
        </ImgViewStyled>
        <DescriptionStyled>
          <Text variant={TextVariantTagName.h3} fontWeight={FontWeight.bold}>
            {name}
          </Text>
        </DescriptionStyled>
        <PriceStyled>
          <Text>{price}</Text>
        </PriceStyled>
      </ViewStyled>
    </Link>
  );
});
