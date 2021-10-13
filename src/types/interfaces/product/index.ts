import { ProductSize } from 'src/types/enums';

export interface ProductWithPaginationInfo {
  count: number;
  page: number;
  pageCount: number;
  total: number;
  data: Product[];
}

export interface Product {
  id: number;
  model: string;
  name: string;
  image: string;
  price: string;
  special: string;
  priceInCents: number;
  specialInCents: number;
  description: string;
  sizes: ProductSize[];
}
