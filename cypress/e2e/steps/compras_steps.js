import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que eu acesso a pagina de login do e-commerce", () => {
  cy.visit("/login");
});

When("eu realizo o login com o email {string} e senha {string}", (email, senha) => {
  cy.get('[data-qa="login-email"]').type(email);
  cy.get('[data-qa="login-password"]').type(senha);
  cy.get('[data-qa="login-button"]').click();
  
  cy.contains("Logged in as").should("be.visible");
});

When("eu busco pelo produto {string}", (produto) => {
  // Acessamos a rota direto para evitar cliques interceptados na barra superior
  cy.visit("/products"); 
  cy.get("#search_product").type(produto);
  cy.get("#submit_search").click();
  cy.contains("Searched Products").should("be.visible");
});

When("eu incluo o produto no carrinho", () => {
  // Rola a tela até o produto da busca para garantir que ele foi renderizado
  cy.get('.choose a').first().scrollIntoView().should('be.visible').click({ force: true });
  
  // Rola até o botão de adicionar no carrinho e clica
  cy.get('button.cart').scrollIntoView().should('be.visible').click({ force: true });
  
  // Espera a confirmação
  cy.contains("Your product has been added to cart.", { timeout: 10000 }).should('be.visible');
  
  cy.visit("/view_cart");
});

Then("eu devo visualizar o produto {string} na tela de pagamento", (produto) => {
  // 1. Validação na tela de Carrinho
  cy.get("#cart_info_table", { timeout: 10000 })
    .scrollIntoView()
    .should("be.visible")
    .and("contain", produto);
  
  // 2. Clica no botão para avançar
  cy.get(".check_out").scrollIntoView().click({ force: true });
  
  // 3. Validação na tela de Checkout (AQUI ESTÁ A CORREÇÃO)
  // Usamos apenas '#cart_info', que é o container que existe nessa tela específica
  cy.get("#cart_info", { timeout: 10000 })
    .scrollIntoView()
    .should("be.visible")
    .and("contain", produto);
    
  // Valida a presença do título da etapa final
  cy.contains("Review Your Order").scrollIntoView().should("be.visible");
});