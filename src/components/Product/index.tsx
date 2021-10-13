import React from 'react';
import { NextPage } from 'next';
import { Props } from './interfaces';
import { usePresenter } from './usePresenter';
import { Text } from 'src/components/common/UI/Text';
import { ButtonVariant, FontWeight, TextVariantTagName } from 'src/types/enums';
import {
  ButtonStyled,
  DescriptionStyled,
  ImgStyled,
  ImgViewStyled,
  InfoStyled,
  SizesStyled,
  ButtonSizeStyled,
  ViewStyled,
} from './styled';
import { useLocales } from 'src/hooks/useLocales';

export const Product: NextPage<Props> = () => {
  const { activeSize, card, changeActiveIndex, addProductToBasket } = usePresenter();
  const {
    components: { product },
  } = useLocales();

  return (
    <ViewStyled>
      <ImgViewStyled>
        <ImgStyled src={card.image} alt={card.name} />
      </ImgViewStyled>
      <InfoStyled>
        <Text variant={TextVariantTagName.h1} fontWeight={FontWeight.bold}>
          {card.name}
        </Text>
        <DescriptionStyled>
          <Text variant={TextVariantTagName.h2}>{card.description}</Text>
        </DescriptionStyled>
        <SizesStyled>
          {card.sizes.map((size) => (
            <ButtonSizeStyled
              key={size}
              onClick={() => changeActiveIndex(size)}
              variant={size === activeSize ? ButtonVariant.default : ButtonVariant.secondary}
            >
              {size}
            </ButtonSizeStyled>
          ))}
        </SizesStyled>
        <Text fontWeight={FontWeight.bold}>{card.price}</Text>
        <ButtonStyled onClick={addProductToBasket}>{product.button}</ButtonStyled>
      </InfoStyled>
    </ViewStyled>
  );
};
