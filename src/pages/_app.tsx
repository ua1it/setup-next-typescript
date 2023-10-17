import { AppProps } from 'next/dist/shared/lib/router/router';
import { RecoilRoot } from 'recoil';
import '../styles/globals.css';
import { Container, Wrapper } from '@/styles/styles';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Container>
        <Wrapper>
          <Component {...pageProps} />
        </Wrapper>
      </Container>
    </RecoilRoot>
  );
}
