// main page 테스트
describe('Main Page Test', () => {
  it('Should render the page with the correct text and styles', () => {
    // 페이지를 방문합니다.
    cy.visit('');

    // 페이지에 "Hello, Next.js!" 텍스트가 나타나는지 확인합니다.
    cy.contains('홈으로 돌아가기').should('be.visible');
  });
});
