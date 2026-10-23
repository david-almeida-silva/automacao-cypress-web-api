const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports/html",
    charts: true,
    reportPageTitle: "Relatório de Testes - Automation Exercise",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    async setupNodeEvents(on, config) {
      // 1. Inicializa o plugin do Mochawesome Reporter
      require("cypress-mochawesome-reporter/plugin")(on);

      // 2. Registra o preprocessador do Cucumber BDD
      await preprocessor.addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin.default(config)],
        })
      );

      return config;
    },
    specPattern: "cypress/e2e/**/*.feature",
    baseUrl: "https://www.automationexercise.com",
    viewportWidth: 1280,
    viewportHeight: 720,
    // Bloqueia anúncios e scripts que quebram a automação
    blockHosts: [
      "*.google-analytics.com",
      "*.doubleclick.net",
      "*.googlesyndication.com",
      "*.google.com"
    ]
  },
});