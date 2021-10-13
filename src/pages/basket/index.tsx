import type { NextPage } from 'next';
import { HeadSeo } from 'src/hocs/HeadSeo';
import { ErrorBoundary } from 'src/hocs/ErrorBoundary';
import { Basket } from 'src/components/Basket';
import { useLocales } from 'src/hooks/useLocales';

const BasketPage: NextPage = () => {
  const {
    components: { seo },
  } = useLocales();

  return (
    <HeadSeo title={seo.basket.title} description={seo.basket.description}>
      <ErrorBoundary>
        <Basket />
      </ErrorBoundary>
    </HeadSeo>
  );
};

export default BasketPage;
