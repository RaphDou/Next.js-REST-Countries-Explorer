import { AppProps } from 'next/app';
import MyMenu from '../components/appbar/appbar';
import MyFooter from '../components/footer/footer';

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
