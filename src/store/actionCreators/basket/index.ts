import {
  BasketAction,
  BasketActionTypes,
  BasketOrder,
} from 'src/store/reducers/basketReducer/interfaces';
import { Dispatch } from 'react';
import { orderService } from 'src/api/order';
import { OrderProductsDto } from 'src/api/order/dto/OrderProductsDto';
import { AxiosResponse } from 'axios';

export const setProductCount = (count: number): BasketAction => ({
  type: BasketActionTypes.SET_PRODUCT_COUNT,
  payload: count,
});

export const setTotalPrice = (price: number): BasketAction => ({
  type: BasketActionTypes.SET_TOTAL_PRICE,
  payload: price,
});

export const setBasketOrder = (products: BasketOrder[]): BasketAction => ({
  type: BasketActionTypes.SET_BASKET_ORDER,
  payload: products,
});

export const orderProducts = (data: OrderProductsDto[]) => {
  return async (dispatch: Dispatch<BasketAction>) => {
    try {
      const response = await orderService.orderProducts(data);
      dispatch(setBasketOrder([]));
      dispatch(setProductCount(0));
      dispatch(setTotalPrice(0));
      // @ts-ignore
      dispatch(setOrderNumber(response.data.orderId));
    } catch (err) {
      dispatch(orderProductsError('Произошла ошибка'));
    }
  };
};

export const setOrderNumber = (orderNumber: string): BasketAction => ({
  type: BasketActionTypes.SET_ORDER_NUMBER,
  payload: orderNumber,
});

export const orderProductsError = (error: string): BasketAction => ({
  type: BasketActionTypes.SET_ORDER_ERROR,
  payload: error,
});
