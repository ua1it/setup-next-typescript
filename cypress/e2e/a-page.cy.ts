// a-page 테스트
describe('a-page Test', () => {
  it('Should render the page with the correct text and styles', () => {
    // 페이지를 방문합니다.
    cy.visit('/a-page');

    // 페이지에 "Hello, Next.js!" 텍스트가 나타나는지 확인합니다.
    cy.contains('Hello, Next.js!').should('be.visible');

    // 페이지 스타일을 확인합니다.
    cy.get('div.customWrapper').should('exist');
  });
});
