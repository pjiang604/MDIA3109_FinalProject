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

describe('Nav bar', () => {
    it('nav bar has icon images', () => {
        cy.visit('http://localhost:3000/home');
        cy.get('img').should('be.visible');
    })

    it('clicking on nav bar links/icons brings you to the respective page', () => {
        cy.visit('http://localhost:3000/home');
        cy.get('a[href*="/home"]').click();
        cy.get('h2').should('be.visible');
        cy.get('a[href*="/browse"]').click();
        cy.get('h3').should('contain', 'Past Searches');
        cy.get('a[href*="/allNeighbourhood"]').click();
        cy.get('img').should('be.visible');
        cy.get('a[href*="/playArt"]').click();
        cy.get('img').should('be.visible');
    })
})


describe('header nav', () => {
    it('header nav has h1', () => {
        cy.visit('http://localhost:3000/home');
        cy.get('h1').should('be.visible');
    })
})

describe('small playlist button', () => {
    it('small playlist component button is visible on all neighbourhoods playlist page', () => {
        cy.visit('http://localhost:3000/home');
        cy.get('a[href*="/allNeighbourhood"]').click();
        cy.get('h2').should('be.visible');
    })

    // it('clicking on small playlist component button brings user to playlist page', () => {
    //     cy.visit('http://localhost:3000/home');
    //     cy.get('a[href*="/allNeighbourhood"]').click();
    //     const area = 'Kitsilano';
    //     cy.get(`a[href*=/neighbourhood/${area}"]`).click();
    //     cy.get('img').should('be.visible');
    // })
})