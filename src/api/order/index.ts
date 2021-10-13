import { api } from 'src/api';
import { OrderProductsDto } from 'src/api/order/dto/OrderProductsDto';

export const orderService = {
  orderProducts: (data: OrderProductsDto[]) => api.post(`checkout/placeOrder`, { products: data }),
};
