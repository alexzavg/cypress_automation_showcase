import { GraphqlPage } from "../../pages/graphqlPage";
import { DataGenerator } from "../../support/DataGenerator";

const data = new DataGenerator();
const graphql = new GraphqlPage();

const teaName = await data.currentDateString();
const teaPrice = await data.getRandomFloat(1, 99);

describe('QraphQL API Practice', () => {

  it('Add new tea', () => {
    graphql.addTea(teaName, teaPrice);
  });

  it('Check new tea', () => {
    graphql.getTea(teaName, teaPrice);
  });

});