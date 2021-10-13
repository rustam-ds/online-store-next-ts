import type { GetServerSideProps, NextPage } from 'next';
import { ErrorBoundary } from 'src/hocs/ErrorBoundary';
import { Product } from 'src/components/Product';
import { productService } from 'src/api/products';
import { useActions } from 'src/hooks/useActions';
import { Product as IProduct } from 'src/types/interfaces/product';
import { HeadSeo } from 'src/hocs/HeadSeo';
import { useLocales } from 'src/hooks/useLocales';

interface Props {
  product: IProduct;
}

const ProductPage: NextPage<Props> = ({ product }) => {
  const { setProduct } = useActions();
  const {
    components: { seo },
  } = useLocales();

  setProduct(product);

  return (
    <HeadSeo title={seo.product.title} description={seo.product.description}>
      <ErrorBoundary>
        <Product />
      </ErrorBoundary>
    </HeadSeo>
  );
};

export default ProductPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const response = await productService.getProduct(params?.productId as string);

  return {
    props: {
      product: response.data,
    },
  };
};
