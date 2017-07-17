import { AngularJokePage } from './app.po';

describe('angular-joke App', () => {
  let page: AngularJokePage;

  beforeEach(() => {
    page = new AngularJokePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
