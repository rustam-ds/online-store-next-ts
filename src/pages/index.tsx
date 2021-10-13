import type { NextPage } from 'next';
import { ErrorBoundary } from 'src/hocs/ErrorBoundary';
import { Products } from 'src/components/Products';
import { productService } from 'src/api/products';
import { useActions } from 'src/hooks/useActions';
import { ProductWithPaginationInfo } from 'src/types/interfaces/product';
import { HeadSeo } from 'src/hocs/HeadSeo';
import { useLocales } from 'src/hooks/useLocales';
import { GetServerSideProps } from 'next';

export interface Props {
  products: ProductWithPaginationInfo;
}

const ProductsPage: NextPage<Props> = ({ products }) => {
  const { setProducts } = useActions();
  const {
    components: { seo },
  } = useLocales();

  setProducts(products);

  return (
    <HeadSeo title={seo.products.title} description={seo.products.description}>
      <ErrorBoundary>
        <Products />
      </ErrorBoundary>
    </HeadSeo>
  );
};

export default ProductsPage;

export const getServerSideProps: GetServerSideProps = async ({ query: { page = 1 } }) => {
  const response = await productService.getProducts(page as string);

  return {
    props: {
      products: response.data,
    },
  };
};
