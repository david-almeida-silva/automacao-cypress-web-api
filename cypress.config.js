const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      preprocessor.addCucumberPreprocessorPlugin(on, config);
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
    // A MÁGICA ACONTECE AQUI: Bloqueamos os anúncios que quebram o site
    blockHosts: [
      "*.google-analytics.com",
      "*.doubleclick.net",
      "*.googlesyndication.com",
      "*.google.com"
    ]
  },
});
