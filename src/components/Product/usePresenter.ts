import { useEffect, useState } from 'react';
import { useActions } from 'src/hooks/useActions';
import { useAppSelector } from 'src/hooks/useAppSelector';
import { BasketOrder } from 'src/store/reducers/basketReducer/interfaces';
import { ProductSize } from 'src/types/enums';

export const usePresenter = () => {
  const { product } = useAppSelector((state) => state.products);
  const { basketOrders } = useAppSelector((state) => state.basket);
  const [activeSize, setActiveSize] = useState(ProductSize.small);
  const { setBasketOrder, setProductCount, setTotalPrice } = useActions();

  useEffect(() => {
    const result = basketOrders.reduce(
      (acc: { count: number; totalPrice: number }, cur: BasketOrder) => {
        acc = {
          count: (acc.count += cur.quantity),
          totalPrice: (acc.totalPrice += cur.totalPrice),
        };

        return acc;
      },
      {
        count: 0,
        totalPrice: 0,
      },
    );

    setProductCount(result.count);
    setTotalPrice(result.totalPrice);
  }, [basketOrders]);

  const changeActiveIndex = (productSize: ProductSize) => setActiveSize(productSize);

  const determineProducts = (basketOrders: BasketOrder[]) => {
    const orders = [...basketOrders];
    const order = orders.find((basket) => basket.id === product.id);

    if (order) {
      order.totalPrice += Number(product.price.slice(1));
      order.quantity += 1;

      return orders;
    } else {
      const order: BasketOrder = {
        id: Number(product.id),
        name: product.name,
        price: product.price,
        totalPrice: Number(product.price.slice(1)),
        quantity: 1,
        size: activeSize,
      };
      return [...basketOrders, order];
    }
  };

  const addProductToBasket = () => {
    if (basketOrders.length) {
      setBasketOrder(determineProducts(basketOrders));
    } else {
      const order: BasketOrder = {
        id: Number(product.id),
        name: product.name,
        price: product.price,
        totalPrice: Number(product.price.slice(1)),
        quantity: 1,
        size: activeSize,
      };
      setBasketOrder([order]);
    }
  };

  return {
    activeSize,
    card: product,
    changeActiveIndex,
    addProductToBasket,
  };
};
