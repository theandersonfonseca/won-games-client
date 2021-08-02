/// <reference path="../support/index.d.ts" />

describe('Game Page', () => {
  before(() => {
    cy.visit('/game/no-mans-sky')
  })

  it('should render game page sections', () => {
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

    // Details
    cy.getByDataCy('game-details').within(() => {
      cy.findByRole('heading', { name: /game details/i }).should('exist')
      cy.findByRole('heading', { name: /developer/i }).should('exist')
      cy.findByRole('heading', { name: /release date/i }).should('exist')
      cy.findByRole('heading', { name: /platforms/i }).should('exist')
      cy.findByRole('heading', { name: /publisher/i }).should('exist')
      cy.findByRole('heading', { name: /rating/i }).should('exist')
      cy.findByRole('heading', { name: /genres/i }).should('exist')

      cy.findAllByText(/hello games/i).should('have.length', 2)
      cy.findByText(/aug 10, 2016/i).should('exist')
      cy.findByRole('img', { name: /windows/i }).should('exist')
      cy.findByText(/free/i).should('exist')
      cy.findByText('Adventure / Sandbox / Action').should('exist')
    })

    cy.shouldRenderShowcase({ name: "Upcoming Games", highlight: true})
    cy.shouldRenderShowcase({ name: "You may like these games", highlight: false})

  });

  it('should add/remove game in cart', () => {
    cy.getByDataCy('game-info').within(() => {
      cy.findByRole('button', { name: /add to cart/i }).click()
      cy.findByRole('button', { name: /remove from cart/i }).should('exist')
    })

    cy.findAllByLabelText(/cart items/i)
      .first()
      .should('have.length', 1)
      .click()

    cy.getByDataCy('cart-list').within(() => {
      cy.findByRole('heading', { name: /no man's sky/i }).should('exist')
    })
  });
});
