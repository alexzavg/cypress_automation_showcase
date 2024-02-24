import { ApiPage } from "../../pages/apiPage";

describe('API Practice', () => {

  const apiPage = new ApiPage();

  it('Upload file', () => {
    const filePath = 'test.png';
    const url = 'http://httpbin.org/post';
    apiPage.uploadFile(filePath, url);
  });

});