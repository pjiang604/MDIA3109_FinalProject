describe('Home Page', () => {
    it('show h2 title on page', () => {
        cy.visit('http://localhost:3000/home');
        cy.get('h2').should('be.visible');
    })

})

describe('Log In Page', () => {
    it('log in page has an input box for both email and password', () => {
        cy.visit('http://localhost:3000/logIn');
        cy.get('input[type=email]').should('be.visible');
        cy.get('input[type=password').should('be.visible');
    })

    it('log in page has a sign in button', () => {
        cy.visit('http://localhost:3000/logIn');
        cy.get('button').should('contains.text', 'LOGIN');
    })
})

describe('Loading Page', () => {
    it('index (loading) page has loading dots', () => {
        cy.visit('http://localhost:3000');
        cy.get('.loading_dots').should('be.visible');
    })
})

describe('Nav bar', () => {
    it('nav bar has icon images', () => {
        cy.visit('http://localhost:3000/home')
    })
})