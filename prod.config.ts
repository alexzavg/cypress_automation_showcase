import { defineConfig } from 'cypress'

module.exports = defineConfig({
  projectId: '42mm89',
  e2e: {
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser, launchOptions) => {
        if (browser.name === 'chrome') {
          launchOptions.args.push('--disable-dev-shm-usage');
          launchOptions.args.push('--disable-gpu');
          launchOptions.args.push('--no-sandbox');

          return launchOptions;
        }
      });
    },
    baseUrl: 'https://google.com'
  },
});
