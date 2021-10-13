import { api } from 'src/api';
import { Product, ProductWithPaginationInfo } from 'src/types/interfaces/product';

export const productService = {
  getProducts: (page: string) =>
    api.get<ProductWithPaginationInfo>('product', { params: { page } }),
  getProduct: (productId: string) => api.get<Product>(`product/${productId}`),
};
