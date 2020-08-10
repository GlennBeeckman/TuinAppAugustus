context('Front-End - Element - attribute testen', () => {
    beforeEach('Visit TuinApp', () => {
        cy.login();
        cy.visit('/tuin/list');        
    });
    it('add tuin button disabled', () => {
        cy.get('[data-cy=AddTuinButton]').should('be.disabled');
    });
    it('Test van filter', () => {
        cy.get('[data-cy=filterInput]').type('ro');
        cy.get('[data-cy=tuinCard]').should('have.length', 1);
    });
    it('Test formulier', () => {
        cy.server();
        cy.route({
            method: 'GET',
            url: '/api/tuinen',
            status: 200,
            response: 'fixture:tuinen.json'
        });
        cy.visit('/tuin/list');
        cy.get('[data-cy=tuinCard]').should('have.length', 3);
        //formulier invullen
        cy.get('[data-cy=tuinNaamInput]').type('tuin3');
        cy.get('[data-cy=plantNaamInput]').type('plant1');
        cy.get('[data-cy=plantDatumInput]').type('2020-02-07T18:25:43.511Z');
        cy.get('[data-cy=plantDagenTotOogstInput]').type('100');
        //klikken op knop
        cy.get('[data-cy=AddTuinButton]').click();
        //filteren op nieuwe naam en controleren op output
        cy.get('[data-cy=filterInput]').type('tuin3');
        cy.get('[data-cy=tuinCard]').should('have.length', 3);        
    })
});

context('Back-End tests tuinen', () => {
    beforeEach('Visit TuinApp', () => {
        cy.login();
        cy.visit('/tuin/list');        
    });
    it('Mock tuin get', () => {
        cy.server();
        cy.route({
            method: 'GET',
            url: '/api/tuinen',
            status: 200,
            response: 'fixture:tuinen.json'
        });
        cy.visit('/tuin/list');
        cy.get('[data-cy=tuinCard]').should('have.length', 3);
    });
    it('on error, show error message', () => {
        cy.server();
        cy.route({
            method: 'GET',
            url: '/api/tuinen',
            status: 500,
            response: 'ERROR'
        });
        cy.visit('/tuin/list');
        cy.get('[data-cy=appError]').should('be.visible');        
    });
});

context('Back-End tests planten', () => {
    it('Mock plant get', () => {
        cy.server();
        cy.route({
            method: 'GET',
            url: '/api/tuinen',
            status: 200,
            response: 'fixture:tuinen.json'
        });
        cy.login();
        cy.visit('/tuin/list');
        cy.get('[data-cy=plantList]').should('have.length', 3);
    });
});

context('Back-End tests omgeving', () => {
    beforeEach('Visit TuinApp', () => {
        cy.login();
        cy.visit('/tuin/omgeving');        
    });
    it('Omgevingen get', () => {
        cy.server();
        cy.route({
            method: 'GET',
            url: '/api/omgeving',
            status: 200,
            response: 'fixture:omgevingen.json'
        });
        cy.visit('/tuin/omgeving');
        cy.get('[data-cy=omgDiv]').should('have.length', 1);
    });
});


