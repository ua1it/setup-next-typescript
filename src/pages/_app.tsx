import { AppProps } from 'next/dist/shared/lib/router/router';
import RootLayout from '@/components/layout';
import { RecoilRoot } from 'recoil';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </RecoilRoot>
  );
}
