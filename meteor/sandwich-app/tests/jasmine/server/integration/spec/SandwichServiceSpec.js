// function SandwichesService(){};
// SandwichesService.prototype.listSandwiches = function() {
//   return null;
// };

describe('SandwichService', function() {
  var sandwichService;

  beforeEach(function() {
    sandwichService = new SandwichesService();
  });

  it('should be able to list all the sandwiches', function() {
    sandwichService.listSandwiches();
  });
});
