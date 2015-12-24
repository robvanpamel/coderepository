describe('SandwichService ', function() {
  it('listSandwiches, should be able to list all the sandwiches', function() {
    var mock = [
      {text:"testSandwich", price:"12€"},
      {text:"testSandwich2", price:"12€"}
    ];
    spyOn(Sandwiches, 'find').and.returnValue(mock);
    var actual = SandwichService.listSandwiches();
    expect(actual).toBe(mock);
  });
});

describe('SandwichService', function() {
  it('searchSandwiches, should return null if searchterm is less then 3 characters', function() {
    var mock = [
      {text:"testSandwich", price:"12€"},
      {text:"testSandwich2", price:"12€"}
    ];
    spyOn(Sandwiches, 'find').and.returnValue(mock);

    var actual = SandwichService.searchSandwiches("ab")

    expect(actual).toBe(null);
  });
});

describe('SandwichService - ', function() {
  it('searchSandwiches, should return the sandwiches that match the searchterm', function() {
    // arrange
    var mock = [
      {text:"testSandwich", price:"12€"},
      {text:"mySandwich2", price:"12€"}
    ];
    spyOn(Sandwiches, 'find').and.returnValue(mock);
    var expected = [ {text:"testSandwich", price:"12€"}];

    // act
    var actual = SandwichService.searchSandwiches("test2")

    // assert
    expect(actual).toBe(expected);
  });
});

describe('When adding a SandwichService ', function() {
  var mySandwich = { text: "mySandwich", price:"1€"};
  var spyEvent;
  var actual;

  beforeEach(function () {
    spyEvent = spyOn(Sandwiches, 'insert');
    actual = SandwichService.addSandwich(mySandwich);
  });

  it('it must insert a sandwich in the Sandwiches collection', function() {
    expect(spyEvent).toHaveBeenCalledWith(mySandwich);
  });

  it ('must return true', function(){
      expect(actual).toBe(true);
  });
});
