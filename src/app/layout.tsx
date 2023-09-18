// layout.tsx
import React from 'react';
import './globals.css';
import StyledJsxRegistry from './registry';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <StyledJsxRegistry>{children}</StyledJsxRegistry>
      </body>
    </html>
  );
}
