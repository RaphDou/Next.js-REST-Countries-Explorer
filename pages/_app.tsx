import { AppProps } from 'next/app';
import MyMenu from '../src/components/molecules/my-menu/my-menu';
import MyFooter from '../src/components/molecules/my-footer/my-footer';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <MyMenu />
      <Component {...pageProps} />
      <MyFooter />
    </>
  );
};

export default App;
