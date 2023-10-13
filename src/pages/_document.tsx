// pages/_document.js

import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
  render() {
    const CID = 'a52com5x1w'; // 네이버맵 API의 Client id
    return (
      <Html lang="ko">
        <Head>
          <Script
            strategy="beforeInteractive"
            src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${CID}`}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
