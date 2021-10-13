import { ProductsAction, ProductsActionTypes, ProductsState } from './interfaces';
import { Product, ProductWithPaginationInfo } from 'src/types/interfaces/product';

export const initialProducts: ProductWithPaginationInfo = {
  data: [],
  count: 0,
  page: 1,
  pageCount: 0,
  total: 0,
};

export const initialProduct: Product = {
  id: 0,
  model: '',
  name: '',
  image: '',
  price: '',
  special: '',
  priceInCents: 0,
  specialInCents: 0,
  description: '',
  sizes: [],
};

const initialState: ProductsState = {
  products: initialProducts,
  product: initialProduct,
  error: '',
};

export const productsReducer = (state = initialState, action: ProductsAction): ProductsState => {
  switch (action.type) {
    case ProductsActionTypes.FETCH_PRODUCTS:
      return { ...state, products: action.payload };
    case ProductsActionTypes.SET_PRODUCTS:
      return { ...state, products: action.payload };
    case ProductsActionTypes.SET_PRODUCT:
      return { ...state, product: action.payload };
    case ProductsActionTypes.SET_PRODUCTS_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
