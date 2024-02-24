export class ApiPage {
 
  uploadFile(filePath: string, url: string) {
    cy.fixture(filePath, 'binary').then((fileContent) => {
      cy.request({
        method: 'POST',
        url: url,
        body: fileContent,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        encoding: 'binary',
      }).then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  }

}