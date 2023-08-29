describe('template spec', () => {
  it('Preenchimento do Formulário', () => {
    cy.visit('https://demo.automationtesting.in/Register.html');

    // Use cy.get() para encontrar elementos e aguardar até que eles estejam visíveis
    cy.get('[placeholder="First Name"]').type('Fabiano');
    cy.get('[placeholder="Last Name"]').type('Nogueira');
    cy.get('.col-md-8 > .form-control').type('Rua Felicidade 123');
    cy.get('#eid > .form-control').type('teste@example.com');
    cy.get(':nth-child(4) > .col-md-4 > .form-control').type('11982767380');
    cy.get('[value="Male"]').click();
    cy.get('#countries').select('Select Country'); 
    // Clique apenas se o elemento estiver visível e interagível
    cy.get(':nth-child(5) > .col-md-4 > :nth-child(1) > input').should('be.visible').click();
    cy.get('#firstpassword').type('Senha123');  
    cy.get('#secondpassword').type('Senha123'); 

    cy.get('#submitbtn').click();
    cy.screenshot('pagina_preenchida');

   
  })
});
