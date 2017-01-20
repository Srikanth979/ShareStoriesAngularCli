import { ShareStoriesAngularCliPage } from './app.po';

describe('share-stories-angular-cli App', function() {
  let page: ShareStoriesAngularCliPage;

  beforeEach(() => {
    page = new ShareStoriesAngularCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
