import { Product, ProductWithPaginationInfo } from 'src/types/interfaces/product';

export interface ProductsState {
  products: ProductWithPaginationInfo;
  product: Product;
  error: string;
}

export enum ProductsActionTypes {
  FETCH_PRODUCTS = 'FETCH_PRODUCTS',
  SET_PRODUCTS = 'SET_PRODUCTS',
  SET_PRODUCT = 'SET_PRODUCT',
  SET_PRODUCTS_ERROR = 'SET_PRODUCTS_ERROR',
}

interface FetchProducts {
  type: ProductsActionTypes.FETCH_PRODUCTS;
  payload: ProductWithPaginationInfo;
}

interface SetProducts {
  type: ProductsActionTypes.SET_PRODUCTS;
  payload: ProductWithPaginationInfo;
}

interface SetProduct {
  type: ProductsActionTypes.SET_PRODUCT;
  payload: Product;
}

export interface SetProductsError {
  type: ProductsActionTypes.SET_PRODUCTS_ERROR;
  payload: string;
}

export type ProductsAction = FetchProducts | SetProducts | SetProduct | SetProductsError;
