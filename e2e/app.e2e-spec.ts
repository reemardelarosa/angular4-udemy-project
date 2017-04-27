import { Ng4StartProjectPage } from './app.po';

describe('ng4-start-project App', function() {
  let page: Ng4StartProjectPage;

  beforeEach(() => {
    page = new Ng4StartProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
