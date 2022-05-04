# Real World Testing with Cypress TodoMVC

This application is part of the Testing Your First Application Course in the Real World Testing with Cypress Curriculum.


## notes about this course by Nicolas. 

These are notes about the whole course made about course found in https://learn.cypress.io/ and I decided to start on May 2, 2022

------------------ First lesson ------------------ 
### 1.TodoMVC App Install & Overview

The repo we are using for this course is located at:
https://github.com/cypress-io/cypress-realworld-testing-todomvc

In order to start with it, we can clone it with this command
git clone git@github.com:cypress-io/cypress-realworld-testing-todomvc.git

This is the best option to get a copy downloaded in your computer, however, in this course are other options to have it localy.

As this project uses Yarn to manage the dependences, it needs to be installed in order to make it work. 

It can be installing using this command in opur terminal 
npm install -g yarn

And all the dependences will be installed using 
yarn install

And you should be able to open this application now. It is a todo list app. 

------------------ Second lesson ------------------ 
### 2.Installing Cypress and writing our first test

Our file to start test will be practice.spect.js
At the beginning, the function describe () allow us to organize the test we are creating. This will contain the name of the test

describe("name_of_the_testst", () => {})

then we will create a function it() that contains the code/script to test the feature. Here we can add a short description about we are testing

describe("name_of_the_test", () => {
    it("short_description", () => {})
})

By now, we have the basic structure to run our test, however, we need to locate the address where we are testing. and we will do it with the cy.visit() method and this will tell to our test where se can start to interact.

describe("name_of_the_test", () => {
    it("short_description", () => {
        cy.vist("http://localhost:8888")
    })
})

Done! We have the test, where to add the first test and where to get it, now we need to start to provide instructions to cypress

In order to provide this instruction, we will tell to cypress the tag to interact with this feature with the cy.get method, and then the instructions that will be applied. For example, we can use .type or .should

describe("name_of_the_test", () => {
    it("short_description", () => {
        cy.vist("http://localhost:8888")
        cy.get(".new-todo").type("Buy Milk{enter}")
    })
})

The result of this action is write "Buy Milk" in the input with the class "new-todo" and then press {enter}. The whole action is in one line of code. And we can add all the instructions we want for one test.


describe("second test", () => {
    it("adds two todos to the list", () => {
        cy.visit("http://localhost:8888")
        cy.get(".new-todo").type("Buy Milk{enter}")
        cy.get(".new-todo").type("Buy Bread{enter}")
        cy.get(".todo-list li").should("have.length", 2)
    })
})

There is another option to reduce the amount of lines while we code as you can see here: 

describe("second test", () => {
    it("adds two todos to the list", () => {
        cy.visit("http://localhost:8888")
        cy.get(".new-todo").type("Buy snacks{enter}").type("Pay rent{enter}")//another option to write the code
        cy.get(".todo-list li").should("have.length", 2)
    }) 
}) 

The .should method will confirm what we should see. In this situatiuon, there should be 2 elements in our array. If there is a different result, we will see an error. 

------------------ Third lesson ------------------ 
### 3.Setting up Data Before Each Test

It's important to confirm that every it() function is a diferent test

beforeEach() is a function provided by Mocha, and it can allow us to make sure don't repeat cy.visit() method at any test. 

describe("React TodoMVC", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8888")
  })

  it("adds a single todo", () => {
    cy.get(".new-todo").type("Buy Milk{enter}")
    cy.get(".todo-list li").should("have.length", 1)
  })

  it("adds three todos", () => {})
})

This way you can run the location and then the actions you want to run on the app, however, we can repeat our self several times. Instead of having to manually type out and hard code each and every todo, we can simply put them into a variable. 

Remember, Cypress is just JavaScript, so let's refactor the names of our todos into constants so we can easily re-use them.

We will create variables at the top of our test, just underneath the describe() block.

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
  })
})

Now. we will try to confirm that any todo is going to have the same value/characters the user added. We will need to get it from the label from the element and then use .ep() to catch the first element we need. We will see it in our test "counting todos"

cy.get(".todo-list li").eq(0)

We then pass .eq() the index of our element, which should be the first one, and it will return that element from the array.

Then we will use the find() method to find our <label> element. Finally, we want to make sure that the <label> contains the text of our todo item.

cy.get(".todo-list li").eq(0).find("label").should("contain", TODO_ITEM_ONE)

So, we get the the element with .get() method, select the first element with .ep(0), .find() the lable and make sure to check if the todo is the same as our variable with .should("contain", variable_name)

------------------ Four lesson ------------------
### 4. How to use Cypress Commands

In cypress, we can create commands in order to optimize our work flow and we can customize it. This way we can ake portions of our code re-usable

The command we will use in order to create new commands is 

Cypress.Commands.add("createDefaultTodos", () => {})

There we will be able to add variables and actions

Cypress.Commands.add("createDefaultTodos", () => {
  const TODO_ITEM_ONE = "Buy Milk"
  const TODO_ITEM_TWO = "Pay Rent"
  const TODO_ITEM_THREE = "Pickup Dry Cleaning"

  cy.get(".new-todo")
    .type(`${TODO_ITEM_ONE}{enter}`)
    .type(`${TODO_ITEM_TWO}{enter}`)
    .type(`${TODO_ITEM_THREE}{enter}`)
})

Once we have our command set up, se can include it in our list of test like 

it("adds three todos", () => {
  cy.createDefaultTodos()
  cy.get(".todo-list li").should("have.length", 3)
})

The final code would be:

describe ("testing comands", () => {
  
  beforeEach(() => {
    cy.visit("http://localhost:8888")
    })

  it("adds three todos", () => {
    cy.createDefaultTodos()
    cy.get(".todo-list li").should("have.length", 3)
  })
})

Is important to make sure we have add the source in order to 

.Now we will confirm that all the new elements are going to be added to the buttom of this array. 

We can start the new todos with the command we just created. 

