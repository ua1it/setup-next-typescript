import { AppProps } from 'next/dist/shared/lib/router/router';
import { RecoilRoot } from 'recoil';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
