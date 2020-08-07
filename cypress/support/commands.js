
Cypress.Commands.add('login', () => {
    const email = 'tuinmaster@hogent.be';
  
    cy.request({
      method: 'POST',
      url: '/api/account',
      body: { email, password: 'P@ssword1234' },
    }).then((res) => localStorage.setItem('currentUser', res.body));
  });