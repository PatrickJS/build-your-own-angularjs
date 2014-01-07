describe('Scope', function() {
  it('can be constructed and used as an object', function() {
    var scope = new Scope();
    scope.AProperty = 1;

    expect(scope.aProperty).toBe(1);
  })
});
