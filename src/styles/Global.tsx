import styled from 'styled-components';
// import { Global, css } from '@emotion/react';
//
// const style = css`
//   html,
//   body {
//     margin: 0;
//     padding: 0;
//     font-size: 30px;
//     background-color: black;
//     color: white;
//   }
// `;
//
// function GlobalStyle() {
//   return <Global styles={style} />;
// }
//
// export default GlobalStyle;
// styled-component
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f8faff;
`;

export const Wrapper = styled.div`
  /* 전체 적용 스타일 */
  height: 100%;
  background-color: white;

  /* 핸드폰 */
  @media screen and (max-width: 768px) {
    width: 100%;
  }

  /* 태블릿 */
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    width: 50%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  /* 데스크탑 */
  @media screen and (min-width: 1025px) {
    width: 30%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;
