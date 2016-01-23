describe('Login', function() {

  beforeEach(function() {
    browser.get('/dist/dev/');

    element(by.css('#username')).sendKeys('username');
    element(by.css('#password')).sendKeys('password');

    element(by.css('app section login form button')).click();
  });

  it('should have an input', function() {
    expect(element(by.css('app section login form input')).isPresent()).toEqual(true);
  });

});
