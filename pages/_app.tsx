import { AppProps } from 'next/app';
import MyMenu from '@/components/molecules/my-menu/my-menu';
import MyFooter from '@/components/molecules/my-footer/my-footer';

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
