import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

// Variável global para armazenar a resposta da API e usá-la nos próximos passos
let responseAPI;

Given("que eu envio uma requisicao GET para a API do Trello", () => {
  // O cy.request faz a chamada HTTP direto pelo Cypress
  cy.request({
    method: 'GET',
    url: 'https://api.trello.com/1/actions/592f11060f95a3d3d46a987a',
    failOnStatusCode: false // Impede que o teste quebre automaticamente se a API estiver fora
  }).then((res) => {
    responseAPI = res;
  });
});

Then("o status code da resposta deve ser {int}", (statusCode) => {
  // Valida se o servidor retornou o status esperado (ex: 200)
  expect(responseAPI.status).to.eq(statusCode);
});

Then("o conteudo do campo {string} da estrutura {string} deve ser exibido e validado", (campo, estrutura) => {
  // Acessa o caminho do JSON retornado pela API: body.data.list.name
  const conteudoDoCampo = responseAPI.body.data[estrutura][campo];
  
  // Exibe o valor no painel lateral esquerdo do Cypress (console)
  cy.log(`**Conteúdo encontrado no Trello:** O campo '${campo}' da estrutura '${estrutura}' é: ${conteudoDoCampo}`);
  
  // Valida que o campo realmente existe e não veio vazio
  expect(conteudoDoCampo).to.not.be.undefined;
  expect(conteudoDoCampo).to.not.be.null;
});