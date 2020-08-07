describe('Tuin List tests', function () {
    beforeEach(function () {
      cy.login();
    });
  
    it('delayed response brings state out of sync', () => {
      cy.server();
      cy.route({
        method: 'GET',
        url: '/api/tuinen',
        status: 200,
        response: 'fixture:tuinen.json'
      });
      cy.route({
        delay: 2000,
        method: 'GET',
        url: '/api/tuinen/?naam=rode',
        status: 200,
        response: 'fixture:spaghetti.json'
      }).as('getRODEtuinen');
    });
  });