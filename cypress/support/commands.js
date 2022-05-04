Cypress.Commands.add("createDefaultTodos", () => {
    const TODO_ITEM_ONE = "Buy Milk"
    const TODO_ITEM_TWO = "Pay Rent"
    const TODO_ITEM_THREE = "Pickup Dry Cleaning"
  
    beforeEach(() => {
        cy.visit("http://localhost:8888")
        })
        
    cy.get(".new-todo")
      .type(`${TODO_ITEM_ONE}{enter}`)
      .type(`${TODO_ITEM_TWO}{enter}`)
      .type(`${TODO_ITEM_THREE}{enter}`)
  })
  
