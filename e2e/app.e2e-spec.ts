import { AngWebPage } from './app.po';

describe('ang-web App', () => {
  let page: AngWebPage;

  beforeEach(() => {
    page = new AngWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
