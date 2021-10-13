import { useAppSelector } from 'src/hooks/useAppSelector';

export const usePresenter = () => {
  const { productQuantity } = useAppSelector((state) => state.basket);

  return {
    count: productQuantity,
  };
};
