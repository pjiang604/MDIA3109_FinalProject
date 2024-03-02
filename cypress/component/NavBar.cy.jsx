import NavBar from '../../src/components/navigation/NavBar';

describe('NavBar.cy.jsx', () => {
  it('should contain Home', () => {
      cy.mount(<NavBar />)
      cy.contains('Home');
  })
})