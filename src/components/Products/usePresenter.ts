import { useAppSelector } from 'src/hooks/useAppSelector';

export const usePresenter = () => {
  const { products } = useAppSelector((state) => state.products);

  return {
    cards: products.data,
  };
};
