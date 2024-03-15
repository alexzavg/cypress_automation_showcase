import { PracticePage } from "../../pages/practicePage";

const practicePage = new PracticePage();
const url = Cypress.env('training_baseUrl');
const browsers = {
  IE: 'Internet Explorer', 
  chrome: 'Chrome', 
  firefox: 'Firefox'
};
const stats = {
  CPU: 'CPU', 
  memory: 'Memory',
  disk: 'Disk',
  network: 'Network'
};

describe('Dynamic Tables', () => {

  beforeEach(()=>{
    cy.visit(`${url}/dynamic-table`);
  })

  it('Dynamic table stats for a single browser', () => {
    practicePage.getBrowserStats(browsers.chrome, stats.memory).then((statValue) => {
      cy.log(statValue);
    });
  });

  it.only('Dynamic table stats for multiple browsers', () => {
    const browserNames = Object.values(browsers); // ['Internet Explorer', 'Chrome', 'Firefox']
    const cpuStats = [];

    // Chain all getBrowserStats calls sequentially
    browserNames.reduce((chain, browserName) => {
      return chain.then(() => {
        return practicePage.getBrowserStats(browserName, stats.CPU).then(statValue => {
          cpuStats.push(statValue);
          cy.log(`${browserName} ${stats.CPU}: ${statValue}`);
        });
      });
    }, cy.wrap(null)).then(() => {
      // All CPU stats are fetched, perform any additional checks or operations here.
      expect(cpuStats).to.have.length(browserNames.length);
    });
  });

});