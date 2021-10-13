import {
  BasketAction,
  BasketActionTypes,
  BasketState,
} from 'src/store/reducers/basketReducer/interfaces';

const initialState: BasketState = {
  productQuantity: 0,
  totalPrice: 0,
  basketOrders: [],
  orderNumber: '',
  error: '',
};

export const basketReducer = (state = initialState, action: BasketAction): BasketState => {
  switch (action.type) {
    case BasketActionTypes.SET_PRODUCT_COUNT:
      return { ...state, productQuantity: action.payload };
    case BasketActionTypes.SET_TOTAL_PRICE:
      return { ...state, totalPrice: action.payload };
    case BasketActionTypes.SET_BASKET_ORDER:
      return { ...state, basketOrders: action.payload };
    case BasketActionTypes.SET_ORDER_NUMBER:
      return { ...state, orderNumber: action.payload };
    case BasketActionTypes.SET_ORDER_ERROR:
      return { ...state, error: action.payload };
    case BasketActionTypes.ORDER_PRODUCTS:
      return state;
    default:
      return state;
  }
};
