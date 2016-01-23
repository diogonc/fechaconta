describe('App', function() {

  beforeEach(function() {
      browser.get('/dist/dev');

      element(by.css('#username')).sendKeys('username');
      element(by.css('#password')).sendKeys('password');

      element(by.css('app section login form button')).click();
  });

  it('should have a title', function() {
      expect(browser.getTitle()).toEqual('My Angular2 App');
  });

  it('should have <section>', function() {
      expect(element(by.css('app section')).isPresent()).toEqual(true);
  });

  it('should have <nav>', function() {
      expect(element(by.css('app section nav')).isPresent()).toEqual(true);
  });

  it('should have correct nav text for Sair', function() {
      expect(element(by.css('app section nav a:last-child')).getText()).toEqual('Sair');
  });

});
