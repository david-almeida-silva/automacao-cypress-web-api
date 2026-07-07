# 🚀 Framework de Automação de Testes - E-commerce & API (BDD)

Este projeto é um framework robusto de automação de testes de ponta a ponta (E2E) e de integração (API). Ele foi desenvolvido como um **desafio técnico** para demonstrar habilidades avançadas em Quality Assurance, arquitetura de testes e boas práticas de mercado.

O objetivo deste projeto é validar o fluxo completo de compras em uma plataforma de e-commerce simulada, além de garantir a integridade de respostas de serviços de backend (API REST).

## 🎯 Objetivos de Qualidade Atingidos
* Criação de cenários legíveis focados em negócio utilizando **BDD (Behavior-Driven Development)**.
* Sincronização avançada de estado da aplicação para evitar testes instáveis (*flakiness*).
* Interceptação de tráfego de rede e bloqueio de artefatos de terceiros (Google Ads) via configurações no motor de teste.
* Validação rigorosa de payloads e status codes de API.

## 🛠️ Tecnologias Utilizadas

* **Node.js:** Ambiente de execução.
* **Cypress:** Framework principal de automação (Web e API).
* **Cucumber:** Pré-processador para escrita e leitura de cenários em BDD.
* **JavaScript:** Linguagem de programação.

## 📁 Estrutura do Projeto

A arquitetura do projeto foi dividida da seguinte forma para separar regras de negócio da implementação técnica:

* `cypress/e2e/features/`: Arquivos `.feature` contendo os cenários de teste escritos em Gherkin.
* `cypress/e2e/steps/`: Arquivos `.js` contendo a automação de fato (Step Definitions).
* `cypress.config.js`: Arquivo central de configuração, incluindo bloqueio de anúncios e setup do Cucumber.

## ⚙️ Pré-requisitos e Instalação

Antes de começar, certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

1. Clone este repositório para a sua máquina local:
   ```bash
   git clone [https://github.com/david-almeida-silva/automacao-cypress-web-api.git](https://github.com/david-almeida-silva/automacao-cypress-web-api.git)