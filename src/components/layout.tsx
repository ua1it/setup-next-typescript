// layout.tsx
import React from 'react';
import StyledJsxRegistry from './registry';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <StyledJsxRegistry>{children}</StyledJsxRegistry>;
}

{/* <html lang="ko">
<body>
  <StyledJsxRegistry>{children}</StyledJsxRegistry>
</body>
</html> */}