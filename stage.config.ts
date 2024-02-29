import { defineConfig } from 'cypress'

module.exports = defineConfig({
  projectId: '42mm89',
  defaultCommandTimeout: 60000,
  pageLoadTimeout: 60000,
  reporter: 'spec',
  reporterOptions: null,
  requestTimeout: 60000,
  responseTimeout: 60000,
  retries: {
    runMode: 0,
    openMode: 0,
  },
  screenshotOnRunFailure: true,
  screenshotsFolder: 'cypress/stage/screenshots',
  scrollBehavior: 'top',
  taskTimeout: 60000,
  trashAssetsBeforeRuns: true,
  userAgent: null,
  video: false,
  videoCompression: false,
  videosFolder: 'cypress/stage/videos',
  viewportHeight: 900,
  viewportWidth: 1440,
  e2e: {
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser, launchOptions) => {
        if (browser.name === 'chrome') {
          launchOptions.args.push('--disable-dev-shm-usage');
          launchOptions.args.push('--disable-gpu');
          launchOptions.args.push('--no-sandbox');
          //launchOptions.args.push('--start-maximized');

          return launchOptions;
        }
      });
    },
    specPattern: 'cypress/tests/**/*.cy.{js,jsx,ts,tsx}',
    baseUrl: 'https://automationexercise.com',
    env: {
      envName: 'STAGE',
      graphQL_baseUrl: 'https://graphql-teas-endpoint.netlify.app/',
      training_baseUrl: 'https://practice.expandtesting.com'
    },
  },
});
