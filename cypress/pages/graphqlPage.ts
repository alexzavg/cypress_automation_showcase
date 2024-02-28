export class GraphqlPage {

  url = Cypress.env('graphQL_baseUrl');
  headers = {
    'content-type': 'application/json',
    'Accept-Encoding':  'gzip, deflate, br',
  };

  addTea(name: string, price: number) {
    const queryBody = `mutation { addTea(teaInput: { name: "${name}", description: 
    "Alexander Test 2024", price: ${price}, 
    producerId: "6513adca387a840008f8c57e" }){ name price} }`

    cy.request({
      method: 'POST',
      headers: this.headers,
      url: this.url,
      body: { query: JSON.parse(JSON.stringify(queryBody)) }
    }).then((r) => {
      expect(r.body.data.addTea.name).to.eq(name)
      expect(r.body.data.addTea.price).to.eq(price)
    })
  }

  getTea(name: string, price: number) {
    const queryBody = `query { teas(name: "${name}") { name, price } }`

    cy.request({
      method: 'POST',
      headers: this.headers,
      url: this.url,
      body: { query: JSON.parse(JSON.stringify(queryBody)) }
    }).then((r) => {
      expect(r.body.data.teas).to.deep.include({name: name, price: price})
    })
  }

}