'use strict';

describe('myApp.travel module', function() {

  beforeEach(module('myApp.travel'));

  describe('travel controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view1Ctrl = $controller('TravelViewController');
      expect(view1Ctrl).toBeDefined();
    }));

  });
});