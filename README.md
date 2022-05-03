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

It's important to confirm that every it() function is a diferrent test