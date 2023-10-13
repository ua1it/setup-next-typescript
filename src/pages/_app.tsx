import { AppProps } from 'next/dist/shared/lib/router/router';
import RootLayout from '@/components/layout';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import GlobalStyle, { Wrapper, Container } from '@/styles/Global';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Container>
        <Wrapper>
          {/* <GlobalStyle /> */}
          <Component {...pageProps} />
        </Wrapper>
      </Container>
    </RecoilRoot>
  );
}
