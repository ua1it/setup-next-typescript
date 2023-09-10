import Layout from "../components/Layout";
import "../styles/global.css";
import { AppProps } from 'next/dist/shared/lib/router/router'
import { RecoilRoot } from 'recoil';


export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}