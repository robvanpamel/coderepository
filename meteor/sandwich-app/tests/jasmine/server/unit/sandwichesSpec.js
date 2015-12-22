describe("PlayersService",function(){
   'use strict'
   
   describe('getSandwichList', function(){
       it('When Getting the sandwich List, it should return the list of all the sandwiches ordered by name',function(){
           var result = {
           
           };
                      
           spyOn(Sandwiches, 'find').and.returnValue(result);
           
           expected(PlayersService.getSandwichList()).toBe(result);          
       });
   });
});