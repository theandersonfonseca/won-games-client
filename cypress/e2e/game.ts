/// <reference path="../support/index.d.ts" />

describe('Game Page', () => {
  it('should render game page sections', () => {
    cy.visit('/game/no-mans-sky')

    cy.getByDataCy('game-info').within(() => {
      cy.findByRole('heading', { name: /no man's sky/i }).should('exist')
      cy.findByText(/^Inspired by the adventure and imagination that we love from classic science-fiction/i).should('exist')
      cy.findByText('$64.99').should('exist')
      cy.findByRole('button', { name: /add to cart/i }).should('exist')
    })

    // gallery
    cy.findAllByRole('button', { name: /thumb \-/i }).should('have.length.gt', 0)

     // content
     cy.getByDataCy('content').within(() => {
      cy.findByRole('heading', { name: /description/i }).should('exist')
    })

    cy.getByDataCy('content').children().should('have.length.at.least', 2)
  });
});
