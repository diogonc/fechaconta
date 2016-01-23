describe('About', function() {

  beforeEach(function() {

    browser.get('/dist/dev');

    element(by.css('#username')).sendKeys('username');
    element(by.css('#password')).sendKeys('password');

    element(by.css('app section login form button')).click();

    browser.get('/dist/dev/#/about');
  });

  it('should have an input', function() {
    expect(element(by.css('app section about form input')).isPresent()).toEqual(true);
  });

  it('should have a list of computer scientists', function() {
    expect(element(by.css('app section about ul')).getText()).toEqual('Dijkstra\nKnuth\nTuring\nHopper');
  });

  it('should add a name to the list using the form', function() {
    element(by.css('app section about form input')).sendKeys('Tim Berners-Lee');
    element(by.css('app section about form button')).click();
    expect(element(by.css('app section about ul')).getText()).toEqual('Dijkstra\nKnuth\nTuring\nHopper\nTim Berners-Lee');
  });
});
