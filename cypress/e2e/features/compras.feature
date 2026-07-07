Feature: Fluxo de Compras no E-commerce
  Como um cliente do e-commerce
  Quero conseguir buscar um produto e adicioná-lo ao carrinho
  Para que eu possa finalizar minha compra

  Scenario: Realizar login, buscar produto e validar no carrinho
    Given que eu acesso a pagina de login do e-commerce
    When eu realizo o login com o email "teste2021@teste.com.br" e senha "teste"
    And eu busco pelo produto "T-Shirt"
    And eu incluo o produto no carrinho
    Then eu devo visualizar o produto "T-Shirt" na tela de pagamento