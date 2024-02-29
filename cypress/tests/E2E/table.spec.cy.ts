import { TablePage } from "../../pages/tablePage";

const tablePage = new TablePage();
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

describe('Automation Practice', () => {

  beforeEach(()=>{
    cy.visit(`${url}/dynamic-table`);
  })

  it('Dynamic table stats for a single browser', () => {
    tablePage.getBrowserStats(browsers.chrome, stats.memory).then((statValue) => {
      cy.log(statValue);
    });
  });

  it('Dynamic table stats for multiple browsers', () => {
    const statValuesPromises = Object.values(browsers).map(browserName => {
      return tablePage.getBrowserStats(browserName, stats.CPU);
    });
    
    return Promise.all(statValuesPromises).then((statValues: string[]) => {
      Object.keys(browsers).forEach((key, index) => {
        const browserName = browsers[key as keyof typeof browsers];
        cy.log(`${browserName} ${stats.CPU}: ${statValues[index]}`);
      });
    });
  });

});