import { Container, Wrapper } from '../styles/styles';

export default function Home() {
  return (
    <Container>
      <Wrapper>this is Wrapper</Wrapper>
    </Container>
  );
}

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    naver: any;
  }
}
