describe('Pool', () => {
  beforeEach(() => cy.visit('/pool'))
  it('add liquidity links to /add/OKB', () => {
    cy.get('#join-pool-button').click()
    cy.url().should('contain', '/add/v2/OKB')
  })
})
