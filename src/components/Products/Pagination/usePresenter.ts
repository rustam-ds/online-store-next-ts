import { useRouter } from 'next/router';
import { useAppSelector } from 'src/hooks/useAppSelector';

export const usePresenter = () => {
  const {
    products: { page, pageCount },
  } = useAppSelector((state) => state.products);
  const router = useRouter();

  const goToNextPage = () => router.push(`/?page=${page + 1}`);

  const goToPrevPage = () => router.push(`/?page=${page - 1}`);

  const isPrevButtonDisabled = page === 1;
  const isNextButtonDisabled = page === pageCount;

  return {
    page,
    isPrevButtonDisabled,
    isNextButtonDisabled,
    goToNextPage,
    goToPrevPage,
  };
};
