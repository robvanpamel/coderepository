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

describe('When searching in the sandwich Service ', function() {
  var expectedSearchResult = [
    {text:"testSandwich", price:"12€"},
    {text:"mySandwich2", price:"12€"}
  ];
  var spyFindEvent;
  var actualSearchResult;
  beforeEach(function(){
    spyFindEvent = spyOn(Sandwiches, 'find').and.returnValue(expectedSearchResult);
    actualSearchResult = SandwichService.searchSandwiches("searchTerm")
  });

  it('should pass the searchterm with a wildward to the searchCriteria of the Find object ', function() {
    expect(spyFindEvent).toHaveBeenCalled();
    expect(spyFindEvent.calls.first().args[0].name).toBe("searchTerm.*");
  });
  it("should pass the searchResult without tamperingwith it ", function(){
    expect(actualSearchResult).toBe(expectedSearchResult);
  });
});

describe('When adding a Sandwich to the sandwich Service ', function() {
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
