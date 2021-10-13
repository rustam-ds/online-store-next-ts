import * as BasketActionCreators from './basket';
import * as ProductsActionCreators from './products';

export default {
  ...BasketActionCreators,
  ...ProductsActionCreators,
};
