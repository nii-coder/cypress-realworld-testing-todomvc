describe("first test", () => {//funcion para organizar el test. Este sera el nombre del test
    it("adds a single todo", () => {//codigo para testear la app o el feature. Aqui podemos agregar una pequena descripcion del test.
        cy.visit("http://localhost:8888")//direccion donde obtiene la prueba
        cy.get(".new-todo").type("Buy Milk{enter}")//input para encontrar el elemento en el DOM que estamos testeando
        //.type es el contenido de nuestro input y {enter} es la accion del usuario. El comando de enter en cypress
        cy.get(".todo-list li").should("have.length", 1)
    }) 
  })

describe("second test", () => {
    it("adds two todos to the list", () => {
        cy.visit("http://localhost:8888")
        cy.get(".new-todo").type("Buy Milk{enter}")
        cy.get(".new-todo").type("Buy Bread{enter}")
        cy.get(".todo-list li").should("have.length", 2)//number 2 shows
        //the amount of elements this array should have. If it doesn't match the amount, there will be an error.
        //should, in other words, is the result expected. 
    }) 
}) 

describe("second test", () => {
    it("adds two todos to the list", () => {
        cy.visit("http://localhost:8888")
        cy.get(".new-todo").type("Buy snacks{enter}").type("Pay rent{enter}")//another option to write the code
        cy.get(".todo-list li").should("have.length", 2)
    }) 
}) 

describe("third test", () => {
    it("adds a single todo", () => {//every it function is a different test. 
      cy.visit("http://localhost:8888")
      cy.get(".new-todo").type("Buy Milk{enter}")
      cy.get(".todo-list li").should("have.length", 1)
    })
  })

describe("third test", () => {
    it("adds a single todo", () => {//every it function is a different test. 
      cy.visit("http://localhost:8888")
      cy.get(".new-todo").type("Buy Milk{enter}")
      cy.get(".todo-list li").should("have.length", 1)
    })
})

describe("trying beforeEach", () => {
    beforeEach(() => {
      cy.visit("http://localhost:8888")
    })
  
    it("adds a single todo", () => {
      cy.get(".new-todo").type("Buy Milk{enter}")
      cy.get(".todo-list li").should("have.length", 1)
    })
  
    it("adds three todos", () => {})

    it("adds three todos", () => {
        cy.get(".new-todo").type("Buy Milk{enter}")
        cy.get(".new-todo").type("Pay Rent{enter}")
        cy.get(".new-todo").type("Pickup Dry Cleaning{enter}")
      })
  })
  

  describe("React TodoMVC", () => {
    const TODO_ITEM_ONE = "Buy Milk"
    const TODO_ITEM_TWO = "Pay Rent"
    const TODO_ITEM_THREE = "Pickup Dry Cleaning"
  
    beforeEach(() => {
      cy.visit("http://localhost:8888")
    })
  
    it("adds a single todo", () => {
      cy.get(".new-todo").type(`${TODO_ITEM_ONE}{enter}`)
      cy.get(".todo-list li").should("have.length", 1)
    })
  
    it("adds three todos", () => {
      cy.get(".new-todo").type(`${TODO_ITEM_ONE}{enter}`)
      cy.get(".new-todo").type(`${TODO_ITEM_TWO}{enter}`)
      cy.get(".new-todo").type(`${TODO_ITEM_THREE}{enter}`)
      cy.get(".todo-list li").should("have.length", 3)
    })
  })

  describe("todos locos", () => {
    
      const TODO_ITEM_ONEs = "Buy Milk"
      const TODO_ITEM_TWOs = "Pay Rent"

    beforeEach(() => {
        cy.visit("http://localhost:8888")
      })
    it("counting todos", () => {
      cy.get(".new-todo").type(`${TODO_ITEM_ONEs}{enter}`)
      cy.get(".todo-list li").should("have.length", 1)
      cy.get(".todo-list li").eq(0).find("label").should("contain", TODO_ITEM_ONEs)
    })
  })  