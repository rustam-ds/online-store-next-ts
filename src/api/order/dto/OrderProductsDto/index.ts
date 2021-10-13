import { BasketOrder } from 'src/store/reducers/basketReducer/interfaces';

export interface OrderProductsDto extends Pick<BasketOrder, 'id' | 'size'> {}
