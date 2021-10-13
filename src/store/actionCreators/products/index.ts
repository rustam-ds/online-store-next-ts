import { ProductsActionTypes } from 'src/store/reducers/productsReducer/interfaces';
import { Product, ProductWithPaginationInfo } from 'src/types/interfaces/product';

export const setProducts = (products: ProductWithPaginationInfo) => ({
  type: ProductsActionTypes.SET_PRODUCTS,
  payload: products,
});

export const setProduct = (product: Product) => ({
  type: ProductsActionTypes.SET_PRODUCT,
  payload: product,
});
