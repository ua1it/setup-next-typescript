import { AppProps } from 'next/dist/shared/lib/router/router';
import { RecoilRoot } from 'recoil';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
