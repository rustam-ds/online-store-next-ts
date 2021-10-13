import { useAppSelector } from 'src/hooks/useAppSelector';
import { useActions } from 'src/hooks/useActions';

export const usePresenter = () => {
  const { basketOrders, totalPrice, orderNumber } = useAppSelector((state) => state.basket);
  const { orderProducts } = useActions();

  const makeOrder = () => {
    const orders = basketOrders.map((order) => ({
      id: order.id,
      size: order.size,
    }));

    orderProducts(orders);
  };

  return {
    orderNumber,
    orders: basketOrders,
    totalPrice,
    makeOrder,
  };
};
