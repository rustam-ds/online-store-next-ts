import React from 'react';
import { NextPage } from 'next';
import { Text } from 'src/components/common/UI/Text';
import { Button } from 'src/components/common/UI/Button';
import { Props } from './interfaces';
import { usePresenter } from './usePresenter';
import { ButtonViewStyled, ItemStyled, ListStyled, TextViewStyled, ViewStyled } from './styled';
import { Color, FontWeight, TextVariantTagName } from 'src/types/enums';
import { useLocales } from 'src/hooks/useLocales';

export const Basket: NextPage<Props> = () => {
  const { orderNumber, orders, totalPrice, makeOrder } = usePresenter();
  const {
    components: { basket },
  } = useLocales();

  if (orderNumber) {
    return (
      <ViewStyled>
        <Text variant={TextVariantTagName.h1}>
          {basket.order.description}: {orderNumber}
        </Text>
      </ViewStyled>
    );
  }

  if (!orders.length) {
    return (
      <ViewStyled>
        <Text variant={TextVariantTagName.h1}>{basket.emptyBasket}</Text>
      </ViewStyled>
    );
  }

  return (
    <ViewStyled>
      <Text variant={TextVariantTagName.h1} fontWeight={FontWeight.bold}>
        {basket.title}
      </Text>
      <ListStyled>
        {orders.map((order) => (
          <ItemStyled key={order.id}>
            <TextViewStyled>
              <Text variant={TextVariantTagName.p} color={Color.secondary}>
                {basket.order.title}
              </Text>
              <Text variant={TextVariantTagName.h3} fontWeight={FontWeight.bold}>
                {order.name}
              </Text>
            </TextViewStyled>
            <TextViewStyled>
              <Text variant={TextVariantTagName.p} color={Color.secondary}>
                {basket.order.price}
              </Text>
              <Text variant={TextVariantTagName.h3} fontWeight={FontWeight.bold}>
                {order.price}
              </Text>
            </TextViewStyled>
            <TextViewStyled>
              <Text variant={TextVariantTagName.p} color={Color.secondary}>
                {basket.order.totalPrice}
              </Text>
              <Text variant={TextVariantTagName.h3} fontWeight={FontWeight.bold}>
                ${order.totalPrice}
              </Text>
            </TextViewStyled>
            <TextViewStyled>
              <Text variant={TextVariantTagName.p} color={Color.secondary}>
                {basket.order.quantity}
              </Text>
              <Text variant={TextVariantTagName.h3} fontWeight={FontWeight.bold}>
                {order.quantity}
              </Text>
            </TextViewStyled>
          </ItemStyled>
        ))}
      </ListStyled>
      <ButtonViewStyled>
        <TextViewStyled>
          <Text variant={TextVariantTagName.p}>{basket.totalPrice}</Text>
          <Text variant={TextVariantTagName.h2} fontWeight={FontWeight.bold}>
            ${totalPrice}
          </Text>
        </TextViewStyled>
        <Button onClick={makeOrder}>{basket.buttonText}</Button>
      </ButtonViewStyled>
    </ViewStyled>
  );
};
