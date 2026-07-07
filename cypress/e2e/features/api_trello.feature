Feature: Validacao da API do Trello
  Como um avaliador técnico
  Quero enviar uma requisicao para a API do Trello
  Para validar o status da resposta e o nome da lista

  Scenario: Consultar acao no Trello e validar dados
    Given que eu envio uma requisicao GET para a API do Trello
    Then o status code da resposta deve ser 200
    And o conteudo do campo "name" da estrutura "list" deve ser exibido e validado