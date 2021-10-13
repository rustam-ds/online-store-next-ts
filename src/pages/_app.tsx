import type { AppProps } from 'next/app';
import { ThemeProvider, vars } from 'src/theme';
import { Layout } from 'src/hocs/Layout';
import { Provider } from 'react-redux';

import { GlobalStyle } from 'src/theme/GlobalStyle';
import { store } from 'src/store';

const Providers = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={vars}>
    <GlobalStyle />
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  </ThemeProvider>
);

export default Providers;
