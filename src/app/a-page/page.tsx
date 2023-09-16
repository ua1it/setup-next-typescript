'use client';

import styled from 'styled-components';

const Wrapper = styled.div`
  &.customWrapper {
    background-color: black;
    color: white;
  }
`;
export default function Page() {
  return <Wrapper className="customWrapper">Hello, Next.js!</Wrapper>;
}
