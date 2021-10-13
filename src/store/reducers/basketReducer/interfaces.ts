export interface BasketOrder {
  id: number;
  name: string;
  price: string;
  totalPrice: number;
  quantity: number;
  size: string;
}

export interface BasketState {
  productQuantity: number;
  totalPrice: number;
  basketOrders: BasketOrder[];
  orderNumber: string;
  error: string;
}

export enum BasketActionTypes {
  SET_PRODUCT_COUNT = 'SET_PRODUCT_COUNT',
  SET_TOTAL_PRICE = 'SET_TOTAL_PRICE',
  SET_BASKET_ORDER = 'SET_BASKET_ORDER',
  ORDER_PRODUCTS = 'ORDER_PRODUCTS',
  SET_ORDER_NUMBER = 'SET_ORDER_NUMBER',
  SET_ORDER_ERROR = 'SET_ORDER_ERROR',
}

export interface SetProductCount {
  type: BasketActionTypes.SET_PRODUCT_COUNT;
  payload: number;
}

export interface SetTotalPrice {
  type: BasketActionTypes.SET_TOTAL_PRICE;
  payload: number;
}

export interface SetBasketOrder {
  type: BasketActionTypes.SET_BASKET_ORDER;
  payload: BasketOrder[];
}

export interface SetOrderNumber {
  type: BasketActionTypes.SET_ORDER_NUMBER;
  payload: string;
}

export interface OrderProductsError {
  type: BasketActionTypes.SET_ORDER_ERROR;
  payload: string;
}

export interface OrderProducts {
  type: BasketActionTypes.ORDER_PRODUCTS;
}

export type BasketAction =
  | SetProductCount
  | SetBasketOrder
  | SetTotalPrice
  | OrderProducts
  | SetOrderNumber
  | OrderProductsError;
