describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      [1,2,3].indexOf(5).should.equal(-1);
      [1,2,3].indexOf(0).should.equal(-1);
    });

    it('should add 2 numbers together', function() {
      (1 + 6).should.equal(7);
    });
  });

  describe ('The person class', function() {
  	it('can be initiated', function() {
  		var me = new Person();
  	})
  })
});
