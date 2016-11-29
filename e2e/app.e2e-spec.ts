import { ProjectRoutingPage } from './app.po';

describe('project-routing App', function() {
  let page: ProjectRoutingPage;

  beforeEach(() => {
    page = new ProjectRoutingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
