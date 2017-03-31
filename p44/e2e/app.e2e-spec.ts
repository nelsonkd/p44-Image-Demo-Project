import { P44Page } from './app.po';

describe('p44 App', () => {
  let page: P44Page;

  beforeEach(() => {
    page = new P44Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
