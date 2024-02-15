const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '42mm89',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
